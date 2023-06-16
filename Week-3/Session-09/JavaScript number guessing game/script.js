// Your solution goes here
const playGuessingGame = (numToGuess, totalGuesses = 10) => {
	let guessCount = 0;
	let guess = Number(prompt(`Enter a number between 1 and 100.`));

	while (guessCount <= totalGuesses) {
		if (guess === null) return 0;
		if (guess === 0) return 0;
		if (guess === numToGuess) {
			console.log('TTT' + guessCount)
			return ++guessCount
		}
		if (isNaN(guess)) {
			guess = Number(prompt(`Please enter a number.`));
			continue;
		}
		if (guess < numToGuess) {
			guess = Number(prompt(`${guess} is too small. Guess a larger number.`));
		}
		if (guess > numToGuess) {
			guess = Number(prompt(`${guess} is too large. Guess a smaller number.`));
		}
		guessCount++;
	}
	return 0;
};
