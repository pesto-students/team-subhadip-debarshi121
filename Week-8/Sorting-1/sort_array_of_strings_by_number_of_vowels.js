// Cocktail Shaker Sort algorithm

function cocktailShakerSort(arr) {
	const countVowels = (str) => {
		const vowels = "aeiouAEIOU";
		let count = 0;
		for (let i = 0; i < str.length; i++) {
			if (vowels.includes(str[i])) {
				count++;
			}
		}
		return count;
	};

	const swap = (arr, i, j) => {
		[arr[i], arr[j]] = [arr[j], arr[i]];
	};

	let swapped;
	let start = 0;
	let end = arr.length - 1;

	do {
		swapped = false;

		// Move the largest elements to the end
		for (let i = start; i < end; i++) {
			if (countVowels(arr[i]) < countVowels(arr[i + 1])) {
				swap(arr, i, i + 1);
				swapped = true;
			}
		}
		end--;

		// Move the smallest elements to the beginning
		for (let i = end; i > start; i--) {
			if (countVowels(arr[i]) > countVowels(arr[i - 1])) {
				swap(arr, i, i - 1);
				swapped = true;
			}
		}
		start++;
	} while (swapped);

	return arr;
}

console.log(cocktailShakerSort(["apple", "banana", "pear", "orange", "kiwi"]));
