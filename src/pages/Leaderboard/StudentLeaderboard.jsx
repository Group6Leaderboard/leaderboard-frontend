import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Leaderboard.module.css";
import inspiroLogo from "../../assets/inspiroo.png";
import background from "../../assets/mm.jpg";

const StudentLeaderboard = () => {
  // Mock data for testing
  const [studentData] = useState([
    { name: "Alice Johnson", projects: 5, college: "Harvard", score: 95 },
    { name: "Bob Smith", projects: 4, college: "MIT", score: 90 },
    { name: "Charlie Brown", projects: 6, college: "Stanford", score: 85 },
    { name: "David Lee", projects: 3, college: "Oxford", score: 80 },
    { name: "Emma Wilson", projects: 7, college: "Cambridge", score: 78 },
  ]);

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${background})` }}>
      <Navbar />
      <div className={styles.logoContainer}>
        <img src={inspiroLogo} alt="Inspiro Logo" />
      </div>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Student Name</th>
              <th>No. of Projects</th>
              <th>College</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.projects}</td>
                <td>{student.college}</td>
                <td>{student.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentLeaderboard;
