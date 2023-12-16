function findSubsets(subset, nums, output, index) {
	if (index == nums.length) {
		subset.push(output);
		return;
	}

	findSubsets(subset, nums, [...output], index + 1);

	output.push(nums[index]);
	findSubsets(subset, nums, [...output], index + 1);
}

let subset = [];

let input = [1, 2, 3];

findSubsets(subset, input, [], 0);

console.log(subset);
