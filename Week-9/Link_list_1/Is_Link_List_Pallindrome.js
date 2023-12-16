const isPalindrome = function (head) {
	let palindrome = [];

	while (head) {
		palindrome.push(head.val);
		head = head.next;
	}

	for (let i = 0, j = palindrome.length - 1; i < j; i++, j--) {
		if (palindrome[i] !== palindrome[j]) {
			return false;
		}
	}

	return true;
};

console.log(isPalindrome([1, 2, 2, 1]));