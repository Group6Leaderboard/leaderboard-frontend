import React from "react";
import Sidebar from "./Sidebar";

export default {
  title: "Components/Sidebar",
  component: Sidebar
};

const Template = (args) => <Sidebar {...args} />;

export const AdminSidebar = Template.bind({});
AdminSidebar.args = { role: "Admin" };

export const MentorSidebar = Template.bind({});
MentorSidebar.args = { role: "Mentor" };

export const StudentSidebar = Template.bind({});
StudentSidebar.args = { role: "Student" };

export const CollegeSidebar = Template.bind({});
CollegeSidebar.args = { role: "College" };
