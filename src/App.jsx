import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import AdminDashboard from "./Pages/AdminDashboard";
import MentorDashboard from "./Pages/MentorDashboard";
import StudentDashboard from "./Pages/StudentDashboard";
import CollegeDashboard from "./Pages/CollegeDashboard";
import Navbar from "./Components/Navbar/Navbar";
import AssignForm from "./Components/AssignForm/AssignForm";
import ProfileEdit from "./Components/ProfileEdit/ProfileEdit";
import StatsCard from "./Components/RectangleCards/Statscard";
import SignupForm from "./Components/SIGNUP/SignupForm";

const App = () => {
  return (
    <div className="d-flex">
      {/* Sidebar - Always Visible */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1 p-3">
        <Routes>
        {/* <Route path="/" element={<ProfileEdit />} /> */}
        {/* <Route path="/" element={<StatsCard />} /> */}
        {/* <Route path="/" element={<SignupForm />} /> */}
        <Route path="/" element={<Navbar />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/assign-project" element={<AssignForm role="admin" />} />

          <Route path="/mentor" element={<MentorDashboard />} />
          <Route path="/mentor/assign-task" element={<AssignForm role="mentor" />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/college" element={<CollegeDashboard />} />
        </Routes>
      </div>
      {/* <Navbar/> */}
    </div>
  );
};

export default App;



