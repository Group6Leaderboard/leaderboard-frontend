import React from "react";
import styles from "./assignForm.module.css";
import StatsCard from "../RectangleCards/Statscard";

const AssignForm = ({ role }) => {
  return (
    <div className={styles.container}>
      {/* Stats Section */}
      <div className={styles.statsContainer}>
        {role === "admin" ? (
          <>
            <StatsCard title="Total Projects" value="15" />
            <StatsCard title="Total Students" value="120" />
            <StatsCard title="Total Mentors" value="10" />
          </>
        ) : (
          <>
            <StatsCard title="Total Tasks" value="30" />
            <StatsCard title="Submitted" value="20" />
            <StatsCard title="To Be Reviewed" value="10" />
          </>
        )}
      </div>

      {/* Form Section */}
      <div className={styles.formContainer}>
        <h2>{role === "admin" ? "Assign Project" : "Assign Task"}</h2>

        <div className={styles.formGroup}>
          <label>Name</label>
          <input type="text" className={styles.inputBox} />
        </div>

        <div className={styles.formGroup}>
          <label>Description</label>
          <textarea className={styles.inputBox} rows="3"></textarea>
        </div>

        {role === "admin" ? (
          <>
            <div className={styles.formGroup}>
              <label>College</label>
              <select className={styles.inputBox}>
                <option>Select College</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Members</label>
              <input type="text" className={styles.inputBox} />
            </div>
          </>
        ) : (
          <div className={styles.formGroup}>
            <label>Last Date</label>
            <input type="date" className={styles.inputBox} />
          </div>
        )}

        <button className={styles.assignButton}>
          {role === "admin" ? "Assign Project" : "Assign Task"}
        </button>
      </div>
    </div>
  );
};

export default AssignForm;
