function eggDrop(eggs, floors) {
    // Create a 2D DP array
    const dp = new Array(eggs + 1).fill(null).map(() => new Array(floors + 1).fill(0));
  
    // Initialize the base cases
    for (let i = 0; i <= eggs; i++) {
      dp[i][0] = 0; // Zero attempts needed for 0 floors
      dp[i][1] = 1; // One attempt needed for 1 floor
    }
  
    for (let j = 1; j <= floors; j++) {
      dp[1][j] = j; // If we have one egg, we need j attempts for j floors
    }
  
    // Fill the DP table for the remaining cases
    for (let i = 2; i <= eggs; i++) {
      for (let j = 2; j <= floors; j++) {
        dp[i][j] = Infinity;
  
        for (let x = 1; x <= j; x++) {
          const maxAttempts = 1 + Math.max(dp[i - 1][x - 1], dp[i][j - x]);
  
          if (maxAttempts < dp[i][j]) {
            dp[i][j] = maxAttempts;
          }
        }
      }
    }
  
    // The minimum number of attempts is stored in dp[eggs][floors]
    return dp[eggs][floors];
  }
  
  // Example usage:
  const eggs = 2;
  const floors = 100;
  
  const result = eggDrop(eggs, floors);
  console.log(`Minimum attempts needed: ${result}`);