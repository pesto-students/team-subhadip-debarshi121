function countWaysToTop(n) {
    if (n <= 0) {
      return 0; // No ways to climb
    } else if (n === 1) {
      return 1; // Only one way to climb, taking one step
    }
  
    // Initialize an array to store the number of ways to reach each step
    const ways = new Array(n + 1);
    
    // There's one way to reach the first step (taking one step)
    ways[1] = 1;
    
    // There are two ways to reach the second step (taking two steps or two steps of one)
    ways[2] = 2;
  
    // Calculate the number of ways for the remaining steps using dynamic programming
    for (let i = 3; i <= n; i++) {
      ways[i] = ways[i - 1] + ways[i - 2];
    }
  
    // The result is the number of ways to reach the top step (n)
    return ways[n];
  }
  
  // Example usage:
  const n = 5; // Change this value to the desired number of steps
  const ways = countWaysToTop(n);
  console.log(`Number of distinct ways to reach the top of ${n} steps: ${ways}`);