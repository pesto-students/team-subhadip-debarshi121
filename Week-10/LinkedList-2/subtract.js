class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Function to subtract two linked lists
  function subtractLinkedLists(list1, list2) {
    let resultHead = null;
    let resultCurrent = null;
    let borrow = 0;
  
    while (list1 || list2) {
      let value1 = list1 ? list1.value : 0;
      let value2 = list2 ? list2.value : 0;
  
      let diff = value1 - value2 - borrow;
      borrow = 0;
  
      if (diff < 0) {
        diff += 10;
        borrow = 1;
      }
  
      let newNode = new ListNode(diff);
  
      if (!resultHead) {
        resultHead = newNode;
        resultCurrent = newNode;
      } else {
        resultCurrent.next = newNode;
        resultCurrent = newNode;
      }
  
      if (list1) list1 = list1.next;
      if (list2) list2 = list2.next;
    }
  
    // Remove leading zeros
    while (resultHead && resultHead.value === 0 && resultHead.next) {
      resultHead = resultHead.next;
    }
  
    return resultHead;
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
  let list1 = new ListNode(7);
  list1.next = new ListNode(1);
  list1.next.next = new ListNode(6);
  
  let list2 = new ListNode(5);
  list2.next = new ListNode(9);
  list2.next.next = new ListNode(2);
  
  console.log("List 1:");
  printLinkedList(list1);
  console.log("List 2:");
  printLinkedList(list2);
  
  let result = subtractLinkedLists(list1, list2);
  
  console.log("\nSubtraction Result:");
  printLinkedList(result);