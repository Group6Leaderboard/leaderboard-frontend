// import React from "react";
// import styles from "./projectCard.module.css";
// import { FaProjectDiagram, FaUser, FaArrowRight } from "react-icons/fa";

// const ProjectCard = ({ projectName, mentorName, onViewMore }) => {
   
//   return (
//     <div className={styles.card}>
//       {/* Project Icon and Name */}
//       <div className={styles.header}>
//         <FaProjectDiagram className={styles.projectIcon} />
//         <h3 className={styles.projectName}>{projectName}</h3>
//       </div>

//       {/* Mentor Info and View More */}
//       <div className={styles.footer}>
//         <div className={styles.mentor}>
//           <FaUser className={styles.userIcon} />
//           <span>Mentor: {mentorName}</span>
//         </div>
//         <button className={styles.viewMore} onClick={onViewMore}>
//           View More <FaArrowRight className={styles.arrowIcon} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

import React from "react";
import styles from "./projectCard.module.css";
import { FaUser, FaArrowRight } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      {/* Project Icon and Name */}
      <div className={styles.header}>
        <GoProjectRoadmap className={styles.projectIcon} />
        <h3 className={styles.projectName}>{project.name}</h3>
      </div>

      {/* Mentor Info and View More */}
      <div className={styles.footer}>
        <div className={styles.mentor}>
          <FaUser className={styles.userIcon} />
          <span> mentor:{project.mentor.name}</span>
        </div>
        <button className={styles.viewMore}>
          View More <FaArrowRight className={styles.arrowIcon} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;


