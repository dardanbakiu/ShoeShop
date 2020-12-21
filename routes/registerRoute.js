const router = require('express').Router()
const adminMiddleware = require('../middleware/adminMiddleware')

router.get('/register', adminMiddleware, (req, res) => {
    res.render('register')
})

module.exports = router