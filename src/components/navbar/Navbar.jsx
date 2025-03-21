import { Link } from "react-router-dom";
import styles from "../navbar/navbar.module.css";
import trophy from "../../assets/trophy.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <img src={trophy} alt="Trophy" className={styles.trophyIcon} />
        <span>LEADERBOARD</span>
      </div>
      <div className={styles.right}>
        <Link to="/students">STUDENT</Link>
        <Link to="/colleges">COLLEGE</Link>
        <Link to="/projects">PROJECT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
