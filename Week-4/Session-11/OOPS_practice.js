class Vehicle {
	constructor(make, model, year, color) {
		this.make = make;
		this.model = model;
		this.year = year;
		this.color = color;
	}
	drive() {
		console.log(`Driving ${this.make} ${this.model}.`);
	}
}

class Car extends Vehicle {
	constructor(make, model, year, color, numSeats) {
		super(make, model, year, color);
		this.numSeats = numSeats;
	}
}

class RideShareCar extends Car {
	constructor(make, model, year, color, numSeats, isAvailable) {
		super(make, model, year, color, numSeats);
		this.isAvailable = isAvailable;
	}
}

class Shape {
	calculateArea() {}
}

class Rectangle extends Shape {
	constructor(width, height) {
		super();
		this.width = width;
		this.height = height;
	}
	calculateArea() {
		return this.width * this.height;
	}
}
class Triangle extends Shape {
	constructor(base, height) {
		super();
		this.base = base;
		this.height = height;
	}
	calculateArea() {
		return (this.base * this.height) / 2;
	}
}
class Circle extends Shape {
	constructor(radius) {
		super();
		this.radius = radius;
	}
	calculateArea() {
		return Math.PI * this.radius * this.radius;
	}
}

const rectangle = new Rectangle(3, 6);
const triangle = new Triangle(5, 6);
const circle = new Circle(3);

console.log(rectangle.calculateArea());
console.log(triangle.calculateArea());
console.log(circle.calculateArea());

class BankAccount {
	#accountNumber = 1234567;
	#balance = 0;
	#accountHolderName = "Debarshi Das";

	deposit(amount) {
		this.#balance += amount;
	}

	withdraw(amount) {
		this.#balance -= amount;
	}

	getBalance() {
		return this.#balance;
	}
}

class CheckingAccount extends BankAccount {
	deposit(amount) {
		super.deposit(amount);
	}
	withdraw(amount) {
		super.withdraw(amount);
	}
	getBalance() {
		return super.getBalance();
	}
}

class SavingsAccount extends BankAccount {
	deposit(amount) {
		super.deposit(amount);
	}
	withdraw(amount) {
		if (this.getBalance() - amount >= 0) {
			super.withdraw(amount);
		}
	}
	getBalance() {
		return super.getBalance();
	}
}

const checkingAccount = new CheckingAccount();
const savingsAccount = new SavingsAccount();

console.log(checkingAccount.deposit(5000));
console.log(checkingAccount.withdraw(500));
console.log(checkingAccount.getBalance());

console.log(savingsAccount.deposit(2000));
console.log(savingsAccount.withdraw(10000));
console.log(savingsAccount.getBalance());
