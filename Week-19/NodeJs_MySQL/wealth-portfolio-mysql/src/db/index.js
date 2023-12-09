const Sequelize = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize({
	username: config.DB.USERNAME,
	password: config.DB.PASSWORD || null,
	database: config.DB.NAME,
	host: config.DB.HOST,
	port: config.DB.PORT,
	dialect: "mysql",
	logging: false
});

module.exports = sequelize;