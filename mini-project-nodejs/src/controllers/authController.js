const { userService, authService } = require("../services");

const signup = async (req, res) => {
	try {
		const { email, name, password } = req.body;
		const user = await userService.getUserByEmail(email);

		if (user) {
			return res.status(400).send({ error: "Email already exists." });
		}

		const newUser = await userService.create({ email, name, password });

		return res.status(201).json(newUser);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		const token = await authService.authenticate({ email, password });

		return res.status(200).json({
			token,
		});
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
};

module.exports = {
	signup,
	login,
};
