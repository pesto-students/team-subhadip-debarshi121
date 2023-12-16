class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function areIdenticalTrees(tree1, tree2) {
    if (tree1 === null && tree2 === null) {
      return true; // Both trees are empty and identical
    }
    
    if (tree1 === null || tree2 === null) {
      return false; // One tree is empty while the other is not
    }
    
    // Compare the current node's value and recurse on left and right subtrees
    return (
      tree1.value === tree2.value &&
      areIdenticalTrees(tree1.left, tree2.left) &&
      areIdenticalTrees(tree1.right, tree2.right)
    );
  }
  
  // Example usage
  const root1 = new TreeNode(4);
  root1.left = new TreeNode(2);
  root1.right = new TreeNode(6);
  root1.left.left = new TreeNode(1);
  root1.left.right = new TreeNode(3);
  root1.right.left = new TreeNode(5);
  root1.right.right = new TreeNode(7);
  
  const root2 = new TreeNode(4);
  root2.left = new TreeNode(2);
  root2.right = new TreeNode(6);
  root2.left.left = new TreeNode(1);
  root2.left.right = new TreeNode(3);
  root2.right.left = new TreeNode(5);
  root2.right.right = new TreeNode(7);
  
  const areIdentical = areIdenticalTrees(root1, root2);
  console.log("Are the two trees identical?", areIdentical);