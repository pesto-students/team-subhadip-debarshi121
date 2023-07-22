// JavaScript program to generate power set in
// lexicographic order.

// str : Stores input string
// n : Length of str.
// curr : Stores current permutation
// index : Index in current permutation, curr

function printSubSeqRec(str, n, index = -1, curr = "") {
	// base case
	if (index == n) return;

	if (curr.length > 0) {
		console.log(curr);
	}

	for (let i = index + 1; i < n; i++) {
		curr += str[i];
		printSubSeqRec(str, n, i, curr);

		// backtracking
		curr = curr.slice(0, -1);
	}
	return;
}

// Generates power set in lexicographic
// order.
function printSubSeq(str) {
	printSubSeqRec(str, str.length);
}

// Driver code

let str = "cab";
printSubSeq(str);
