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
    if (humanChoice === null) {
        return "";
    }
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } else if (humanChoice === "scissors") {
        return "scissors";
    } else {
        // if the input is invalid, just make the computer win
        return "";
    }
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        // i don't like the nested switch statements. ideally, the computerChoice switches
        // would be its own separate function
        case "rock":
            switch (computerChoice) {
                case "rock":
                    console.log("You and the computer both chose rock! No one wins!");
                    console.log(`Your score: ${humanScore}. The computer's score: ${computerScore}.`);
                    console.log("");
                    break;
                case "paper":
                    console.log("The computer chose paper! The computer wins!");
                    computerScore++;
                    console.log(`Your score: ${humanScore}. The computer's score: ${computerScore}.`);
                    console.log("");
                    break;
                case "scissors":
                    console.log("The computer chose scissors! You win!");
                    humanScore++;
                    console.log(`Your score: ${humanScore}. The computer's score: ${computerScore}.`);
                    console.log("");
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "paper":
                    console.log("You and the computer both chose paper! No one wins!");
                    console.log(`Your score: ${humanScore}. The computer's score: ${computerScore}.`);
                    console.log("");
                    break;
                case "scissors":
                    console.log("The computer chose scissors! The computer wins!");
                    computerScore++;
                    console.log(`Your score: ${humanScore}. The computer's score: ${computerScore}.`);
                    console.log("");
                    break;
                case "rock":
                    console.log("The computer chose rock! You win!");
                    humanScore++;
                    console.log(`Your score: ${humanScore}. The computer's score: ${computerScore}.`);
                    console.log("");
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "scissors":
                    console.log("You and the computer both chose scissors! No one wins!");
                    console.log(`Your score: ${humanScore}. The computer's score: ${computerScore}.`);
                    console.log("");
                    break;
                case "rock":
                    console.log("The computer chose rock! The computer wins!");
                    computerScore++;
                    console.log(`Your score: ${humanScore}. The computer's score: ${computerScore}.`);
                    console.log("");
                    break;
                case "paper":
                    console.log("The computer chose paper! You win!");
                    humanScore++;
                    console.log(`Your score: ${humanScore}. The computer's score: ${computerScore}.`);
                    console.log("");
                    break;
            }
            break;
        default:
                console.log("Your choice was invalid! Therefore, the computer wins!");
                computerScore++;
                console.log(`Your score: ${humanScore}. The computer's score: ${computerScore}.`);
                console.log("");
            break;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let number_of_games = 0;

    while (number_of_games <= 5) {
        number_of_games++;
        const getComputerSelection = getComputerChoice();
        const getHumanSelection = getHumanChoice();
        playRound(getHumanSelection, getComputerSelection);
    }

    if (computerScore === humanScore) {
        console.log("After 5 games, you and the computer are tied!");
    } else if (computerScore > humanScore) {
        console.log("After 5 games, the computer won more games than you!");
    } else {
        console.log("After 5 games, you won more games than the computer!");
    }
}

playGame();
