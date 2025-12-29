// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");

// div.addEventListener("click",function(){
//   console.log("div was clicked");
// });
// ul.addEventListener("click",function(event){
//   console.log("ul was clicked");
//   event.stopPropagation();
// });

// for (li of lis){
//   li.addEventListener("click",function(event){
//     console.log("li was clicked");
//     event.stopPropagation();
//   });
// }

let btn =document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");
btn.addEventListener("click",function(){
  let item=document.createElement("li");
  item.innerText=input.value;

  let delbtn=document.createElement("button");
  delbtn.innerText="delete";
  delbtn.classList.add("delete");
  item.appendChild(delbtn);
  ul.appendChild(item);
  input.value="";
});
ul.addEventListener("click",function(event){
  if(event.target.nodeName==="BUTTON"){
    let listItem=event.target.parentElement;
    listItem.remove();
  }
  console.log(event.target);
  console.log("button was clicked");
});

// let delbtn=document.querySelectorAll(".delete");
// for (btn of delbtn){
//   btn.addEventListener("click",function(event){
//     console.log("delete button was clicked");
//     event.stopPropagation();
// let para=this.parentElement;
// console.log(para);
// para.remove();
//   });
// }


    