require("dotenv").config();

module.exports = {
	DB: {
		USERNAME: process.env.DB_USERNAME,
		PASSWORD: process.env.DB_PASSWORD,
		CLUSTER: process.env.DB_CLUSTER,
		NAME: process.env.DB_NAME,
	},
    SERVER: {
        PORT: process.env.SERVER_PORT
    },
	JWT_SECRET : process.env.JWT_SECRET
};
