const checkLeapYear = (year) => {
	if (year % 4 === 0 && year % 100 !== 0) {
		return true;
	}
	if (year % 100 === 0 && year % 400 === 0) {
		return true;
	}
	return false;
};
const input = prompt("Enter a year");

if (checkLeapYear(input)) {
	console.log("Yes");
} else {
	console.log("No");
}