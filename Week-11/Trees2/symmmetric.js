class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function isSymmetric(root) {
    // Helper function to check if two subtrees are symmetric
    function isMirror(leftSubtree, rightSubtree) {
      // If both subtrees are null, they are symmetric
      if (!leftSubtree && !rightSubtree) {
        return true;
      }
      
      // If one of the subtrees is null, they are not symmetric
      if (!leftSubtree || !rightSubtree) {
        return false;
      }
  
      // Check if the current nodes are equal and their subtrees are symmetric
      return (
        leftSubtree.val === rightSubtree.val &&
        isMirror(leftSubtree.left, rightSubtree.right) &&
        isMirror(leftSubtree.right, rightSubtree.left)
      );
    }
  
    // Check if the tree is symmetric starting from the root
    return isMirror(root, root);
  }

  const symmetricTree = new TreeNode(1);
symmetricTree.left = new TreeNode(2);
symmetricTree.right = new TreeNode(2);
symmetricTree.left.left = new TreeNode(3);
symmetricTree.left.right = new TreeNode(4);
symmetricTree.right.left = new TreeNode(4);
symmetricTree.right.right = new TreeNode(3);

console.log(isSymmetric(symmetricTree)); // Should print true

// Create a non-symmetric tree
const nonSymmetricTree = new TreeNode(1);
nonSymmetricTree.left = new TreeNode(2);
nonSymmetricTree.right = new TreeNode(2);
nonSymmetricTree.left.right = new TreeNode(3);
nonSymmetricTree.right.right = new TreeNode(3);

console.log(isSymmetric(nonSymmetricTree)); // Should print false