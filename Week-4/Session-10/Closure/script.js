const counter = () => {
	let count = 0;
	return () => {
		count++;
		return count;
	};
};

const firstCounter = counter();
const secondCounter = counter();

firstValues = [];
secondValues = [];

for (let i = 0; i < 5; i++) {
	firstValues.push(firstCounter());
}

for (let i = 0; i < 3; i++) {
	secondValues.push(secondCounter());
}

console.log(`firstValues array: ${firstValues}`);
console.log(`secondValues array: ${secondValues}`);