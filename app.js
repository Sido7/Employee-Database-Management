var express = require('express')
var app = express()
var ejs = require('ejs')
var fs = require('fs')
var path = require('path')

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'))