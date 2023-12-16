const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
	UserId: {
		type: mongoose.Schema.ObjectId,
		required: [true, "UserId can not be empty!"],
	},
	type: {
		type: String,
		required: [true, "Type can not be empty!"],
	},
	name: {
		type: String,
		required: [true, "Name can not be empty!"],
	},
	value: {
		type: Number,
		required: [true, "Value can not be empty!"],
	},
});

const Asset = mongoose.model("Asset", assetSchema);

module.exports = Asset;
