function countingSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	// Find the maximum element in the array
	let max = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	// Create a count array to store the frequency of each element
	const countArray = new Array(max + 1).fill(0);
	for (let i = 0; i < arr.length; i++) {
		countArray[arr[i]]++;
	}

	// Modify the count array to store the cumulative count
	for (let i = 1; i < countArray.length; i++) {
		countArray[i] += countArray[i - 1];
	}

	// Create the output array
	const outputArray = new Array(arr.length);
	for (let i = arr.length - 1; i >= 0; i--) {
		outputArray[countArray[arr[i]] - 1] = arr[i];
		countArray[arr[i]]--;
	}

	return outputArray;
}

console.log(countingSort([9, 5, 3, 7, 1]));
