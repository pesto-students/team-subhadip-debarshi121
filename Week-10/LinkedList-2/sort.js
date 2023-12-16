class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Function to sort a linked list of 0s, 1s, and 2s
  function sortLinkedList(head) {
    if (!head || !head.next) {
      return head; // Empty or single-node list is already sorted
    }
  
    let zeroHead = new ListNode(0);
    let oneHead = new ListNode(0);
    let twoHead = new ListNode(0);
  
    let zero = zeroHead;
    let one = oneHead;
    let two = twoHead;
  
    let current = head;
  
    while (current) {
      if (current.value === 0) {
        zero.next = current;
        zero = zero.next;
      } else if (current.value === 1) {
        one.next = current;
        one = one.next;
      } else {
        two.next = current;
        two = two.next;
      }
  
      current = current.next;
    }
  
    // Connect the lists
    zero.next = oneHead.next ? oneHead.next : twoHead.next;
    one.next = twoHead.next;
  
    // Set the tail node's next to null to terminate the sorted list
    two.next = null;
  
    // Return the sorted linked list
    return zeroHead.next;
  }
  
  // Function to print linked list
  function printLinkedList(head) {
    let current = head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  
  // Example usage
  let head = new ListNode(1);
  head.next = new ListNode(0);
  head.next.next = new ListNode(2);
  head.next.next.next = new ListNode(1);
  head.next.next.next.next = new ListNode(0);
  
  console.log("Original Linked List:");
  printLinkedList(head);
  
  let sortedHead = sortLinkedList(head);
  
  console.log("\nSorted Linked List:");
  printLinkedList(sortedHead);