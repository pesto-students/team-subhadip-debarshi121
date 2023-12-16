const { incomeExpenseService } = require("../services");
const { IncomeExpense } = require("../models");
const { Op, fn, literal } = require("sequelize");

const createIncomeExpense = async (req, res) => {
	try {
		const { category, amount, date } = req.body;
		const incomeExpense = await incomeExpenseService.create(req.user.id, category, amount, date);
		return res.status(201).json({ incomeExpense });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const getIncomeExpense = async (req, res) => {
	try {
		const { filter, year, month } = req.query;
		const filterTypes = ["Expense", "Income"];

		const filterOptions = {
			UserId: req.user.id,
		};

		if (filter && filterTypes.includes(filter)) {
			filterOptions.category = filter;
		}

		if (year) {
			filterOptions.date = {
				[Op.gte]: `${year}-01-01`,
				[Op.lte]: `${year}-12-31`,
			};

			if (month) {
				const startDate = `${year}-${month.padStart(2, "0")}-01`;
				const nextMonth = (parseInt(month) + 1).toString().padStart(2, "0");
				const endDate = `${year}-${nextMonth}-01`;

				filterOptions.date = {
					[Op.gte]: startDate,
					[Op.lt]: endDate,
				};
			}
		}

		const incomeExpense = await IncomeExpense.findAll({ where: filterOptions });

		delete filterOptions.category;
		const financialSummary = await IncomeExpense.findAll({
			attributes: [
				[fn("SUM", literal('CASE WHEN category = "Income" THEN amount ELSE 0 END')), "total_income"],
				[fn("SUM", literal('CASE WHEN category = "Expense" THEN amount ELSE 0 END')), "total_expenses"],
			],
			where: filterOptions,
			raw: true,
		});

		const income = parseFloat(financialSummary[0].total_income || 0);
		const expenses = parseFloat(financialSummary[0].total_expenses || 0);
		const savings = income - expenses > 0 ? income - expenses : 0;

		return res.status(200).json({ incomeExpense, financialSummary: { income, expenses, savings } });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const deleteIncomeExpense = async (req, res) => {
	try {
		const incomeExpense = await incomeExpenseService.getIncomeExpenseById(req.params.id);

		if (incomeExpense) {
			if (incomeExpense.UserId !== req.user.id) {
				return res.status(403).json({ error: "You are not authorized to perform this!" });
			}
			await incomeExpenseService.deleteIncomeExpenseById(req.params.id);
			return res.status(200).json({ message: "Income Expense deleted!" });
		}
		return res.status(404).json({ error: "Income Expense not found!" });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const updateIncomeExpense = async (req, res) => {
	try {
		const incomeExpense = await incomeExpenseService.getIncomeExpenseById(req.params.id);

		if (incomeExpense) {
			if (incomeExpense.UserId !== req.user.id) {
				return res.status(403).json({ error: "You are not authorized to perform this!" });
			}
			await incomeExpense.set({
				...incomeExpense,
				...req.body,
			});
			await incomeExpense.save();
			await incomeExpense.reload();
			return res.status(200).json(incomeExpense);
		}
		return res.status(404).json({ error: "Income Expense not found!" });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = {
	createIncomeExpense,
	getIncomeExpense,
	deleteIncomeExpense,
	updateIncomeExpense,
};
