const db = require('../config/database')
const user = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")
const fetch = require('node-fetch');
const { OAuth2Client } = require("google-auth-library")
const client = new OAuth2Client("501516992284-icth2bhte5iu6fpskcd97hcia62f9qdd.apps.googleusercontent.com")

// EMAIL CONFIGURATIONS
var mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nikitachananaitl@gmail.com',
        pass: 'ITL2020@#'
    }
});
// SIGN UP API
const signup = async (req, res) => {
    console.log(req.body)
    const isEmail = await user.findOne({ where: { email: req.body.email } })
    console.log(isEmail);
    // IF EMAIL EXISTS
    if (isEmail) {                                  
        res.json({
            error: "User with this email exist"
        })
    }
    else {
        // HASHING THE PASSWORD
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        console.log(hashedPassword);
        // DATA SAVED TO DB
        user.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
        }).then(result => {
            // var user = {id:result.dataValues.id}
            // console.log(user);
            // const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
            res.status(200).json({
                success: "Successfully registered! you can login now",
                data: result.data
            })
        }).catch(err => {
            console.log(err);
        })

    }
}

// LOGIN API
const login = async (req, res) => {
    console.log(req.body);
    user.findOne({ where: { email: req.body.email } }).then(async data => {
        if (data) {
            const user = { id: data.dataValues.id }
            bcrypt.compare(req.body.password, data.dataValues.password, (err, result) => {
                if (result) {
                    console.log(user)
                    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
                    console.log(data);
                    res.status(200).json({
                        user: data.dataValues,
                        token: token,
                        success: "successful Login"
                    })
                }
                else {
                    res.json({
                        error: "password did not match"
                    })
                }
            })
        }
        else {
            res.json({
                error: "No user Found"
            })
        }
    })

}
// FUNCTION TO CREATE RANDOM OTP
var generateOTP = () => {
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;

}
// TO GET THE EXPIRY TIME
var d1 = new Date(),
    d2 = new Date(d1);
d2.setMinutes(d1.getMinutes() + 2);
console.log(d1.getTime());
console.log(d2.getTime());
// SEND OTP
const sendOTP = async (req, res) => {
    console.log(req.body)
    const email = await user.findOne({ where: { email: req.body.email } })
    // IF EMAIL EXISTS, OTP SENT THROUGH EMAIL
    if (email) {
        console.log("email", email)
        const OTP = generateOTP()
        console.log(OTP)
        var mailoptions = {
            from: 'nikitachananaitl@gmail.com',
            to: req.body.email,
            subject: `OTP for Application`,
            text: `Your OTP for Application is ${OTP}`
        }
        mail.sendMail(mailoptions, ((err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log(result)
                res.status(200).json({
                    email: req.body.email,
                    otp: OTP,
                    success: "OTP is sent successfully, OTP will expire in 10 minutes",
                    expiration: d2.getTime()
                })
            }
        }))

    } 
    // EMAIL DOESN'T EXISTS
    else {
        res.json({
            error: "No user found"
        })
    }

}
// CHANGE PASSWORD
const changePassword = async (req, res) => {
    console.log(req.body);
    const userData = await user.findOne({ where: { email: req.body.email } })
    const password = await bcrypt.compare(req.body.password, userData.dataValues.password)
    // IF PASSWORD MATCHES OLD PASSWORD, ERROR
    if (password) {
        res.json({
            error: "Password same as old password"
        })
    }
    // NEW PASSWORD, UPDATE
    else {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        user.update({ password: hashedPassword }, { where: { email: req.body.email } }).then(result => {
            console.log("Updated");
            console.log(result);
            res.status(200).json({
                success: "Password successfully updated!"
            })
        }).catch(err => {
            console.log(err);
            res.json({
                error: "Error updating password!"
            })
        })
    }
}

