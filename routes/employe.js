const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/ghar',(req,res)=>{
    res.send("heheeeh")
})

module.exports = router
