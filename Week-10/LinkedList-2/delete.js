function deleteNodeWithoutHead(nodeToDelete, previousNode) {
    if (!nodeToDelete) {
      return; // Node doesn't exist, nothing to delete
    }
  
    if (!previousNode) {
      throw new Error("Previous node reference is required to delete a node without the head.");
    }
  
    previousNode.next = nodeToDelete.next; // Skip the node to delete
    // Optionally: Clean up the references to help with garbage collection
    nodeToDelete.next = null;
  }
  
  // Example usage
  let head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  
  let nodeToDelete = head.next; // Node with value 2
  let previousNode = head;      // Node with value 1
  
  deleteNodeWithoutHead(nodeToDelete, previousNode);