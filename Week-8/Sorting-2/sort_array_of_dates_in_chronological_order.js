function mergeSortDates(dates) {
	if (dates.length <= 1) {
		return dates;
	}

	const middle = Math.floor(dates.length / 2);
	const left = dates.slice(0, middle);
	const right = dates.slice(middle);

	return merge(mergeSortDates(left), mergeSortDates(right));
}

function merge(left, right) {
	let result = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}

	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSortDates(["2022-03-15", "2023-01-01", "2022-12-31", "2022-05-20"]));
