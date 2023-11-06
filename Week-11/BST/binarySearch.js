class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function isBST(root) {
    let prevValue = Number.MIN_SAFE_INTEGER;
    let isValid = true;
  
    function inOrderTraversal(node) {
      if (node === null || !isValid) {
        return;
      }
  
      inOrderTraversal(node.left);
  
      if (node.value <= prevValue) {
        isValid = false;
        return;
      }
      prevValue = node.value;
  
      inOrderTraversal(node.right);
    }
  
    inOrderTraversal(root);
  
    return isValid;
  }
  
  // Example usage
  const root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.right = new TreeNode(5);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);
  
  const isValidBST = isBST(root);
  console.log("Is the binary tree a valid BST?", isValidBST); //