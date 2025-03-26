import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUsers } from "../services/userService";
import styles from "./adminDashboard.module.css";
import List from "../Components/List/List";

const AdminDashboard = () => {
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  let type = "";
  if (location.pathname === "/admin/students") type = "student";
  if (location.pathname === "/admin/colleges") type = "college";
  if (location.pathname === "/admin/mentors") type = "mentor";

  useEffect(() => {
    if (!type) return;

    const fetchUsers = async () => {
      setLoading(true);
      setError("");

      try {
        const roleMap = { student: "STUDENT", college: "COLLEGE", mentor: "MENTOR" };
        const data = await getUsers(roleMap[type]);
        setUsers(data.response);
      } catch (err) {
        setError(err.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [type]);

  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.title}>Welcome to Admin Dashboard</h2>
      <div className={styles.contentWrapper}>
        {loading ? (
          <p className={styles.loading}>Loading...</p>
        ) : error ? (
          <p className={styles.error}>{error}</p>
        ) : type ? (
          <div className={styles.listContainer}>
            <List type={type} data={users} />
          </div>
        ) : (
          <p className={styles.info}>Select an option from the sidebar to view details.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
