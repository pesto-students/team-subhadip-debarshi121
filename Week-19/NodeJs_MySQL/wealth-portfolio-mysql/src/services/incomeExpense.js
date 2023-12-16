const { IncomeExpense } = require("../models");

const getIncomeExpenseById = async (id) => {
	try {
		const incomeExpense = await IncomeExpense.findByPk(id);
		return incomeExpense;
	} catch (error) {
		throw error;
	}
};

const getAll = async (UserId) => {
	try {
		const incomeExpense = await IncomeExpense.findAll({ where: { UserId } });
		return incomeExpense;
	} catch (error) {
		throw error;
	}
};

const create = async (UserId, category, amount, date) => {
	try {
		const incomeExpense = await IncomeExpense.create({
			UserId,
			category,
			amount,
			date,
		});
		return incomeExpense;
	} catch (error) {
		throw error;
	}
};

const deleteIncomeExpenseById = async (id) => {
	try {
		await IncomeExpense.destroy({
			where: { id },
		});
		return true;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getAll,
	create,
	getIncomeExpenseById,
	deleteIncomeExpenseById,
};
