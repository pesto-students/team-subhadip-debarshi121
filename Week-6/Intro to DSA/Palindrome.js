const checkPalindrome = (num) => {
	num = Number(num);
	let number = num;
	let palindrome = 0;

	while (number > 0) {
		let last = number % 10;
		palindrome = palindrome * 10 + last;
		number = Math.round(number / 10);
	}

	if (palindrome === num) {
		return true;
	}
	return false;
};

const input = prompt("Enter a number");

if (checkPalindrome(input)) {
	console.log("Yes");
} else {
	console.log("No");
}
