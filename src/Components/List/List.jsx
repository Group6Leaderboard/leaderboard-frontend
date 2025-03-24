import React from "react";
import styles from "./list.module.css";
import { FaEdit, FaTrash ,FaEllipsisH} from "react-icons/fa"; // Removed FaEye

const defaultData = {
  student: [
    { id: 1, name: "Alice Johnson", image: "https://via.placeholder.com/70", college: "Harvard University" },
    { id: 2, name: "Bob Brown", image: "https://via.placeholder.com/70", college: "MIT" },
  ],
  college: [
    { id: 1, name: "Stanford University", image: "https://via.placeholder.com/70", location: "California, USA" },
    { id: 2, name: "Oxford University", image: "https://via.placeholder.com/70", location: "Oxford, UK" },
  ],
  mentor: [
    { id: 1, name: "Dr. Emily Carter", image: "https://via.placeholder.com/70", email: "emily.carter@edu.com" },
    { id: 2, name: "Professor Mark Wilson", image: "https://via.placeholder.com/70", email: "mark.wilson@edu.com" },
  ],
};

const List = ({ data = defaultData.student, type = "student" }) => {
  return (
    <div className={styles.listContainer}>
      {data.length === 0 ? (
        <p className={styles.noData}>No data available</p>
      ) : (
        data.map((item, index) => (
          <div key={item.id || index} className={styles.card}>
            {/* Profile Image */}
            <div className={styles.profileContainer}>
              <img src={item.image || "https://via.placeholder.com/70"}  className={styles.profilePic} />
            </div>

            {/* Details & Icons */}
            <div className={styles.detailsContainer}>
              {/* Name & Info */}
              <div className={styles.details}>
                <h3 className={styles.name}>{item.name || "Unknown"}</h3>
                <p className={styles.info}>
                  {type === "student" && (item.college || "No College Info")}
                  {type === "college" && (item.location || "No Location Info")}
                  {type === "mentor" && (item.email || "No Email Info")}<br/>
               
                </p>
              </div>

              {/* Action Icons */}
              <div className={styles.icons}>
                {/* Replaced FaEye with text */}
                
                <FaEdit className={styles.icon} title="Edit" />
                <FaTrash className={styles.icon} title="Delete" />
                <FaEllipsisH className={styles.icon} title="View More" />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default List;
