let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    // alert("Button Clicked");
h3=document.querySelector("h3");
let randomcolor=getRandomColor();
h3.innerText=randomcolor;
console.log("color updated");

let div=document.querySelector("div");
div.style.backgroundColor=randomcolor;
});
    
function getRandomColor(){
  let red=Math.floor(Math.random()*255);
  let green=Math.floor(Math.random()*255);
  let blue=Math.floor(Math.random()*255);
  let rgb=`rgb(${red},${green},${blue})`;
  return rgb;
}