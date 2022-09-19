function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else if (choice === 3) {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    switch(playerSelection + "|" + computerSelection) {
        case "rock|rock":
            return "Tie! You both chose Rock!";
        case "rock|paper":
            return "You Lose! Paper beats Rock";
        case "rock|scissors":
            return "You Win! Rock beats Scissors!";
        case "paper|rock":
            return "You Win! Paper beats Rock!";
        case "paper|paper":
            return "Tie! You both chose Rock!";
        case "paper|scissors":
            return "You Lose! Scissors beats Paper!";
        case "scissors|rock":
            return "You Lose! Rock beats Scissors!";
        case "scissors|paper":
            return "You Win! Scissors beats paper!";
        case "scissors|scissors":
            return "Tie! You both chose Rock!";
        default:
            return "Invalid User Input";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));