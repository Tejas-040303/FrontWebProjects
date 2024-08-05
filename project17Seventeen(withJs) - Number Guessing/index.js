let maxNumber = prompt("Enter max number");

let randomNumber = Math.floor(Math.random()*maxNumber) + 1;

console.log(randomNumber);

let guessNumber = prompt("Please guess a number ");

while(true){
    if(guessNumber=="quit"){
        console.log("quitting")
    }
    if(randomNumber == guessNumber){
        console.log("You Win");
        break;
    }
    else if(randomNumber>guessNumber){
        guessNumber = prompt("Please guess a bigger number ");
    }
    else{
        guessNumber = prompt("Please guess a smaller number ");
    }
}


// country=["Australia","UnitedStatesofAmerica","Germany","India"];

// function lengthCon(conut){
//     let maxLength = 999;
//     let nameCon = "";
//     for(let i=0;i<country.length;i++){
//         if(country[i].length<maxLength){
//             maxLength = country[i].length;
//             nameCon = country[i];
//         }
//     }

//     console.log(nameCon);
//     console.log(maxLength);
// }

// lengthCon(country);