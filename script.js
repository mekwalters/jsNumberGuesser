let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget =() => {
  return Math.floor(Math.random()*10);
}

function compareGuesses (humanGuess, computerGuess, targetGuess) {
  const humanDifference = Math.abs(targetGuess-humanGuess);
  const computerDifference = Math.abs(targetGuess -computerGuess);
  if (humanDifference <= computerDifference) {
    return true;
  } else {
    return false;
  }
} 
// let winner = compareGuesses (humanGuess, computerGuess, targetGuess); //shouldn't need because game.js assigns in line 30

function updateScore(winner) {
  if (winner ==='human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
} 

const advanceRound = () => 
  currentRoundNumber++;
