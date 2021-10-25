'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Instantiate scores
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0; //player1 = 0  :  player2 = 1
let gameOver = false;

// Switch player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  if (!gameOver) {
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  }
};

// Rolling the Dice
btnRoll.addEventListener('click', function () {
  if (!gameOver) {
    // Generate random die roll
    const dice = Math.trunc(Math.random() * 6 + 1);

    // Display the die
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // Check die roll and update scores accordingly
    if (dice !== 1) {
      currentScore += dice;
      // change the score for the active player
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch active player when roll is 1
      switchPlayer();
    }
  }
});

// Holding your score
btnHold.addEventListener('click', function () {
  if (!gameOver) {
    // update scores
    scores[activePlayer] += currentScore;

    // display scores
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if player has won  :  score >= 100
    if (scores[activePlayer] >= 100) {
      // End game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--winner`)
        .classList.remove('player--active');
      gameOver = true;
      diceEl.classList.add('hidden');
    }

    // reset current points
    switchPlayer();
  }
});

// Restarting the game
btnNew.addEventListener('click', function () {
  // Reset scores
  scores = [0, 0];
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;

  // Reset game winner
  console.log(gameOver);
  console.log(activePlayer);
  if (gameOver) {
    document.querySelector(`.player--winner`).classList.add('player--active');
    document
      .querySelector(`.player--winner`)
      .classList.remove('player--winner');
  }

  // Reset to player1 starting
  if (player2.classList.contains('player--active')) {
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
  }

  // hide the die
  diceEl.classList.add('hidden');

  currentScore = 0;
  activePlayer = 0;
  gameOver = false;
});
