import React from "react";
import AssignForm from "../Components/AssignForm/AssignForm";
import { useLocation } from "react-router-dom";

const MentorDashboard = () => {
    const location = useLocation();
    return (
        <div>
          <h2>Mentor Dashboard</h2>
    
          {/* Show AssignForm when '/mentor/assign-task' is clicked */}
          {location.pathname === "/mentor/assign-task" && <AssignForm role="mentor" />}
        </div>
      );
}

export default MentorDashboard;
