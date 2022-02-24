'use strict'
let randomNumber = 0;
let score = 0;
let rounds = 3;
let highScore =[];


const lblMessage = document.querySelector('.message');
const lblNumber = document.querySelector('.number');
const lblScore = document.querySelector('.score');
const inputGuess = document.querySelector('.guess');
const roundsNumber = document.querySelector('.round');
const lblHighScore = document.querySelector('.highscore');
const pbCheck = document.querySelector('.pbcheck');
const pbAgain = document.querySelector('.again');




function checkNumber(){
  const gnumber = Number(inputGuess.value);
  console.log('num = :' + gnumber + ' ' +  typeof gnumber)

  if (rounds> 0){
    lblNumber.textContent = '?';
  if (!gnumber){
    lblMessage.textContent ='🚀 Not a number';
  } else if (gnumber < randomNumber) {
    lblMessage.textContent = "Too low 📉"
    rounds-=1;
    roundsNumber.textContent = rounds;
  }else if (gnumber > randomNumber) {
    lblMessage.textContent = "Too high 🍁"
    rounds-=1;
    roundsNumber.textContent = rounds;
  }else if (gnumber === randomNumber) {
    lblMessage.textContent = "Correct! 🌟"
    score+=1;
    rounds = 3;
    lblNumber.textContent = randomNumber;
    lblScore.textContent = score;
    roundsNumber.textContent = rounds;
    genRandomNumber();
  }
  }
else {
    lblMessage.textContent = "Game over! Try again :)"

  }
}

function tryAgain(){
  highScore.push(score);
  score = 0;
  rounds = 3;
  lblScore.textContent = score;
  roundsNumber.textContent = rounds;
  lblMessage.textContent = "Start Guessing";
  lblHighScore.textContent = findHighScore();
  genRandomNumber()

}

function findHighScore(){
  highScore.sort()
  return highScore[highScore.length -1];
}



function genRandomNumber(){
  randomNumber = Math.random() * 20 + 1;
  randomNumber = Math.floor(randomNumber);
  console.log(randomNumber)

}

genRandomNumber();
pbCheck.addEventListener("click", checkNumber);
pbAgain.addEventListener('click', tryAgain)
