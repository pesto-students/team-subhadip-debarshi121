const isSorted = (str1, str2) => {
	if (typeof str1[0] === "undefined" && typeof str2[0] !== "undefined") {
		return true;
	}
	if (typeof str2[0] === "undefined" && typeof str1[0] !== "undefined") {
		return false;
	}
	if (str1.charCodeAt(0) < str2.charCodeAt(0)) {
		return true;
	}
	if (str1.charCodeAt(0) > str2.charCodeAt(0)) {
		return false;
	}
	if (str2.charCodeAt(0) === str1.charCodeAt(0)) {
		return isSorted(str1.substring(1, str1.length), str2.substring(1, str2.length));
	}
};

const sortStrings = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (isSorted(arr[j], arr[i])) {
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
		}
	}
	return arr;
};

console.log(sortStrings(["banana", "apple", "grape", "cherry"]));
console.log(sortStrings(["cat", "dog", "elephant", "bear"]));
console.log(sortStrings(["ab", "aaa", "aba", "aaaa"]));
