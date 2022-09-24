const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => game("rock"))
paperButton.addEventListener("click", () => game("paper"))
scissorsButton.addEventListener("click", () => game("scissors"))

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

let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    switch(playerSelection + "|" + computerSelection) {
        case "rock|rock":
            return "Tie! You both chose Rock!";
        case "rock|paper":
            computerWins++;
            return "You Lose! Paper beats Rock";
        case "rock|scissors":
            playerWins++;
            return "You Win! Rock beats Scissors!";
        case "paper|rock":
            playerWins++;
            return "You Win! Paper beats Rock!";
        case "paper|paper":
            return "Tie! You both chose Paper!";
        case "paper|scissors":
            computerWins++;
            return "You Lose! Scissors beats Paper!";
        case "scissors|rock":
            computerWins++;
            return "You Lose! Rock beats Scissors!";
        case "scissors|paper":
            playerWins++;
            return "You Win! Scissors beats Paper!";
        case "scissors|scissors":
            return "Tie! You both chose Scissors!";
        default:
            return "Invalid User Input";
    }
}

function game(playerSelection) {
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Player Wins: ${playerWins} | Computer Wins: ${computerWins}`)

    playerWins = 0;
    computerWins = 0;
}
