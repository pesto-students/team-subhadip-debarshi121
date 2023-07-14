const cache = {};

const button = document.getElementById("btn");

button.addEventListener("click", () => {
	document.getElementById("section-output").innerHTML = "";
	document.getElementById("section-error").innerHTML = "";
	const keyword = document.getElementById("input-keyword").value;
	if (keyword.trim() !== "") {
		button.disabled = true;
		generateQuotes(keyword);
	}
});

const generateQuotes = async (category) => {
	const URL = `https://api.api-ninjas.com/v1/quotes?category=${category}&limit=6`;
	const apiKey = "f1ORreJfh0vN6PwU3Z/Z9A==ANRNhsauUzT4zyXw";
	let data = [];

	const requestOptions = {
		method: "GET",
		headers: {
			"X-Api-Key": apiKey,
			"Content-Type": "application/json",
		},
	};

	if (cache[category]) {
		data = cache[category];
	} else {
		try {
			const response = await fetch(URL, requestOptions);
			data = await response.json();
			cache[category] = data;
		} catch (error) {
			console.error(error);
		}
	}

	if (data.length) {
		let quotesDivs = "";

		data.forEach((quote) => {
			const div = `
				<div class="quote-card">
					<p>${quote.quote}</p>
					<cite>- ${quote.author}</cite>
				</div>
			`;
			quotesDivs += div;
		});

		document.getElementById("section-output").innerHTML = quotesDivs;
	} else {
		document.getElementById("section-error").innerHTML = "<p>No quotes found. Please try different keywords!</p>";
	}
	button.disabled = false;
};