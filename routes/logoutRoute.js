const router = require('express').Router()

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) console.log(err)
        console.log("you've been logged out")
        res.redirect('/')
    })
})

module.exports = router