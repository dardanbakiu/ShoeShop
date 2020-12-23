const mysql = require('mysql2')

const dbCon = mysql.createPool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME
})

module.exports = dbCon