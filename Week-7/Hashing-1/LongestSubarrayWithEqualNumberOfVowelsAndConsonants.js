// Javascript program to implement
// the above approach

// Function to return the length of
// the longest subString having equal
// number of vowel and consonant
function maxsubStringLength(S, N) {
	let arr = Array.from({ length: N }, (_, i) => 0);

	// Generate the array
	for (let i = 0; i < N; i++)
		if (S[i] == "a" || S[i] == "e" || S[i] == "i" || S[i] == "o" || S[i] == "u") arr[i] = 1;
		else arr[i] = -1;

	// Initialize variable
	// to store result
	let maxLen = 0;

	// Stores the sum of subarray
	let curr_sum = 0;

	// Map to store indices of the sum
	let hash = new Map();

	// Loop through the array
	for (let i = 0; i < N; i++) {
		curr_sum += arr[i];

		// If sum is 0
		if (curr_sum == 0)
			// Count of vowels and consonants
			// are equal
			maxLen = Math.max(maxLen, i + 1);

		// Update the maximum length
		// of subString in HashMap
		if (hash.has(curr_sum)) maxLen = Math.max(maxLen, i - hash.get(curr_sum));
		// Store the index of the sum
		// hash[curr_sum] = i;
		else hash.set(curr_sum, i);
	}

	// Return the maximum
	// length of required subString
	return maxLen;
}

// Driver code

let S = "geeksforgeeks";
let n = S.length;

console.log(maxsubStringLength(S.split(""), n));
