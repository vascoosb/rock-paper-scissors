function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    const choice = options[randomIndex];
    return choice;
}

function playRound (playerSelection, computerSelection) {
    let result;
    let scoreDisplay = document.getElementById("scoreDisplay");
    scoreDisplay.textContent = ""
    if (playerSelection == computerSelection) {
        result = "Draw! Play again.";
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            result = 'You Lose! Paper beats Rock.';
        }
        else {
            result = 'You Win! Rock beats Scissors.';
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            result = 'You Win! Paper beats Rock.';
        }
        else {
            result = 'You Lose! Scissors beat Paper.';
        }
    }
    else {
        if (computerSelection == 'paper') {
            result = 'You Win! Scissors beat Paper.'
        }
        else {
            result = 'You Lose! Rock beats Scissors.';
        }
    }
    
    if (playerScore === 5) {
        scoreDisplay.textContent = `Player wins game with a score of ${playerScore} to ${computerScore}!`
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        scoreDisplay.textContent = `Computer wins game with a score of ${computerScore} to ${playerScore}!`
        playerScore = 0;
        computerScore = 0;
    }
    else {
        const resultDisplay = document.getElementById("resultDisplay");
        resultDisplay.textContent = result;
        if (result.includes("You Win")) {
            playerScore += 1;
        }
        else if(result.includes("You Lose")) {
            computerScore +=1;
        }
        else {
            playerScore += 1;
            computerScore += 1;
        }
    }
}

let playerScore = 0;
let computerScore = 0;
let playerSelection;
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => {
    playerSelection = "rock";
    playRound(playerSelection, getComputerChoice());
});
paperButton.addEventListener("click", () => {
    playerSelection = "paper";
    playRound(playerSelection, getComputerChoice());
});
scissorsButton.addEventListener("click", () => {
    playerSelection = "scissors";
    playRound(playerSelection, getComputerChoice());
});