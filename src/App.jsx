import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./Layouts/Dashboard/DashboardLayout"; // Import DashboardLayout
import AdminDashboard from "./Pages/AdminDashboard";
// import MentorDashboard from "./Pages/MentorDashboard";
// import StudentDashboard from "./Pages/StudentDashboard";
// import CollegeDashboard from "./Pages/CollegeDashboard";
import AssignForm from "./Components/AssignForm/AssignForm";

const App = () => {
  const location = useLocation(); 
  const hideSidebarRoutes = ["/login","/students","/colleges","/projects"]; 
  

  return (
    <DashboardLayout>
    <Routes>
    <Route path="/admin" element={<AdminDashboard />} />
    <Route path="/admin/assign-project" element={<AssignForm role="admin" />} />
        {/* <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/assign-project" element={<AssignForm role="admin" />} />

        <Route path="/mentor" element={<MentorDashboard />} />
        <Route path="/mentor/assign-task" element={<AssignForm role="mentor" />} />

        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/college" element={<CollegeDashboard />} /> */}
 
    </Routes>
    </DashboardLayout>
  );
};

export default App;
