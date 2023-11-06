function nextGreaterElements(nums) {
    const n = nums.length;
    const result = new Array(n).fill(-1); // Initialize result with -1
    const stack = []; // Stack to keep track of indices
  
    for (let i = 0; i < 2 * n; i++) {
      const num = nums[i % n]; // Circular array access
  
      while (stack.length > 0 && nums[stack[stack.length - 1]] < num) {
        const index = stack.pop();
        result[index] = num;
      }
  
      if (i < n) {
        stack.push(i);
      }
    }
  
    return result;
  }
  
  // Example usage
  const inputArray = [4, 5, 2, 10, 8];
  const nextGreater = nextGreaterElements(inputArray);
  console.log("Next Greater Elements:", nextGreater);