import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./adminDashboard.module.css";
import List from "../Components/List/List";

const AdminDashboard = () => {
    console.log("HIIIIIII")
    const location = useLocation();
    let type = "";
  
    if (location.pathname === "/admin/students") {
      type = "student";
    } else if (location.pathname === "/admin/colleges") {
      type = "college";
    } else if (location.pathname === "/admin/mentors") {
      type = "mentor";
    }
    console.log("Current Type:", type);
    
    return (
      <div className={styles.dashboardContainer}>
        <h2 className={styles.title}>Welcome to Admin Dashboard</h2>
        <div className={styles.contentWrapper}>
      {type ? (
        <div className={styles.listContainer}>
          <List type={type} />
        </div>
      ) : (
        <p className={styles.info}>Select an option from the sidebar to view details.</p>
      )}
    </div>
      </div>
    );
  };

export default AdminDashboard;