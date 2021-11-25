const { readRow, uniqRow } = require("../../lib/pool")

const getlastadderquery = `
SELECT 
*
FROM adderhuman where group_telegram_id = $1
ORDER BY added_users DESC
LIMIT 1
`

const getlastadder = async (id) => {
    const lastadder = await uniqRow(getlastadderquery, id)
    return lastadder.rows
    
}

// getlastadder('-1001776127500')

module.exports = {
    getlastadder
}