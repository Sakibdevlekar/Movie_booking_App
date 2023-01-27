const mongoose = require('mongoose')
const express= require('express')
const bcrypt = require('bcryptjs')
const bodyParser = require('body-parser')
require('dotenv').config()
const User = require ('./models/user.model')
const serverConfig = require('./configs/server.config')
const dbConfig = require('./configs/db.config')
const {AuthRoutes,MovieRoutes,TheatreRoutes} = require('./routes/index')

const app = express()
app.use(bodyParser.json())
app.use(AuthRoutes)
app.use(MovieRoutes)
app.use(TheatreRoutes)

mongoose.connect(dbConfig.DB_URL)
const db = mongoose.connection
db.on("error", () => console.log("ERROR while connecting to DB",err.message))  //code for connecting mongodb
db.once("open", () => {console.log("Connected to mongoDB ")
})


app.listen(serverConfig.PORT,()=> 
console.log(`App Running at ${serverConfig.PORT}`))