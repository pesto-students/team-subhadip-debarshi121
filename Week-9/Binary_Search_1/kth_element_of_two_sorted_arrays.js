function findKthSmallest(arr1, arr2, k) {
	let left = Math.max(0, k - arr2.length);
	let right = Math.min(k, arr1.length);

	while (left < right) {
		const mid = left + Math.floor((right - left) / 2);
		const value1 = arr1[mid];
		const value2 = arr2[k - mid - 1];

		if (value1 < value2) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}

	const value1 = left >= arr1.length ? Infinity : arr1[left];
	const value2 = k - left >= arr2.length ? Infinity : arr2[k - left];

	return Math.min(value1, value2);
}


const arr1 = [2, 3, 5, 8];
const arr2 = [4, 6, 7];
const k = 5;
const kthSmallest = findKthSmallest(arr1, arr2, k);
console.log(kthSmallest);
