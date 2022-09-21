const { Telegraf } = require("telegraf");
const { Router, Markup } = Telegraf
const dotenv = require('dotenv').config();
const bot = new Telegraf(process.env.TOKEN);
console.log(process.env.TOKEN)
const mongoose = require('mongoose');
const User = require("./user").User;
const Group = require("./user").Group;
fs = require('fs');
mongoose
  .connect(
    "mongodb+srv://root:"+process.env.PASSWORD+"@cluster0.ufftb.mongodb.net/kif-timetable?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.log(e);
  });
const admins = [871447523]
//User
async function checkUser(newId) {
  const user = await User.find({
    id: newId,
  });
  return user[0] !== undefined;
}
async function readGroup(Name){
  var table = await Group.find({
      groupName: Name
  })
  console.log(table)
  return table 
}
async function createUser(userObj) {
  const user = new User(userObj);
  const saveUser = await user.save();
}
async function readDb() {
  const users = await User.find();
  const usersId = users.map((e) => e.id);
  return [users.length, usersId];
}
// Bot eventlari
bot.start( async (ctx)=>{
    const newUser = {
      id: ctx.chat.id,
      firstName: ctx.chat.first_name,
      lastName: ctx.chat.last_name,
      userName: ctx.chat.username,
      inviteLink: `tg://user?id=${ctx.chat.id}`,
      userType: ctx.chat.type,
    };
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
    if (!(await checkUser(newUser.id))) {
        await createUser(newUser);
        ctx.telegram.sendMessage(
            "871447523",
            `Botda yangi foydalanuvchi:
            Ismi:  ${newUser.firstName}
            Familyasi: ${newUser.lastName}
            Foydalanuvchi nomi: ${newUser.userName}
            ID: ${newUser.id}
            `
    );
    }
})
bot.command('/stat', async (ctx)=>{
  let len = await readDb();
  ctx.reply(`Assalomu alaykum botdagi foydalanuvchilar soni: ${len[0]}`);
})
bot.command('/new', (ctx)=>{
    idGroup = ctx.message.text.slice(5);
    if(admins.includes(ctx.chat.id)){
      bot.on('message', (ctx)=>{
        let writer = fs.createWriteStream('./jadvalla/'+idGroup+'.txt') 
        writer.write(ctx.message.text);
      })
    }  
    
})
bot.command('/rec', async (ctx)=>{
  if(admins.includes(ctx.chat.id)){
      bot.on("photo", async (ctx) => {
        usersId = await readDb();
          usersId[1].forEach((userID) => {
            ctx.telegram.forwardMessage(
              userID,
              ctx.message.from.id,
              ctx.message.message_id
            );
          });
      });

  }
})
bot.action('first', (ctx)=>{
  bot.telegram.sendMessage(ctx.chat.id, 'Assalomu alaykum. Guruhni tanlang: ',{
      reply_markup: {
          inline_keyboard: [
              [
                { text: '210-22 KIo‘', callback_data: 'kio210_22',},
                { text: '211-22 KIo‘', callback_data: 'kio211_22',},
              ],
              [
                { text: '212-22 KIo‘', callback_data: 'kio212_22',},
                { text: '213-22 KIo‘', callback_data: 'kio213_22',},
                { text: '214-22 KIo‘', callback_data: 'kio214_22',},
              ],
              [
                { text: '215-22 ATo‘', callback_data: 'ato215_22',},
                { text: '216-22 ATo‘', callback_data: 'ato216_22',},
                { text: '217-22 ATo‘', callback_data: 'ato217_22',},
              ],
              [
                { text: '218-22 ATo‘', callback_data: 'ato218_22',},
                { text: '219-22 MTo‘', callback_data: 'mto219_22',},
                { text: '220-22 MTo‘', callback_data: 'mto220_22',},
              ],
              [   
                { text: '221-22 MRo‘', callback_data: 'mro221_22',},
                { text: '222-22 MRo‘', callback_data: 'mro222_22',},
                { text: '223-22 SIo‘', callback_data: 'sio223_22',},
              ],
              [
                { text: '224-22 SIo‘', callback_data: 'sio224_22',},
                { text: '230-22 KIr', callback_data: 'kir230_22',},
                { text: '231-22 KIr', callback_data: 'kir231_22',},
              ],
              [
                { text: '232-22 ATr', callback_data: 'atr232_22',},
                { text: '233-22 ATr', callback_data: 'atr233_22',},
                { text: '234-22 MTr', callback_data: 'mtr234_22',},
              ],
              [
                { text: '235-22 MRr', callback_data: 'mrr235_22',},
                { text: '236-22 SIr', callback_data: 'sir236_22',}
              ]
          ]
      }
  })
})
bot.action('second', (ctx)=>{
    bot.telegram.sendMessage(ctx.chat.id, 'Assalomu alaykum. Guruhni tanlang: ',{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '210-21 KIo\'', callback_data: 'kio210_21',},
                    { text: '211-21 KIo\'', callback_data: 'kio211_21',},
                ],
                [
                    { text: '212-21 KIo\'', callback_data: 'kio212_21',},
                    { text: '213-21 KIo\'', callback_data: 'kio213_21',},
                    { text: '214-21 KIo\'', callback_data: 'kio214_21',}
                ],
                [
                    { text: '215-21 ATo\'', callback_data: 'ato215_21',},
                    { text: '216-21 ATo\'', callback_data: 'ato216_21',},
                    { text: '217-21 ATo\'', callback_data: 'ato217_21',},

                ],
                [
                    { text: '218-21 ATo\'', callback_data: 'ato218_21',},
                    { text: '219-21 MTo\'', callback_data: 'mto219_21',},
                    { text: '220-21 MTo\'', callback_data: 'mto220_21',},
                ],
                [   
                    { text: '221-21 MRo\'', callback_data: 'mro221_21',},
                    { text: '222-21 MRo\'', callback_data: 'mro222_21',},
                    { text: '223-21 SIo\'', callback_data: 'sio223_21',},
                ],
                [
                    { text: '224-21 SIo\'', callback_data: 'sio224_21',},
                    { text: '230-21 KIr', callback_data: 'kir230_21',},
                    { text: '231-21 KIr\'', callback_data: 'kir231_21',},
                ],
                [
                    { text: '232-21 ATr', callback_data: 'atr232_21',},
                    { text: '233-21 ATr\'', callback_data: 'atr233_21',},
                    { text: '234-21 MTr', callback_data: 'mtr234_21',},
                ],
                [
                  { text: '235-21 MRr\'', callback_data: 'mrr235_21',},
                    { text: '236-21 Sir', callback_data: 'sir236_21',},
                ],
                [
                  { text: '240-21 KIo\'', callback_data: 'kio240_21',},
                  { text: '241-21 KIo\'', callback_data: 'kio241_21',},
                ]
            ]
        }
    })
})
bot.action('third', (ctx)=>{
    bot.telegram.sendMessage(ctx.chat.id, 'Assalomu alaykum. Guruhni tanlang: ',{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '210-20 KIo\'', callback_data: 'kio210_20',},
                    { text: '211-20 KIo\'', callback_data: 'kio211_20',},
                    { text: '212-20 KIo\'', callback_data: 'kio212_20',},
                ],
                [
                    { text: '213-20 KIo\'', callback_data: 'kio213_20',},
                    { text: '214-20 Kling', callback_data: 'kling214_20',},
                    { text: '215-20 ATo\'', callback_data: 'ato215_20',},
                ],
                [
                    { text: '216-20 ATo\'', callback_data: 'ato216_20',},
                    { text: '217-20 MTo\'', callback_data: 'mto217_20',},
                    { text: '218-20 MTo\'', callback_data: 'mto218_20',}
                ],
                [
                    { text: '220-20 KIr', callback_data: 'kir220_20',},
                    { text: '221-20 KIr', callback_data: 'kir221_20',},
                    { text: '222-20 ATr', callback_data: 'atr222_20',},
                ],
                [
                  { text: '223-20 MTr\'', callback_data: 'mtr223_20',}
                ]
            ]
        }
    })
})
bot.action('fourth', (ctx)=>{
    bot.telegram.sendMessage(ctx.chat.id, 'Assalomu alaykum. Guruhni tanlang: ',{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '210-19 KIo\'', callback_data: 'kio210_19',},
                    { text: '211-19 KIo\'', callback_data: 'kio211_19',},
                    { text: '212-19 KIo\'', callback_data: 'kio212_19',},
                ],
                [    
                    { text: '213-19 KIo\'', callback_data: 'kio213_19',},
                    { text: '214-19 Kling', callback_data: 'kling214_19',},
                    { text: '215-19 ATo\'', callback_data: 'ato215_19',},
                ],
                [
                    { text: '216-19 ATo\'', callback_data: 'ato216_19',},
                    { text: '217-19 MTo\'', callback_data: 'mto217_19',},
                    { text: '218-19 MTo\'', callback_data: 'mto218_19',}
                ],
                [
                    { text: '220-19 KIr', callback_data: 'kir220_19',},
                    { text: '221-19 KIr', callback_data: 'kir221_19',},
                    { text: '222-19 ATr', callback_data: 'atr222_19',},
                ],
                [
                  { text: '223-19 MTr\'', callback_data: 'mtr223_19',}
                ]
            ]
        }
    })
})

