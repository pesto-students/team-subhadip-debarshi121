class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class Count {
    constructor() {
      this.value = 0;
    }
  }
  
  function kthSmallest(root, k) {
    const count = new Count();
    let result = null;
    
    function inOrderTraversal(node) {
      if (node === null || result !== null) {
        return;
      }
      
      inOrderTraversal(node.left);
      
      count.value++;
      if (count.value === k) {
        result = node.value;
        return;
      }
      
      inOrderTraversal(node.right);
    }
  
    inOrderTraversal(root);
  
    return result;
  }
  
  // Example usage
  const root = new TreeNode(3);
  root.left = new TreeNode(1);
  root.right = new TreeNode(4);
  root.left.right = new TreeNode(2);
  
  const k = 3;
  const kthSmallestElement = kthSmallest(root, k);
  console.log(`The ${k}th smallest element is:`, kthSmallestElement);