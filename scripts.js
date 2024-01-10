
function getComputerChoice(min, max) {
    let arr = ["rock", "paper", "scissor"];
    let result = (arr[(Math.floor(Math.random() * arr.length))]);
    return result;  
  }; 

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
  let playerSelection = playerChoice  
  let computerSelection = getComputerChoice();

  if 
  (playerSelection === computerSelection){
    winner.textContent = "Tie"
  }else if
    ((playerSelection === "rock") && (computerSelection === "scissor")) {
      playerScore++;
      winner.textContent = "Rock beats Scissor you win!"
  }else if 
    ((playerSelection === "scissor") && (computerSelection === "paper")){
      playerScore++;
      winner.textContent = "Scissor beats Paper you win!"
  }else if 
    ((playerSelection === "paper") && (computerSelection === "rock")){
      playerScore++;
      winner.textContent = "Paper beats Rock you win!"
  }else {
    computerScore++;
    winner.textContent = "You Lose :("
  }
  currentScore.textContent = "you:"+playerScore+" AI:"+computerScore; 
}

const rock = document.querySelector('#rock');
rock.classList.add('rock');
const paper = document.querySelector('#paper');
paper.classList.add('paper');
const scissors = document.querySelector('#scissors');
scissors.classList.add('scissors');
const score = document.querySelector('#score');
score.classList.add('score');
const winner = document.querySelector('#winner');
winner.classList.add('winner');
const currentScore = document.querySelector('#currentScore');
currentScore.classList.add('currentScore');

document.getElementById('rock').onclick = function() {
    console.log(playRound("rock", getComputerChoice));  
};
document.getElementById('paper').onclick = function() {
  console.log(playRound("paper", getComputerChoice));    
};
document.getElementById('scissors').onclick = function() {
  console.log(playRound("scissor", getComputerChoice));    
};