bot.action('kio210_22', async (ctx)=>{
  dars = await readGroup('kio210_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kio211_22', async (ctx)=>{
  dars = await readGroup('kio211_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kio212_22', async (ctx)=>{
  dars = await readGroup('kio212_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kio214_22', async (ctx)=>{
  dars = await readGroup('kio214_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kio213_22', async (ctx)=>{
  dars = await readGroup('kio213_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('ato215_22', async (ctx)=>{
  dars = await readGroup('ato215_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('ato216_22', async (ctx)=>{
  dars = await readGroup('ato216_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('ato218_22', async (ctx)=>{
  dars = await readGroup('ato218_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('mto219_22', async (ctx)=>{
  dars = await readGroup('mto219_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('ato217_22', async (ctx)=>{
  dars = await readGroup('ato217_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('mto220_22', async (ctx)=>{
  dars = await readGroup('mto220_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('mro221_22', async (ctx)=>{
  dars = await readGroup('mro221_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('mro222_22', async (ctx)=>{
  dars = await readGroup('mro222_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kir230_22', async (ctx)=>{
  dars = await readGroup('kir230_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kir231_22', async (ctx)=>{
  dars = await readGroup('kir231_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('sio223_22', async (ctx)=>{
  dars = await readGroup('sio223_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('atr232_22', async (ctx)=>{
  dars = await readGroup('atr232_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('sio224_22', async (ctx)=>{
  dars = await readGroup('sio224_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('atr233_22', async (ctx)=>{
  dars = await readGroup('atr233_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('mtr234_22', async (ctx)=>{
  dars = await readGroup('mtr234_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('mrr235_22', async (ctx)=>{
  dars = await readGroup('mrr235_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('sir236_22', async (ctx)=>{
  dars = await readGroup('sir236_22')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kio210_21', async (ctx)=>{
  dars = await readGroup('kio210_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kio211_21', async (ctx)=>{
  dars = await readGroup('kio211_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kio213_21', async (ctx)=>{
  dars = await readGroup('kio213_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kio212_21', async (ctx)=>{
  dars = await readGroup('kio212_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kio214_21', async (ctx)=>{
  dars = await readGroup('kio214_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('ato217_21', async (ctx)=>{
  dars = await readGroup('ato217_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('ato216_21', async (ctx)=>{
  dars = await readGroup('ato216_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('ato218_21', async (ctx)=>{
  dars = await readGroup('ato218_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('mto219_21', async (ctx)=>{
  dars = await readGroup('mto219_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('mro222_21', async (ctx)=>{
  dars = await readGroup('mro222_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('ato215_21', async (ctx)=>{
  dars = await readGroup('ato215_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('mto220_21', async (ctx)=>{
  dars = await readGroup('mto220_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('mro221_21', async (ctx)=>{
  dars = await readGroup('mro221_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('sio223_21', async (ctx)=>{
  dars = await readGroup('sio223_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kir230_21', async (ctx)=>{
  dars = await readGroup('kir230_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kir231_21', async (ctx)=>{
  dars = await readGroup('kir231_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('sio224_21', async (ctx)=>{
  dars = await readGroup('sio224_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('atr233_21', async (ctx)=>{
  dars = await readGroup('atr233_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('atr232_21', async (ctx)=>{
  dars = await readGroup('atr232_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('mtr234_21', async (ctx)=>{
  dars = await readGroup('mtr234_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('mrr235_21', async (ctx)=>{
  dars = await readGroup('mrr235_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('sir236_21', async (ctx)=>{
  dars = await readGroup('sir236_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kio240_21', async (ctx)=>{
  dars = await readGroup('kio240_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kio241_21', async (ctx)=>{
  dars = await readGroup('kio241_21')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kio211_20', async (ctx)=>{
  dars = await readGroup('kio211_20')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kio210_20', async (ctx)=>{
  dars = await readGroup('kio210_20')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kling214_20', async (ctx)=>{
  dars = await readGroup('kling214_20')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kio212_20', async (ctx)=>{
  dars = await readGroup('kio212_20')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('ato215_20', async (ctx)=>{
  dars = await readGroup('ato215_20')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('ato216_20', async (ctx)=>{
  dars = await readGroup('ato216_20')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kio213_20', async (ctx)=>{
  dars = await readGroup('kio213_20')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('mto217_20', async (ctx)=>{
  dars = await readGroup('mto217_20')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('mto218_20', async (ctx)=>{
  dars = await readGroup('mto218_20')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('mtr223_20', async (ctx)=>{
  dars = await readGroup('mtr223_20')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kir221_20', async (ctx)=>{
  dars = await readGroup('kir221_20')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kir220_20', async (ctx)=>{
  dars = await readGroup('kir220_20')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kio210_19', async (ctx)=>{
  dars = await readGroup('kio210_19')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('atr222_20', async (ctx)=>{
  dars = await readGroup('atr222_20')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kio212_19', async (ctx)=>{
  dars = await readGroup('kio212_19')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kling214_19', async (ctx)=>{
  dars = await readGroup('kling214_19')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('ato215_19', async (ctx)=>{
  dars = await readGroup('ato215_19')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kio213_19', async (ctx)=>{
  dars = await readGroup('kio213_19')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kio211_19', async (ctx)=>{
  dars = await readGroup('kio211_19')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('ato216_19', async (ctx)=>{
  dars = await readGroup('ato216_19')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kir221_19', async (ctx)=>{
  dars = await readGroup('kir221_19')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('mto218_19', async (ctx)=>{
  dars = await readGroup('mto218_19')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('kir220_19', async (ctx)=>{
  dars = await readGroup('kir220_19')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('mtr223_19', async (ctx)=>{
  dars = await readGroup('mtr223_19')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('mto217_19', async (ctx)=>{
  dars = await readGroup('mto217_19')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.action('atr222_19', async (ctx)=>{
  dars = await readGroup('atr222_19')
  if(Object.keys(dars).length==0){
      ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
  }
  else{
      ctx.reply(dars[0].context)
  }
});

bot.launch();