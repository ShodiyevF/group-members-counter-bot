const { beginer } = require("../../lib/beginer")
const { getmostadder, getmyadd } = require("./model")

const myadder = async (msg, bot) => {
    const id = msg.chat.id

    

    if (msg.chat.type === 'supergroup' || msg.chat.type === 'group') {
        const getmyadda = await getmyadd(id, msg.from.id)

        let botMessage

        if (getmyadda.length) {
            if (getmyadda[0].adder_username) {
                botMessage = `Mening qo'shganlarim\n\nQo'shgan odam: @${getmyadda[0].adder_username}\nQo'shilganlar soni: ${getmyadda[0].added_users}ta`
            } else {
                botMessage = `Mening qo'shganlarim\n\nQo'shgan odam: ${getmyadda[0].adder_nickname}\nQo'shilganlar soni: ${getmyadda[0].added_users}ta`
            }
            beginer(msg, bot, botMessage)
        } else {
            const test = msg.from.username
            const botmessage = `Qo'shuvchi odam: @${test}\nQo'shilganlar soni: ${0}ta`
            bot.sendMessage(id, botmessage)
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
    myadder
}