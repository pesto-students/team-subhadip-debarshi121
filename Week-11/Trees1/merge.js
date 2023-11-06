class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function mergeBinaryTrees(tree1, tree2) {
    if (tree1 === null && tree2 === null) {
      return null;
    }
  
    if (tree1 === null) {
      return tree2;
    }
  
    if (tree2 === null) {
      return tree1;
    }
  
    const mergedNode = new TreeNode(tree1.value + tree2.value);
    mergedNode.left = mergeBinaryTrees(tree1.left, tree2.left);
    mergedNode.right = mergeBinaryTrees(tree1.right, tree2.right);
  
    return mergedNode;
  }
  
  // Example usage
  const tree1 = new TreeNode(1);
  tree1.left = new TreeNode(3);
  tree1.right = new TreeNode(2);
  tree1.left.left = new TreeNode(5);
  
  const tree2 = new TreeNode(2);
  tree2.left = new TreeNode(1);
  tree2.right = new TreeNode(3);
  tree2.left.right = new TreeNode(4);
  tree2.right.right = new TreeNode(7);
  
  const mergedTree = mergeBinaryTrees(tree1, tree2);
  console.log(mergedTree);