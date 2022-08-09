const express = require('express')
const router = express.Router()

const employee = require('../models/employeeshcema.js')
router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/employee/new',(req,res)=>{
    res.render('new')
})

router.post('/employee/new',(req,res)=>{
    let newemp= {
        name : req.body.name,
        designation : req.body.designation,
        salary : req.body.salary
    }
    employee.create(newemp).then(employee=>{
        res.redirect('./')
    }).catch(err=>{
        console.log(err)
    })
})


module.exports = router
