import { useState } from "react";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";
import { addIncome } from "../services/api";

const AddIncome = () => {
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await addIncome({ amount: Number(amount), source });
    setAmount("");
    setSource("");
    alert("Income Added");
  };

  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h6">Add Income</Typography>
        <form onSubmit={submit}>
          <TextField fullWidth label="Amount" type="number"
            margin="normal" value={amount}
            onChange={(e) => setAmount(e.target.value)} />
          <TextField fullWidth label="Source"
            margin="normal" value={source}
            onChange={(e) => setSource(e.target.value)} />
          <Button variant="contained" type="submit">Add</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddIncome;
