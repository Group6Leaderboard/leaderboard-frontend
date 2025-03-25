import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./DashboardMentor.css";

const DashboardMentor = () => {
  // Sample Data
  const data = [
    { name: "Assigned Mentors", value: 70 }, // 70% assigned
    { name: "Unassigned Mentors", value: 30 }, // 30% unassigned
  ];

  const COLORS = ["#5EB5AE", "#FF5733"]; // Green for assigned, Red for unassigned

  return (
    <div className="mentor-dashboard">
      <h2>Mentor Assignment Status</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          fill="#02414B"
          paddingAngle={5}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default DashboardMentor;
