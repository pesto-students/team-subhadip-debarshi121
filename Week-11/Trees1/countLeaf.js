class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function countLeafNodes(node) {
    if (node === null) {
      return 0; // Empty node doesn't contribute to leaf count
    }
  
    if (node.left === null && node.right === null) {
      return 1; // Node with no children is a leaf
    }
  
    const leftCount = countLeafNodes(node.left);
    const rightCount = countLeafNodes(node.right);
  
    return leftCount + rightCount;
  }
  
  // Example usage
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);
  
  const leafNodeCount = countLeafNodes(root);
  console.log("Number of leaf nodes in the binary tree:", leafNodeCount);