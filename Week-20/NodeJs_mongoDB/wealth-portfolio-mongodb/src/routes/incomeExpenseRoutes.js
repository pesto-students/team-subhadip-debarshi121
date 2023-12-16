const express = require("express");
const {createIncomeExpense, getIncomeExpense, deleteIncomeExpense, updateIncomeExpense} = require("../controllers/incomeExpenseController");
const {protect} = require("../middlewares/authMiddleware");
const {createValidator, updateValidator} = require("../validators/incomeExpenseValidator");

const router = express.Router();

router.get("/", protect, getIncomeExpense);
router.post("/", protect, createValidator, createIncomeExpense);
router.delete("/:id", protect, deleteIncomeExpense);
router.put("/:id", protect, updateValidator, updateIncomeExpense);

module.exports = router;
