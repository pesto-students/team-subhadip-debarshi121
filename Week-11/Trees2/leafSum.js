class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function hasPathSum(root, sum) {
    // Base case: if the tree is empty, there is no path
    if (!root) return false;
  
    // Subtract the current node's value from the sum
    sum -= root.val;
  
    // If it's a leaf node and the remaining sum is 0, there's a path
    if (!root.left && !root.right && sum === 0) {
      return true;
    }
  
    // Recursively check the left and right subtrees
    return (
      hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
    );
  }
  
  // Example usage:
  const root = new TreeNode(5);
  root.left = new TreeNode(4);
  root.right = new TreeNode(8);
  root.left.left = new TreeNode(11);
  root.right.left = new TreeNode(13);
  root.right.right = new TreeNode(4);
  root.left.left.left = new TreeNode(7);
  root.left.left.right = new TreeNode(2);
  root.right.right.right = new TreeNode(1);
  
  const targetSum = 22;
  
  console.log(hasPathSum(root, targetSum)); // Should print true for the example input