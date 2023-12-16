class Node {
	constructor(key) {
		this.key = key;
		this.next = null;
	}
}

function reverseList(head) {
	if (!head.next) {
		return head;
	}
	const rest = reverseList(head.next);
	head.next.next = head;
	head.next = null;
	return rest;
}

function sortedMerge(a, b) {
	a = reverseList(a);

	b = reverseList(b);

	let head = null;
	let temp;

	while (a && b) {
		if (a.key >= b.key) {
			temp = a.next;
			a.next = head;
			head = a;
			a = temp;
		} else {
			temp = b.next;
			b.next = head;
			head = b;
			b = temp;
		}
	}

	while (a) {
		temp = a.next;
		a.next = head;
		head = a;
		a = temp;
	}

	while (b) {
		temp = b.next;
		b.next = head;
		head = b;
		b = temp;
	}

	return head;
}

function printList(node) {
	let result = "";
	while (node) {
		result += node.key + " ";
		node = node.next;
	}
	console.log(result);
}

let res = null;

const a = new Node(5);
a.next = new Node(10);
a.next.next = new Node(15);
a.next.next.next = new Node(40);

const b = new Node(2);
b.next = new Node(3);
b.next.next = new Node(20);

res = sortedMerge(a, b);

console.log("Merged Linked List is:");
printList(res);
