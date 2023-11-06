class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Function to rearrange linked list in zig-zag fashion
  function zigZagLinkedList(head) {
    if (!head || !head.next) {
      return head; // No or single-node list doesn't need rearrangement
    }
  
    let current = head;
    let isLesser = true; // Flag to keep track of current relation (greater/lesser)
  
    while (current.next) {
      if (isLesser) {
        if (current.value > current.next.value) {
          // Swap values
          let temp = current.value;
          current.value = current.next.value;
          current.next.value = temp;
        }
      } else {
        if (current.value < current.next.value) {
          // Swap values
          let temp = current.value;
          current.value = current.next.value;
          current.next.value = temp;
        }
      }
  
      current = current.next;
      isLesser = !isLesser;
    }
  
    return head;
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
  let head = new ListNode(4);
  head.next = new ListNode(3);
  head.next.next = new ListNode(7);
  head.next.next.next = new ListNode(1);
  head.next.next.next.next = new ListNode(2);
  head.next.next.next.next.next = new ListNode(6);
  
  console.log("Original Linked List:");
  printLinkedList(head);
  
  let rearrangedHead = zigZagLinkedList(head);
  
  console.log("\nZig-Zag Rearranged Linked List:");
  printLinkedList(rearrangedHead);