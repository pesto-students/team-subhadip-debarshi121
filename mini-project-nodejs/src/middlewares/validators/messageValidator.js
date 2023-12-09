const Joi = require("joi");

const createMessageValidator = (req, res, next) => {
	const messageSchema = Joi.object({
		room: Joi.string().required(),
		message: Joi.string().required(),
	});

	const { error } = messageSchema.validate(req.body);

	if (error) {
		return res.status(400).json({ error: error.message });
	}

	return next();
};


module.exports = {
	createMessageValidator,
};
