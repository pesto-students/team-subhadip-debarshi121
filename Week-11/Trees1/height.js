class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function calculateHeight(node) {
    if (node === null) {
      return 0; // Height of an empty tree is 0
    }
  
    const leftHeight = calculateHeight(node.left);
    const rightHeight = calculateHeight(node.right);
  
    return Math.max(leftHeight, rightHeight) + 1;
  }
  
  // Example usage
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);
  
  const treeHeight = calculateHeight(root);
  console.log("Height of the binary tree:", treeHeight);