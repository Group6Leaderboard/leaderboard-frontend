import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import CollegeLeaderboard from "../pages/Leaderboard/CollegeLeaderboard";
import ProjectLeaderboard from "../pages/Leaderboard/ProjectLeaderboard";
import StudentLeaderboard from "../pages/Leaderboard/StudentLeaderboard";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/colleges" element={<CollegeLeaderboard />} />
        <Route path="/projects" element={<ProjectLeaderboard />} />
        <Route path="/students" element={<StudentLeaderboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
