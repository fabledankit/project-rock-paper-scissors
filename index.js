const setupCont = document.querySelector("#setup");
const rounds = document.querySelector("#rounds");
const start = document.querySelector("#start");

const resultDisplay = document.querySelector("#result");
const endGameMessage = document.createElement("h3");
const scoreCard = document.createElement("p");
const runningScore = document.createElement("p");

const choices = document.querySelector("#choices");

let userScore = 0;
let computerScore = 0;
let drawCount = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  console.log(randomNumber);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(userChoice) {
  userChoice = userChoice.toLocaleLowerCase();
  console.log(userChoice);

  const computerChoice = getComputerChoice().toLocaleLowerCase();
  console.log(computerChoice);

  if (userChoice === computerChoice) {
    drawCount++;
    return "It's a Draw!";
  }

  if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    return "Computer Wins!";
  } else {
    userScore++;
    return "You Win!";
  }
}

let currentRound = 1;
let totalRounds = 0;

start.addEventListener("click", () => {
  totalRounds = parseInt(rounds.value);

  setupCont.style.display = "none";
})

choices.addEventListener("click", (event) => {
  if (currentRound > totalRounds) {
    runningScore.textContent = "Game Over! Refresh to play again.";
    return;
  }

  if (event.target.tagName === "BUTTON") {
    playRound(event.target.textContent);

    runningScore.textContent = `Round ${currentRound}/${totalRounds} -> Your Wins: ${userScore}, Computer Wins: ${computerScore}, Draws: ${drawCount}`;
    resultDisplay.appendChild(runningScore);

    currentRound++;

    if (currentRound > totalRounds) {
      declareFinalWinner();
    }
  }
});

function declareFinalWinner() {
  scoreCard.textContent = `Your Wins: ${userScore}, Computer Wins: ${computerScore}, Draws: ${drawCount}`;
  
  if (userScore === computerScore) {
    endGameMessage.textContent = "The Game was a draw!";
  } else if (userScore > computerScore) {
    endGameMessage.textContent = "It your overall victory🎊🎊🎊";
  } else {
    endGameMessage.textContent =
      "Computer won the game, better luck next time.";
  }

  resultDisplay.append(endGameMessage, scoreCard);
}
