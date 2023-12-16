// javascript program to find smallest
// window containing
// all characters of a pattern.

var no_of_chars = 256;

// Function to find smallest
// window containing
// all characters of 'pat'
function findSubString(str, pat) {
	var len1 = str.length;
	var len2 = pat.length;

	// Check if string's length is
	// less than pattern's
	// length. If yes then no such
	// window can exist
	if (len1 < len2) {
		document.write("No such window exists");
		return "";
	}

	var hash_pat = Array.from({ length: no_of_chars }, (_, i) => 0);
	var hash_str = Array.from({ length: no_of_chars }, (_, i) => 0);

	// Store occurrence ofs
	// characters of pattern
	for (var i = 0; i < len2; i++) hash_pat[pat.charAt(i).charCodeAt(0)]++;

	var start = 0,
		start_index = -1,
		min_len = Number.MAX_VALUE;

	// Start traversing the string
	// Count of characters
	var count = 0;
	for (var j = 0; j < len1; j++) {
		// Count occurrence of characters
		// of string
		hash_str[str.charAt(j).charCodeAt(0)]++;

		// If string's char matches
		// with pattern's char
		// then increment count
		if (hash_str[str.charAt(j).charCodeAt(0)] <= hash_pat[str.charAt(j).charCodeAt(0)]) count++;

		// If all the characters are matched
		if (count == len2) {
			// Try to minimize the window
			while (hash_str[str.charAt(start).charCodeAt(0)] > hash_pat[str.charAt(start).charCodeAt(0)] || hash_pat[str.charAt(start).charCodeAt(0)] == 0) {
				if (hash_str[str.charAt(start).charCodeAt(0)] > hash_pat[str.charAt(start).charCodeAt(0)]) hash_str[str.charAt(start).charCodeAt(0)]--;
				start++;
			}

			// update window size
			var len_window = j - start + 1;
			if (min_len > len_window) {
				min_len = len_window;
				start_index = start;
			}
		}
	}

	// If no window found
	if (start_index == -1) {
		document.write("No such window exists");
		return "";
	}

	// Return substring starting
	// from start_index
	// and length min_len
	return str.substring(start_index, start_index + min_len);
}

// Driver Method
var str = "ADOBECODEBANC";
var pat = "ABC";

console.log(findSubString(str, pat));
