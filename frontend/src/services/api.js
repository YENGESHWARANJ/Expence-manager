const API_URL = "http://localhost:5000/api";

/* ---------- INCOME ---------- */
export const addIncome = async (income) => {
  const res = await fetch(`${API_URL}/income`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(income),
  });
  return res.json();
};

export const getIncome = async () => {
  const res = await fetch(`${API_URL}/income`);
  return res.json();
};

export const deleteIncome = async (id) => {
  await fetch(`${API_URL}/income/${id}`, {
    method: "DELETE",
  });
};

/* ---------- EXPENSE ---------- */
export const addExpense = async (expense) => {
  const res = await fetch(`${API_URL}/expense`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense),
  });
  return res.json();
};

export const getExpense = async () => {
  const res = await fetch(`${API_URL}/expense`);
  return res.json();
};

export const deleteExpense = async (id) => {
  await fetch(`${API_URL}/expense/${id}`, {
    method: "DELETE",
  });
};
