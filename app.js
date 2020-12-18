const express = require('express')
const app = express()
const mainRoutes = require("./Routes/MainRouter")
require('dotenv').config()
const port = process.env.PORT || 5000
app.use(express.json());
app.use("/", mainRoutes)
app.listen(port, () => console.log(`App is running on  ${port}!`))
// require("./controllers/passport-setup")
const db = require('./config/database.js')
db.authenticate().then(() => {
  console.log("Connected to db");
}).catch(() => {
  console.log("Error has occured");
})

