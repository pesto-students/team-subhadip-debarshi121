const checkOddEven = (number) => {
	if (number % 2 == 0) return true;
	return false;
};
const input = prompt("Enter a number");

if (checkOddEven(input)) {
	console.log("Even");
} else {
	console.log("Odd");
}
