import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx"; // ✅ Make sure Login.jsx exists in the same folder
import "./App.css"; // ✅ Ensure App.css exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} /> {/* ✅ Added Home Page */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
