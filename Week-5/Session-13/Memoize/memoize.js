const temperatureData = {
	"New York": 20,
	London: 18,
	Paris: 22,
	Tokyo: 25,
	Sydney: 28,
};

const getTemperatureForCity = () => {
	const cache = {};

	return (cityName) => {
		if (cache[cityName]) {
			return cache[cityName];
		}
		const temparature = temperatureData[cityName];
		cache[cityName] = temparature;
		return temparature;
	};
};

const getTemperature = getTemperatureForCity();

const temperature1 = getTemperature("New York");
console.log(temperature1);
const temperature2 = getTemperature("New York");
console.log(temperature2);
const temperature3 = getTemperature("London");
console.log(temperature3);
const temperature4 = getTemperature("London");
console.log(temperature4);