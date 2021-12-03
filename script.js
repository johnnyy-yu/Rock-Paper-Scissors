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

function playRound(playerSelection, computerSelection = computerPlay()) {
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

function game(playerSelection) {
    let results = playRound(playerSelection);
        div.textContent = results;
        container.appendChild(div);

    if (results.includes("Win!")) {
        playerWins += 1;
    } else if (results.includes("Lose!")) {
        computerWins += 1;
    }

    score = "Score is " + playerWins + ":" + computerWins;
    div2.textContent = score;
    container.appendChild(div2);

    if (playerWins == 5 || computerWins == 5) {

        if (playerWins > computerWins) {
            div.textContent = "You are the Winner!";
        } else {
            div.textContent = "The Computer is the Winner!";
        }

        container.appendChild(div);
        container.appendChild(div2);
        playerWins = 0;
        computerWins = 0;
    }
}

let playerWins = 0;
let computerWins = 0;

const container = document.querySelector("#results");
const div = document.createElement("div");
const div2 = document.createElement("div");

const rockButton = document.querySelector('.rock');

rockButton.addEventListener("click", () => {
    game("rock");
})

const paperButton = document.querySelector(".paper");

paperButton.addEventListener("click", () => {
    game("paper")
})

const scissorsButton = document.querySelector(".scissors");

scissorsButton.addEventListener("click", () => {
    game("scissors")
})

