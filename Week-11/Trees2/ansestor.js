class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function findLowestCommonAncestor(root, node1, node2) {
    if (!root) return null;
  
    // If either node1 or node2 is the root, then the root is the LCA
    if (root.val === node1 || root.val === node2) {
      return root;
    }
  
    // Recursively search for LCA in the left and right subtrees
    const leftLCA = findLowestCommonAncestor(root.left, node1, node2);
    const rightLCA = findLowestCommonAncestor(root.right, node1, node2);
  
    // If both leftLCA and rightLCA are non-null, it means we've found LCA in both subtrees,
    // so the current node is the LCA
    if (leftLCA && rightLCA) {
      return root;
    }
  
    // Otherwise, return the non-null LCA (if any) from the left or right subtree
    return leftLCA || rightLCA;
  }
  
  // Example usage:
  const root = new TreeNode(3);
  root.left = new TreeNode(5);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(6);
  root.left.right = new TreeNode(2);
  root.right.left = new TreeNode(0);
  root.right.right = new TreeNode(8);
  root.left.right.left = new TreeNode(7);
  root.left.right.right = new TreeNode(4);
  
  const node1 = 5;
  const node2 = 1;
  const lca = findLowestCommonAncestor(root, node1, node2);
  
  console.log(lca.val); // Should print 3 for the example input