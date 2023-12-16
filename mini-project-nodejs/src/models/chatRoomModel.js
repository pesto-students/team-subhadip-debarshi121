const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const ChatRoom = sequelize.define(
	"ChatRoom",
	{
		room: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		}
	},
	{
		// Other model options go here
	}
);

module.exports = ChatRoom;
