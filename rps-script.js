computerScore = 0;
humanScore = 0;
victorMsg = "";

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

function rockSelect(){
    playGame(getComputerChoice(), "Rock");
}
function paperSelect(){
    playGame(getComputerChoice(), "Paper");
}
function scissorsSelect(){
    playGame(getComputerChoice(), "Scissors");
}
function playGame(computerChoice, humanChoice) {
    if (humanChoice == computerChoice){
        victorMsg = "It's a draw.";
    }
    else if (humanChoice == "Paper" & computerChoice == "Rock" ) {
        humanScore += 1;
        victorMsg = "Player wins!";
    }
    else if (humanChoice == "Scissors" & computerChoice == "Paper" ){
        humanScore += 1;
        victorMsg = "Player wins!";
    }
    else if (humanChoice == "Rock" & computerChoice == "Scissors" ) {
        humanScore += 1;
        victorMsg = "Player wins!";
    }
    else {
        computerScore +=1;
        victorMsg = "Computer wins!";
    }
}
const gameWinner = document.querySelector("#gamewinner");
function gameWinnerMsg(){
    
    if (humanScore == 5 && computerScore <5) {
        gameWinner.textContent = "Player wins the game!";
    }
    else if (computerScore == 5 && humanScore <5){
        gameWinner.textContent = "Computer wins the game!";
    }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const scoreLine = document.querySelector("#scoreline");
const victorMessage = document.querySelector("#roundwinner");

const newScorelineMsg = "The scoreline is: ";



rockButton.addEventListener("click", () => {
    rockSelect();
    scoreLine.textContent = newScorelineMsg + "Player " +  humanScore + " - " + computerScore + " Computer";
    victorMessage.textContent = victorMsg;
    gameWinnerMsg();
})
paperButton.addEventListener("click", () => {
    paperSelect();
    scoreLine.textContent = newScorelineMsg + "Player " +  humanScore + " - " + computerScore + " Computer";
    victorMessage.textContent = victorMsg;
    gameWinnerMsg();
})
scissorsButton.addEventListener("click", () => {
    scissorsSelect();
    scoreLine.textContent = newScorelineMsg + "Player " +  humanScore + " - " + computerScore + " Computer";
    victorMessage.textContent = victorMsg;
    gameWinnerMsg();
})

//for (i = 0; i<5; i++){
//compChoice = getComputerChoice();
//playerChoice = getHumanChoice(); 
//console.log("Computer chose " + compChoice +  "\nPlayer chose " + playerChoice)
//playGame(compChoice, playerChoice);
//console.log("Player score:" + humanScore + "\nComputer score:" + computerScore)

