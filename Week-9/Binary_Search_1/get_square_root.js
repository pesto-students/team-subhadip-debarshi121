function squareRootBinarySearch(n, precision = 0.00001) {
	if (n === 0 || n === 1) {
		return n;
	}

	let left = 0;
	let right = n;
	let result = 0;

	while (left <= right) {
		const mid = (left + right) / 2;
		const square = mid * mid;

		if (Math.abs(square - n) <= precision) {
			result = mid;
			break;
		} else if (square < n) {
			left = mid + precision;
			result = mid;
		} else {
			right = mid - precision;
		}
	}

	return result;
}


console.log(squareRootBinarySearch(2));
