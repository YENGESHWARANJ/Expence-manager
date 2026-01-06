import { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography
} from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert("Login Successful");
        window.location.href = "/dashboard";
      } else {
        alert(data);
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <Card sx={{ maxWidth: 400, mx: "auto", mt: 10 }}>
      <CardContent>
        <Typography variant="h5" textAlign="center">
          Login
        </Typography>

        <form onSubmit={submit}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
