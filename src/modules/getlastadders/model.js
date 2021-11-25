const { readRow, uniqRow } = require("../../lib/pool");

const query = `

select
*
from adderhuman where group_telegram_id = $1
order by adder_id desc
limit 10
`

const getLastAdders = async (id) => {
    const getLastAdder = await uniqRow(query, id)
    return getLastAdder.rows
}

module.exports = {
    getLastAdders   
}