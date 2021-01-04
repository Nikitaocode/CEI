const db = require('../../config/database')
const product = require("../../models/Product")
const cloudinary = require("cloudinary")

const newProduct = async (req,res)=>{
    console.log(req.body)
    console.log(req.file)
    res.json({
        success:"hi"
    })
}

module.exports = {
    newProduct:newProduct
}