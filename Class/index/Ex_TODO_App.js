let todo=[];

let req =prompt("Please enter your request")
while(true){
    if(req=="quit"){
        console.log("Quiting app");
        break;
    }

    if(req=="list"){
        console.log("_______");
        for(let i=0;i<todo.length;i++){
            console.log(todo[i]);
        }
        console.log("________");
    }
    else if(req=="add"){
        let task=prompt("Please enter what you want to add");
        todo.push(task);
        console.log("task added");
    }else if(req=="delete"){
        let idx=prompt("Please enter the index");
        todo.splice(idx,1);
        console.log("task deleted");
    }else{
        console.log("wrong request");
    }
    req=prompt("Please enter your request")
}