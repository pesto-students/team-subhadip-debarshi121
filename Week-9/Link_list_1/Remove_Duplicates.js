class node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

function removeDuplicate(head) {
	var hs = new Set();

	var current = head;
	var prev = null;
	while (current != null) {
		var curval = current.val;

		if (hs.has(curval)) {
			prev.next = current.next;
		} else {
			hs.add(curval);
			prev = current;
		}
		current = current.next;
	}
}

function printList(head) {
	while (head != null) {
		console.log(head.val + " ");
		head = head.next;
	}
}

start = new node(10);
start.next = new node(12);
start.next.next = new node(11);
start.next.next.next = new node(11);
start.next.next.next.next = new node(12);
start.next.next.next.next.next = new node(11);
start.next.next.next.next.next.next = new node(10);

console.log("Linked list before removing duplicates :<br/>");
printList(start);

removeDuplicate(start);

console.log("<br/>Linked list after removing duplicates :<br/>");
printList(start);