const user = require("../models/User")

const users = async (req,res )=>{
    const email= "superadmin@gmail.com"
    user.findAll({}).then(response=>{
        var users =[]
        console.log(response)
        for(i of response){
            if(i.dataValues.email!=email){
                users.push(i.dataValues)
            }
        }
        // console.log(users)
        res.json({
            data:users
        })
    })
}
module.exports ={users:users}