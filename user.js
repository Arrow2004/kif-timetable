const mongoose = require("mongoose");
const userScheme = new mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  userName: String,
  inviteLink: String,
  userType: String,
  date: { type: Date, default: Date.now },
});
const groupScheme = new mongoose.Schema({
  groupName: {
    type: String,
    unique: true, 
  },
  context: String,
  groupY: Number,
  date: {
      type: Date,
      default: Date.now()
  }
});
module.exports.User = mongoose.model("User", userScheme);
module.exports.Group = mongoose.model('Group',groupScheme)

/*
const mongoose = require('mongoose')

mongoose
  .connect(
    "mongodb+srv://root:shirina1708@cluster0.ufftb.mongodb.net/darsJadvali?retryWrites=true&w=majority",
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
  const userScheme = new mongoose.Schema({
    groupName: String,
    context: String,
    groupY: Number,
    date: {
        type: Date,
        default: Date.now()
    }
  });
  const User = mongoose.model('timetable',userScheme)
  async function createUser() {
    const user = new User({
        groupName: 'Kif',
        context: `SAlomdjfbrshfb
        frhfgvfjsdvgj
        efikeggfveghfveu`,
        groupY: 2019
    });
    const saveUser = await user.save();
    console.log(saveUser)
  }
  createUser()
  readDb()*/