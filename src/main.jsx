import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // ✅ Ensure App.jsx exists in the same folder
import "./index.css"; // ✅ Ensure index.css exists

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
