const Sequelize = require('sequelize')
const db = require('../config/database')
const User = db.define('users', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull:false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
    },
    address: {
        type: Sequelize.STRING,
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    city: {
        type: Sequelize.STRING,
        
    },
    state: {
        type: Sequelize.STRING,
        
    },
    country: {
        type: Sequelize.STRING,
        
    },
    avatar:{
        type:Sequelize.STRING
    },
    zipcode: {
        type: Sequelize.STRING,
    },  
    // created:{
    //     type:Sequelize.DATE,
    //     default:Date.now()
    // },
    // updated:{
    //     type:Sequelize.DATE
    // },
    
    company:{
        type:Sequelize.STRING,
    },
    role:{
        type:Sequelize.STRING
    }
});
db
.sync().then(()=>{
    console.log("Tables creates succesfully!")
}).catch((err)=>{console.log(err)});

module.exports = User