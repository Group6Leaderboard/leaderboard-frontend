import React from "react";
import {   Routes, Route } from "react-router-dom"; // Import useLocation here
import DashboardRoutes from './routes/DashboardRoutes'
const App = () => {
  

  return (
   
      <Routes>
      <Route path="/*" element={<DashboardRoutes />} />
      </Routes>
   
  );
};

export default App;
