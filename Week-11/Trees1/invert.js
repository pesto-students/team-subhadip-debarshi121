class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function invertBinaryTree(root) {
    if (root === null) {
      return null;
    }
  
    // Swap left and right children
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
  
    // Recurse on left and right subtrees
    invertBinaryTree(root.left);
    invertBinaryTree(root.right);
  
    return root;
  }
  
  // Example usage
  const root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.right = new TreeNode(7);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(9);
  
  console.log("Original binary tree:");
  console.log(root);
  
  const invertedTree = invertBinaryTree(root);
  
  console.log("Inverted binary tree:");
  console.log(invertedTree);