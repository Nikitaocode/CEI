const express = require('express')
const app = express()
const path = require('path')
const mainRoutes = require("./Routes/MainRouter")
require('dotenv').config()
// if(process.env.NODE_ENV=='production'){
  app.use(express.static('client/build'))
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})
// }
const port = process.env.PORT || 5000
app.use(express.json());
app.use("/api", mainRoutes)
app.listen(port, () => console.log(`App is running on  ${port}!`))
const db = require('./config/database.js')
db.authenticate().then(() => {
  console.log("Connected to db");
}).catch(() => {
  console.log("Error has occured");
})

