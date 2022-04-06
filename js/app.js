var number = document.querySelector('.number');
var messageEl = document.querySelector('.message');
var score = document.querySelector('.score');
var highscore = document.querySelector('.highscore');
var checkBtn = document.querySelector('.check');
var againBtn = document.querySelector('.again');
// secret number
var secretNumber = Math.floor(Math.random() * 20) + 1;
var currentScore = 20;
var playing = true;
var resetGame = function () {
    number.textContent = '?';
    document.querySelector('.guess').value = '';
    score.textContent = String(20);
    currentScore = 20;
    messageEl.textContent = 'Start guessing...';
    secretNumber = Math.floor(Math.random() * 20) + 1;
    playing = true;
};
// Check Button
checkBtn.addEventListener('click', function () {
    if (playing) {
        var guessNumber = +document.querySelector('.guess').value;
        if (guessNumber === 0 || guessNumber > 20)
            return (messageEl.textContent = 'Please make a guess!!');
        else {
            if (guessNumber === secretNumber) {
                messageEl.textContent = 'Correct guess!!';
                number.textContent = String(secretNumber);
                var currentHi = +highscore.textContent;
                if (currentScore > currentHi) {
                    highscore.textContent = String(currentScore);
                }
                playing = false;
            }
            else if (guessNumber !== secretNumber) {
                messageEl.textContent =
                    guessNumber < secretNumber ? 'Too low' : 'Too high';
                currentScore--;
                score.textContent = String(currentScore);
            }
        }
    }
});
// Again Button
againBtn.addEventListener('click', resetGame);
//# sourceMappingURL=app.js.map