function findAllPaths(mazeRows, mazeCols) {
	function backtrack(x, y, path) {
		if (x === mazeCols - 1 && y === mazeRows - 1) {
			// Reached the bottom-right corner, add the path to the list of paths
			paths.push(path);
			return;
		}

		if (x < mazeCols - 1) {
			// Move right if possible
			backtrack(x + 1, y, path + "R");
		}

		if (y < mazeRows - 1) {
			// Move down if possible
			backtrack(x, y + 1, path + "D");
		}
	}

	const paths = [];
	backtrack(0, 0, "");
	return paths;
}

// Example usage:
const mazeRows = 3;
const mazeCols = 3;
const paths = findAllPaths(mazeRows, mazeCols);
console.log(paths);
