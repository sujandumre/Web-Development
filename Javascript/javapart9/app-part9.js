// question 1
let button=document.createElement("button");
let input=document.createElement("input");
button.innerText="Click Me";
document.querySelector('body').append(input);
document.querySelector('body').append(button);

// question 2
button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

// question 3
button.querySelector("#btn"); 
button.style.color="white";
button.style.backgroundColor="blue";

// question 4
let heading=document.createElement("h1");
heading.innerHTML="<u>DOM Practice</u>";
document.querySelector('body').append(heading);
// heading.classList.add("heading");

// question 5
let para=document.createElement("p");
para.innerHTML="Apna College <b>Delta</b> Practice";
document.querySelector('body').append(para);
