import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./submittedTask.module.css";


const submissions = [
  {
    id: 1,
    projectName: "AI Chatbot",
    assignedDate: "2024-02-15",
    submittedDate: "2024-03-01",
    document: "chatbot_report.pdf",
    score: 0,
    status: "Not Submitted",
  },
  {
    id: 2,
    projectName: "E-commerce Platform",
    assignedDate: "2024-02-10",
    submittedDate: "2024-03-05",
    document: "ecommerce_doc.pdf",
    score: 90,
    status: "To Be Reviewed",
  },
  {
    id: 3,
    projectName: "Smart Attendance System",
    assignedDate: "2024-02-20",
    submittedDate: "2024-03-08",
    document: "attendance_system.pdf",
    score: 78,
    status: "Completed",
  },
];

const SubmittedTask = () => {
  const navigate = useNavigate();

  return (
<div className={`container ${styles["submitted-task"]}`}>

      <h2 className="my-4 text-center"> Tasks</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Project Name</th>
            <th>Assigned Date</th>
            <th>Submitted Date</th>
            <th>Document</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission.id}>
              <td>{submission.projectName}</td>
              <td>{submission.assignedDate}</td>
              <td>{submission.submittedDate}</td>
              <td>
                <a href={`/documents/${submission.document}`} target="_blank" rel="noopener noreferrer">
                  {submission.document}
                </a>
              </td>
              <td>{submission.score}</td>
              <td className={`status-${submission.status.toLowerCase()}`}>{submission.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmittedTask;
