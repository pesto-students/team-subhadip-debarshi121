const userService = require("./userService");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const authenticate = async ({ email, password }) => {
	try {
		const user = await userService.getUserByEmail(email);

		if (!user) {
			throw new Error("User Not found.");
		}
		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) {
			throw new Error("Password not valid.");
		}

		const userJson = user.toJSON();

		delete userJson.password;

		const token = jwt.sign(userJson, JWT_SECRET, {
			algorithm: "HS256",
			allowInsecureKeySizes: true,
			expiresIn: 604800, // 1 week
		});

		return token;
	} catch (error) {
		throw error;
	}
};

module.exports = { authenticate };
