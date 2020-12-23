const router = require('express').Router()
const adminMiddleware = require('../middleware/adminMiddleware')
const { v4: uuidv4 } = require('uuid')
const dbCon = require('../database')
const bcrypt = require('bcrypt')

router.get('/register', adminMiddleware, (req, res) => {
    res.render('register', { isAdded: '' })
})

router.post('/registerForm', (req, res) => {
    const emri = req.body.emri
    const mbiemri = req.body.mbiemri
    const email = req.body.email
    const password = req.body.password
    const kontakti = req.body.kontakti
    const verified = false
    const uuid = uuidv4()

    bcrypt.hash(password, 10, (err, hash) => {
        const query = `INSERT INTO mbikqyresit(emri,mbiemri,email,password,kontakti,uuid,verified) VALUES("${emri}","${mbiemri}","${email}","${hash}","${kontakti}","${uuid}","${verified}")`
        dbCon.execute(query)
        res.render('register', { isAdded: 'u shtua ne databaze' })
    })
})

module.exports = router