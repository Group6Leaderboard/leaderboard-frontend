import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./assignForm.module.css";
import StatsCard from "../RectangleCards/Statscard";
import { createProject } from "../../services/projectService";
import { getAllColleges } from "../../services/collegeService";
import { getUsers } from "../../services/userService"; // API to fetch mentors

const AssignForm = ({ role }) => {
  const [colleges, setColleges] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState("");
  const [selectedMentor, setSelectedMentor] = useState("");
  const [members, setMembers] = useState([""]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [currentMemberIndex, setCurrentMemberIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    collegeId: "",
    mentorId: "",
    members: "",
    collegeName: "",
    lastDate: ""
  });

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await getAllColleges();
        setColleges(response.response || []);
      } catch (error) {
        console.error("Error fetching colleges:", error);
      }
    };

    const fetchMentors = async () => {
      try {
        const response = await getUsers("MENTOR");
        setMentors(response.response || []);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    if (role === "admin") {
      fetchColleges();
      fetchMentors();
    }
  }, [role]);

  const fetchStudentsByCollege = async (collegeId) => {
    if (!collegeId) {
      alert("Please select a college first");
      return [];
    }
  
    try {
      const response = await getUsers("STUDENT");
      const filteredStudents = response?.response?.filter(student => student.collegeId === String(collegeId)) || [];
      return filteredStudents;
    } catch (error) {
      console.error("Error fetching students:", error);
      return [];
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMemberClick = async (index) => {
    if (!selectedCollege || selectedCollege === "") {
      alert("Please select a college first");
      return;
    }
  

    setCurrentMemberIndex(index);
    
    // Fetch and filter students for the selected college
    const collegeStudents = await fetchStudentsByCollege(selectedCollege);
    
    setStudents(collegeStudents);
    setIsModalOpen(true);
  };

  const handleStudentSelect = (studentEmail) => {
    const updatedMembers = [...members];
    updatedMembers[currentMemberIndex] = studentEmail;
    setMembers(updatedMembers);
    setIsModalOpen(false);
  };

  const addMember = () => {
    if (members.length < 4) {
      setMembers([...members, ""]);
    }
  };

  const removeMember = (index) => {
    if (members.length > 1) {
      const updatedMembers = members.filter((_, i) => i !== index);
      setMembers(updatedMembers);
    }
  };

  const handleCollegeChange = (e) => {
    const selectedCollegeId = e.target.value;
    const selectedCollegeObj = colleges.find(college => college.id === selectedCollegeId);

    setSelectedCollege(selectedCollegeId);
    setFormData(prevData => ({
      ...prevData,
      collegeId: selectedCollegeId,
      collegeName: selectedCollegeObj ? selectedCollegeObj.name : ''
    }));

    e.target.size = 1;
    e.target.blur();
  };

  const handleMentorChange = (e) => {
    const selectedMentorId = e.target.value;
    const selectedMentorObj = mentors.find(mentor => mentor.id === selectedMentorId);

    setSelectedMentor(selectedMentorId);
    setFormData(prevData => ({
      ...prevData,
      mentorId: selectedMentorId,
      mentorName: selectedMentorObj ? `${selectedMentorObj.name} (${selectedMentorObj.email})` : ''
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (role === "admin") {
        const projectData = {
          name: formData.name,
          description: formData.description,
          collegeId: selectedCollege,
          mentorId: selectedMentor,
          members: members, // Use the correct state
        };
        await createProject(projectData);
        alert("Project Assigned Successfully");
        resetForm();
      } else {
        console.log("No task assignment implemented");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "Something went wrong");
    }
  };
  

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      collegeId: "",
      mentorId: "",
      members: "",
      collegeName: "",
      mentorName: "",
      lastDate: "",
    });
    setSelectedCollege("");
    setSelectedMentor("");
    setMembers([""]); // Reset members
  };
  
  return (
    <div className={styles.container}>
      {/* Stats Section */}
      <div className={styles.statsContainer}>
        {role === "admin" ? (
          <>
            <StatsCard title="Total Projects" value="15" titleClass={styles.statsTitle} valueClass={styles.statsValue} />
            <StatsCard title="Total Students" value="120" titleClass={styles.statsTitle} valueClass={styles.statsValue} />
            <StatsCard title="Total Mentors" value="10" titleClass={styles.statsTitle} valueClass={styles.statsValue} />
          </>
        ) : (
          <>
            <StatsCard title="Total Tasks" value="30" titleClass={styles.statsTitle} valueClass={styles.statsValue} />
            <StatsCard title="Submitted" value="20" titleClass={styles.statsTitle} valueClass={styles.statsValue} />
            <StatsCard title="To Be Reviewed" value="10" titleClass={styles.statsTitle} valueClass={styles.statsValue} />
          </>
        )}
      </div>

      {/* Form Section */}
      <div className={styles.formContainer}>
        <h2>{role === "admin" ? "Assign Project" : "Assign Task"}</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.inputBox}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={styles.inputBox}
              rows="3"
              required
            />
          </div>

          {role === "admin" ? (
            <>
              {/* Mentor Selection */}
              {/* Mentor Selection */}
              <div className={styles.formGroup}>
                <label>Mentor</label>
                <div className={styles.selectWrapper}>
                  <select
                    name="mentorId"
                    value={selectedMentor}
                    onChange={handleMentorChange}
                    className={styles.selectBox}
                    required
                  >
                    <option value="" disabled>Select Mentor</option>
                    {mentors.map((mentor) => (
                      <option
                        key={mentor.id}
                        value={mentor.id}
                        className={styles.optionItem}
                      >
                        {mentor.name} ({mentor.email})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>

                <label>College</label>
                <div className={styles.selectWrapper}>
                  <select
                    name="collegeId"
                    value={selectedCollege}
                    onChange={handleCollegeChange}
                    className={styles.selectBox}
                    required
                    onFocus={(e) => e.target.size = 4}
                    onBlur={(e) => e.target.size = 1}
                  >
                    <option value="" disabled>Select College</option>
                    {colleges.map((college) => (
                      <option key={college.id} value={college.id} className={styles.optionItem}>
                        {college.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              
                <div className={styles.formGroup}>
                  <label>Members</label>
                  <div className={styles.memberContainer}>
                    {members.map((member, index) => (
                      <div key={index} className={styles.memberInputWrapper}>
                        <input
                          type="text"
                          value={member}
                          onClick={() => handleMemberClick(index)}
                          readOnly
                          className={styles.inputBox}
                          placeholder="Click to select a student"
                        />
                        <button
                          type="button"
                          onClick={() => removeMember(index)}
                          className={styles.removeButton}
                          style={{ display: members.length > 1 ? "flex" : "none" }}
                        >
                          ❌
                        </button>
                      </div>
                    ))}

                    {members.length < 4 && (
                      <div className={styles.lastInputWrapper}>
                        <button type="button" onClick={addMember} className={styles.addButton}
                          style={{ flex: "0 0 auto" }}
                        >
                          ➕
                        </button>
                      </div>
                    )}
                  </div>
                </div>

            </>
          ) : (
            <div className={styles.formGroup}>
              <label>Last Date</label>
              <input
                type="date"
                name="lastDate"
                value={formData.lastDate}
                onChange={handleChange}
                className={styles.inputBox}
                required
              />
            </div>
          )}

          <button type="submit" className={styles.assignButton}>
            {role === "admin" ? "Assign Project" : "Assign Task"}
          </button>
        </form>
      </div>
      {isModalOpen && (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h3>Select a Student</h3>
          {students.length > 0 ? (
            <ul>
              {students.map((student) => (
                <li
                  key={student.id}
                  onClick={() => handleStudentSelect(student.name)}
                >
                  {student.name} 
                </li>
              ))}
            </ul>
          ) : (
            <p>No students found for this college.</p>
          )}
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </div>
      </div>
    )}
    </div>
    
  
);
  
};


export default AssignForm;