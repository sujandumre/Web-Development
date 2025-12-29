let max=prompt("enter a maximum number");
let random=Math.floor(Math.random() * max + 1);
let guess= prompt("enter a guess number");
console.log(random);

while(true){
  if (guess=="quit"){
    console.log("try again");
    break;
  }

  if(guess== random){
    console.log("you are right!, random number is ", random);
    break;
  } else if(guess < random){
    guess=prompt("your guess number is less than random number");
  } 
  else if(guess > random ){
    guess=prompt("your guess number is greater than random number");
  }
  
}