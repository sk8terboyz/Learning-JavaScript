'use strict';

// randomly generate number
var myNumber = Math.trunc(Math.random() * 20) + 1;

// set base score
let score = 20;

// set base highscore
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess && score > 0) {
    setMessage('No... Just No...');

    /**  When guess is correct  **/
  } else if (guess === myNumber) {
    setMessage('🎉 You did it!');

    // set background color
    document.querySelector('body').style.backgroundColor = '#60b347';

    // change box to number
    document.querySelector('.number').textContent = myNumber;

    // update highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    /**  When guess is too high  **/
  } else if (guess > myNumber) {
    setMessage('📈 Too high!');
    score--;

    /**  When guess is too low  **/
  } else if (guess < myNumber) {
    setMessage('📉 Too low!');
    score--;
  }

  /**  When user runs out of guesses  **/
  if (score <= 0) {
    setMessage('❌ YOU LOSE! ❌');
  }

  /**  Runs until score is less than 0  **/
  if (score >= 0) {
    document.querySelector('.score').textContent = score;
  }

  /**  When user presses "Again!" button  **/
  document.querySelector('.again').addEventListener('click', function () {
    // reset background color
    document.querySelector('body').style.backgroundColor = '#222';

    // reset guess box
    document.querySelector('.guess').value = '';

    // reset score
    score = 20;
    document.querySelector('.score').textContent = score;

    // reset message
    setMessage('Start guessing...');

    // reset box
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';

    // set new number
    myNumber = Math.trunc(Math.random() * 20) + 1;
  });

  /**  When reset button is hit  **/
  document.querySelector('.reset').addEventListener('click', function () {
    // reset background color
    document.querySelector('body').style.backgroundColor = '#222';

    // reset guess box
    document.querySelector('.guess').value = '';

    // reset score
    score = 20;
    document.querySelector('.score').textContent = score;

    // reset highscore
    highscore = 0;
    document.querySelector('.highscore').textContent = highscore;

    // reset message
    setMessage('Start guessing...');

    // reset box
    document.querySelector('.number').textContent = '?';

    // set new number
    myNumber = Math.trunc(Math.random() * 20) + 1;
  });
});

// refactor the code at the end to keep it clean
let setMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
