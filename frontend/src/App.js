import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import AddIncome from "./components/AddIncome";
import AddExpense from "./components/AddExpense";
import Login from "./components/Login";
import Register from "./components/Register"; // ✅ REGISTER IMPORT

import { Container, Grid, Box } from "@mui/material";

/* 🔐 Protected Route */
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" />;
};

/* 🧩 Dashboard Layout */
const DashboardLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        paddingBottom: 4,
      }}
    >
      <Navbar />
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Dashboard />
          </Grid>
          <Grid item xs={12} md={6}>
            <AddIncome />
          </Grid>
          <Grid item xs={12} md={6}>
            <AddExpense />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN PAGE */}
        <Route path="/" element={<Login />} />

        {/* REGISTER PAGE */}
        <Route path="/register" element={<Register />} />

        {/* PROTECTED DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
