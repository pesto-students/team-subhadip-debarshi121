const Joi = require("joi");

const createJoinRoomValidator = (req, res, next) => {
	const roomSchema = Joi.object({
		room: Joi.string().required(),
	});

	const { error } = roomSchema.validate(req.body);

	if (error) {
		return res.status(400).json({ error: error.message });
	}

	return next();
};


module.exports = {
	createJoinRoomValidator,
};
