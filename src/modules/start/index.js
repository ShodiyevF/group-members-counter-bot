const path = require('path')
const start = async (msg, bot) => {
    const id = msg.chat.id
    var options = {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Guruhga qushish ➕', url: `https://t.me/group_membercounter_bot?startgroup=new`, callback_data: 'plus' }]
            ]
        })
    };
    await bot.sendMessage(id, `𝗔𝘀𝘀𝗮𝗹𝗼𝗺𝘂 𝗮𝗹𝗮𝘆𝗸𝘂𝗺\n\n𝗯𝗼𝘁𝗻𝗶 𝗴𝘂𝗿𝘂𝗵𝗶𝗻𝗴𝗶𝘇𝗴𝗮 𝗾𝗼'𝘀𝗵𝗶𝗻𝗴 𝘃𝗮 𝗯𝗼𝘁𝗻𝗶 𝗴𝘂𝗿𝘂𝗵𝗶𝗻𝗴𝗶𝘇𝗴𝗮 𝗮𝗱𝗺𝗶𝗻 𝗾𝗶𝗹𝗶𝗻𝗴, 𝘀𝗵𝘂𝗻𝗱𝗮 𝗯𝗼𝘁 𝗴𝘂𝗿𝘂𝗵𝗶𝗻𝗴𝗶𝘇𝗴𝗮 𝗸𝗶𝗺 𝗻𝗲𝗰𝗵𝘁𝗮 𝗼𝗱𝗮𝗺 𝗾𝗼'𝘀𝗵𝗴𝗮𝗻𝗹𝗶𝗴𝗶𝗻𝗶 𝗮𝗻𝗶𝗾𝗹𝗮𝗯 𝗯𝗲𝗿𝗮𝗱𝗶`, options)
}

module.exports = {
    start
}