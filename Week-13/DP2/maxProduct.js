function maxProductSubarray(nums) {
    if (nums.length === 0) {
      return 0;
    }
  
    // Initialize variables to track the maximum and minimum products
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];
  
    // Iterate through the array, keeping track of both max and min products
    for (let i = 1; i < nums.length; i++) {
      // Swap maxProduct and minProduct if the current number is negative
      if (nums[i] < 0) {
        [maxProduct, minProduct] = [minProduct, maxProduct];
      }
  
      // Update the maximum and minimum products ending at the current index
      maxProduct = Math.max(nums[i], maxProduct * nums[i]);
      minProduct = Math.min(nums[i], minProduct * nums[i]);
  
      // Update the result with the maximum product found so far
      result = Math.max(result, maxProduct);
    }
  
    return result;
  }
  
  // Example usage:
  const nums = [2, 3, -2, 4]; // Change this array to your input
  const maxProduct = maxProductSubarray(nums);
  console.log(`Maximum product of the contiguous subarray: ${maxProduct}`);