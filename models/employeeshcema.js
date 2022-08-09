const mongoose = require('mongoose')

let schemaemp = new mongoose.Schema({
    name: String,
    designation : String,
    Salary : Number
})

module.exports = mongoose.model('emp','shcemaemp')