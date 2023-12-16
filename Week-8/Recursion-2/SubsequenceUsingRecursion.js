function printSubSeqRec(str, n, index = -1, curr = "") {
	if (index == n) return;

	if (curr.length > 0) {
		console.log(curr);
	}

	for (let i = index + 1; i < n; i++) {
		curr += str[i];
		printSubSeqRec(str, n, i, curr);

		curr = curr.slice(0, -1);
	}
	return;
}

function printSubSeq(str) {
	printSubSeqRec(str, str.length);
}

let str = "cab";
printSubSeq(str);
