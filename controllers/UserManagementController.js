const user = require("../models/User")

const users = async (req,res )=>{
    user.findAll({where:{role:null}}).then(response=>{
        var users =[]
        console.log(response)
        for(i of response){
                users.push(i.dataValues)
            }
        console.log(users)
        res.json({
            data:users
        })
    })
}


const deleteUser =async (req,res)=>{
    console.log(req.query)
}

module.exports ={users:users,
    deleteUser:deleteUser
}