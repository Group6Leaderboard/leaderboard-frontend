import { useState } from "react";
import styles from "./Login.module.css"; 
import logo from "../../assets/logog-Photoroom.png";
import bgImage from "../../assets/logog.webp";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", username, password);
  };

  return (
    <div className={styles.loginContainer}>
      
      <div className={styles.leftHalf} style={{ backgroundImage: `url(${bgImage})` }}>
        
      </div>

     
      <div className={styles.rightHalf}>
        <div className={styles.loginBox}>
          <div className={styles.logoSection}>
            <img src={logo} alt="Inspiro Logo" className={styles.logo} />
          </div>
          <div className={styles.welcomeBack}>
            <h2>Welcome Back!</h2>
          </div>
          <form onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.loginBtn}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
