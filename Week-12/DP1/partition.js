function canPartition(nums) {
    const sum = nums.reduce((acc, num) => acc + num, 0);
  
    // If the sum is odd, it cannot be partitioned into two equal subsets
    if (sum % 2 !== 0) {
      return false;
    }
  
    const targetSum = sum / 2;
    const dp = new Array(targetSum + 1).fill(false);
    dp[0] = true;
  
    for (const num of nums) {
      for (let i = targetSum; i >= num; i--) {
        dp[i] = dp[i] || dp[i - num];
      }
    }
  
    return dp[targetSum];
  }
  
  // Example usage:
  const nums = [1, 5, 11, 5];
  
  const result = canPartition(nums);
  console.log(result); // Should print true (subset [1, 5, 5] and subset [11] have equal sums)