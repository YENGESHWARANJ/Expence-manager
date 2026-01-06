const express = require("express");
const { addExpense, getExpense } = require("../controllers/expenseController");

const router = express.Router();

router.post("/add", addExpense);
router.get("/", getExpense);

module.exports = router;
