const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const dbCon = require('../database')

router.get('/shtoKepuce', (req, res) => {
    res.render('shtoKepuce', { err: '' })
})

const storage = multer.diskStorage({
    destination: './static/uploads',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

// const filefilter = (req, file, cb) => {
//     if (file.mimetype == 'image/jpg' || file.mimetype == 'image/png') {
//         cb(null, true)
//     }
//     else {
//         cb(null, true)
//     }
// }/



router.post('/shtoKepuceForm', (req, res) => {
    const upload = multer({
        storage: storage
    }).single('image')


    upload(req, res, (err) => {
        // console.log(req.file.originalname)
        const emriFirmes = req.body.emriFirmes
        const emriKpuces = req.body.emriKpuces
        const madhesia = req.body.madhesia
        const cmimi = req.body.cmimi
        const emriFotos = req.file.originalname

        const query = `INSERT INTO kepucet(firma,emrikpuces,madhesia,emrifotos,cmimi) VALUES("${emriFirmes}","${emriKpuces}",${madhesia},"${emriFotos}",${cmimi})`
        dbCon.execute(query)
        res.render('shtoKepuce', { err: 'u shtua ne databaze' })

    })

})

module.exports = router