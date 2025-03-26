import React from "react";
import "./alertModal.module.css";

const AlertModal = ({ show, onClose, title, message }) => {
  if (!show) return null; 

  return (
    <div className="alert-overlay">
      <div className="alert-box">
        <h3 className="alert-title">{title}</h3>
        <p className="alert-message">{message}</p>
        <button className="alert-close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AlertModal;
