
// Gets the computer's choice.
// Either rock, paper, or scissors
function getComputerChoice() {
    let compChoice;
    let num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) {
        compChoice = "rock";
    } else if (num == 2) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    };
    return compChoice;
};

// plays a round of rock paper scissors
function playRound(computerSelection) {
    let playerSelection = prompt("Choose your hand. Rock, Paper, or Scissors!").toLowerCase(); // Makes whatever variation player puts to lower case (ex. rocK, ROCK, RocK to 'rock')

    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return  "You Win!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return  "You Win!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return  "You Win!"
    } else if (playerSelection === computerSelection) {
        return "It's a Tie!"
    };
};

function game() {
    let playerScore = 0;
    let compScore = 0;

    for (let i = 0; i < 5; i++) {
        let computer = getComputerChoice();
        let whoWon = playRound(computer);

        console.log(whoWon);

        if (whoWon === "You Lose!") {
            compScore++;
        } else if (whoWon === "You Win!") {
            playerScore++;
        };
        
    };

    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + compScore);

    if (playerScore < compScore) {
        return console.log("Computer Wins the Game!");
    } else if (playerScore > compScore) {
        return console.log("Player Wins the Game!");
    } else {
        return console.log("It's a Tie! Play again?");
    };
    
};

game();
