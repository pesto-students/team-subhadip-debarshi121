const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const IncomeExpense = sequelize.define(
	"IncomeExpense",
	{
		UserId: {
			type: DataTypes.INTEGER,
		},
		category: {
			type: DataTypes.STRING(255),
		},
		amount: {
			type: DataTypes.DECIMAL(10, 2),
		},
		date: {
			type: DataTypes.DATE,
		},
	},
	{
		// Other model options go here
	}
);

module.exports = IncomeExpense;
