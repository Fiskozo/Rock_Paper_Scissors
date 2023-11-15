// Make function to get computers choice
let count = 0
let arr = ["rock", "paper", "scissor"];
function getComputerChoice(min, max) {
    return(arr[(Math.floor(Math.random() * arr.length))]);
    }; 

// Make function to get players choice using prompt()
 
let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
console.log(playerChoice);

// Declare Rock, Paper, Scissors and what beats what
/* Make function to play one round, using 2 parameters
(remember to return results) */

function playRound(playerSelection, computerSelection) {
console.log(computerSelection)

if 
  (playerSelection === computerSelection){
    return String("Tie")
}else if
  ((playerSelection === "rock") && (computerSelection === "scissor")) {
    count++;
    return String("you win1");
}else if 
  ((playerSelection === "scissor") && (computerSelection === "paper")){
    count++;
    return String("you win2");
}else if 
  ((playerSelection === "paper") && (computerSelection === "rock")){
    count++;
    return String("you win3");
}else {
  return String("LOSER")
}
} 


const playerSelection = playerChoice;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(count)

//Make function to play 5 rounds and keep score

