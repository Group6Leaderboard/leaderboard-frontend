import React from "react";
import styles from "./list.module.css";
import { FaEdit, FaTrash, FaEllipsisH } from "react-icons/fa";

// Default data included in the List component
const defaultData = {
  student: [
    { id: 1, name: "student 1", image: "https://via.placeholder.com/70", college: "Harvard University" },
    { id: 2, name: "student 2 ", image: "https://via.placeholder.com/70", college: "MIT" },
  ],
  college: [
    { id: 1, name: "college 1", image: "https://via.placeholder.com/70", location: "California, USA" },
    { id: 2, name: "college 2", image: "https://via.placeholder.com/70", location: "Oxford, UK" },
  ],
  mentor: [
    { id: 1, name: "mentor 1", image: "https://via.placeholder.com/70", email: "emily.carter@edu.com" },
    { id: 2, name: "mentor 2", image: "https://via.placeholder.com/70", email: "mark.wilson@edu.com" },
  ],
};

const List = ({ type = 'student', data }) => {
  // Use provided data or fallback to default data based on type
  const listData = data || defaultData[type];

  return (
    <div className={styles.listContainer}>
      {listData.length === 0 ? (
        <p className={styles.noData}>No data available</p>
      ) : (
        listData.map((item) => (
          <div key={item.id} className={styles.card}>
            {/* Profile Image */}
            <div className={styles.profileContainer}>
              <img 
                src={item.image || "https://via.placeholder.com/70"} 
                alt={item.name} 
                className={styles.profilePic} 
              />
            </div>

            {/* Details & Icons */}
            <div className={styles.detailsContainer}>
              {/* Name & Info */}
              <div className={styles.details}>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.info}>
                  {type === "student" && (item.college || "No College Info")}
                  {type === "college" && (item.location || "No Location Info")}
                  {type === "mentor" && (item.email || "No Email Info")}
                </p>
              </div>

              {/* Action Icons */}
              <div className={styles.icons}>
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