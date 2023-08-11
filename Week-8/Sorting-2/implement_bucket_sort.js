function bucketSort(arr) {
	const n = arr.length;

	// Find the maximum element to determine the number of buckets
	let max = Math.max(...arr);

	// Create buckets for even and odd numbers
	const evenBucket = [];
	const oddBucket = [];

	// Distribute elements into buckets
	for (let i = 0; i < n; i++) {
		if (arr[i] % 2 === 0) {
			evenBucket.push(arr[i]);
		} else {
			oddBucket.push(arr[i]);
		}
	}

	// Sort individual buckets
	evenBucket.sort((a, b) => a - b);
	oddBucket.sort((a, b) => a - b);

	// Concatenate the sorted evenBucket and oddBucket
	return evenBucket.concat(oddBucket);
}

console.log(bucketSort([4, 2, 6, 9, 7, 5]));
