const telegramBot = require('node-telegram-bot-api');
const express = require('express');
const { token } = require('./config');
const groupsFront = require('./modules/getgroupsFRONT/index');

const app = express()

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use(groupsFront)



const { lastadders } = require('./modules/getlastadders');
const { mostadder } = require('./modules/getmostadders');
const { myadder } = require('./modules/getmyadds');
const { getoneadder } = require('./modules/getoneadder');
const { lastadder } = require('./modules/gettopadder');
const { memberCount } = require('./modules/memberCount');
const { start } = require('./modules/start');

const bot = new telegramBot( token, { polling: true })

// bot.onText(/\/topqushuvchii/ , msg => lastadder(msg, bot))
bot.onText(/\/start/, msg => {
    console.log(msg)
    start(msg, bot)
})
bot.onText(/\/last/ , msg => lastadders(msg, bot))
bot.onText(/\/top/ , msg => mostadder(msg, bot))
bot.onText(/\/my/ , msg => myadder(msg, bot))
bot.onText(/\/adder/, msg => getoneadder(msg, bot))
bot.onText(/\/adder@group_membercounter_bot/, msg => {
    bot.sendMessage(msg.chat.id, 'Ushbu buyruqni ishlatish da xatolik bor !\n\nBUYRUQNI ISHLATIH QOIDALARI↓\n\n/adder:@username → username orqali ishlatish\n/adder:abdurrohman → nickname orqali ishlatish')
})

bot.on('new_chat_members', async msg => memberCount(msg, bot));

app.listen(4000)