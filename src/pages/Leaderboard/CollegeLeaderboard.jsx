import { useState } from "react";
import Navbar from "../../components/navbar/Navbar"; 
import styles from "./Leaderboard.module.css";
import inspiroLogo from "../../assets/inspiroo.png";
import background from "../../assets/mm.jpg";

const CollegeLeaderboard = () => {
  // Mock data for testing
  const [collegeData] = useState([
    { name: "Harvard University", projects: 120, score: 98 },
    { name: "MIT", projects: 110, score: 95 },
    { name: "Stanford University", projects: 105, score: 92 },
    { name: "Oxford University", projects: 100, score: 90 },
    { name: "Cambridge University", projects: 95, score: 87 },
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
              <th>College Name</th>
              <th>No. of Projects</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {collegeData.map((college, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{college.name}</td>
                <td>{college.projects}</td>
                <td>{college.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CollegeLeaderboard;
