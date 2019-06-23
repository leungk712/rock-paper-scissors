let userScore = 0;
let compScore = 0;

const userScoreSpan = document.getElementById('user-score');
const compScoreSpan = document.getElementById('comp-score');
const scoreboard = document.querySelector('.scoreboard');
const result = document.querySelector('.result > p');
const rockBtn = document.querySelector('#r');
const paperBtn = document.querySelector('#p');
const scissorBtn = document.querySelector('#s');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter){
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice){
  const subUserWord = "user".fontsize(3).sup();
  const subCompWord = "comp".fontsize(3).sup();
  const userChoiceDiv = document.getElementById(userChoice);
  userScore++;
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = compScore;
  result.innerHTML = `${convertToWord(userChoice)}${subUserWord} beats ${convertToWord(computerChoice)}${subCompWord}. You win!`;
  userChoiceDiv.classList.add('green-circle');
  setTimeout(() => userChoiceDiv.classList.remove('green-circle'), 300);
}

function lose(userChoice, computerChoice){
  const subUserWord = "user".fontsize(3).sup();
  const subCompWord = "comp".fontsize(3).sup();
  const userChoiceDiv = document.getElementById(userChoice);
  compScore++;
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = compScore;
  result.innerHTML = `${convertToWord(userChoice)}${subUserWord} loses to ${convertToWord(computerChoice)}${subCompWord}. You lost!`;
  userChoiceDiv.classList.add('red-circle');
  setTimeout(() => userChoiceDiv.classList.remove('red-circle'), 300);
}

function draw(userChoice, computerChoice){
  const subUserWord = "user".fontsize(3).sup();
  const subCompWord = "comp".fontsize(3).sup();
  const userChoiceDiv = document.getElementById(userChoice);
  result.innerHTML = `${convertToWord(userChoice)}${subUserWord} equals ${convertToWord(computerChoice)}${subCompWord}. It is a draw!`;
  userChoiceDiv.classList.add('gray-circle');
  setTimeout(() => userChoiceDiv.classList.remove('gray-circle'), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  
  switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "pp":
    case "rr":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function restartGame(){
  const restartBtn = document.querySelector('.restart-btn');
  restartBtn.addEventListener('click', function(){
    userScore = 0;
    compScore = 0;
    userScoreSpan.innerHTML = 0;
    compScoreSpan.innerHTML = 0;
  });
}

function main() {
  rockBtn.addEventListener('click', () => game("r"));
  
  paperBtn.addEventListener('click', () => game("p"));
  
  scissorBtn.addEventListener('click', () => game("s"));
  
  restartGame();
}

main();

