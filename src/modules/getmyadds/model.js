const { readRow, uniqRow } = require("../../lib/pool")

const query = `
select
*
from adderhuman as ah where group_telegram_id = $1 and adder_telegram_id = $2
order by ah.added_users desc
limit 10
`

const getmyadd = async (id, userId) => {

    const data = await uniqRow(query, id, userId)
    return data.rows

}

module.exports = {
    getmyadd
}