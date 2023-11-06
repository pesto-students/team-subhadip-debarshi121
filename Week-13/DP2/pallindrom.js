function longestPalindromicSubsequence(str) {
    const n = str.length;
    
    // Create a 2D array to store the lengths of the longest palindromic subsequences
    const dp = new Array(n).fill(null).map(() => new Array(n).fill(0));
  
    // Every single character is a palindrome of length 1
    for (let i = 0; i < n; i++) {
      dp[i][i] = 1;
    }
  
    // Fill the dp array for subsequences of length 2 and above
    for (let len = 2; len <= n; len++) {
      for (let start = 0; start <= n - len; start++) {
        const end = start + len - 1;
  
        if (str[start] === str[end] && len === 2) {
          dp[start][end] = 2;
        } else if (str[start] === str[end]) {
          dp[start][end] = dp[start + 1][end - 1] + 2;
        } else {
          dp[start][end] = Math.max(dp[start + 1][end], dp[start][end - 1]);
        }
      }
    }
  
    // The length of the longest palindromic subsequence for the entire string is stored in dp[0][n-1]
    return dp[0][n - 1];
  }
  
  // Example usage:
  const inputString = "bbabcbcab";
  const length = longestPalindromicSubsequence(inputString);
  console.log(`Length of the longest palindromic subsequence: ${length}`);