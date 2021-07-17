'use strict';

//Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current1El = document.querySelector('#current--0');
const current0El = document.querySelector('#current--1');

// js will automatically convert them to strings to display them on page
//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
//hide the dice
diceEl.classList.add('hide');

let playerActive = 0;
let currentScore = 0;
//total storing the scores in array
const scores = [0, 0];

//Rolling the dice
const diceRoll = function () {
	return Math.trunc(Math.random() * 6) + 1;
}
const switchPlayer = function () {
	currentScore = 0;
	playerActive = playerActive === 0 ? 1 : 0;
	player0El.classList.toggle('player--active');
	player1El.classList.toggle('player--active');
}
btnRoll.addEventListener('click', function () {
	//Genereating a random dice roll;
	let diceNo = diceRoll();
	diceEl.classList.remove('hide');
	const pathValue = `./images/dice-${diceNo}.png`;
	diceEl.setAttribute('src', pathValue);
	if (diceNo === 1) {
		//seting current score of current player to 0
		document.getElementById(`current--${playerActive}`).textContent = 0;
		switchPlayer();
	}
	else {
		currentScore = currentScore + diceNo;
		document.getElementById(`current--${playerActive}`).textContent = currentScore;

	}

})
btnHold.addEventListener('click', function () {
	scores[playerActive] += currentScore;
	document.querySelector(`#score--${playerActive}`).textContent = scores[playerActive];
	if (scores[playerActive] >= 100) {
		console.log(`Player-${playerActive} Wins 🎊`);
		return;
	}
	else {
		switchPlayer();
	}
})