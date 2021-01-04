const Sequelize = require('sequelize')
const db = require('../config/database');
const Product = db.define('products', {
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    image:{
        type:Sequelize.STRING,
        allowNull:false
    },
    supplier:{
        type:Sequelize.STRING
    },
    productType:{
        type:Sequelize.STRING
    },
    brand:{
        type:Sequelize.STRING
    },
    status:{
        type:Sequelize.BOOLEAN
    },
    description:{
        type:Sequelize.STRING
    },
    initialStock:{
        type:Sequelize.STRING
    },
    initialPrice:{
        type:Sequelize.STRING
    },
    retailPrice:{
        type:Sequelize.STRING
    },
    buyPrice:{
        type:Sequelize.STRING
    },
    wholesalePrice:{
        type:Sequelize.STRING
    },
    weight:{
        type:Sequelize.STRING
    }
    
});
db
.sync().then(()=>{
    console.log("Tables creates succesfully!")
}).catch((err)=>{console.log(err)});

module.exports = Product;