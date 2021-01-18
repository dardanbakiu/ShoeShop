const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

router.get('/shtoKepuce', (req, res) => {
    res.render('shtoKepuce', { err: '' })
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'static');
    },
    filename: (req, file, cb) => {
        cb(null, path.extname(file.originalname))
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

const upload = multer({
    // dest: '../static/img',
    storage: storage,
    // fileFilter: filefilter
})

router.post('/shtoKepuceForm', upload.single('image'), (req, res) => {
    try {
        console.log('u upload')
        res.redirect('/shtoKepuce')
    }
    catch {
        console.log('nuk u upload')
    }
})



module.exports = router