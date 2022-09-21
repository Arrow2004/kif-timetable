const mongoose = require('mongoose');
const Group = require("./user").Group;
const fs = require('fs')
const dotenv = require('dotenv').config();
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

fs.readdir('./jadvalla', (err, files) => {
    files.forEach(file => {
        console.log(file)
        fs.readFile('./jadvalla/'+file, 'utf8', function(err, data){

            createUser({
                groupName: file.slice(0,-4),
                context: data,
                groupY: 2000+Number(file.slice(-6,-4))
            })
        });
    });
  });

async function createUser(obj) {
    const user = new Group(obj);
    const saveUser = await user.save();
    console.log(saveUser)
  }
