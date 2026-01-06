const Income = require("../models/Income");

exports.addIncome = async (req, res) => {
  const income = new Income(req.body);
  await income.save();
  res.status(201).json(income);
};

exports.getIncome = async (req, res) => {
  const income = await Income.find();
  res.json(income);
};
