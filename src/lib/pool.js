const pg = require('pg')
const { dbconnectkeys } = require('../config')


// const pool = new pg.Pool(dbconnectkeys)
const pool = new pg.Pool({
    user: 'fayzulloh',
    password: 'test',
    host: 'localhost',
    port: 5432,
    database: 'membercounter',
})

const uniqRow = async (query, ...arr) => {

    const client = await pool.connect()
    const data = await client.query(query, arr)
    client.release()
    return data
    
}

const readRow = async (query) => {
    
    const client = await pool.connect()
    const data = await client.query(query)
    client.release()
    return data.rows

}


module.exports = {
    uniqRow,
    readRow
}