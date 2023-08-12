function bucketSort(arr) {
	const n = arr.length;

	let max = Math.max(...arr);

	const evenBucket = [];
	const oddBucket = [];

	for (let i = 0; i < n; i++) {
		if (arr[i] % 2 === 0) {
			evenBucket.push(arr[i]);
		} else {
			oddBucket.push(arr[i]);
		}
	}

	evenBucket.sort((a, b) => a - b);
	oddBucket.sort((a, b) => a - b);

	return evenBucket.concat(oddBucket);
}

console.log(bucketSort([4, 2, 6, 9, 7, 5]));
