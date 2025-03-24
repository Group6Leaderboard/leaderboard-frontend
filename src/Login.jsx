import { useState } from "react";
import "./Login.css"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", username, password);
  };

  return (
    <div className="login-container">
      
      <div className="left-half"></div>
      <div className="right-half"></div>

      
      <div className="competition-title">
        <h1>Inspiro</h1>
        <p>Inter College Competition</p>
      </div>

     
      <div className="login-box">
        <div className="login-left">
          <img src="w.png" alt="Competition" className="login-image" />
        </div>
        <div className="login-right">
          <img src="login.png" className="login" />
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
