function calcWordFrequencies() {
	let words = prompt("Enter words");
	words = words.split(" ");

	let map = new Map();
	words.forEach((word) => {
		if (map.has(word)) {
			let wordCount = map.get(word);
			map.set(word, wordCount + 1);
		} else {
			map.set(word, 1);
		}
	});
	console.log(map);
}
// This is what it is
