import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../Layouts/Dashboard/DashboardLayout";
import AdminDashboard from "../Pages/AdminDashboard";
import MentorDashboard from "../Pages/MentorDashboard";
import StudentDashboard from "../Pages/StudentDashboard";
import CollegeDashboard from "../Pages/CollegeDashboard";
import AssignForm from "../Components/AssignForm/AssignForm";

const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/students" element={<AdminDashboard />} />
      <Route path="/admin/mentors" element={<AdminDashboard />} />
      <Route path="/admin/colleges" element={<AdminDashboard />} />
      <Route path="/admin/assign-project" element={<AssignForm role="admin" />} />

        {/* Mentor Routes */}
        <Route path="/mentor" element={<MentorDashboard />} />
        <Route path="/mentor/assign-task" element={<AssignForm role="mentor" />} />

        {/* Student Routes */}
        <Route path="/student" element={<StudentDashboard />} />

        {/* College Routes */}
        <Route path="/college" element={<CollegeDashboard />} />
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardRoutes;
