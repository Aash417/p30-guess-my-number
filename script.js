'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

let score = 10;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number ..!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You guessed it right..!';
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('.number').style.width = '50rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      console.log(highScore);
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score <= 1) {
      score--;
      document.querySelector('.message').textContent =
        'You have failed this game.';
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Guess was too high.';
    }
  } else if (guess < secretNumber) {
    if (score <= 1) {
      score--;
      document.querySelector('.message').textContent =
        'You have failed this game.';
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Guess was too low.';
    }
  }
});

cument.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('body').style.backgroundColor = 'black';

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});