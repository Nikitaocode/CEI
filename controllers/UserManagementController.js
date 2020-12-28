const user = require("../models/User")
const bcrypt= require("bcryptjs")
const nodemailer = require('nodemailer')
var mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ceideveloperoc@gmail.com',
        pass: 'bwc@2020'
    }
});
// ALL USERS ON USER MANAGEMENT PAGE
const users = async (req,res )=>{
    user.findAll({where:{role:"user"}}).then(response=>{
        var users =[]
        // console.log(response)
        for(i of response){
                users.push(i.dataValues)
            }
        // console.log(users)
        res.json({
            data:users
        })
    })
}
// DELETE USERS VIA USER MANAGEMENT PAGE

const deleteUser =async (req,res)=>{
    // console.log(req.query)
    if(typeof(req.query.id)=='string'){
        user.destroy({where:{id:req.query.id}}).then(response=>{
            console.log(response)
            res.json({
                success:'deleted'
            })
        })

    }
    else if(typeof(req.query.id)=='object'){
        for(i of req.query.id){
            await user.destroy({where:{id:i}})
        }
        res.json({
            success:"deleted"
        })
    }
}
// GENERATE RANDOM PASSWORD
function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
// console.log(generatePassword())
// CREATE NEW USER VIA USER MANAGEMENT PAGE
const newUser = async (req,res)=>{
    console.log(req.body)
    var password = generatePassword()
    const hashedPassword = await bcrypt.hash(password,10)

    user.create({
        firstName:req.body.firstname,
        lastName:req.body.lastname,
        email:req.body.email,
        phone:req.body.phone,
        password:hashedPassword,
        role:req.body.role
    }).then(result=>{
        console.log(result)
        var mailoptions = {
            from: 'ceideveloperoc@gmail.com',
            to: req.body.email,
            subject: `OTP for Application`,
            text: `Your user credentials for CEI Application are:
             email:${req.body.email}  
             passwors: ${password}`
        }
        mail.sendMail(mailoptions,((err,result)=>{
            if(result){
                res.json({
                    success:"User Created",
                })
            }
        }))
        
    }).catch((err)=>{
        console.log(err)
        res.json({
            error:"Something went wrong"
        })
    })
}

// GET USER DETAILS 
const userDetails = async (req,res)=>{
 console.log(req.query)
 const details = await user.findOne({where:{id:req.query.id}})
//  console.log(details)
 res.json({
     data:details
 })
}

// EDIT USER DETAILS
const editUser = async (req,res)=>{
    console.log(req.body)
    // console.log(req.query)
    if(!(Object.keys(req.body).length === 0 && req.body.constructor === Object)){
        user.update(req.body,{where:{id:req.query.id}}).then(response=>{
            res.json({
                success:"Successfully updated"
            })
        })
    }
}

module.exports ={users:users,
    deleteUser:deleteUser,
    newUser:newUser,
    userDetails:userDetails,
    editUser:editUser
}