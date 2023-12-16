// Returns largest subarray with equal number of 0s and 1s
function maxLen(arr, n) {
	// Creates an empty hashMap hM
	const hM = new Map();

	// Initialize sum of elements
	let sum = 0;

	// Initialize result
	let max_len = 0;
	let ending_index = -1;
	let start_index = 0;

	for (let i = 0; i < n; i++) {
		arr[i] = arr[i] == 0 ? -1 : 1;
	}

	// Traverse through the given array
	for (let i = 0; i < n; i++) {
		// Add current element to sum
		sum += arr[i];

		// To handle sum=0 at last index
		if (sum == 0) {
			max_len = i + 1;
			ending_index = i;
		}

		// If this sum is seen before,
		// then update max_len if required
		if (hM.has(sum)) {
			if (max_len < i - hM.get(sum)) {
				max_len = i - hM.get(sum);
				ending_index = i;
			}
		} // Else put this sum in hash table
		else hM.set(sum, i);
	}

	for (let i = 0; i < n; i++) {
		arr[i] = arr[i] == -1 ? 0 : 1;
	}

	let end = ending_index - max_len + 1;
	console.log(`${end} to ${ending_index}`);

	return max_len;
}

// Driver program to test the above functions
let arr = [1, 0, 0, 1, 0, 1, 1];
let n = arr.length;

maxLen(arr, n);
