const Expense = require("../models/Expense");

exports.addExpense = async (req, res) => {
  const expense = new Expense(req.body);
  await expense.save();
  res.status(201).json(expense);
};

exports.getExpense = async (req, res) => {
  const expense = await Expense.find();
  res.json(expense);
};
