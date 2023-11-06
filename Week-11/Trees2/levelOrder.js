class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function levelOrderTraversal(root) {
    if (!root) return []; // Return an empty array for an empty tree
  
    const result = [];
    const queue = [root];
  
    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.val);
  
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  
    return result;
  }
  
  // Function to build a binary tree from given input format
  function buildTree(numNodes, values, leftIndices, rightIndices) {
    const nodes = Array.from({ length: numNodes }, (_, index) => new TreeNode(values[index]));
  
    for (let i = 0; i < numNodes; i++) {
      if (leftIndices[i] !== -1) {
        nodes[i].left = nodes[leftIndices[i]];
      }
      if (rightIndices[i] !== -1) {
        nodes[i].right = nodes[rightIndices[i]];
      }
    }
  
    return nodes[0]; // Return the root of the binary tree
  }
  
  // Example usage:
  const numNodes = 7;
  const values = [1, 2, 3, 4, 5, 6, 7];
  const leftIndices = [1, 2, -1, 4, -1, -1, -1];
  const rightIndices = [3, 5, -1, 6, -1, -1, -1];
  
  const root = buildTree(numNodes, values, leftIndices, rightIndices);
  const result = levelOrderTraversal(root);
  
  console.log(result); // Should print [1, 2, 3, 4, 5, 6, 7] for the example input