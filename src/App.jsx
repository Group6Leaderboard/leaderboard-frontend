import React from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  const location = useLocation(); 
  const hideSidebarRoutes = ["/login","/students","/colleges","/projects"]; 
  

  return (
    <div className="d-flex">
      {/* Conditionally Render Sidebar */}
      {!hideSidebarRoutes.includes(location.pathname) && <Sidebar />}

      {/* Main Content */}
      <div className="flex-grow-1 p-3">
        <AppRoutes /> 
      </div>
    </div>
  );
};

export default App;
