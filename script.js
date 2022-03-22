'use strict';

// Select Element
let score = Number(document.querySelector('.score').textContent);

// State of the game
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

// Functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const updateStyles = function (hexColourCode, width) {
  document.querySelector('body').style.backgroundColor = hexColourCode;
  document.querySelector('.number').style.width = width + 'rem';
};

const checkGuess = function () {
  const guess = Number(document.querySelector('.guess').value);

  // When the guess is out of range
  if (!guess || guess > 20) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    updateStyles('#60b347', 25);
    document.querySelector('.number').textContent = secretNumber;

    // Update highscore
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You Lost the Game');
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
};

const playAgain = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  updateStyles('#222', 15);
};

// Check guess
document.querySelector('.check').addEventListener('click', checkGuess);

// Play again
document.querySelector('.again').addEventListener('click', playAgain);
