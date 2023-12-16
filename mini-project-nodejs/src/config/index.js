require("dotenv").config();

module.exports = {
	DB: {
		USERNAME: process.env.DB_USERNAME,
		PASSWORD: process.env.DB_PASSWORD,
		NAME: process.env.DB_NAME,
		HOST: process.env.DB_HOST,
		PORT: process.env.DB_PORT,
	},
    SERVER: {
        PORT: process.env.SERVER_PORT
    },
	JWT_SECRET : process.env.JWT_SECRET
};
