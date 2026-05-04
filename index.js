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
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playGame() {
  const user = prompt("Choose between Rock, Paper, and Scissors.");
  console.log(user);

  const computer = getComputerChoice();
  console.log(computer);

  if (user === computer) {
    return "It's a Draw!";
  }

  if (
    (user === "Rock" && computer === "Paper") ||
    (user === "Paper" && computer === "Scissors") ||
    (user === "Scissors" && computer === "Rock")
  ) {
    return "Computer Wins!";
  } else {
    return "You Win!";
  }
}

const result = playGame();

console.log(result);
