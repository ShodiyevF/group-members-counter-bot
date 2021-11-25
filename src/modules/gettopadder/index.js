const { getlastadder } = require("./model")
const { beginer } = require("../../lib/beginer");

const lastadder = async (msg, bot) => {
    const id = msg.chat.id
    
    if (msg.chat.type === 'supergroup' || msg.chat.type === 'group') {

        const data = await getlastadder(id)
        
        if (data.length) {
            const membercount = data[0].added_users
            let message

            if (data[0].adder_username) {
                message = `Top qo'shuvchi odam: @${data[0].adder_username}\nQo'shilganlar soni: ${membercount}ta`
            } else {
                message = `Top qo'shuvchi odam: ${data[0].adder_nickname}\nQo'shilganlar soni: ${membercount}ta`
            }

            beginer(msg, bot, message)
        } else {
            bot.sendMessage(id, `Top qo'shuvchi topilmadi`)
        }
        
    } else {

        var options = {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: 'Guruhga qushish ➕', url: `https://t.me/group_membercounter_bot?startgroup=new`, callback_data: 'plus' }]
                ]
            })
        };
        bot.sendMessage(id, 'bu comanda faqat guruhlar da ishlaydi', options)
    }
}

module.exports = {
    lastadder
}