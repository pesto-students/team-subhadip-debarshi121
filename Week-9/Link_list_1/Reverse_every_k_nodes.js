class Node {
	constructor(a) {
		this.data = a;
		this.next = null;
	}
}

function push(head, val) {
	newNode = new Node(val);
	if (head == null) {
		head = newNode;
		return head;
	}

	temp = head;
	while (temp.next != null) {
		temp = temp.next;
	}
	temp.next = newNode;
	return head;
}

function reverse(head, k) {
	if (head == null || head.next == null) {
		return head;
	}

	var dummy = new Node(-1);
	dummy.next = head;

	var prev = dummy;
	var curr = dummy;
	var next = dummy;

	let count = 0;
	while (curr != null) {
		count++;
		curr = curr.next;
	}

	while (next != null) {
		curr = prev.next;

		next = curr.next;

		let toLoop = count > k ? k : count - 1;

		for (let i = 1; i < toLoop; i++) {
			curr.next = next.next;
			next.next = prev.next;
			prev.next = next;
			next = curr.next;
		}
		prev = curr;
		count -= k;
	}
	return dummy.next;
}

function print(head) {
	while (head.next != null) {
		console.log(head.data + " ");
		head = head.next;
	}
	console.log(head.data);
}

var head = null;
let k = 3;
head = push(head, 1);
head = push(head, 2);
head = push(head, 3);
head = push(head, 4);
head = push(head, 5);
head = push(head, 6);
head = push(head, 7);
head = push(head, 8);

console.log("Given linked list");
print(head);
console.log("Reversed linked list");
var newHead = reverse(head, k);
print(newHead);
