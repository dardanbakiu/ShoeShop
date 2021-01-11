const router = require('express').Router()
const adminMiddleware = require('../middleware/adminMiddleware')
const { v4: uuidv4 } = require('uuid')
const dbCon = require('../database')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')

router.get('/register', adminMiddleware, (req, res) => {
    res.render('register', { isAdded: ' ' })
})

router.post('/registerForm', (req, res) => {
    const emri = req.body.emri
    const mbiemri = req.body.mbiemri
    const email = req.body.email
    const password = req.body.password
    const kontakti = req.body.kontakti
    const verified = false
    const uuid = uuidv4()


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    var mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Verifiko Llogarine',
        text: `Verifiko Llogarine http://localhost:3000/verify/${uuid}`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(error);
        else {
            console.log('Email u dergua me sukses! ');
        }
    });

    bcrypt.hash(password, 10, (err, hash) => {
        const query = `INSERT INTO mbikqyresit(emri,mbiemri,email,password,kontakti,uuid,verified) VALUES("${emri}","${mbiemri}","${email}","${hash}","${kontakti}","${uuid}","${verified}")`
        dbCon.execute(query)
        res.render('register', { isAdded: 'u shtua ne databaze' })
    })
})

router.get('/verify/:id', (req, res) => {
    const id = req.params.id
    const query = `UPDATE mbikqyresit SET verified=1 where uuid="${id}"`
    dbCon.execute(query)
    res.redirect('/')
})

module.exports = router