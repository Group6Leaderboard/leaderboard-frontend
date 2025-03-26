import React from "react";
import {   Routes, Route } from "react-router-dom"; // Import useLocation here
import DashboardRoutes from './routes/DashboardRoutes'
import StudentDash from "./Components/StudentDash/StudentDash";
import LeaderBoardCard from "./Components/LeaderBoardCard/LeaderBoardCard";
import ProjectCard from "./Components/ProjectCard/ProjectCard";
import ProjectDescriptionCard from "./Components/ProjectDescriptionCrad/ProjectDescriptionCard";
const App = () => {
  

  return (
   
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<DashboardRoutes />} />
      {/* <Route path="/" element={<StudentDash />} /> */}
       {/* <Route path="/" element={<LeaderBoardCard title="Student Leaderboard" type="project" />} />  */}
  {/* <Route path="/" element={<ProjectCard />} />  */}
   {/* <Route path="/" element={<ProjectDescriptionCard />} />   */}

      </Routes>
   
  );
};

export default App;
