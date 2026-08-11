

    const max=parseInt(prompt("Enter a no ."));
const random=Math.floor(Math.random()*max)+1;

let guess=prompt("Guess a number");

while (true) {
    if (guess=="quit") {

        console.log("User quit .");
        break;
    }

    if (parseInt(guess)=="random") {
        console.log("You are right !");
        break;
    }
    else{
        console.log("you are absolutely wrong !");
        
    }
}

