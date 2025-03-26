import React from "react";
import {   Routes, Route } from "react-router-dom"; // Import useLocation here
import DashboardRoutes from './routes/DashboardRoutes'
import LoginPage from "./pages/LoginPage/LoginPage";
const App = () => {
  

  return (
   
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<DashboardRoutes />} />
      </Routes>
   
  );
};

export default App;
