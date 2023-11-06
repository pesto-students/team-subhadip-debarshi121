function minCostToPaintHouses(costs) {
    if (costs.length === 0) {
      return 0;
    }
  
    const n = costs.length;
    
    // Create a DP table to store the minimum cost for each house and color
    const dp = new Array(n).fill(null).map(() => new Array(3).fill(0));
  
    // Initialize the DP table with the costs for the first house
    dp[0][0] = costs[0][0]; // Cost of painting the first house with color 0
    dp[0][1] = costs[0][1]; // Cost of painting the first house with color 1
    dp[0][2] = costs[0][2]; // Cost of painting the first house with color 2
  
    // Iterate through the houses and calculate the minimum cost
    for (let i = 1; i < n; i++) {
      dp[i][0] = costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
      dp[i][1] = costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
      dp[i][2] = costs[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
    }
  
    // The minimum cost will be the minimum of the costs for the last house
    return Math.min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]);
  }
  
  // Example usage:
  const costs = [
    [17, 2, 17],
    [16, 16, 5],
    [14, 3, 19],
  ]; // Change this array to represent your costs
  
  const minCost = minCostToPaintHouses(costs);
  console.log(`Minimum cost to paint all houses: ${minCost}`);