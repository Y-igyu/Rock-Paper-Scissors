const pickBtns = document.querySelectorAll(".pickBtn");
const playerWins = document.querySelector(".player-wins");
const compWins = document.querySelector(".comp-wins");
const winText = document.querySelector("#win-text");
const playerImg = document.querySelector("#player-img");
const compImg = document.querySelector("#comp-img")
let player;
let computer;
let result;

let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    const num = Math.floor(Math.random() * 3) + 1;
    switch(num) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    };
};

pickBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    let comp = getComputerChoice();
    changeImages(player, comp);
    let tieWinLose = playRound(player, comp);
    if (tieWinLose === "It's a Tie!") {
        winText.textContent = "You both are idiots. -_-";

    } else if (tieWinLose === "You Lose!") {
        winText.textContent = "How you lose to computer. o.o";
        compScore++;
        compWins.textContent = compScore;

    } else if (tieWinLose === "You Win!") {
        winText.textContent = "Wow you guessed right. Loser";
        playerScore++;
        playerWins.textContent = playerScore;
        
    }
}));

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper"
        || playerSelection === "paper" && computerSelection === "scissors"
        || playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose!";
    } else if (playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection === "paper" && computerSelection === "rock"
        || playerSelection === "scissors" && computerSelection === "paper") {
        return  "You Win!";
    };
};

function game() {
    for (let i = 0; i < 5; i++) {
        let computer = getComputerChoice();
        let whoWon = playRound(computer);

        console.log(whoWon);

        if (whoWon === "You Lose!") {
            compscore++;
        } else if (whoWon === "You Win!") {
            playerScore++;
        };
        
    };

    if (playerScore < compScore) {
        return console.log("Computer Wins the Game!");
    } else if (playerScore > compScore) {
        return console.log("Player Wins the Game!");
    } else {
        return console.log("It's a Tie! Play again?");
    };
};

function changeImages(playerPickImg, compPickImg) {
    if (playerPickImg === "rock") {
        playerImg.src = "./img/rock.jpg";
    } else if (playerPickImg === "paper") {
        playerImg.src = "./img/paper.jpg";
    } else if (playerPickImg === "scissors") {
        playerImg.src = "./img/scissors.jpg";
    };

    if (compPickImg === "rock") {
        compImg.src = "./img/rock.jpg";
    } else if (playerPickImg === "paper") {
        compImg.src = "./img/paper.jpg";
    } else if (compPickImg === "scissors") {
        compImg.src = "./img/scissors.jpg";
    };
};