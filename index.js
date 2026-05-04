// Computer picks a random number between 0 and 2, the number corresponds to rock paper scissors, store the choice in a variable.
// Ask the user for their choice, and store the choice in a variable.
// Compare the choices
// If they made the same choice then it's a Draw!
// If the choices are Rock and Paper, then whoever choose Paper Wins.
// If the choice are between Paper and Scissors then whoever choose the Scissors Wins.

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

function getUserChoice() {
  return prompt("Choose between Rock, Paper, and Scissors.")
}

function playRound() {
  const userChoice = getUserChoice().toLocaleLowerCase();
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

function playGame(rounds) {
  for (let i = 1; i <= rounds; i++) {
    console.log(playRound());
    console.log(
      `Your Wins: ${userScore}, Computer Wins: ${computerScore}, Draws${drawCount}`,
    );
  }

  if (userScore === computerScore) {
    return "The Game was a draw!";
  } else if (userScore > computerScore) {
    return "It your overall victory🎊🎊🎊";
  } else {
    return "Computer won the game, better luck next time.";
  }
}

let userScore = 0;
let computerScore = 0;
let drawCount = 0;

const gameSize = +prompt("How many rounds do you want to play?");

console.log(playGame(gameSize));

console.log("Final Scores");
console.log(
  `Your Wins: ${userScore}, Computer Wins: ${computerScore}, Draws${drawCount}`,
);
