const getGroupsById = `
select
g.group_id
from groups as g
inner join adderhuman as ah on ah.group_telegram_id = g.group_telegram_id
`

const getGroups = `
select
*
from groups;
`

const getAdders = `
select
*
from adderhuman;
`

const insertGroup = `
insert into groups (group_telegram_id, group_name, group_username, group_member_count) values ($1,$2,$3,$4)
`

const updateGroupName = `
update groups set group_name = $1 where group_telegram_id = $2
`

const updateGroupMemberCount = `
update groups set group_member_count = $1 where group_telegram_id = $2
`

const updateGroupUsername = `
update groups set group_username = $1 where group_telegram_id = $2
`

const insertAdder = `
insert into adderhuman (adder_telegram_id, adder_username,  added_users, group_telegram_id, adder_nickname) values ($1,$2,$3,$4, $5)
`

const updateAdder = `
update adderhuman set added_users = $1 where adder_telegram_id = $2 and group_telegram_id = $3
`

// update adderhuman set added_users = 3 where adder_telegram_id = 570377792 and group_telegram_id = -660988665

const updateAdderUsername = `
update adderhuman set adder_username = $1 where adder_telegram_id = $2
`

const updateAdderNickname = `
update adderhuman set adder_nickname = $1 where adder_telegram_id = $2
`

module.exports = {
    getGroupsById,
    getGroups,
    getAdders,
    insertGroup,
    updateGroupName,
    updateGroupUsername,
    insertAdder,
    updateAdder,
    updateAdderUsername,
    updateAdderNickname,
    updateGroupMemberCount
}