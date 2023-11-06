function uniquePaths(m, n) {
    // Create a 2D array to store the number of unique paths for each cell
    const dp = new Array(m).fill(null).map(() => new Array(n).fill(0));
  
    // Initialize the top row and left column with 1, as there's only one way to reach any cell in the first row or first column
    for (let i = 0; i < m; i++) {
      dp[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
      dp[0][j] = 1;
    }
  
    // Calculate the number of unique paths for each cell based on the previous cells
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  
    // The value in the bottom-right cell represents the number of unique paths
    return dp[m - 1][n - 1];
  }
  
  // Example usage:
  const m = 3; // Number of rows
  const n = 7; // Number of columns
  const paths = uniquePaths(m, n);
  console.log(`Number of unique paths in a ${m}x${n} grid: ${paths}`);