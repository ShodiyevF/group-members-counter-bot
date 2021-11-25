const { readRow, uniqRow } = require("../../lib/pool")

const queryu = `
select
*
from adderhuman as ah where group_telegram_id = $1 and adder_username = $2
order by ah.added_users desc
limit 10
`

const queryn = `
select
*
from adderhuman as ah where group_telegram_id = $1 and adder_nickname = $2
order by ah.added_users desc
limit 10
`

const getoneadderasu = async (id, username) => {
    
    const data = await uniqRow(queryu, id, username)
    return data.rows
    
}

const getoneadderasn = async (id, nickname) => {

    const data = await uniqRow(queryn, id, nickname)
    return data.rows

}

module.exports = {
    getoneadderasu,
    getoneadderasn
}