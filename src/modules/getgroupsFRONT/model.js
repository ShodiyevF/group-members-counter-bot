const { readRow, uniqRow } = require("../../lib/pool");
const { getlastadder } = require("../gettopadder/model");

const query = `
select
*
from groups
order by group_member_count desc
limit 20
`

const getGroupsByMembers = async () => {
    const getGroupsByMember = await readRow(query)
    // console.log(getGroupsByMember);
    return getGroupsByMember
}

module.exports = {
    getGroupsByMembers
}