function simulateRace(horses, raceOrder) {
	let maxStrength = -1;
	let winner = -1;

	for (const horse of raceOrder) {
		const strength = horses[horse];
		if (strength > maxStrength) {
			maxStrength = strength;
			winner = horse;
		}
	}

	return winner;
}

function findMaxStrengthHorse(horses, N, K) {
	let left = 0;
	let right = N - 1;

	while (left < right) {
		const mid = Math.floor((left + right) / 2);
		const races = Math.ceil((mid + 1) / 2);

		const leftHalfWinner = simulateRace(
			horses,
			Array.from({ length: mid - left + 1 }, (_, i) => left + i)
		);
		const rightHalfWinner = simulateRace(
			horses,
			Array.from({ length: right - mid }, (_, i) => mid + 1 + i)
		);

		if (leftHalfWinner === rightHalfWinner) {
			return leftHalfWinner;
		}

		if (horses[leftHalfWinner] > horses[rightHalfWinner]) {
			right = mid;
		} else {
			left = mid + 1;
		}
	}

	return left;
}

// Example usage
const horses = [9, 4, 8, 2, 6, 5];
const N = horses.length;
const K = 3;

const maxStrengthHorse = findMaxStrengthHorse(horses, N, K);
console.log(`The horse with the maximum strength is horse ${maxStrengthHorse}`);
