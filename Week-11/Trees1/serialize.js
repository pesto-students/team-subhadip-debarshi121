class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function serializeBinaryTree(root) {
    if (root === null) {
      return "null";
    }
  
    const leftSerialized = serializeBinaryTree(root.left);
    const rightSerialized = serializeBinaryTree(root.right);
  
    return `${root.value}(${leftSerialized})(${rightSerialized})`;
  }
  
  // Example usage
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  const serializedTree = serializeBinaryTree(root);
  console.log("Serialized binary tree:", serializedTree);