computerScore = 0;
humanScore = 0;

function getComputerChoice() {
    let picker_number = Math.random();
    if (picker_number <= 0.33) {
        return "Rock";
    } 
    else if (picker_number <= 0.66) {
        return "Paper";
    }
    else if (picker_number <= 1) {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanInput = prompt("Enter R for Rock, P for Paper or S for scissors.").toUpperCase();
    let humanChoice = "";
    if (humanInput == "R") {
        return humanChoice = "Rock" ;
    }
    else if (humanInput == "P") {
        return humanChoice = "Paper";
    }
    else if (humanInput == "S") {
        return humanChoice = "Scissors";
    }
   
}

function playGame(computerChoice, humanChoice) {
    if (humanChoice == computerChoice){
        console.log("It's a draw.");
    }
    else if (humanChoice == "Paper\" & computerChoice == "Rock" ) {
        humanScore += 1;
        console.log("Player wins!");
    }
    else if (humanChoice == "Scissors" & computerChoice == "Paper" ){
        humanScore += 1;
        console.log("Player wins!");
    }
    else if (humanChoice == "Rock" & computerChoice == "Scissors" ) {
        humanScore += 1;
        console.log("Player wins!");
    }
    else {
        computerScore +=1;
        console.log("Computer wins!");
    }
}

for (i = 0; i<5; i++){
compChoice = getComputerChoice();
playerChoice = getHumanChoice(); 
console.log("Computer chose " + compChoice +  "\nPlayer chose " + playerChoice)
playGame(compChoice, playerChoice);
console.log("Player score:" + humanScore + "\nComputer score:" + computerScore)
}
