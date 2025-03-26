import React, { useEffect, useState } from "react";
import styles from "./list.module.css";
import { FaEdit, FaTrash, FaEllipsisH } from "react-icons/fa";
import { getCollegeById } from "../../services/collegeService"; // Import service

const List = ({ type = "student", data = [] }) => {
  const [collegeNames, setCollegeNames] = useState({});

  useEffect(() => {
    if (type === "student") {
      const fetchCollegeNames = async () => {
        const newCollegeNames = {};
        for (const student of data) {
          if (student.collegeId && !collegeNames[student.collegeId]) {
            try {
              const response = await getCollegeById(student.collegeId);
              newCollegeNames[student.collegeId] = response.name || "Unknown College";
            } catch (error) {
              newCollegeNames[student.collegeId] = "Error Fetching College";
            }
          }
        }
        setCollegeNames((prev) => ({ ...prev, ...newCollegeNames }));
      };
      fetchCollegeNames();
    }
  }, [data, type]);

  return (
    <div className={styles.listContainer}>
      {data.length === 0 ? (
        <p className={styles.noData}>No data available</p>
      ) : (
        data.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.profileContainer}>
              <img
                src={item.image || "https://via.placeholder.com/70"}
                alt={item.name}
                className={styles.profilePic}
              />
            </div>

            <div className={styles.detailsContainer}>
              <div className={styles.details}>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.info}>
                  {type === "student" && (collegeNames[item.collegeId] || "Fetching...")}
                  {type === "college" && (item.location || "No Location Info")}
                  {type === "mentor" && (item.email || "No Email Info")}
                </p>
              </div>

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
