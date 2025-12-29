let todo = [];

let req = prompt("enter your request (add, list, delete, quit):");
while(true){

  if(req == "quit"){
    console.log("quitting app");
    break;
  }
  else if(req == "list"){
    console.log("--------------");
    for(let i=0;i<todo.length;i++){
      console.log(task);
    }
    console.log("--------------");
  }
  else if(req == "add"){
    console.log("--------------");
    let readd = prompt("enter a task to add");
    todo.push(readd);
    console.log("task added");
    req = prompt("enter your request (add, list, delete, quit):");
  
  }
  else if(req == "delete"){
    console.log("--------------");
    let reqdele = prompt("enter a task to delete");
    todo.splice(reqdele,1);
    if(reqdele > -1){
      
      console.log("deleted the task");
    } else {
      console.log("task not found");
    }
  }
  else{
    console.log("unknown command");
  }
}
