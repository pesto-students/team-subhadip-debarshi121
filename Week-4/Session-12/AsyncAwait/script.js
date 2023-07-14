async function getExchangeRate(currencyCode) {
	try {
		let res = await fetch("https://api.exchangerate.host/latest");
		res = await res.json();
		if (res.rates[currencyCode]) {
			return parseFloat(res.rates[currencyCode].toFixed(4));
		} else {
			return null;
		}
	} catch (error) {
		return "Something is wrong!";
	}
}

getExchangeRate("INR")
	.then((rate) => {
		console.log(rate);
	})
	.catch((error) => {
		console.error(error);
	});
