import { useState } from "react";
import styles from "./Leaderboard.module.css";
import { FaSearch } from "react-icons/fa";

const StudentLeaderboard = () => {
  const [selectedFilter, setSelectedFilter] = useState("Today");
  const [searchQuery, setSearchQuery] = useState("");

  const leaders = [
    { name: "Project 1", points: "98", wins: 43, tasks: 167, achievements: 476, image: "https://via.placeholder.com/50" },
    { name: "Project 2", points: "96", wins: 37, tasks: 132, achievements: 482, image: "https://via.placeholder.com/50" },
    { name: "Project 3", points: "92", wins: 32, tasks: 68, achievements: 268, image: "https://via.placeholder.com/50" },
  ];

  const ranking = [
    { rank: 1, name: "Project 1", id: "1591245", proj: 236,  college: "ST Thomas", points: "98" },
    { rank: 2, name: "Project 2", id: "1391245", proj: 167,  college: "Rajadhani", points: "96" },
    { rank: 3, name: "Project 3", id: "1892245", proj: 146, college: "Christ", points: "92" },
  ];

  return (
    <div className={styles.container}>
     
      <h1 className={styles.title}>Project Leaderboard</h1>

     
      <div className={styles.stats}>
              <div className={styles.card}>
                <p>Total Number Of Students</p>
                <h2>346+</h2>
                <span>Only the first three positions will be awarded prizes</span>
              </div>
              <div className={styles.card}>
                <p>Total Number Of Projects</p>
                <h2>732+</h2>
              </div>
              <div className={`${styles.card} ${styles.highlighted}`}>
                <p>Total Number Of Colleges </p>
                <h2>100+</h2>
              </div>
            </div>

    
      <h2 className={styles.sectionTitle}>Current Leaders</h2>
      <div className={styles.leaders}>
        {leaders.map((leader, index) => (
          <div key={index} className={styles.leaderCard}>
            <img src={leader.image} alt={leader.name} />
            <div>
              <h3>{leader.name}</h3>
              <p>{leader.points} pts.</p>
              <div className={styles.statsRow}>
                <span>Stud: {leader.wins}</span>
                <span>Tasks: {leader.tasks}</span>
                
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
       {/* Search Bar */}
       <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search Project..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

     
      <h2 className={styles.sectionTitle}>Global Ranking</h2>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Project Name</th>
              <th>College</th>
              <th>Total Points</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((user, index) => (
              <tr key={index}>
                <td>{user.rank}</td>
                <td>{user.name} <br /><small>ID {user.id}</small></td>
                <td>{user.college}</td>           
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
