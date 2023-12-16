const config = require("./config");
const express = require("express");
const cors = require("cors");
const sequelize = require("./db");

const PORT = config.SERVER.PORT;
const app = express();

const whitelist = ["*"];

const corsOptions = {
	origin: (origin, callback) => {
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS!"));
		}
	},
	credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

// Routes
const authRouter = require("./routes/authRoutes");
const assetsRouter = require("./routes/assetsRoutes");
const incomeExpenseRouter = require("./routes/incomeExpenseRoutes");

app.use(`/api/v1/auth`, authRouter);
app.use(`/api/v1/assets`, assetsRouter);
app.use(`/api/v1/income-expense`, incomeExpenseRouter);

app.all("*", (req, res) => {
	res.status(404).json({ message: "Page not found!" });
});

app.listen(PORT, async () => {
	try {
		console.log(`Server running on port: ${PORT}`);
		await sequelize.authenticate();
		console.log("DB connected!");
		await sequelize.sync();
		console.log("All models were synchronized successfully.");
	} catch (error) {
		console.log(error);
	}
});
