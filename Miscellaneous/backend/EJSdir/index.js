const express=require("express");
const path=require("path");
const app=express();
const port=3000;

app.use(express.static(path.join(__dirname,"public/js")));
app.use(express.static(path.join(__dirname,"public/css")));
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
  res.render("home.ejs");
});

app.get("/ig/:username", (req,res)=>{
  const instaData=require("./views/data.json");
  
  let {username}=req.params;
  // console.log(instaData);
  let data=instaData[username];
  if(data){

    res.render("instagram.ejs",{data});
  }else{
    res.render("error.ejs",{data});
  }
});

app.get("/hello",(req,res)=>{
  res.send("hello guys i am learning node js");
});

// app.get("/rolleddice",(req,res)=>{
//   res.send("hello");
// });

app.get("/rolleddice",(req,res)=>{
  let diceval=Math.floor(Math.random()*6)+1;
  res.render("rolleddice.ejs",{diceval});
});

app.listen(port,()=>{
console.log(`port is listening at ${port}`);
});