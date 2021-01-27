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

router.get('/produktet/blej/:id', (req, res) => {
    const id = req.params.id
    const query = `SELECT * FROM kepucet WHERE id=${id}`
    dbCon.query(query, (err, result, fields) => {
        res.render('blej', { kepuca: result[0] })
    })
})

router.post('/checkout/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    let { emri, cardnumber, cvv, expdate, adresa, numritel } = req.body
    expdate = String(expdate)
    const deleteShoeQuery = `DELETE FROM kepucet WHERE id=${id}`
    dbCon.execute(deleteShoeQuery)
    console.log(String(expdate))

    const addCustomer = `INSERT INTO customers(emri,cardnumber,cvv,expdate,adresa,numritel) VALUES("${emri}",${cardnumber},${cvv},"${expdate}","${adresa}",${numritel})`
    dbCon.execute(addCustomer)
    res.redirect('/produktet')
})

module.exports = router