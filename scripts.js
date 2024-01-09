// Make function to get computers choice

function getComputerChoice(min, max) {
    let arr = ["rock", "paper", "scissor"];
    let result = (arr[(Math.floor(Math.random() * arr.length))]);
    return result;  
  }; 

/* Make function to play one round, using 2 parameters
(remember to return results) */

let playerScore = 0;

let computerScore = 0;

function playRound(playerChoice, computerChoice) {
  let playerSelection = playerChoice //prompt("Rock, Paper or Scissors?").toLowerCase();
  
  let computerSelection = getComputerChoice();
  
  if 
  (playerSelection === computerSelection){
    return String("Tie")
  }else if
    ((playerSelection === "rock") && (computerSelection === "scissor")) {
      playerScore++;
      const span = document.createElement('span');
      span.classList.add('span');
      span.textContent = "Rock beats Scissor you win!"
      score.appendChild(span);
      //return String("Rock beats Scissor you win!");
  }else if 
    ((playerSelection === "scissor") && (computerSelection === "paper")){
      playerScore++;
      return String("Scissor beats Paper you win!");
  }else if 
    ((playerSelection === "paper") && (computerSelection === "rock")){
      playerScore++;
      return String("Paper beats Rock you win!");
  }else {
    computerScore++;
    return String("You Lose :(")
  }
}

/* //Make function to play 5 rounds and keep score
function game() {
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());

  if (playerScore > computerScore) {
    return String("You Win the game!!!")
  }else if (playerScore < computerScore) {
    return String("You Lost the game :(")
  }else {
    return String("Its a Draw")
  }
};
console.log(game()); */

const rock = document.querySelector('#rock');
rock.classList.add('rock');
const paper = document.querySelector('#paper');
paper.classList.add('paper');
const scissors = document.querySelector('#scissors');
scissors.classList.add('scissors');
const score = document.querySelector('#score');
score.classList.add('score');

document.getElementById('rock').onclick = function() {
    console.log(playRound("rock", getComputerChoice));  
};
document.getElementById('paper').onclick = function() {
  console.log(playRound("paper", getComputerChoice));    
};
document.getElementById('scissors').onclick = function() {
  console.log(playRound("scissor", getComputerChoice));    
};

