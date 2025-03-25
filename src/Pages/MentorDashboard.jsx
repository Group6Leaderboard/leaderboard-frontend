import React from "react";
import AssignForm from "../Components/AssignForm/AssignForm";
import { useLocation } from "react-router-dom";
import DashboardLayout from "../Layouts/Dashboard/DashboardLayout";
import DashboardMentor from "../Components/MentorProject/DashboardMentor";

const MentorDashboard = () => {
    const location = useLocation();
    return (
        <div>
            
          <h2>Mentor Dashboard</h2>
    
          {/* Show AssignForm when '/mentor/assign-task' is clicked */}
          {location.pathname === "/mentor/assign-task" && <AssignForm role="mentor" />}
          <DashboardMentor />
        </div>
      );
}

export default MentorDashboard;
