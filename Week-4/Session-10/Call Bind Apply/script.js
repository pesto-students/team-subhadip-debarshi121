class Calculator {
	add(num1, num2) {
		return num1 + num2;
	}
	subtract(num1, num2) {
		return num1 - num2;
	}
	multiply(num1, num2) {
		return num1 * num2;
	}
	divide(num1, num2) {
		return num1 / num2;
	}
}
class ScientificCalculator extends Calculator {
	square(num) {
		return num * num;
	}
	cube(num) {
		return num * num * num;
	}
	power(num, pow) {
		return Math.pow(num, pow);
	}
}

const calc = new ScientificCalculator();

console.log(Calculator.prototype.add.call(calc, 10, 5));
console.log(Calculator.prototype.subtract.apply(calc, [10, 5]));

const multiplyByTwo = Calculator.prototype.multiply.bind(calc, 2);
const powerOfThree = ScientificCalculator.prototype.power.bind(calc, 3);

console.log(multiplyByTwo(5));
console.log(powerOfThree(2));