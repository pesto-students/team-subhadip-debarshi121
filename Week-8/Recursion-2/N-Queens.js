var solveNQueens = function (n) {
	const board = Array(n)
		.fill()
		.map((item) => Array(n).fill("."));

	const recursive = (board, row) => {
		if (row === n) {
			let strArray = [];

			for (let i = 0; i < n; i++) {
				let tempStr = "";
				for (let j = 0; j < n; j++) {
					tempStr += board[i][j];
				}
				strArray.push(tempStr);
			}
			return [strArray];
		}

		let result = [];

		for (let i = 0; i < n; i++) {
			if (isSafe(row, i)) {
				board[row][i] = "Q";
				let temp = recursive(board, row + 1);

				result.push(...temp);
				board[row][i] = ".";
			}
		}

		return result;
	};

	const isSafe = (row, col) => {
		for (let i = 0; i < n; i++) {
			if (board[i][col] === "Q") {
				return false;
			}
		}

		for (let i = 0; i < n; i++) {
			if (board[row][i] === "Q") {
				return false;
			}
		}

		let steps;

		steps = Math.min(row, col);
		for (let i = 1; i <= steps; i++) {
			if (board[row - i][col - i] === "Q") {
				return false;
			}
		}

		steps = Math.min(n - row - 1, col);
		for (let i = 1; i <= steps; i++) {
			if (board[row + i][col - i] === "Q") {
				return false;
			}
		}

		steps = Math.min(n - row - 1, n - col - 1);
		for (let i = 1; i <= steps; i++) {
			if (board[row + i][col + i] === "Q") {
				return false;
			}
		}

		steps = Math.min(row, n - col - 1);
		for (let i = 1; i <= steps; i++) {
			if (board[row - i][col + i] === "Q") {
				return false;
			}
		}

		return true;
	};

	return recursive(board, 0);
};

console.log(solveNQueens(4));
