const db = require('../../config/database')
const product = require("../../models/Product")
const cloudinary = require("cloudinary")

const newProduct = async (req,res)=>{
    console.log(req.body)
    console.log(req.file)
    const data = req.body
    const result = await cloudinary.uploader.upload(req.file.path)
    if (!(Object.keys(data.image).length === 0 && data.image.constructor === Object)) {
        data.image = result.url
    }
    product.create(data).then(response=>{
        console.log(response)
        res.json({
            success:"New product Added"
        })
    })

    
}

module.exports = {
    newProduct:newProduct
}