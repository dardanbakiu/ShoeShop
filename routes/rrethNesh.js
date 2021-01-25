const express = require('express')
const router = express.Router()

router.get('/rrethNesh', (req, res) => {
    res.render('rrethNesh')
})

module.exports = router