// import React from "react";
// import styles from "./projectDescriptionCard.module.css";
// import { FaUser, FaTasks, FaUsers, FaChalkboardTeacher } from "react-icons/fa";

// const ProjectDescriptionCard = ({ project }) => {
//   if (!project) return null; // Hide if no project is selected

//   return (
//     <div className={styles.card}>
//       {/* Section 1: Project Name & Description */}
//       <div className={styles.header}>
//         <h2>{project.name}</h2>
//         <p>{project.description}</p>
//       </div>

//       {/* Section 2: Score & Tasks Button */}
//       <div className={styles.scoreSection}>
//         <span className={styles.score}>Score: {project.score}</span>
//         <button className={styles.tasksButton}>
//           <FaTasks className={styles.icon} /> View Tasks
//         </button>
//       </div>

//       {/* Section 3: Members & Mentor Details */}
//       <div className={styles.detailsSection}>
//         {/* Members List */}
//         <div className={styles.column}>
//           <h3><FaUsers /> Members</h3>
//           <ul>
//             {project.members.map((member, index) => (
//               <li key={index}>
//                 <FaUser className={styles.userIcon} /> {member}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Mentor Details */}
//         <div className={styles.column}>
//           <h3><FaChalkboardTeacher /> Mentor</h3>
//           <p><strong>Name:</strong> {project.mentor.name}</p>
//           <p><strong>Email:</strong> {project.mentor.email}</p>
//           <p><strong>Phone:</strong> {project.mentor.phone}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDescriptionCard;

import React from "react";
import styles from "./projectDescriptionCard.module.css";
import { FaUser, FaTasks, FaEnvelope, FaPhone } from "react-icons/fa";

const ProjectDescriptionCard = ({ project }) => {
  return (
    <div className={styles.card}>
      {/* Section 1: Project Name & Description */}
      <div className={styles.header}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>

      {/* Section 2: Score & Tasks Button */}
      <div className={styles.scoreSection}>
        <span className={styles.score}>Score: {project.score}</span>
        <button className={styles.tasksButton}>
          <FaTasks className={styles.icon} /> View Tasks
        </button>
      </div>

      {/* Section 3: Members & Mentor Details */}
      <div className={styles.detailsSection}>
        {/* Members List */}
        <div className={styles.column}>
          <h3> Members</h3>
          <ul>
            {project.members.map((member, index) => (
              <li key={index}>
                <FaUser className={styles.userIcon} /> {member}
              </li>
            ))}
          </ul>
        </div>

        {/* Mentor Details */}
        <div className={styles.column}>
          <h3>Mentor</h3>
          <p><FaUser className={styles.icon} /> {project.mentor.name}</p>
          <p><FaEnvelope className={styles.icon} /> {project.mentor.email}</p>
          <p><FaPhone className={styles.icon} /> {project.mentor.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescriptionCard;

