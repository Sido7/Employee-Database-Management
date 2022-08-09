var express = require('express')
var app = express()
var ejs = require('ejs')
var fs = require('fs')
var path = require('path')
var dotenv = require('dotenv')

dotenv.config({path: path.join(__dirname,'config.env')})
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'))

var port  = process.env.PORT || 4000
app.listen(port,(err)=>{
    console.log("listening to port"+port)
})