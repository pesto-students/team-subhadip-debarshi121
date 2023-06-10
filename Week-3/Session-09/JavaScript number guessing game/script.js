// Your solution goes here
const playGuessingGame = (numToGuess, totalGuesses = 10) => {
	let guessCount = 0;
	let guess = Number(prompt(`Enter a number between 1 and 100.`));

	if (guess === null) {
		return 0;
	} else {
		if (guess === numToGuess) {
			return 1;
		} else {
			guessCount++;
			while (guessCount < totalGuesses) {
				switch (true) {
					case guess === null:
						return 0;
					case isNaN(guess):
						guess = Number(prompt(`Please enter a number.`));
						break;
					case guess < numToGuess:
						guess = Number(prompt(`${guess} is too small. Guess a larger number.`));
						guessCount++;
						break;
					case guess > numToGuess:
						guess = Number(prompt(`${guess} is too large. Guess a smaller number.`));
						guessCount++;
						break;
					case guess === numToGuess:
						return guessCount;
				}
			}
			return 0;
		}
	}
};