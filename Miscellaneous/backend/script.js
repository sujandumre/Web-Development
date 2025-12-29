// let n=10;
// for (let i=1;i<=n;i++){
// console.log(i);
// console.log("backend starting");
// }

// console.log(process.argv);

// const someValue=require("./math");
// console.log(someValue);


import {
  sum,
  mul,
  sub,
  div,
} from "./math.js";

console.log(sum(10, 20));
console.log(mul(10, 20));
console.log(sub(10, 20));
console.log(div(10, 20));