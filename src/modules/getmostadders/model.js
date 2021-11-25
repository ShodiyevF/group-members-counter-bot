const { readRow, uniqRow } = require("../../lib/pool")

const query = `
select
*
from adderhuman as ah where group_telegram_id = $1
order by ah.added_users desc
limit 10
`

const getmostadder = async (id) => {
    
    const data = await uniqRow(query, id)
    return data.rows
    
}

module.exports = {
    getmostadder
}