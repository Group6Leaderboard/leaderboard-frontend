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

        <label>Name</label>
        <input type="text" className={styles.inputBox} />

        <label>Description</label>
        <input type="text" className={styles.inputBox} />

        {role === "admin" ? (
          <>
            <label>College</label>
            <select className={styles.inputBox}>
              <option></option>
            </select>

            <label>Members</label>
            <input type="text" className={styles.inputBox} />
          </>
        ) : (
          <>
            <label>Last Date</label>
            <input type="date" className={styles.inputBox} />
          </>
        )}

        <button className={styles.assignButton}>
          {role === "admin" ? "Assign Project" : "Assign Task"}
        </button>
      </div>
    </div>
  );
};

export default AssignForm;
