function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    const choice = options[randomIndex];
    return choice;
}

function playRound (playerSelection, computerSelection) {
    const normalizedPlayerSelection = playerSelection.toLowerCase();
    let result;
    if (normalizedPlayerSelection == computerSelection) {
        result = "Draw! Play again.";
    }
    else if (normalizedPlayerSelection == 'rock') {
        if (computerSelection == 'paper') {
            result = 'You Lose! Paper beats Rock.';
        }
        else {
            result = 'You Win! Rock beats Scissors.';
        }
    }
    else if (normalizedPlayerSelection == 'paper') {
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
            result = 'You Lose! Rock beats Paper.';
        }
    }
    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; i++) {
        const playerSelection = prompt("Enter your selection (rock/paper/scissors)");
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        if (roundResult.includes("You Win")) {
            playerScore += 1;
            console.log(roundResult + " Score is " + playerScore + " to " + computerScore)
        }
        else if (roundResult.includes("You Lose")) {
            computerScore += 1;
            console.log(roundResult + " Score is " + playerScore + " to " + computerScore)
        }
        else {
            console.log(roundResult + " Score is " + playerScore + " to " + computerScore)
        }
    }
    if (playerScore > computerScore) {
        return "Congratulations, you win with a result of " + playerScore + " to " + computerScore + "!"
    }
    else if (playerScore < computerScore) {
        return "Unlucky, computer wins with a result of " + playerScore + " to " + computerScore + "!"
    }
    else {
        return "It's a draw. The result is " + playerScore + " to " + computerScore + "!"
    }

}

console.log(game());