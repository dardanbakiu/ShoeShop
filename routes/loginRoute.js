const express = require('express')
const dbCon = require('../database')
const router = express.Router()
const bcrypt = require('bcrypt')

router.get('/login', (req, res) => {
    res.render('login', { error: ' ' })
})

router.post('/loginForm', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const emailQuery = `SELECT * FROM mbikqyresit WHERE email="${email}"`
    dbCon.query(emailQuery, (err, list, colum) => {
        console.log(list)
        const verified = list[0].verified
        console.log(verified)
        const dbPassword = list[0].password
        if (verified == 0) {
            res.render('login', { error: 'Verifikoni llogarine' })
        }
        else {
            bcrypt.compare(password, dbPassword, (err, isLogged) => {
                if (isLogged) {
                    console.log('jeni loguar')
                    
                }
                else {
                    console.log('password eshte gabim')
                }
            })
        }
    })
})

module.exports = router