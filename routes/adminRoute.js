const router = require('express').Router()

router.get('/admin', (req, res) => {
    res.render('admin', { loginErr: '' })
})

router.post('/adminLoginForm', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const envUsername = process.env.ADMIN_USER
    const envPassword = process.env.ADMIN_PW

    if (username == envUsername && password == envPassword) {
        req.session.admin = username
        res.render('register')
    }
    else {
        res.render('admin', { loginErr: 'wrong usr/pw' })
    }
})

module.exports = router