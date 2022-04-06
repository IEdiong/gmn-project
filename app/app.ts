const number = document.querySelector('.number');
const messageEl = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

// secret number
let secretNumber = Math.floor(Math.random() * 20) + 1;
let currentScore = 20;
let playing = true;

const resetGame = function () {
  number!.textContent = '?';
  (<HTMLInputElement>document.querySelector('.guess')).value = '';
  score!.textContent = String(20);
  currentScore = 20;
  messageEl!.textContent = 'Start guessing...';
  secretNumber = Math.floor(Math.random() * 20) + 1;
  playing = true;
};

// Check Button
checkBtn!.addEventListener('click', function () {
  if (playing) {
    const guessNumber = +(<HTMLInputElement>document.querySelector('.guess'))
      .value;

    if (guessNumber === 0 || guessNumber > 20)
      return (messageEl!.textContent = 'Please make a guess!!');
    else {
      if (guessNumber === secretNumber) {
        messageEl!.textContent = 'Correct guess!!';
        number!.textContent = String(secretNumber);
        let currentHi = +!highscore!.textContent;
        if (currentScore > currentHi) {
          highscore!.textContent = String(currentScore);
        }
        playing = false;
      } else if (guessNumber !== secretNumber) {
        messageEl!.textContent =
          guessNumber < secretNumber ? 'Too low' : 'Too high';
        currentScore--;
        score!.textContent = String(currentScore);
      }
    }
  }
});

// Again Button
againBtn!.addEventListener('click', resetGame);
