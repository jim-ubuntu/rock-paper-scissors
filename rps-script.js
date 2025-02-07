console.log("Hello world. :-]")

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

console.log(getComputerChoice()); 
