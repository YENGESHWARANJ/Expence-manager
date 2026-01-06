import { useState } from "react";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";
import { addExpense } from "../services/api";

const AddExpense = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await addExpense({ amount: Number(amount), category });
    setAmount("");
    setCategory("");
    alert("Expense Added");
  };

  
  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h6">Add Expense</Typography>
        <form onSubmit={submit}>
          <TextField fullWidth label="Amount" type="number"
            margin="normal" value={amount}
            onChange={(e) => setAmount(e.target.value)} />
          <TextField fullWidth label="Category"
            margin="normal" value={category}
            onChange={(e) => setCategory(e.target.value)} />
          <Button variant="contained" color="secondary" type="submit">
            Add
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddExpense;
