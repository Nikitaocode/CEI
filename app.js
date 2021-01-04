const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const mainRoutes = require("./Routes/MainRouter")
const inventoryRoutes = require("./Routes/InventoryRouter")
const cloudinary = require('cloudinary')
require('dotenv').config()
app.use(cors())

const port = process.env.PORT || 5000
app.use(express.json());
app.use("/api/inventory",inventoryRoutes)
app.use("/api", mainRoutes)
app.listen(port, () => console.log(`App is running on  ${port}!`))
const db = require('./config/database.js')
cloudinary.config({
    cloud_name: "nikitaocode",
    api_key: 426862387139751,
    api_secret: "lx1RuKHQADDNmDLLe-1adqc5T18",
    });
db.authenticate().then(() => {
  console.log("Connected to db");
})
