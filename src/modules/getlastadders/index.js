const { beginer } = require("../../lib/beginer")
const { getLastAdders } = require("./model")

const lastadders = async (msg, bot) => {
    const id = msg.chat.id

    if (msg.chat.type === 'supergroup' || msg.chat.type === 'group') {
        const data = await getLastAdders(id)
        let botMessage = ''
        if (data.length) {
            let adder
            let allAdders = []
            let beginnerMessage = `Ohirgi qo'shgan odamlar ohirgi 10 talik:`
            for (const i of data) {
                if (i.adder_username) {
                    adder = `Qo'shgan odam: ` + '@' + i.adder_username + '\n' + `Qo'shilganlar soni: ` + i.added_users + ' ta'
                } else {
                    adder = `Qo'shgan odam: ` + i.adder_nickname + '\n' + `Qo'shilganlar soni: ` + i.added_users + ' ta'
                }
                allAdders.push('\n' + adder)
            }
            for (const i of allAdders) {
                botMessage = botMessage + `${i}\n`
            }

            botMessage = beginnerMessage + '\n' + botMessage

            beginer(msg, bot, botMessage)
        } else {
            bot.sendMessage(id, `Ohirgi qo'shuvchilar topilmadi`)
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
    lastadders 
}