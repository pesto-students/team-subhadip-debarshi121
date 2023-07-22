// Javascript program to find all indices of a number

function AllIndexesRecursive(input, x, start) {
	// If the start index reaches the
	// length of the array, then
	// return empty array
	if (start == input.length) {
		let ans = new Array(0); // empty array
		return ans;
	}

	// Getting the recursive answer in
	// smallIndex array
	let smallIndex = AllIndexesRecursive(input, x, start + 1);

	// If the element at start index is equal
	// to x then
	// (which is the answer of recursion) and
	// then (which came through recursion)
	if (input[start] == x) {
		let myAns = new Array(smallIndex.length + 1);

		// Put the start index in front
		// of the array
		myAns[0] = start;
		for (let i = 0; i < smallIndex.length; i++) {
			// Shift the elements of the array
			// one step to the right
			// and putting them in
			// myAns array
			myAns[i + 1] = smallIndex[i];
		}
		return myAns;
	} else {
		// If the element at start index is not
		// equal to x then just simply return the
		// answer which came from recursion.
		return smallIndex;
	}
}

function AllIndexes(input, x) {
	return AllIndexesRecursive(input, x, 0);
}

let arr = [1, 2, 3, 2, 2, 5];
let x = 2;

let output = AllIndexes(arr, x);

// Printing the output array
for (let i = 0; i < output.length; i++) {
	console.log(output[i]);
}
