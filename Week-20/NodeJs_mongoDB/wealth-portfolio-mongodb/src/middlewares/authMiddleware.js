const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
	let token;

	if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
		token = req.headers.authorization.split(" ")[1];
	}
	if (!token) {
		return res.status(401).json({error: "You are not logged in!"});
	}

	jwt.verify(token, JWT_SECRET, (err, decoded) => {
		if (err) {
			return res.status(401).send({
				message: "Unauthorized!",
			});
		}
		req.user = decoded;
		return next();
	});
};

module.exports = {protect};
