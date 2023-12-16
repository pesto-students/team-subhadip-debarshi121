const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Asset = sequelize.define(
	"Asset",
	{
		UserId: {
			type: DataTypes.INTEGER,
		},
		type: {
			type: DataTypes.STRING(255),
		},
		name: {
			type: DataTypes.STRING(255),
		},
		value: {
			type: DataTypes.DECIMAL(10, 2),
		},
	},
	{
		// Other model options go here
	}
);

module.exports = Asset;
