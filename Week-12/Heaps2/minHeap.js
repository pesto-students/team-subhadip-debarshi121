class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = this.right = null;
    }
  }
  
  function inOrderTraversal(root, values) {
    if (root === null) {
      values.push(-1); // Represent null nodes with -1
      return;
    }
    inOrderTraversal(root.left, values);
    values.push(root.val);
    inOrderTraversal(root.right, values);
  }
  
  function sortedArrayToMinHeap(sortedArray) {
    if (sortedArray.length === 0) {
      return null;
    }
  
    const mid = Math.floor(sortedArray.length / 2);
    const root = new TreeNode(sortedArray[mid]);
  
    root.left = sortedArrayToMinHeap(sortedArray.slice(0, mid));
    root.right = sortedArrayToMinHeap(sortedArray.slice(mid + 1));
  
    return root;
  }
  
  function binaryTreeToMinHeap(root) {
    const values = [];
    inOrderTraversal(root, values);
  
    // Filter out the -1 (null) values
    const sortedArray = values.filter(val => val !== -1).sort((a, b) => a - b);
  
    return sortedArrayToMinHeap(sortedArray);
  }
  
  // Helper function to print the binary tree in level order (for testing)
  function levelOrderTraversal(root) {
    const result = [];
    const queue = [];
  
    if (root !== null) {
      queue.push(root);
    }
  
    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.val);
  
      if (node.left !== null) {
        queue.push(node.left);
      }
  
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  
    return result;
  }
  
  // Example usage:
  const binaryTree = new TreeNode(4);
  binaryTree.left = new TreeNode(2);
  binaryTree.right = new TreeNode(6);
  binaryTree.left.left = new TreeNode(1);
  binaryTree.left.right = new TreeNode(3);
  binaryTree.right.left = new TreeNode(5);
  binaryTree.right.right = new TreeNode(7);
  
  console.log("Original Binary Tree (in-order traversal):", levelOrderTraversal(binaryTree));
  
  const minHeapTree = binaryTreeToMinHeap(binaryTree);
  console.log("Min Heap Binary Tree (level order traversal):", levelOrderTraversal(minHeapTree));