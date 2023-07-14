const reverseNumber = (number) => {
	number = Number(number);
	let reverse = 0;

	while (number > 0) {
		let last = number % 10;
		reverse = reverse * 10 + last;
		number = Math.round(number / 10);
	}

	return reverse;
};

const input = prompt("Enter a number");

console.log(reverseNumber(input));
