// function one(){
//   return 1;
// }
// function two(){
//   return one() +one();
// }

// function three(){
//   let ans= two() + one();
//   console.log(ans);
// }
// three();

// let h1=document.querySelector("h1");
// function changeColor(color,delay,nextChangeColor){
//   setTimeout(()=>{
//     h1.style.color=color;
//     if(nextChangeColor) nextChangeColor()
//   },delay);
// }

// changeColor("red",1000,()=>{
//   changeColor("green",1000,()=>{
//     changeColor("blue", 1000, ()=>{
//       changeColor("yellow",1000,()=>{});
//     });
//   });
// });

// function saveToDB(data, success, failure){
//   let internetSpeed=Math.floor(Math.random()*10)+1;
//   if(internetSpeed > 4){
//     success();
//   }else{
//     failure();
//   }
// }
// saveToDB("dumre dai",()=>{
//   console.log("success callback data was saved");
//   saveToDB("hello world",()=>{
//     console.log("second data was also saved");
//   },()=>{
//     console.log("second data was not saved");
//   }
// );
// },()=>{
//   console.log("failure callback data was not saved");
// });

let h1=document.querySelector("h1");
function changeColor(color,delay){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let randomNum=Math.floor(Math.random()*10)+1;
      if(randomNum>5){
        return reject("some error occured");
      }
      h1.style.color=color;
    console.log(`color changed to ${color}`);
    resolve("colcor changed");
  
  },delay);
  });
}
async function demo(){
  try{
    await changeColor("red",1000);
  await changeColor("green",1000);
  await changeColor("blue",1000);
  await changeColor("yellow",1000);
  }catch(err){
    console.log("error caught",err);
    console.log(err);
  }
  let a =5;
  console.log(a);
  console.log("new number is",a+3);
}



// async function greet(){
//   throw "some random error";
// return "hello world";
// }

// greet()
// .then((result)=>{
//   console.log("promise resolved");
// console.log("result was",result);
// })
// .catch((err)=>{
//   console.log("promise rejected",err);
// })

// let demo= async ()=>{
//   return 5;
// };

// function getNum(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      let num=Math.floor(Math.random()*10)+1;
//      console.log(num);
//      resolve();
//     },1000);
//   });
// }

// async function demo(){
//   await getNum();
//  await getNum();
//   await getNum();
//   await getNum();
//   await getNum();
// }


// json data to js object

let jsonRes=`{"fact":"A cat's whiskers are thought to be a kind of radar, which helps a cat gauge the space it intends to walk through.","length":113}`;
let validRes=JSON.parse(jsonRes);
console.log(validRes.fact);

// json 
let student={
  name:"sujan",
  marks:90,
  
}