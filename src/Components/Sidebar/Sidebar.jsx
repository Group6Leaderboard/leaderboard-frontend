import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaProjectDiagram, FaTasks, FaChevronRight } from "react-icons/fa";
import { MdDashboard ,MdAssignmentAdd,MdLeaderboard } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { GoProjectRoadmap } from "react-icons/go";
import { IoSchool } from "react-icons/io5";
import styles from '../Sidebar/sidebar.module.css'
import logo from '../../assets/inspiro-logo.png'

const Sidebar = () => {
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getSidebarItems = () => {
    if (location.pathname.startsWith("/admin")) {
      return [
        { name: "Dashboard", path: "/admin" ,icon: <MdDashboard />},
        { name: "Students", path: "/admin/students" ,icon: <PiStudentFill />},
        { name: "Mentors", path: "/admin/mentors" ,icon: <FaUsers />},
        {name:"Colleges", path: "/admin/colleges" ,icon: <IoSchool />},
        { name: "Assign Projects", path: "/admin/assign-project",icon: <FaProjectDiagram /> }
      ];
    } else if (location.pathname.startsWith("/mentor")) {
      return [
        { name: "Dashboard", path: "/mentor" ,icon: <MdDashboard />},
        { name: "Projects", path: "/mentor/projects", icon: <GoProjectRoadmap />  },
        { name: "Assign Task", path: "/mentor/assign-task" ,icon: <MdAssignmentAdd />},
        { name: "Tasks", path: "/mentor/task",icon: <FaTasks /> }
      ];
    } else if (location.pathname.startsWith("/student")) {
      return [
        { name: "Dashboard", path: "/student",icon: <MdDashboard /> },
        { name: "Projects", path: "/student/projects", icon: <GoProjectRoadmap />},
        { name: "Tasks", path: "/student/tasks" ,icon: <FaTasks />}
      ];
    } else if (location.pathname.startsWith("/college")) {
      return [
        { name: "Dashboard", path: "/college" ,icon: <MdDashboard />},
        { name: "Projects", path: "/college/projects", icon: <GoProjectRoadmap /> },
        { name: "Students", path: "/college/students" ,icon: <PiStudentFill />},
        { name: "LeaderBoard", path: "/college/leaderboard",icon:  <MdLeaderboard /> }

      ];
    }
    return [];
  };

  const sidebarItems = getSidebarItems();

  return (
    <div className={`d-flex flex-column vh-100 p-3 ${styles.sidebar}`}>
    {/* Logo Section */}
    <div className="text-center mb-3" >
      <img src={logo} alt="Logo" className={styles.logo} />
    </div>
    

    {/* Sidebar Menu */}
    <ul className="nav flex-column">
      {sidebarItems.map((item, index) => (
        <li key={index} className="nav-item">
          <Link
            to={item.path}
            className={`nav-link d-flex align-items-center justify-content-between ${styles.navLink} ${
              location.pathname === item.path ? styles.active : ""
            }`}
            onClick={() => toggleDropdown(index)}
          >
            <div className="d-flex align-items-center">
              {item.icon} <span className="ms-2">{item.name}</span>
            </div>
            {location.pathname === item.path && (
              <FaChevronRight className={`${styles.arrowIcon}`} />
            )}
          </Link>
        </li>
      ))}
    </ul>
  
  </div>  );
};

export default Sidebar;
