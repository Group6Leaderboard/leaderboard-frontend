import React, { useEffect, useState } from "react";
import { getUsers } from "../services/userService";
import { FaPlus } from "react-icons/fa"; 
import styles from "./adminDashboard.module.css";
import List from "../Components/List/List";
import AddUser from "../Components/AddUser/AddUser";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showAddUser, setShowAddUser] = useState(false);
  const [userType, setUserType] = useState("");

  // Determine user type based on the URL path
  const type = window.location.pathname.includes("students")
    ? "student"
    : window.location.pathname.includes("colleges")
    ? "college"
    : window.location.pathname.includes("mentors")
    ? "mentor"
    : "";

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

  // Toggle AddUser card visibility
  const handleToggleAddUser = () => {
    setShowAddUser(!showAddUser);
    setUserType(type);
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Welcome to Admin Dashboard</h2>
        {type && (
          <button className={styles.addButton} onClick={handleToggleAddUser}>
            <FaPlus className={styles.plusIcon} /> Add New {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        )}
      </div>

      {/* Show AddUser card when button is clicked */}
      {showAddUser && (
        <div className={styles.overlay}>
          <div className={styles.addUserCard}>
            <AddUser type={userType} onClose={handleToggleAddUser} />
          </div>
        </div>
      )}

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
