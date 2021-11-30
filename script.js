function computerPlay() {
    const randomInteger = Math.floor(Math.random() * 3);
    let cpuPlay;

    if (randomInteger == 0) {
        cpuPlay = "rock";
    } else if (randomInteger == 1) {
        cpuPlay = "paper";
    } else {
        cpuPlay = "scissors";
    }

    return cpuPlay;
}

function playRound(playerSelection = window.prompt("Choose Rock, Paper, or Scissors"), computerSelection = computerPlay()) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper";
        } else if (computerSelection === "rock") {
            return "You Win! Paper beats Rock";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors"
        } else if (computerSelection === "paper") {
            return "You Win! Scissors beats Paper!"
        }
    }

    return "You Tie! Go again!"
} 

function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        let results = playRound();
        console.log(results);

        if (results.includes("Win!")) {
            playerWins += 1;
        } else if (results.includes("Lose!")) {
            computerWins += 1;
        }

        console.log("Score is " + playerWins + ":" + computerWins);
    }

    if (playerWins > computerWins) {
        console.log("You are the Winner!");
    } else if (computerWins > playerWins) {
        console.log("The Computer is the Winner!");
    } else {
        console.log("Tie Game! No one is the Winner!")
    }
}