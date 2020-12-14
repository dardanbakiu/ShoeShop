const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/static', express.static('static'))

const home = require('./routes/homeRouter')

app.use(home)

const port = 3000
app.listen(port)