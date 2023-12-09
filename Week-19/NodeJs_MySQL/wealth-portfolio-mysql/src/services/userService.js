const { User } = require("../models");
const bcrypt = require("bcryptjs");

const getUserById = async (id) => {
	try {
		const user = await User.findByPk(id);
		return user;
	} catch (error) {
		throw error;
	}
};

const getUserByEmail = async (email) => {
	try {
		const user = await User.findOne({
			where: {
				email,
			},
		});
		return user;
	} catch (error) {
		throw error;
	}
};

const create = async ({ email, name, password }) => {
	try {
		const hashedPassword = await bcrypt.hash(password, 8);
		const user = await User.create({
			email,
			name,
			password: hashedPassword,
		});

		const userJson = user.toJSON();

		delete userJson.password;

		return userJson;
	} catch (error) {
		throw error;
	}
};

const getUserByEmailPassword = async ({ email, password }) => {
	try {
		const user = await getUserByEmail(email);

		if (!user) {
			throw new Error("User Not found.");
		}
		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) {
			throw new Error("Password not valid.");
		}

		const userJson = user.toJSON();

		delete userJson.password;

		return userJson;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getUserById,
	getUserByEmail,
	create,
	getUserByEmailPassword,
};
