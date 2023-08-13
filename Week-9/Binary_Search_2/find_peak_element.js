function findPeakElement(nums) {
	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		const mid = left + Math.floor((right - left) / 2);

		if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
			return mid;
		}

		if (nums[mid - 1] > nums[mid]) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return left;
}

const nums = [1, 2, 3, 1];
const peakIndex = findPeakElement(nums);
console.log(peakIndex);
