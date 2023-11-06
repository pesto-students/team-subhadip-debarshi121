class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  function isSubtree(tree, subtree) {
    // Helper function to check if two trees are identical
    function areTreesIdentical(root1, root2) {
      if (!root1 && !root2) return true;
      if (!root1 || !root2) return false;
      return (
        root1.val === root2.val &&
        areTreesIdentical(root1.left, root2.left) &&
        areTreesIdentical(root1.right, root2.right)
      );
    }
  
    // DFS function to search for a subtree match
    function dfs(node) {
      if (!node) return false;
      if (node.val === subtree.val && areTreesIdentical(node, subtree)) {
        return true;
      }
      return dfs(node.left) || dfs(node.right);
    }
  
    return dfs(tree);
  }

  const tree = new TreeNode(3);
tree.left = new TreeNode(4);
tree.right = new TreeNode(5);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(2);
tree.left.right.left = new TreeNode(0);

// Create the subtree
const subtree = new TreeNode(4);
subtree.left = new TreeNode(1);
subtree.right = new TreeNode(2);

// Check if subtree is a subtree of tree
const result = isSubtree(tree, subtree);
console.log(result); // Should print true