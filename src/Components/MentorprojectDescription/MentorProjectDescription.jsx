import React from "react";
import styles from "./mentorProjectDescription.module.css";
import { FaUser, FaTasks, FaEnvelope } from "react-icons/fa";
import { MdAssignmentAdd } from "react-icons/md";

const MentorProjectDescriptionCard = ({ project, onAssignTask }) => {
  return (
    <div className={styles.card}>
      {/* Section 1: Project Name & Description */}
      <div className={styles.header}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>

      {/* Section 2: Assign Task Button */}
      <div className={styles.scoreSection}>
        <button className={styles.tasksButton} onClick={onAssignTask}>
          <MdAssignmentAdd className={styles.icon} /> Assign Task
        </button>
        <button className={styles.tasksButton} onClick={onAssignTask}>
          <FaTasks className={styles.icon} />  Tasks
        </button>
      </div>

      {/* Section 3: Members List with Emails */}
      <div className={styles.detailsSection}>
  <div className={styles.column}>
    <h3>Members</h3>
    <ul>
      {project.members.map((member, index) => (
        <li key={index} className={styles.memberItem}>
          <div className={styles.memberName}>
            <FaUser className={styles.userIcon} /> {member.name}
          </div>
          <div className={styles.memberEmail}>
            <FaEnvelope className={styles.icon} /> {member.email}
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>

    </div>
  );
};

export default MentorProjectDescriptionCard;
