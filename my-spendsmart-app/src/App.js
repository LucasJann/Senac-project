import React, { createBrowserRouter, RouterProvider } from "react-router-dom";

import Goal from "./components/Goal/Goal"
import Income from "./components/Income/Income";
import Welcome from "./components/Layout/Welcome";
import Profile from "./components/Layout/Profile";
import Expense from "./components/Expense/Expense";
import LandingPage from "./components/Layout/LandingPage";
import IncomeHistory from "./components/Income/IncomeHistory";
import ExpenseHistory from "./components/Expense/ExpenseHistory";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/", element: <Welcome /> },
      { path: "/landingPage", element: <LandingPage /> },
      { path: "/profilePage", element: <Profile /> },
      { path: "/expensePage", element: <Expense /> },
      { path: "/expenseHistoryPage", element: <ExpenseHistory /> },
      { path: "/incomePage", element: <Income /> },
      { path: "/incomeHistoryPage", element: <IncomeHistory /> },
      { path: "/goalPage", element: <Goal/> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
