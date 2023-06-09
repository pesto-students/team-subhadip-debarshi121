const person = {
	age : 28,
	get age() {
		return undefined;
	},
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

console.log(person.age);

const Vehicle = {
	make: "VW",
	model: "Beetle",
	year: 2023,
	getDetails() {
		return `${this.make} ${this.model} ${this.year}`;
	},
};

const Car = Object.create(Vehicle);

Car.numDoors = 2;
Car.getDetails = function () {
	return `${this.make} ${this.model} ${this.year} has ${this.numDoors} doors!`;
};

const vehicle = Vehicle;
const car = Car;

console.log(vehicle.getDetails());
console.log(car.getDetails());
