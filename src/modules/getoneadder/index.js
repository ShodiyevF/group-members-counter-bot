const { beginer } = require("../../lib/beginer")
const { getmostadder, getoneadderasn, getoneadderasu } = require("./model")

const getoneadder = async (msg, bot) => {
    const id = msg.chat.id
    const oneaddern = await getoneadderasn(id)

    
    if (msg.chat.type === 'supergroup' || msg.chat.type === 'group') {
        
        const isAdmin = await bot.getChatAdministrators(id)
        const findAdminn = isAdmin.find(el => el.user.id === msg.from.id)
        const findAdmin = isAdmin.find(el => el.user.username === 'group_membercounter_bot')
        const findCreator = isAdmin.find(el => el.status === 'creator')
        
        if (findAdminn) {

            if(msg.text[0] === '/'){
                const splited = msg.text.split(':')[1]
                const splitedd = msg.text.split(':')[0]
                if (splitedd === '/adder') {
                    if (!splited) {
                        bot.sendMessage(msg.chat.id, 'Ushbu buyruqni ishlatish da xatolik bor !\n\nBUYRUQNI ISHLATIH QOIDALARI↓\n\n/qushuvchi:@username → username orqali ishlatish\n/qushuvchi:abdurrohman → nickname orqali ishlatish')
                    } else {
                        if (splited[0] === '@') {
                            const test = splited.split('@')
                            const oneadderu = await getoneadderasu(id, test[1])
                            const getnullusername = splited.split('@')[1]
                            const botmessage = `Qo'shgan odam: @${getnullusername}\nQo'shilganlar soni: ${0}ta\n\nEslatma: siz comandani xato kiritgan bo'lishingiz mumkin !\ncomandani shu joyida siz joy tashlab ketgan bulsangiz yozuvlarni qushib yozing                  ↓\n/qushuvchi:@username @group_membercounter_bot`
                            if (!oneadderu[0]) {
                                bot.sendMessage(id, botmessage)
                                console.log(id);
                            } else {
                                if (oneadderu[0].adder_username) {
                                    const botmessage = `Qo'shgan odam: @${oneadderu[0].adder_username}\nQo'shilganlar soni: ${oneadderu[0].added_users}ta`

                                    bot.sendMessage(id, botmessage)
                                } else {
                                    const botmessage = `Qo'shgan odam: ${oneadderu[0].adder_nickname}\nQo'shilganlar soni: ${oneadderu[0].added_users}ta`
                                    bot.sendMessage(id, botmessage)
                                }
                            }


                        } else {
                            if (splited.split('@')) {

                                const test = splited.split('@')[0]
                                const oneaddern = await getoneadderasn(id, test)

                                if (oneaddern.length === 0) {
                                    const botmessage = `Qo'shgan odam: ${test}\nQo'shilganlar soni: ${0}ta\n\nEslatma: siz comandani xato kiritgan bo'lishingiz mumkin !\ncomandani shu joyida siz joy tashlab ketgan bulsangiz yozuvlarni qushib yozing                  ↓\n/qushuvchi:@username @group_membercounter_bot`
                                    bot.sendMessage(id, botmessage)
                                }

                                if (oneaddern.length) {
                                    if (oneaddern[0].adder_username) {
                                        const botmessage = `Qo'shgan odam: @${oneaddern[0].adder_username}\nQo'shilganlar soni: ${oneaddern[0].added_users}ta`
                                        bot.sendMessage(id, botmessage)
                                    } else {
                                        const botmessage = `Qo'shgan odam: ${oneaddern[0].adder_nickname}\nQo'shilganlar soni: ${oneaddern[0].added_users}ta`
                                        bot.sendMessage(id, botmessage)
                                    }
                                }


                            }
                        }
                    }
                }
            }
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
    getoneadder
}