const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(()=>{
  console.log("Connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let allchats=([{
  from:"Neha",
  to:"priya",
  message:"What was your exam like?",
  created_at: new Date(),
},
{
  from:"Shreya",
  to:"riya",
  message:"What you like to do?",
  created_at: new Date(),
},
{
  from:"sujan",
  to:"pujan",
  message:"lets go treking",
  created_at: new Date(),
},
{
  from:"Suman",
  to:"Duman",
  message:"do hardwork",
  created_at: new Date(),
},
])
Chat.insertMany(allchats);