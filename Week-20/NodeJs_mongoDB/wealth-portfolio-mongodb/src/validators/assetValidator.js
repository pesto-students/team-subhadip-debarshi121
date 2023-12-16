const Joi = require("joi");

const createValidator = (req, res, next) => {
	const allowedAssetTypes = ["Assets", "Equity", "Fixed Income", "Alternatives"];

	const assetSchema = Joi.object({
		type: Joi.string()
			.valid(...allowedAssetTypes)
			.required(),
		name: Joi.string().required(),
		value: Joi.number().required(),
	});

	const { error } = assetSchema.validate(req.body);

	if (error) {
		return res.status(400).json({ error: error.message });
	}

	return next();
};

const updateValidator = (req, res, next) => {
	const allowedAssetTypes = ["Assets", "Equity", "Fixed Income", "Alternatives"];

	const assetSchema = Joi.object({
		type: Joi.string()
			.valid(...allowedAssetTypes),
		name: Joi.string(),
		value: Joi.number(),
	});

	const { error } = assetSchema.validate(req.body);

	if (error) {
		return res.status(400).json({ error: error.message });
	}

	return next();
};

module.exports = {
	createValidator,
	updateValidator
};
