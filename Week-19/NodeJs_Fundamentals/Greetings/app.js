const generateGreeting = require("./greetings");

const fs = require("fs");
const readline = require("readline");

const interface = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

interface.question("Please enter your name: ", (name) => {
	const greeting = generateGreeting(name);

	fs.writeFile("output.txt", greeting, (err) => {
		if (err) {
			console.error("Error writing to file: ", err);
		} else {
			console.log("Greeting saved to output.txt");
		}
		interface.close();
	});
});