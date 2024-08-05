let todo = [];

let req = prompt("please enter your choice");

while(true){
    if(req.toLowerCase()==="quit"){
        console.log("qutting");
        break;
    }

    if(req == "list"){
        for(let i=0;i<todo.length;i++){
            console.log(i, " ", todo[i]);
        }
    }
    else if(req.toLowerCase() == "add"){
        let add = prompt("please enter your task to add");
        todo.push(add);
    }
    else if(req.toLowerCase() == "remove"){
        let idx = prompt("please enter your task index to be deleted");
        todo.splice(idx,1);
    }
    else{
        console.log("invalide")
    }

    req = prompt("please enter your choice");

}