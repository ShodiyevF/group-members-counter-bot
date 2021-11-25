const { uniqRow, readRow } = require("../../lib/pool")
const { insertGroup, updateGroupName, updateGroupUsername, getGroups, getAdders, insertAdder, updateAdderUsername, updateAdder, updateAdderNickname, updateGroupMemberCount } = require('./query');

const memberCount = async (msg, bot) => {
    const id = msg.chat.id

    const addedMembers = msg.new_chat_members.length
    const groupMembers = await bot.getChatMemberCount(id)

    const groups = await readRow(getGroups)
    const adders = await readRow(getAdders)
    

    const isAdmin = await bot.getChatAdministrators(msg.chat.id)

    if (id) {
        const findedGroup = groups.find(el => parseInt(el.group_telegram_id) === msg.chat.id)
        const findedAdder = adders.find(el => parseInt(el.adder_telegram_id) === msg.from.id && parseInt(el.group_telegram_id) === id)
        if (findedGroup) {

            if (msg.chat.username) {
                await uniqRow(updateGroupUsername, msg.chat.username.toString(), id.toString())
            }
            await uniqRow(updateGroupName, msg.chat.title.toString(), id.toString())
            await uniqRow(updateGroupMemberCount, groupMembers, id.toString())
        } else {
            await uniqRow(insertGroup, id, msg.chat.title, msg.chat.username, groupMembers)
        }
        if (findedAdder) {
            const membercount = +findedAdder.added_users + addedMembers
            await uniqRow(updateAdder, membercount, msg.from.id, id)
            await uniqRow(updateAdderUsername, msg.from.username, msg.from.id.toString())
            await uniqRow(updateAdderNickname, msg.from.first_name, msg.from.id.toString())
        } else {
            await uniqRow(insertAdder, msg.from.id, msg.from.username, addedMembers, id, msg.from.first_name)
        }
    }
}

module.exports = {
    memberCount
}