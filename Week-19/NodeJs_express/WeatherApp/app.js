require("dotenv").config();
const axios = require("axios");
const express = require("express");
const PORT = process.env.port || 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const API_KEY = process.env.WEATHER_API_KEY;

app.get("/api/v1/forecast", async (req, res) => {
	try {
		const city = req.query.city;
		const days = req.query.days;

		const resData = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${days}`);
		res.status(200).json({
			data: resData.data,
		});
	} catch (error) {
		res.status(400).json({
			error: error.message,
		});
	}
});

app.all("/*", (req, res) => {
	res.json({
		error: "API not found!",
	});
});

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
