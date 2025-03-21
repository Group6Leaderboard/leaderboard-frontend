import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "../../pages/Leaderboard/Leaderboard.module.css";
import inspiroLogo from "../../assets/inspiroo.png";
import background from "../../assets/mm.jpg";

const ProjectLeaderboard = () => {
  // Mock data for testing
  const [projectData] = useState([
    { name: "AI-Based Health Monitor", college: "Harvard", score: 98 },
    { name: "Smart Traffic System", college: "MIT", score: 95 },
    { name: "Blockchain Voting", college: "Stanford", score: 92 },
    { name: "IoT Home Automation", college: "Oxford", score: 90 },
    { name: "Autonomous Drone", college: "Cambridge", score: 87 },
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
              <th>Project Name</th>
              <th>College</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {projectData.map((project, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{project.name}</td>
                <td>{project.college}</td>
                <td>{project.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectLeaderboard;
