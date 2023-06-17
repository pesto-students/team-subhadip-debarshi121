// Your solution goes here
// Your solution goes here
const playGuessingGame = (numToGuess, totalGuesses = 5) => {
	let guessCount = 0;
	let guess = prompt(`Enter a number between 1 and 100.`);

	while (guessCount <= totalGuesses) {
		if (guess === null) return 0;
		if (guess == numToGuess) return ++guessCount;
		if (isNaN(guess)) {
			guess = prompt(`Please enter a number.`);
			continue;
		}
		if (guess < numToGuess) {
			guess = prompt(`${guess} is too small. Guess a larger number.`);
		}
		if (guess > numToGuess) {
			guess = prompt(`${guess} is too large. Guess a smaller number.`);
		}
		guessCount++;
	}
	return 0;
};