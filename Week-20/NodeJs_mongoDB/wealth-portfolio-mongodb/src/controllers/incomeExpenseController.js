const {incomeExpenseService} = require("../services");
const {IncomeExpense} = require("../models");
const mongoose = require("mongoose");

const createIncomeExpense = async (req, res) => {
	try {
		const {category, amount, date} = req.body;
		const incomeExpense = await incomeExpenseService.create(req.user._id, category, amount, date);
		return res.status(201).json({incomeExpense});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
};

const getIncomeExpense = async (req, res) => {
	try {
		const {filter, year, month} = req.query;
		const filterTypes = ["Expense", "Income"];

		const filterOptions = {
			UserId: new mongoose.Types.ObjectId(req.user._id),
		};

		if (filter && filterTypes.includes(filter)) {
			filterOptions.category = filter;
		}

		if (year) {
			filterOptions.date = {};

			if (month) {
				filterOptions.date.$gte = `${year}-${month.padStart(2, "0")}-01`;
				const nextMonth = (parseInt(month) + 1).toString().padStart(2, "0");
				filterOptions.date.$lt = `${year}-${nextMonth}-01`;
			} else {
				filterOptions.date.$gte = `${year}-01-01`;
				filterOptions.date.$lt = `${year}-12-31`;
			}
		}

		const incomeExpense = await IncomeExpense.find(filterOptions);

		delete filterOptions.category;

		const financialSummary = await IncomeExpense.aggregate([
			{
				$match: filterOptions,
			},
			{
				$group: {
					_id: null,
					total_income: {
						$sum: {
							$cond: {
								if: {$eq: ["$category", "Income"]},
								then: "$amount",
								else: 0,
							},
						},
					},
					total_expenses: {
						$sum: {
							$cond: {
								if: {$eq: ["$category", "Expense"]},
								then: "$amount",
								else: 0,
							},
						},
					},
				},
			},
			{
				$project: {
					_id: 0, // Exclude _id field
					total_income: 1,
					total_expenses: 1,
				},
			},
		]);

		const income = parseFloat(financialSummary[0]?.total_income || 0);
		const expenses = parseFloat(financialSummary[0]?.total_expenses || 0);
		const savings = income - expenses > 0 ? income - expenses : 0;

		return res.status(200).json({incomeExpense, financialSummary: {income, expenses, savings}});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
};

const deleteIncomeExpense = async (req, res) => {
	try {
		const incomeExpense = await incomeExpenseService.getIncomeExpenseById(req.params.id);

		if (incomeExpense) {
			if (incomeExpense.UserId.toString() !== req.user._id) {
				return res.status(403).json({error: "You are not authorized to perform this!"});
			}
			await incomeExpenseService.deleteIncomeExpenseById(req.params.id);
			return res.status(200).json({message: "Income Expense deleted!"});
		}
		return res.status(404).json({error: "Income Expense not found!"});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
};

const updateIncomeExpense = async (req, res) => {
	try {
		const incomeExpense = await incomeExpenseService.getIncomeExpenseById(req.params.id);

		if (incomeExpense) {
			if (incomeExpense.UserId.toString() !== req.user._id) {
				return res.status(403).json({error: "You are not authorized to perform this!"});
			}
			incomeExpense.set({
				...incomeExpense,
				...req.body,
			});
			await incomeExpense.save();
			return res.status(200).json(incomeExpense);
		}
		return res.status(404).json({error: "Income Expense not found!"});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
};

module.exports = {
	createIncomeExpense,
	getIncomeExpense,
	deleteIncomeExpense,
	updateIncomeExpense,
};
