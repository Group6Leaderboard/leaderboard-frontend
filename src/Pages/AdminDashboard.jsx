import React, { useState } from "react";
import AssignForm from "../Components/AssignForm/AssignForm";
import { useLocation } from "react-router-dom";

const AdminDashboard = () => {
    const location = useLocation(); 
  return (
  <>
  <h2>Welcome to Admin Dashboard</h2>

      {/* Show AssignForm when '/admin/assign-project' is clicked */}
      {location.pathname === "/admin/assign-project" && <AssignForm role="admin" />}
  </>
  )
};

export default AdminDashboard;
