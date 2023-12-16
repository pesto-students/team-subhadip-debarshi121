function AllIndexesRecursive(input, x, start) {
	if (start == input.length) {
		let ans = new Array(0);
		return ans;
	}

	let smallIndex = AllIndexesRecursive(input, x, start + 1);

	if (input[start] == x) {
		let myAns = new Array(smallIndex.length + 1);

		myAns[0] = start;
		for (let i = 0; i < smallIndex.length; i++) {
			myAns[i + 1] = smallIndex[i];
		}
		return myAns;
	} else {
		return smallIndex;
	}
}

function AllIndexes(input, x) {
	return AllIndexesRecursive(input, x, 0);
}

let arr = [1, 2, 3, 2, 2, 5];
let x = 2;

let output = AllIndexes(arr, x);

for (let i = 0; i < output.length; i++) {
	console.log(output[i]);
}
