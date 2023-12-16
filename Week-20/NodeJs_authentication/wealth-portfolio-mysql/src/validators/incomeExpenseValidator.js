const Joi = require("joi");

const createValidator = (req, res, next) => {
	const allowedCategories = ["Income", "Expense"];

	const incomeExpenseSchema = Joi.object({
		category: Joi.string()
			.valid(...allowedCategories)
			.required(),
		amount: Joi.number().required(),
		date: Joi.date().required(),
	});

	const { error } = incomeExpenseSchema.validate(req.body);

	if (error) {
		return res.status(400).json({ error: error.message });
	}

	return next();
};

const updateValidator = (req, res, next) => {
	const allowedCategories = ["Income", "Expense"];

	const incomeExpenseSchema = Joi.object({
		category: Joi.string().valid(...allowedCategories),
		amount: Joi.number(),
		date: Joi.date(),
	});

	const { error } = incomeExpenseSchema.validate(req.body);

	if (error) {
		return res.status(400).json({ error: error.message });
	}

	return next();
};

module.exports = {
	createValidator,
	updateValidator,
};
