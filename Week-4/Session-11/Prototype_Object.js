const person = {
	getAge() {
		return this.age;
	},
	setAge(age) {
		this.age = age;
	},
};

Object.defineProperty(person, "name", {
	value: "Debarshi",
	writable: false,
	enumerable: true,
});

Object.defineProperty(person, "email", {
	value: "debarshi121@gmail.com",
	writable: false,
	enumerable: true,
});

Object.defineProperty(person, "age", {
	value: 28,
	writable: true,
	enumerable: false,
});

const Vehicle = {
	make: "VW",
	model: "Beetle",
	year: 2023,
	getDetails() {
		return `${this.make} ${this.model} ${this.year}`;
	},
};

const Car = {
	__proto__: Vehicle,
	numDoors: 2,
	getDetails() {
		return `${this.make} ${this.model} ${this.year} has ${this.numDoors} doors!`;
	},
};

const vehicle = Vehicle;
const car = Car;

console.log(vehicle.getDetails());
console.log(car.getDetails());
