var express = require('express')
var app = express()
var ejs = require('ejs')
var fs = require('fs')
var path = require('path')
var dotenv = require('dotenv')
var mongoose = require('mongoose')
var employeeRoutes = require('./routes/employe.js')

dotenv.config({path: path.join(__dirname,'config.env')})
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'))

app.use(employeeRoutes)
mongoose.connect(process.env.Database_locale,{
   // useNewUrlParser: true,
    useUnifiedTopology : true,
    //useCreateIndex : true
})

var port  = process.env.PORT || 4000
app.listen(port,(err)=>{
    console.log("listening to port"+port)
})