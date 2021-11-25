const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env')})

const token = process.env.TOKEN

const dbconnectkeys = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASETOKEN,
}


module.exports = {
    token,
    dbconnectkeys
}