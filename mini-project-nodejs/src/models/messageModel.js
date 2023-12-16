const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Message = sequelize.define(
	"Message",
	{
		room: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        message: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		// Other model options go here
	}
);

module.exports = Message;
