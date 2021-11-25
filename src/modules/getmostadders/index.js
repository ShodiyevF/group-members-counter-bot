const { beginer } = require("../../lib/beginer")
const { getmostadder } = require("./model")

const mostadder = async (msg, bot) => {
    const id = msg.chat.id

    
    if (msg.chat.type === 'supergroup' || msg.chat.type === 'group') {
        const mostadders = await getmostadder(id)
        if (mostadders.length) {
            let adder
            let allAdders = []
            let beginnerMessage = `Eng kup odam qo'shgan TOP 10 talik:\n`
            let botMessage = ''
            let conter = 0
            for (const i of mostadders) {
                if (i.adder_username) {
                    adder = `${conter = conter + 1} - o'rin: ` + '@' + i.adder_username + '\n' + `Qo'shilganlar soni: ` + i.added_users + ' ta'
                } else {
                    adder = `Qo'shgan odam: ` + i.adder_nickname + '\n' + `Qo'shilganlar soni: ` + i.added_users + ' ta'
                }
                allAdders.push('\n' + adder)
            }
            for (const i of allAdders) {
                botMessage = botMessage + `${i}\n`
            }
            botMessage = beginnerMessage + botMessage


            beginer(msg, bot, botMessage)
        } else {
            bot.sendMessage(id, `Top qo'shuvchilar topilmadi `)
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
    mostadder
}