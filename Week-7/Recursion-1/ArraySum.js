const arraySum = (arr) => {
	return calculateArraySum(arr, arr.length);
};

const calculateArraySum = (arr, n) => {
	if (n == 0) {
		return 0;
	} else {
		return arr[n - 1] + calculateArraySum(arr, n - 1);
	}
};

console.log(arraySum([1, 2, 3, 4, 5]));
