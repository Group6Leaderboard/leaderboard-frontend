import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./dashboardLayout.module.css";

const DashboardLayout = ({ children, role }) => {
  return (
    <div className={styles.dashboardContainer}>
      {/* Pass the role to Sidebar */}
      <Sidebar role={role} />

      <div className={styles.mainContent}>
        {/* You can also pass role to Navbar if needed */}
        <Navbar role={role} />

        {/* Page Content */}
        <div className={styles.pageContent}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;