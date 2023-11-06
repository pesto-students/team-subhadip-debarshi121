function minCoins(coins, amount) {
    // Initialize an array to store the minimum number of coins for each amount
    const dp = new Array(amount + 1).fill(Infinity);
  
    // The minimum number of coins needed to make change for 0 is 0
    dp[0] = 0;
  
    // Iterate through each coin denomination
    for (const coin of coins) {
      // Update dp array for each amount from coin to amount
      for (let i = coin; i <= amount; i++) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  
    // If dp[amount] is still Infinity, it means it's not possible to make the change
    return dp[amount] === Infinity ? -1 : dp[amount];
  }
  
  // Example usage:
  const coinDenominations = [1, 2, 5];
  const targetAmount = 11;
  
  const result = minCoins(coinDenominations, targetAmount);
  console.log(result); // Should print 3 (2 coins of 5 and 1 coin of 1 to make 11)