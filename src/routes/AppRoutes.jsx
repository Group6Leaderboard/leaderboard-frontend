import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import CollegeLeaderboard from "../pages/Leaderboard/CollegeLeaderboard";
import ProjectLeaderboard from "../pages/Leaderboard/ProjectLeaderboard";
import StudentLeaderboard from "../pages/Leaderboard/StudentLeaderboard";
import NotFound from "../Components/NotFound/NotFound"; 

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/colleges" element={<CollegeLeaderboard />} />
      <Route path="/projects" element={<ProjectLeaderboard />} />
      <Route path="/students" element={<StudentLeaderboard />} />
    </Routes>
  );
};

export default AppRoutes;
