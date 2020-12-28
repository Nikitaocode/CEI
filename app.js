const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const mainRoutes = require("./Routes/MainRouter")
require('dotenv').config()
app.use(cors())
const port = process.env.PORT || 5000
app.use(express.json());
app.use("/api", mainRoutes)
app.listen(port, () => console.log(`App is running on  ${port}!`))
const db = require('./config/database.js')
db.authenticate().then(() => {
  console.log("Connected to db");
})
