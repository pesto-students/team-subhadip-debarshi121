function lastOccurrence(nums, target) {
	let left = 0;
	let right = nums.length - 1;
	let lastIndex = -1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (nums[mid] === target) {
			lastIndex = mid;
			left = mid + 1; 
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return lastIndex;
}


const sortedArray = [2, 4, 6, 8, 8, 8, 10, 12];
const targetValue = 8;
const lastIndex = lastOccurrence(sortedArray, targetValue);

if (lastIndex !== -1) {
	console.log(lastIndex);
} else {
	console.log(-1);
}