const mongoose = require("mongoose");

const incomeExpenseSchema = new mongoose.Schema({
	UserId: {
		type: mongoose.Schema.ObjectId,
		required: [true, "UserId can not be empty!"],
	},
	category: {
		type: String,
		required: [true, "Category can not be empty!"],
	},
	amount: {
		type: Number,
		required: [true, "Amount can not be empty!"],
	},
	date: {
		type: Date,
		required: [true, "Date can not be empty!"],
	},
});

const IncomeExpense = mongoose.model("IncomeExpense", incomeExpenseSchema);

module.exports = IncomeExpense;