const authentication = (token) => {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            res.json({ error: "Did not match" })
        }
        res.json({
            success: "verified",
            data: req.user
        })
    })

}
// CHECKING THE AUTHENTICATION AT THE DASHBOARD FOR AUTHENTICATED USER
const dashboard = (req, res) => {
    console.log(req.headers.token);
    jwt.verify(req.headers.token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            res.json({ error: "Did not match" })
        }
        else {
            res.json({
                success: "verified",
                data: req.user
            })
        }
    })

}
// LOGIN VIA GOOGLE
const googleLogin =async  (req, res) => {
    const { tokenId } = req.body
    console.log(tokenId);
    // VERIFYING THE TOKEN RECEIVED BY GOOGLE 
    client.verifyIdToken({ idToken: tokenId, audience: "501516992284-p5ndrh0l2dfr2umcs904uk92vg488vb3.apps.googleusercontent.com" }).then(async response => {
        const { email_verified, name, email } = response.payload
        console.log(email);
        // console.log(response.payload);
        // IF VERIFIED
        if (email_verified) {
            // CHECK IF ALREADY EXISTS
            const userData = await user.findOne({ where: { email: email } })
                console.log(userData);
                // IF EXISTS, TOKEN IS ALOTTED
                if (userData) {
                        const token = jwt.sign({ id: userData.dataValues.id }, process.env.ACCESS_TOKEN_SECRET)
                        res.status(200).json({
                            user: userData.dataValues,
                            token: token,
                            success: "successful Login"
                        })
                    }
                    // IF NOT IN DB, USER IS CREATED WITH DUMMY PASSWORD AND TOKEN IS ALLOTED
                    // OTHER DETAILS CAN BE EDITED AND ADDED IN PROFILE MANAGEMENT
                    else {
                        user.create({
                            firstName: name.split(" ")[0],
                            lastName: name.split(" ")[1],
                            email: email,
                            password: email + process.env.ACCESS_TOKEN_SECRET
                        }).then((err, data) => {
                            if (err) {
                                res.status(400).json({
                                    error: "Something went wrong"
                                })
                            } else {
                                const token = jwt.sign({ id: data.dataValues.id }, process.env.ACCESS_TOKEN_SECRET)
                                res.status(200).json({
                                    user: data.dataValues,
                                    token: token,
                                    success: "successful Login"
                                })

                            }
                        })
                    } 
        }
    })
}


const facebooklogin=(req,res)=>{
    console.log(req.body);
    const {userID, accessToken}=req.body
    let urlGraphfacebook= `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`
    fetch(urlGraphfacebook,{
        method:'GET',

    }).then(res=>res.json())
    .then(async response=>{
        const {email,name}= response
        console.log(name,email);
        const userData = await user.findOne({ where: { email: email } })
                console.log(userData);
                // IF EXISTS, TOKEN IS ALOTTED
                if (userData) {
                        const token = jwt.sign({ id: userData.dataValues.id }, process.env.ACCESS_TOKEN_SECRET)
                        res.status(200).json({
                            user: userData.dataValues,
                            token: token,
                            success: "successful Login"
                        })
                    }
                    // IF NOT IN DB, USER IS CREATED WITH DUMMY PASSWORD AND TOKEN IS ALLOTED
                    // OTHER DETAILS CAN BE EDITED AND ADDED IN PROFILE MANAGEMENT
                    else {
                        user.create({
                            firstName: name.split(" ")[0],
                            lastName: name.split(" ")[1],
                            email: email,
                            password: email + process.env.ACCESS_TOKEN_SECRET
                        }).then((err, data) => { 
                            if (err) {
                                res.status(400).json({
                                    error: "Something went wrong"
                                })
                            } else {
                                const token = jwt.sign({ id: data.dataValues.id }, process.env.ACCESS_TOKEN_SECRET)
                                res.status(200).json({
                                    user: data.dataValues,
                                    token: token,
                                    success: "successful Login"
                                })

                            }
                        })
                    } 
    })
}

module.exports = {
    signup: signup,
    login: login,
    sendOTP: sendOTP,
    changePassword: changePassword,
    dashboard: dashboard,
    googleLogin: googleLogin,
    facebooklogin:facebooklogin
}




