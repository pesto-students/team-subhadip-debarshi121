// A utility function to print
// a substring str[low..high]
function printSubStr(str, low, high) {
	console.log(str.substring(low, high + 1));
}

// This function prints the longest
// palindrome substring of str[].
// It also returns the length of the
// longest palindrome
function longestPalSubstr(str) {
	// Get length of input string
	let n = str.length;

	// table[i][j] will be false if
	// substring str[i..j] is not palindrome.
	// Else table[i][j] will be true
	let table = new Array(n);
	for (let i = 0; i < n; i++) {
		table[i] = new Array(n);
	}

	// All substrings of length 1 are palindromes
	let maxLength = 1;
	for (let i = 0; i < n; ++i) table[i][i] = true;

	// Check for sub-string of length 2.
	let start = 0;
	for (let i = 0; i < n - 1; ++i) {
		if (str[i] == str[i + 1]) {
			table[i][i + 1] = true;
			start = i;
			maxLength = 2;
		}
	}

	// Check for lengths greater than 2.
	// k is length of substring
	for (let k = 3; k <= n; ++k) {
		// Fix the starting index
		for (let i = 0; i < n - k + 1; ++i) {
			// Get the ending index of substring from
			// starting index i and length k
			let j = i + k - 1;

			// Checking for sub-string from ith index to
			// jth index if str.charAt(i+1) to
			// str.charAt(j-1) is a palindrome
			if (table[i + 1][j - 1] && str[i] == str[j]) {
				table[i][j] = true;

				if (k > maxLength) {
					start = i;
					maxLength = k;
				}
			}
		}
	}
	console.log("Longest palindrome substring is; ");
	printSubStr(str, start, start + maxLength - 1);

	// Return length of LPS
	return maxLength;
}

// Driver code
let str = "forgeeksskeegfor";
console.log("Length is: " + longestPalSubstr(str));
