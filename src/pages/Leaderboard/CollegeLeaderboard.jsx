import { useState } from "react";
import styles from "./Leaderboard.module.css";

const StudentLeaderboard = () => {
  const [selectedFilter, setSelectedFilter] = useState("Today");

  const leaders = [
    { name: "ST Thomas", points: "98", wins: 43, tasks: 167, achievements: 476, image: "https://via.placeholder.com/50" },
    { name: "Rajadhani", points: "96", wins: 37, tasks: 132, achievements: 482, image: "https://via.placeholder.com/50" },
    { name: "Christ", points: "92", wins: 32, tasks: 68, achievements: 268, image: "https://via.placeholder.com/50" },
  ];

  const ranking = [
    { rank: 1, name: "ST Thomas", id: "1591245", proj: 236,  college: "ST Thomas", points: "98" },
    { rank: 2, name: "Rajadhani", id: "1391245", proj: 167,  college: "Rajadhani", points: "96" },
    { rank: 3, name: "Chirst", id: "1892245", proj: 146, college: "Christ", points: "92" },
  ];

  return (
    <div className={styles.container}>
      
      <h1 className={styles.title}>College Leaderboard</h1>

      
     
     
      <h2 className={styles.sectionTitle}>Current Leaders</h2>
      <div className={styles.leaders}>
        {leaders.map((leader, index) => (
          <div key={index} className={styles.leaderCard}>
            <img src={leader.image} alt={leader.name} />
            <div>
              <h3>{leader.name}</h3>
              <p>{leader.points} pts.</p>
              <div className={styles.statsRow}>
                <span>Proj: {leader.wins}</span>
                <span>Tasks: {leader.tasks}</span>
                <span>Ach.: {leader.achievements}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

     
      <div className={styles.filters}>
        {["Week", "Month", "Today"].map((filter) => (
          <button
            key={filter}
            className={selectedFilter === filter ? styles.activeFilter : ""}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

     
      <h2 className={styles.sectionTitle}>Global Ranking</h2>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>College Name</th>
              <th>No Of Projects</th>
              <th>Total Points</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((user, index) => (
              <tr key={index}>
                <td>{user.rank}</td>
                <td>{user.name} <br /><small>ID {user.id}</small></td>
                <td>{user.proj}</td>         
                <td>{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentLeaderboard;
