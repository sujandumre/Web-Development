const express=require('express');
const app=express();
const ExpressError=require('./ExpressError');

// app.use((req,res,next)=>{
//   console.log("Hi,I am a middleware");
//   // res.send("Middleware finished");
//   next();
// });

// app.use((req,res,next)=>{
//   console.log("I am only for random");
//   next();
// })

const checkToken=app.use("/api",(req,res,next)=>{
let {token}=req.query;
if(token==="giveaccess"){
  next();
}
throw new ExpressError(401,"Access denied!");
});

app.get("/api",checkToken,(req,res)=>{
  res.send("data");
})

app.get("/random",(req,res)=>{
  res.send("This is a random page")
})

app.get("/err",(req,res)=>{
  abcd=abcd;
});

app.get("/admin",(req,res)=>{
  throw new ExpressError(403,"Access Forbidden");
});

app.use((err,req,res,next)=>{
 let {status=500,message="This is the error"}=err;
 res.status(status).send(message);
});



// app.use((req,res)=>{
//   res.status(404).send("page not found")
// })


app.get("/",(req,res)=>{
  res.send("Hi, i am root");
});

app.listen(8000,()=>{
  console.log("server is running 8000")
});