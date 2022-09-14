const { Telegraf } = require("telegraf");
const { Router, Markup } = Telegraf
const dotenv = require('dotenv').config();
const bot = new Telegraf(process.env.TOKEN);
console.log(process.env.TOKEN)
fs = require('fs');
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
bot.action('mto217_19', (ctx)=>{
    ctx.reply(`
    217-19 MTo‘ Jadvali: 
    1️⃣-Dushanba:
    1) IT/Mutaxassislik tanlov fani 1 (3D texnologiya) (Amal.)
    - (5.07)
    2) IT/Mutaxassislik tanlov fani 1 (3D texnologiya) (Amal.)
    - (5.07)
    3) IT/Mutaxassislik tanlov fani 1 (3D texnologiya) (Ma'ruza)
    - (4.02)
    
    2️⃣-Seshanba:
    1) IT/Mutaxassislik tanlov fani 2 (Multimedia dizayn) (Amal.)
    - (5.03)
    2) IT/Mutaxassislik tanlov fani 2 (Multimedia dizayn) (Ma'ruza)
    - (4.02)
    3) IT/Mutaxassislik tanlov fani 2 (Multimedia dizayn) (Amal.)
    - (5.03)
   
    3️⃣-Chorshanba:
    1) IT/Mutaxassislik tanlov fani 3 (Multimedia injiniringi) (Ma'ruza)
    - (5.02)
    2) IT/Mutaxassislik tanlov fani 3 (Multimedia injiniringi) (Amal.)
    - (5.01)
    3) IT/Mutaxassislik tanlov fani 3 (Multimedia injiniringi) (Amal.)
    - (5.01)
    
    4️⃣-Payshanba:
    1) Web dizayn (Amal.)
    - (6.07)
    2) Web dizayn (Amal.)
    - (6.07)
    3) Web dizayn (Ma'ruza)
    - (4.02)
        
    5️⃣-Juma:
    ***

    6️⃣-Shanba:
    ***`)
})
bot.action('mto218_19', (ctx)=>{
    ctx.reply(`218-19 MTo‘ Jadvali: 
    1️⃣-Dushanba:
    1) IT/Mutaxassislik tanlov fani 1 (3D texnologiya) (Amal.)
    - (5.03)
    2) IT/Mutaxassislik tanlov fani 1 (3D texnologiya) (Amal.)
    - (5.03)
    3) IT/Mutaxassislik tanlov fani 1 (3D texnologiya) (Ma'ruza)
    - (4.02)
    
    2️⃣-Seshanba:
    1) IT/Mutaxassislik tanlov fani 2 (Multimedia dizayn) (Amal.)
    - (5.07)
    2) IT/Mutaxassislik tanlov fani 2 (Multimedia dizayn) (Ma'ruza)
    - (4.02)
    3) IT/Mutaxassislik tanlov fani 2 (Multimedia dizayn) (Amal.)
    - (5.07)
   
    3️⃣-Chorshanba:
    1) IT/Mutaxassislik tanlov fani 3 (Multimedia injiniringi) (Ma'ruza)
    - (5.02)
    2) IT/Mutaxassislik tanlov fani 3 (Multimedia injiniringi) (Amal.)
    - (5.07)
    3) IT/Mutaxassislik tanlov fani 3 (Multimedia injiniringi) (Amal.)
    - (5.07)
    
    4️⃣-Payshanba:
    1) Web dizayn (Amal.)
    - (5.07)
    2) Web dizayn (Amal.)
    - (5.07)
    3) Web dizayn (Ma'ruza)
    - (4.02)
        
    5️⃣-Juma:
    ***

    6️⃣-Shanba:
    ***
    `)
})
bot.action('mtr223_19', (ctx)=>{
    fs.readFile('./jadvalla/mtr223_19.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
//Ikkinchi kurslar
bot.action('kio210_21', (ctx)=>{
    fs.readFile('./jadvalla/kio210_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})

bot.action('kio211_21', (ctx)=>{
    fs.readFile('./jadvalla/kio211_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('kio212_21', (ctx)=>{
  fs.readFile('./jadvalla/kio212_21.txt', 'utf8', (err, data) => {
      if (err) {
          ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
        return ;
      }
      ctx.reply(data)
    });
})
bot.action('kio213_21', (ctx)=>{
    fs.readFile('./jadvalla/kio213_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('kio214_21', (ctx)=>{
    fs.readFile('./jadvalla/kio214_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('ato215_21', (ctx)=>{
    fs.readFile('./jadvalla/ato215_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('ato216_21', (ctx)=>{
    fs.readFile('./jadvalla/ato216_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('ato217_21', (ctx)=>{
    fs.readFile('./jadvalla/ato217_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('ato218_21', (ctx)=>{
    fs.readFile('./jadvalla/ato218_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('mto219_21', (ctx)=>{
    fs.readFile('./jadvalla/mto219_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('mto220_21', (ctx)=>{
    fs.readFile('./jadvalla/mto220_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('mro221_21', (ctx)=>{
    fs.readFile('./jadvalla/mro221_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('mro222_21', (ctx)=>{
    fs.readFile('./jadvalla/mro222_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('sio223_21', (ctx)=>{
    fs.readFile('./jadvalla/sio223_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('sio224_21', (ctx)=>{
    fs.readFile('./jadvalla/sio224_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('kir230_21', (ctx)=>{
    fs.readFile('./jadvalla/kir230_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('kir231_21', (ctx)=>{
    fs.readFile('./jadvalla/kir231_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('atr232_21', (ctx)=>{
    fs.readFile('./jadvalla/atr232_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('atr233_21', (ctx)=>{
    fs.readFile('./jadvalla/atr233_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('mtr234_21', (ctx)=>{
    fs.readFile('./jadvalla/mtr234_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('mrr235_21', (ctx)=>{
    fs.readFile('./jadvalla/mrr235_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('sir236_21', (ctx)=>{
    fs.readFile('./jadvalla/236guruh.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('kio240_21', (ctx)=>{
    fs.readFile('./jadvalla/kio240_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.action('kio241_21', (ctx)=>{
    fs.readFile('./jadvalla/kio241_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
//4-kurslar
bot.action('kio210_19', (ctx)=>{
    fs.readFile('./jadvalla/kio210_19.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})

bot.action('kio211_19', (ctx)=>{
    fs.readFile('./jadvalla/kio211_19.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})

bot.action('kio212_19', (ctx)=>{
    fs.readFile('./jadvalla/kio211_19.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})

bot.action('kio213_19', (ctx)=>{
    fs.readFile('./jadvalla/kio210_21.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})

bot.action('kkling214_19', (ctx)=>{
    fs.readFile('./jadvalla/kkling214_19.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})

bot.action('ato215_19', (ctx)=>{
    fs.readFile('./jadvalla/ato215_19.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})


bot.action('ato216_19', (ctx)=>{
    fs.readFile('./jadvalla/ato216_19.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})


bot.action('mto217_19', (ctx)=>{
    fs.readFile('./jadvalla/mto217_19.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})


bot.action('mto218_19', (ctx)=>{
    fs.readFile('./jadvalla/mto218_19.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})


bot.action('kir220_19', (ctx)=>{
    fs.readFile('./jadvalla/kir220_19.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})

bot.action('kir221_19', (ctx)=>{
    fs.readFile('./jadvalla/kir221_19.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})

bot.action('atr222_19', (ctx)=>{
    fs.readFile('./jadvalla/atr222_19.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})

bot.action('mtr223_19', (ctx)=>{
    fs.readFile('./jadvalla/mtr223_19.txt', 'utf8', (err, data) => {
        if (err) {
            ctx.reply('Ushbu guruh dars jadvali hali yuklanmagan!!!')
          return ;
        }
        ctx.reply(data)
      });
})
bot.launch();