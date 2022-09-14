const { Telegraf } = require("telegraf");
const { Router, Markup } = Telegraf
const dotenv = require('dotenv').config();
const bot = new Telegraf(process.env.TOKEN);
console.log(process.env.TOKEN)

bot.start((ctx)=>{
        bot.telegram.sendMessage(ctx.chat.id, 'Assalomu alaykum. Kursni tanlang: ',{
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: '1 kurs', callback_data: 'first'}
                    ],
                    [
                        { text: '2 kurs', callback_data: 'f_AT_(qq)'}
                    ]
                ]
            }
        })
    }
    )
bot.action('first', (ctx)=>{
    bot.telegram.sendMessage(ctx.chat.id, 'Assalomu alaykum. Guruhni tanlang tanlang: ',{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '1 KI (qq)', callback_data: 'f_KI_(qq)'}
                ],
                [
                    { text: '1 AT (qq)', callback_data: 'f_AT_(qq)'}
                ]
            ]
        }
    })
})
bot.action('f_KI_(qq)', (ctx)=>{
    ctx.reply(`1 KI (QQ) KESTESI: 
    1️⃣-Dushanba:
    1) Фалсафа
    асс. Аширов М. (3 aud)
    2) Физика2
    асс. Каипназаров С. (3 aud)
    3) Чизиқлиалгебра
    асс. Бердимбетова  А. (3 aud)
    
    2️⃣-Seshanba:
    1) Дифференциалтенгламалар
    асс. Тлеубаева Г. (3 aud)
    2) Дастурлаш2
    асс. Жарылканов Б. (12 aud)
    3) Академикёзув2
    ф.и.к.Жаксымова У. (17 aud)
    4) Чизиқлиалгебра
    асс. Бердимбетова  А. (7 aud)
    
    3️⃣-Chorshanba:
    1) Дастурлаш2
    асс. Орынбаев А.  (3 aud)
    2) Дастурлаш2
    асс. Жарылканов Б. (104 aud)
    3) Физика2
    асс. Каипназаров С. (17 aud)
    
    4️⃣-Payshanba:
    1) Физика2
    асс. Калиллаев Ф. (17 aud)
    2) Хорижийтил2
    асс. Жуманиязова Н. (17 aud)
    3) Дифференциалтенгл.
    асс. Тлеубаева Г. (17 aud)
    4) Ахборотсоати
    Хожаметов С. (3 aud)
    
    5️⃣-Juma:
    1) Хорижийтил2
    асс. Жуманиязова Н. (17 aud)
    2) Жисмонийтарбия
    асс. Базарбаев И. (c/3 aud)
    3) Фалсафа
    асс. Аширов М. (11 aud)
    `)
})
bot.action('f_AT_(qq)', (ctx)=>{
    ctx.reply(`1 AT (QQ) KESTESI: 
    1️⃣-Dushanba:
    1) Фалсафа
    асс. Аширов М. (3 aud)
    2) Физика2
    асс. Каипназаров С. (3 aud)
    3) Чизиқлиалгебра
    асс. Бердимбетова  А. (3 aud)
    
    2️⃣-Seshanba:
    1) Дифференциалтенгламалар
    асс. Тлеубаева Г. (3 aud)
    2) Хорижийтил2
    асс. Жуманиязова Н. (17 aud)
    3) Дастурлаш2
    асс.Сагидуллаев Н. (12 aud)
    4) Академикёзув2
    ф.и.к.Жаксымова У. (19 aud)
    
    3️⃣-Chorshanba:
    1) Дастурлаш2
    асс. Орынбаев А.  (3 aud)
    2) Чизиқлиалгебра
    асс. Бердимбетова  А. (18 aud)
    3) Дастурлаш2
    асс.Сагидуллаев Н. (14 aud)
    
    4️⃣-Payshanba:
    1) Дифференциалтенгл.
    асс. Тлеубаева Г. (18 aud)
    2) Физика2
    асс. Калиллаев Ф. (18 aud)
    3) Хорижийтил2
    асс. Жуманиязова Н. (18 aud)
    4) Ахборотсоати
    Хожаметов С. (3 aud)
    
    5️⃣-Juma:
    1) Фалсафа
    асс. Аширов М. (18 aud)
    2) Физика2
    асс. Калиллаев Ф. (18 aud)
    3) Жисмонийтарбия
    асс. Базарбаев И. (c/3 aud)
    `)
})
bot.launch();