// Your solution goes here
const playGuessingGame = (numToGuess, totalGuesses = 10) => {
	let guessCount = 0;
	let guess = prompt(`Enter a number between 1 and 100.`);

	if (guess === null) {
		return 0;
	} else {
		if (guess === numToGuess) {
			return 1;
		} else {
			guessCount++;
			while (guessCount < totalGuesses) {
				if (isNaN(parseInt(guess))) {
					guess = prompt(`Please enter a number.`);
				}
				if (guess < numToGuess) {
					guess = prompt(`${guess} is too small. Guess a larger number.`);
					guessCount++;
				} else if (guess > numToGuess) {
					guess = prompt(`${guess} is too large. Guess a smaller number.`);
					guessCount++;
				}
				if (guess == numToGuess) {
					return guessCount;
				}
				if (guess === null) {
					return 0;
				}
			}
			return 0;
		}
	}
};
