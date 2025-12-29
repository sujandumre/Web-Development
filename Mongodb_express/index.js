const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError=require('./ExpressError.js');

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

main().then(()=>{
  console.log("Connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

//index route
app.get("/chats",async(req,res)=>{
  try{
    let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs",{chats})
  }catch(err){
    next(err);
  }
  
});

//new route
app.get("/chats/new",(req,res)=>{
  // throw new ExpressError(404,"pagenot found");
  res.render("new.ejs");
});

//create route
app.post("/chats",async(req,res,next)=>{
  try{
    let {from,to,message} = req.body;
  let newChat = new Chat({
    from:from,
    to:to,
    message:message,
    created_at: new Date(),
  });

  await newChat.save()
  res.redirect("/chats");
  }catch(err){
    next(err);
  }
});

function asyncWrap(fn){
  return function(req,res,next){
    fn(req,res,next).catch((err)=>next(err));
  }
}

// new-show route
app.get("/chats/:id",asyncWrap(async(req,res,next)=>{
  
    let {id}=req.params;
    let chat=await Chat.findById(id);
    if(!chat){
      next( new ExpressError(404,"chat cannot found"));
    }
    res.render("edit.ejs",{chat});
  
}));

//edit route
app.get("/chats/:id/edit",asyncWrap(async(req,res,next)=>{
  
     let {id} = req.params;
  let chat=await Chat.findById(id);
  res.render("edit.ejs",{chat});
  }
));

// update route

app.put("/chats/:id", asyncWrap(async (req, res) => {
  let { id } = req.params;
  let { message: newmessage } = req.body;

  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { message: newmessage },
    { runValidators: true, new: true }
  );

  console.log(updatedChat);
  res.redirect("/chats");
}));


// delete route
app.delete("/chats/:id",asyncWrap(async(req,res)=>{
  let {id} = req.params;
 let deletedChat= await Chat.findByIdAndDelete(id);
 console.log(deletedChat);
  res.redirect("/chats");
}));


// let chats = new Chat({
//   from:"Sujan",
//   to:"suman",
//   message:"What was your exam like?",
//   created_at: new Date(),
// });
// chats.save().then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });

app.use((err,req,res,next)=>{
  console.log(err.name);
  next(err);
});

// error handle middleware
app.use((err,req,res,next)=>{
  let {status=500, message="some error is occured"}=err;
  res.status(status).send(message);
});

app.get("/",(req,res)=>{
  res.send("Route is working");
})
app.listen(8000,()=>{
  console.log("Server is running on port 8000");
});