const mongoose = require('mongoose');
main()
.then(()=> 
  {
    console.log("Connected to MongoDB successfully");
  })
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});
const User = mongoose.model("User", userSchema);

 User.findByIdAndDelete("691996f76ad5a1ae458dbd9e").then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
});




// User.findByIdAndUpdate({id:"691996f76ad5a1ae458dbd9e"}, {age:40}, { new: true })
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });

// User.findById("6919921cd48628f61cf98c24").then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });

// User.insertMany([
//   {name:"Sujan dumre", age:22, email:"sujandumre@gmail.com"},
//   {name:"Suman dumre", age:20, email:"dumresuman@gmail.com"},
//   {name:"yamkala", age:25, email:"dumreyamkala@gmail.com"},
// ]).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });

// const user1 = new User({
//   name: "Sujan Dumre",
//   age: 22,
//   email: "dumresujan@gmail.com"});
  
  // const user2 = new User({
  // name: "Suman Dumre",
  // age: 20,
  // email: "dumresuman@gmail.com"});
  // user2.save()
  // .then((res)=>{console.log(res);
  // })
  //   .catch((err)=>{console.log(err);
  // });