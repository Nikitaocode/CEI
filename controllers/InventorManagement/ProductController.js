const db = require('../../config/database')
const product = require("../../models/Product")


const newProduct = async (req,res)=>{
    res.json({
        success:"hi"
    })
}

module.exports = {
    newProduct:newProduct
}