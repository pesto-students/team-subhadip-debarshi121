function parseDate(dateStr) {
	const [datePart, timePart] = dateStr.split(" ");
	const [year, month, day] = datePart.split("-").map(Number);
	const [hour, minute, second] = timePart.split(":").map(Number);
	return new Date(year, month - 1, day, hour, minute, second);
}

function shellSortDates(arr) {
	const n = arr.length;
	let gap = Math.floor(n / 2);

	while (gap > 0) {
		for (let i = gap; i < n; i++) {
			const temp = arr[i];
			let j = i;

			while (j >= gap && parseDate(arr[j - gap]) > parseDate(temp)) {
				arr[j] = arr[j - gap];
				j -= gap;
			}

			arr[j] = temp;
		}

		gap = Math.floor(gap / 2);
	}

	return arr;
}

console.log(shellSortDates(["2023-07-03 12:30:15", "2023-07-03 10:15:00", "2023-07-02 18:45:30", "2023-07-01 20:00:00"]));
