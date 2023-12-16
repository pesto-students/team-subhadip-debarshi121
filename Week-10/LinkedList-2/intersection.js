class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Function to find the length of a linked list
  function getLinkedListLength(head) {
    let length = 0;
    let current = head;
    while (current) {
      length++;
      current = current.next;
    }
    return length;
  }
  
  // Function to find the intersection point of two linked lists
  function findIntersectionPoint(list1, list2) {
    const length1 = getLinkedListLength(list1);
    const length2 = getLinkedListLength(list2);
  
    let current1 = list1;
    let current2 = list2;
  
    // Move the longer list's pointer ahead by the difference in lengths
    if (length1 > length2) {
      for (let i = 0; i < length1 - length2; i++) {
        current1 = current1.next;
      }
    } else {
      for (let i = 0; i < length2 - length1; i++) {
        current2 = current2.next;
      }
    }
  
    // Traverse both lists until they meet at the intersection point
    while (current1 !== current2) {
      current1 = current1.next;
      current2 = current2.next;
    }
  
    return current1; // This is the intersection point, or null if there's no intersection
  }
  
  // Example usage
  // Create linked lists
  let commonNode = new ListNode(7);
  commonNode.next = new ListNode(8);
  
  let list1 = new ListNode(3);
  list1.next = new ListNode(1);
  list1.next.next = commonNode;
  
  let list2 = new ListNode(5);
  list2.next = new ListNode(6);
  list2.next.next = commonNode;
  
  // Find the intersection point
  let intersectionPoint = findIntersectionPoint(list1, list2);
  
  if (intersectionPoint) {
    console.log("Intersection Point Value:", intersectionPoint.value);
  } else {
    console.log("No Intersection Point");
  }