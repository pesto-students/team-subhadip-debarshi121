// Heap sort

function heapSort(arr) {
	const heapify = (arr, n, i) => {
		let largest = i;
		const left = 2 * i + 1;
		const right = 2 * i + 2;

		if (left < n && arr[left].length > arr[largest].length) {
			largest = left;
		}

		if (right < n && arr[right].length > arr[largest].length) {
			largest = right;
		}

		if (largest !== i) {
			[arr[i], arr[largest]] = [arr[largest], arr[i]];
			heapify(arr, n, largest);
		}
	};

	const buildHeap = (arr) => {
		const n = arr.length;
		for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
			heapify(arr, n, i);
		}
	};

	const n = arr.length;
	buildHeap(arr);

	for (let i = n - 1; i > 0; i--) {
		[arr[0], arr[i]] = [arr[i], arr[0]];
		heapify(arr, i, 0);
	}

	return arr;
}

console.log(heapSort(["apple", "banana", "cherry", "date", "elderberry"]));
