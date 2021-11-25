const beginer = async (msg, bot, botMessage) => {
    const id = msg.chat.id

    if (msg.chat.type === 'supergroup' || msg.chat.type === 'group') {

        const isAdmin = await bot.getChatAdministrators(id)
        const findAdmin = isAdmin.find(el => el.user.username === 'group_membercounter_bot')
        const findCreator = isAdmin.find(el => el.status === 'creator')
        const findedAdmin = isAdmin.find(el => el.user.id === msg.from.id)
        if (findCreator) {
            if (findAdmin.status === 'administrator') {
                if (findedAdmin) {

                    bot.sendMessage(id, botMessage)

                } else {
                    bot.sendMessage(id, `siz bu buyruqni ishlatish uchun guruhda admin bo'lishingiz kerak`)
                }
            } else {
                bot.sendMessage(id, 'bu buyruqni ishlatish uchun botni guruhga admin qilishingiz kerak')
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
    beginer
}