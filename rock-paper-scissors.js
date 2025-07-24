function getComputerChoice() {
    let computerChoice = Math.random();

    if (computerChoice <= 0.33) {
        return "rock";
    } else if (computerChoice <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock? Paper? Scissors? Choose one. Note: only the strings 'rock', 'paper', and 'scissors' will be accepted.");

    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } else {
        // since no error handling is involved (for now), this block assumes the 
        // choice is scissors 
        return "scissors";
    }
}