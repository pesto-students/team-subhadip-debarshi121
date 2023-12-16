class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function bstToSortedList(root) {
    const dummyHead = new ListNode(-1);
    let current = dummyHead;
  
    function inOrderTraversal(node) {
      if (node === null) {
        return;
      }
  
      inOrderTraversal(node.left);
  
      current.next = new ListNode(node.value);
      current = current.next;
  
      inOrderTraversal(node.right);
    }
  
    inOrderTraversal(root);
  
    return dummyHead.next;
  }
  
  // Example usage
  const root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.right = new TreeNode(5);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);
  
  const sortedList = bstToSortedList(root);
  
  // Print the sorted linked list
  let current = sortedList;
  while (current) {
    console.log(current.value);
    current = current.next;
  }