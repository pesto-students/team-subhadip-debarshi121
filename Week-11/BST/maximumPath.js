class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class MaxValue {
    constructor() {
      this.value = Number.MIN_SAFE_INTEGER;
    }
  }
  
  function maxPathSum(root) {
    const maxValue = new MaxValue();
    
    function findMaxPathSum(node) {
      if (node === null) {
        return 0;
      }
  
      // Calculate the maximum path sum for the left and right subtrees
      const leftMax = Math.max(0, findMaxPathSum(node.left));
      const rightMax = Math.max(0, findMaxPathSum(node.right));
  
      // Update the maximum path sum considering the current node
      const currentMaxPathSum = node.value + leftMax + rightMax;
      maxValue.value = Math.max(maxValue.value, currentMaxPathSum);
  
      // Return the maximum sum of a path that can include the current node
      return node.value + Math.max(leftMax, rightMax);
    }
  
    findMaxPathSum(root);
  
    return maxValue.value;
  }
  
  // Example usage
  const root = new TreeNode(10);
  root.left = new TreeNode(2);
  root.right = new TreeNode(10);
  root.left.left = new TreeNode(20);
  root.left.right = new TreeNode(1);
  root.right.right = new TreeNode(-25);
  root.right.right.left = new TreeNode(3);
  root.right.right.right = new TreeNode(4);
  
  const maxSum = maxPathSum(root);
  console.log("Maximum Path Sum:", maxSum);