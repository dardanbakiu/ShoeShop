const express = require('express')
const router = express.Router()
const dbCon = require('../database')

router.get('/produktet', (req, res) => {
    const query = `SELECT * FROM kepucet`
    dbCon.query(query, (err, result, field) => {
        res.render('kategoria', { kepucet: result })
    })
})

router.get('/produktet/:kategoria', (req, res) => {
    const kategoria = req.params.kategoria
    const query = `SELECT * FROM kepucet WHERE firma="${kategoria}"`
    dbCon.query(query, (err, result, fields) => {
        console.log(result)
        res.render('kategoria', { kepucet: result })
    })
})

module.exports = router