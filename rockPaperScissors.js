let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return "Rock";
    } else if (num == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection == computerSelection) {
        gamesPlayed++;
        return "You draw! Both selected " + playerSelection;
    }

    if (playerSelection == "Rock") {
        switch(true) {
            case (computerSelection == "Paper"):
                computerWin();
                return "You lose! Paper beats Rock";
            case (computerSelection == "Scissors"):
                playerWin();
                return "You win! Rock beats Scissors";
        }
    } else if (playerSelection == "Paper") {
        switch(true) {
            case (computerSelection == "Rock"):
                playerWin();
                return "You win! Paper beats Rock";
            case (computerSelection == "Scissors"):
                computerWin();
                return "You lose! Scissors beats Paper";
        }
    } else {
        switch(true) {
            case (computerSelection == "Rock"):
                computerWin();
                return "You lose! Rock beats Scissors";
            case (computerSelection == "Paper"):
                playerWin();
                return "You win! Scissors beats Paper";
        }
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    gamesPlayed = 0;
    console.log("Welcome to Rock Paper Scissors!")
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please choose your weapon: Rock, Paper or Scissors");
        let result = 
        console.log(playRound(playerSelection, computerPlay()));
    }
    if (playerScore == computerScore) {
        console.log("It's a draw! " + playerScore + " games to " + computerScore);
    }
    else if (playerScore > computerScore) {
        console.log("Congratulations, you win! " + playerScore + " games to " + computerScore);
    } else {
        console.log("Sorry, better luck next time! You lose, " + computerScore + " games to " + playerScore);
    }
}

function playerWin() {
    playerScore++;
    gamesPlayed++;
}

function computerWin() {
    computerScore++;
    gamesPlayed++;
}

/*const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));*/
