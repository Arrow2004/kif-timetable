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
                        { text: '1 kurs', callback_data: 'first'},
                        { text: '2 kurs', callback_data: 'second'}
                    ],
                    [
                        { text: '3 kurs', callback_data: 'third'},
                        { text: '4 kurs', callback_data: 'fourth'}
                    ]
                ]
            }
        })
    }
    )
bot.action('second', (ctx)=>{
    bot.telegram.sendMessage(ctx.chat.id, 'Assalomu alaykum. Guruhni tanlang tanlang: ',{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '210-21 KIo\'', callback_data: 'kio210_21'},
                ],
                [
                    { text: '211-21 KIo\'', callback_data: 'kio211_21'},
                    { text: '212-21 KIo\'', callback_data: 'kio212_21'},
                    { text: '213-21 KIo\'', callback_data: 'kio213_21'},
                    { text: '214-21 KIo\'', callback_data: 'kio214_21'}
                ],
                [
                    { text: '215-21 ATo\'', callback_data: 'ato215_21'},
                    { text: '216-21 ATo\'', callback_data: 'ato216_21'},
                    { text: '217-21 ATo\'', callback_data: 'ato217_21'},
                    { text: '218-21 ATo\'', callback_data: 'ato218_21'}
                ],
                [
                    { text: '219-21 MTo\'', callback_data: 'mto219_21'},
                    { text: '220-21 MTo\'', callback_data: 'mto220_21'},
                    { text: '221-21 MRo\'', callback_data: 'mro221_21'},
                    { text: '222-21 MRo\'', callback_data: 'mro222_21'},
                ],
                [
                    { text: '223-21 SIo\'', callback_data: 'sio223_21'},
                    { text: '224-21 SIo\'', callback_data: 'sio224_21'},
                    { text: '230-21 KIr', callback_data: 'kir230_21'},
                    { text: '231-21 KIr\'', callback_data: 'kir231_21'},
                ],
                [
                    { text: '232-21 ATr', callback_data: 'atr232_21'},
                    { text: '233-21 ATr\'', callback_data: 'atr233_21'},
                    { text: '234-21 MTr', callback_data: 'mtr234_21'},
                    { text: '235-21 MRr\'', callback_data: 'mrr235_21'},
                ],
                [
                    { text: '236-21 Sir', callback_data: 'sir236_21'},
                    { text: '240-21 KIo\'', callback_data: 'kio240_21'},
                    { text: '241-21 KIo\'', callback_data: 'kio241_21'},
                ],
            ]
        }
    })
})
bot.action('third', (ctx)=>{
    bot.telegram.sendMessage(ctx.chat.id, 'Assalomu alaykum. Guruhni tanlang tanlang: ',{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '210-20 KIo\'', callback_data: 'kio210_20'},
                ],
                [
                    { text: '211-20 KIo\'', callback_data: 'kio211_20'},
                    { text: '212-20 KIo\'', callback_data: 'kio212_20'},
                    { text: '213-20 KIo\'', callback_data: 'kio213_20'},
                    { text: '214-20 Kling', callback_data: 'kkling214_20'}
                ],
                [
                    { text: '215-20 ATo\'', callback_data: 'ato215_20'},
                    { text: '216-20 ATo\'', callback_data: 'ato216_20'},
                    { text: '217-20 MTo\'', callback_data: 'mto217_20'},
                    { text: '218-20 MTo\'', callback_data: 'mto218_20'}
                ],
                [
                    { text: '220-20 KIr', callback_data: 'kir220_20'},
                    { text: '221-20 KIr', callback_data: 'kir221_20'},
                    { text: '222-20 ATr', callback_data: 'atr222_20'},
                    { text: '223-20 MTr\'', callback_data: 'mtr223_20'}
                ],
            ]
        }
    })
})
bot.action('fourth', (ctx)=>{
    bot.telegram.sendMessage(ctx.chat.id, 'Assalomu alaykum. Guruhni tanlang tanlang: ',{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '210-19 KIo\'', callback_data: 'kio210_19'},
                ],
                [
                    { text: '211-19 KIo\'', callback_data: 'kio211_19'},
                    { text: '212-19 KIo\'', callback_data: 'kio212_19'},
                    { text: '213-19 KIo\'', callback_data: 'kio213_19'},
                    { text: '214-19 Kling', callback_data: 'kkling214_19'}
                ],
                [
                    { text: '215-19 ATo\'', callback_data: 'ato215_19'},
                    { text: '216-19 ATo\'', callback_data: 'ato216_19'},
                    { text: '217-19 MTo\'', callback_data: 'mto217_19'},
                    { text: '218-19 MTo\'', callback_data: 'mto218_19'}
                ],
                [
                    { text: '220-19 KIr', callback_data: 'kir220_19'},
                    { text: '221-19 KIr', callback_data: 'kir221_19'},
                    { text: '222-19 ATr', callback_data: 'atr222_19'},
                    { text: '223-19 MTr\'', callback_data: 'mtr223_19'}
                ],
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