import React, { useState } from "react";
import AssignForm from "../Components/AssignForm/AssignForm";
import { useLocation } from "react-router-dom";
import DashboardLayout from "../Layouts/Dashboard/DashboardLayout";
import { Card, CardContent } from "../Components/Card/Card";
import { FaUsers, FaProjectDiagram } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { MdLeaderboard } from "react-icons/md";
import styles from "./adminDashboard.module.css";

const AdminDashboard = () => {
  return (
    <DashboardLayout role="admin">
      <div className={styles.dashboardContainer}>
        <h2 className={styles.title}>Admin Dashboard</h2>
        
        <div className={styles.statsContainer}>
          <Card className={styles.statCard}>
            <CardContent>
              <FaUsers className={styles.icon} />
              <h3>Students</h3>
              <p>Manage all students</p>
            </CardContent>
          </Card>
          
          <Card className={styles.statCard}>
            <CardContent>
              <FaProjectDiagram className={styles.icon} />
              <h3>Projects</h3>
              <p>Assign & track projects</p>
            </CardContent>
          </Card>
          
          <Card className={styles.statCard}>
            <CardContent>
              <IoSchool className={styles.icon} />
              <h3>Colleges</h3>
              <p>View and manage colleges</p>
            </CardContent>
          </Card>
          
          <Card className={styles.statCard}>
            <CardContent>
              <MdLeaderboard className={styles.icon} />
              <h3>Leaderboard</h3>
              <p>Monitor rankings</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
