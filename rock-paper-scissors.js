function getComputerChoice() {
  const output = Math.ceil(Math.random() * 3);
  if (output === 1) return "Rock";
  if (output === 2) return "Paper";
  if (output === 3) return "Scissors";
}
function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  computerSelection = getComputerChoice();
  let playerStatus = "";
  if (playerSelection === computerSelection) return `It's a draw, play again.`;
  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    playerStatus = "Lose";
    return `You ${playerStatus}! ${computerSelection} beats ${playerSelection}`;
  } else {
    playerStatus = "Win";
    return `You ${playerStatus}! ${playerSelection} beats ${computerSelection}`;
  }
}
function game() {
  let playerScore = 0 
  let computerScore = 0
    for (let i = 0; i < 5; i++) {
    console.log(playRound());
    if(playerStatus==="Lose")playerScore ++
    else computerScore++
  }
  if(playerScore>computerScore) return "You Win!"
  else return "You Lose!"
}
