// Stores the pair of indices
class Pair {
	constructor(x, y) {
		this.index1 = x;
		this.index2 = y;
	}
}

// Function to find the all the
// unique quadruplets with the
// elements at different indices
function GetQuadruplets(nums, target) {
	// Stores the sum mapped to
	// a List Of Pair<i, j>
	let map = new Map();

	// Generate all possible pairs
	// for the HashMap
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			// Find the sum of pairs
			// of elements
			let sum = nums[i] + nums[j];

			// If the sum doesn't
			// exists then update
			// with the new pairs
			if (!map.has(sum)) {
				let temp = [];
				let p = new Pair(i, j);
				temp.push(p);

				// Update the hashmap
				map.set(sum, temp);
			}

			// Otherwise, push the new
			// pair of indices to the
			// current sum
			else {
				let temp = map.get(sum);

				let p = new Pair(i, j);
				temp.push(p);

				// Update the hashmap
				map.set(sum, temp);
			}
		}
	}

	// Stores all the Quadruplets
	let ans = new Set();

	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			let lookUp = target - (nums[i] + nums[j]);

			// If the sum with value (K - sum) exists
			if (map.has(lookUp)) {
				// Get the pair of
				// indices of sum
				let temp = map.get(lookUp);

				for (let pair of temp) {
					// Check if i, j, k and l are distinct
					// or not
					if (pair.index1 !== i && pair.index1 !== j && pair.index2 !== i && pair.index2 !== j) {
						let l1 = [nums[pair.index1], nums[pair.index2], nums[i], nums[j]];

						// Sort the list to avoid duplicacy
						l1.sort(function (a, b) {
							return a - b;
						});

						// Update the hashset
						ans.add(l1.join(" "));
					}
				}
			}
		}
	}

	// Print all the Quadruplets
	for (let arr of ans) {
		console.log(arr);
	}
}

// Driver Code
let arr = [1, 0, -1, 0, -2, 2];
let K = 0;
GetQuadruplets(arr, K);
