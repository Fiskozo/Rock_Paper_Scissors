// Make function to get computers choice

function getComputerChoice(min, max) {
    let arr = ["rock", "paper", "scissor"];
    return(arr[(Math.floor(Math.random() * arr.length))]);
    }; 
// Make function to get players choice using prompt()
function getPlayerChoice() {
  let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
  return playerChoice;
}
/* Make function to play one round, using 2 parameters
(remember to return results) */
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
if 
  (playerSelection === computerSelection){
    return String("Tie")
}else if
  ((playerSelection === "rock") && (computerSelection === "scissor")) {
    playerScore++;
    return String("you win1");
}else if 
  ((playerSelection === "scissor") && (computerSelection === "paper")){
    playerScore++;
    return String("you win2");
}else if 
  ((playerSelection === "paper") && (computerSelection === "rock")){
    playerScore++;
    return String("you win3");
}else {
  computerScore++;
  return String("LOSER")
}
} 
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
//Make function to play 5 rounds and keep score