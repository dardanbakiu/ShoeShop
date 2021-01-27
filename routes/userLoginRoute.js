const express = require('express')
const router = express.Router()

router.get('/userLogin', (req, res) => {
    res.render('userLogin', { err: ' ' })
})

router.post('/userLoginForm', (req, res) => {
    const { email, password } = req.body

    
})

module.exports = router