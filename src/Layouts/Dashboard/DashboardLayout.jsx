import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./dashboardLayout.module.css";

const DashboardLayout = ({ children, role }) => {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar role={role} />

      <div className={styles.mainContent}>
        <Navbar role={role} />

        <div className={styles.pageContent}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;