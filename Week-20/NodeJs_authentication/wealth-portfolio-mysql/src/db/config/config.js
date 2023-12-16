const config = require("../../config");

module.exports = {
	development: {
		username: config.DB.USERNAME,
		password: config.DB.PASSWORD || null,
		database: config.DB.NAME,
		host: config.DB.HOST,
		port: config.DB.PORT,
		dialect: "mysql",
	},
	test: {
		username: "root",
		password: null,
		database: "database_test",
		host: "127.0.0.1",
		dialect: "mysql",
	},
	production: {
		username: "root",
		password: null,
		database: "database_production",
		host: "127.0.0.1",
		dialect: "mysql",
	},
};
