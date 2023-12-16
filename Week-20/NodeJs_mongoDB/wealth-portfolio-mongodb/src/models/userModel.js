const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "A user must have a name"],
	},
	email: {
		type: String,
		required: [true, "A user must have a valid email"],
		unique: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: [true, "Please provide a password"],
	},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
