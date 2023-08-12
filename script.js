function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    const choice = options[randomIndex];
    return choice;
}

function playRound (playerSelection, computerSelection) {
    const normalizedPlayerSelection = playerSelection.toLowerCase();
    if (normalizedPlayerSelection == computerSelection) {
        return "Draw! Play again."
    }
    else if (normalizedPlayerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return 'You Lose! Paper beats Rock.'
        }
        else {
            return 'You Win! Rock beats Scissors.'
        }
    }
    else if (normalizedPlayerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return 'You Win! Paper beats Rock.'
        }
        else {
            return 'You Lose! Scissors beat Paper.'
        }
    }
    else {
        if (computerSelection == 'paper') {
            return 'You Win! Scissors beat Paper.'
        }
        else {
            return 'You Lose! Rock beats Paper.'
        }
    }
}

playerSelection = 'rock';
computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));