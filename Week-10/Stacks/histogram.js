function largestRectangleArea(heights) {
    const stack = []; // Stack to store indices of increasing bar heights
    let maxArea = 0;
  
    for (let i = 0; i <= heights.length; i++) {
      const currentHeight = i < heights.length ? heights[i] : 0;
  
      while (stack.length > 0 && currentHeight <= heights[stack[stack.length - 1]]) {
        const height = heights[stack.pop()];
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
      }
  
      stack.push(i);
    }
  
    return maxArea;
  }
  
  // Example usage
  const histogram = [2, 1, 5, 6, 2, 3];
  const largestArea = largestRectangleArea(histogram);
  console.log("Area of the largest rectangle:", largestArea);