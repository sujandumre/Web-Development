const express=require('express');
const app=express();
const port=8080;

// console.dir(app);
app.use('/',(req,res)=>{
  res.send('Hello World');
});
app.use('/:username',(req,res)=>{
  console.log(req.params);
  res.send('I am not a robot');
});
app.listen(port,()=>{
  console.log(`Example app listening on port ${port}`);
});
