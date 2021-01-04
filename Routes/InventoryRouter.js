const express = require('express')
const router = express.Router()
var multer = require("multer")
var storage = multer.diskStorage({});   
var upload = multer({storage:storage});
const ProductController = require("../controllers/InventorManagement/ProductController")

router.route("/new-product").post(ProductController.newProduct)

module.exports = router;