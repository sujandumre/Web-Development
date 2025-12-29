//arraymethods

// let arr=[1,2,3,4,5];

// let print =function(el)
// {
//   console.log(el);
// };
// arr.forEach(print);

// for map method

// let num=[1,2,3,4,5];
// let double=num.map((el)=>{
//   return el * el;
// });

// for filter method

// let num=[1,2,3,4,5,6,7,8,9];
// let odd=num.filter((el)=>{
//   return el%2!=0;
// });

// for every method
// let num=[2,4,6,8,10,13];
// let ans=num.every((el)=>{
//   return el%2==0;
// });

// for some method
// let num=[3,1];
// let ans=num.some((el)=>{
//   return el%2==0;
// });

// for reduce method
// let num=[1,2,3,4,5];
// let sum=num.reduce((acc,el)=>{
//   return acc+el;
// });

// maximum numbe rin array
// let num=[1,2,3,4,5];
// let max=-1;
// for(let i=0; i<num.length; i++){
//   if(max<num[i]){
//     max=num[i];
//   }
// }
// console.log(max);

// check if all number are divisible by 10
// let num=[10,20,30,40,50,55];
// let ans=num.every((el)=>{
//   return el%10==0;
// });

// create a function to find the minimun number in array
// let num=[3,5,7,9,4,6,8,1,2];
// let min=num.reduce((acc,el)=>{
//   if (acc<el){
//     return acc;
//   }
//   else{
//     return el;
//   }
// });
// console.log(min);

// function sum(a,b=3){
//   return a+b;
// }
// sum(2);


// rest
// function sum(...args){
//   for(let i=0; i<args.length; i++){
//     console.log("You gave us",args[i]);
//   }}
//   function min(){
//     console.log(arguments);
//     console.log(arguments.length);
//   }

// destructing
// let arr=[1,2,3,4,5];
// let [a,b,...c]=arr;
// console.log(a,b,...c);

// destructing in object
// let student={
//   name:"Ritik",
//   age:21,
//   college:"ABC",
//   username:"ritik123",
//   password:"ritik@123"
// };
// let {username:user, password:pass}=student;



// assignment start from here of js part 8
// square and sum the array elements
// let arr=[1,2,3,4,5];
// let square=arr.map((el)=>el*el);
//  console.log(square);
//  let sum=square.reduce((acc,el)=>acc+el);
//   console.log(sum);
//   let avg=sum/square.length;
//   console.log(avg);


// create a array the equal to the original after adding 5 to each element
// let arr=[1,3,4,2,5];
// let newArr=arr.map((el)=>el+5);
// console.log(newArr);

// create a array whose are in uppercase
// let arr=["sujan","suman","choba"];
// let newArr=arr.map((el)=>el.toUpperCase());
// console.log(newArr);


// let doubleAndreturnargs=(arr,...args)=>[...arr,...args.map((el)=>el*2)];
// console.log(doubleAndreturnargs([1,2,3],4,5));



// let arr=[1,2,3,4];
// let newArr=arr.map((el)=>el+el);
// console.log(newArr);
// let all=[...arr,...newArr];
// console.log(all);

let mergeObjects=(obj1,obj2)=>({...obj1,...obj2});
mergeObjects({name:"sujan"},{age:21});
