// let arr=[2,4,6,5,7,8,6,45,45,34,233];
// let num=7;
// function getElements(arr,num)
// {
//   for(let i=0; i<arr.length; i++){
//     if (arr[i]> num){
//       console.log(arr[i]);
//     }
//   }
// }
// getElements(arr,num);

// let str="abcdabcdefgggh";
// function getUnique(str){
//   let ans="";
//   for(let i=0; i<str.length; i++){
//     let currChar = str[i];
//     if (ans.indexOf(currChar) == -1){
//   ans += currChar;
//     }
//   }
//   return ans;
// }
// console.log(getUnique(str));



// let arr=["Austriala"," Nepal", "United States of America", "India"];
// function longestName(arr){
//   let ansIdx=0;
//   for (let i=0; i<arr.length; i++){
//     let ansLen = arr[ansIdx].length;
//     let currLen=arr[i].length;
//     if(currLen>ansLen){
//       ansIdx=i;
//     }
//   }
//   return arr[ansIdx];
// }
// console.log(longestName(arr));


// let str="apnacollege";
// function vowel(str){
//   let count=0;
//   for(let i=0; i<str.length; i++){
//     if(
//       str.charAt(i)=="a" ||
//       str.charAt(i)=="e" ||
//       str.charAt(i)=="i" ||
//       str.charAt(i)=="o" ||
//       str.charAt(i)=="u" 
//     )
//     {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(vowel(str));

let start=100;
let end=200;
function generaterandom(start,end){
  let diff=end-start;
  return Math.floor(Math.random()* diff +start);
}
console.log(generaterandom(start,end))