const fs = require('fs')
arrays = ['kio210_22',
'kio211_22',
'kio212_22',
'kio213_22',
'kio214_22',
'ato215_22',
'ato216_22',
'ato217_22',
'ato218_22',
'mto219_22',
'mto220_22',
'mro221_22',
'mro222_22',
'sio223_22',
'sio224_22',
'kir230_22',
'kir231_22',
'atr232_22',
'atr233_22',
'mtr234_22',
'mrr235_22',
'sir236_22']
arrays.forEach(e => {
    param= `
        bot.action('${e}', async (ctx)=>{
            dars = await readGroup('${e}')
            if(Object.keys(dars).length==0){
                ctx.reply('Ushbu guruhda hali dars jadvali yuklanmagan')
            }
            else{
                ctx.reply(dars[0].context)
            }
        });
        `
  fs.appendFile('log.txt', param, function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });
});