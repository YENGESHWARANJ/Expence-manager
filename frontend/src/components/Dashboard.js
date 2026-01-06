import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Divider } from "@mui/material";

import {
  getIncome,
  getExpense,
  deleteIncome,
  deleteExpense,
} from "../services/api";

import ItemCard from "./ItemCard";

const Dashboard = () => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const incomeData = await getIncome();
    const expenseData = await getExpense();

    setIncomes(incomeData);
    setExpenses(expenseData);
  };

  const totalIncome = incomes.reduce((s, i) => s + i.amount, 0);
  const totalExpense = expenses.reduce((s, e) => s + e.amount, 0);
  const balance = Math.max(0, totalIncome - totalExpense);

  return (
    <>
      {/* SUMMARY CARDS */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Income</Typography>
              <Typography>₹ {totalIncome}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Expense</Typography>
              <Typography>₹ {totalExpense}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Balance</Typography>
              <Typography>₹ {balance}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* LISTS */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {/* INCOME LIST */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Income List
          </Typography>
          <Divider sx={{ mb: 2 }} />

          {incomes.map((i) => (
            <ItemCard
              key={i._id}
              title={i.source}
              amount={i.amount}
              onDelete={async () => {
                await deleteIncome(i._id);
                loadData();
              }}
            />
          ))}
        </Grid>

        {/* EXPENSE LIST */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Expense List
          </Typography>
          <Divider sx={{ mb: 2 }} />

          {expenses.map((e) => (
            <ItemCard
              key={e._id}
              title={e.category}
              amount={e.amount}
              onDelete={async () => {
                await deleteExpense(e._id);
                loadData();
              }}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
