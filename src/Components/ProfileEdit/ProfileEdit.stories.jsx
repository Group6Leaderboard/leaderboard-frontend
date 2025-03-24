import React from "react";
import ProfileEdit from "./ProfileEdit";

export default {
  title: "Components/ProfileEdit",
  component: ProfileEdit,
  argTypes: {
    userType: {
      control: "radio",
      options: ["student", "mentor", "college"],
    },
  },
};

const Template = (args) => <ProfileEdit {...args} />;

export const StudentProfile = Template.bind({});
StudentProfile.args = {
  userType: "student",
  userData: {
    name: "John Doe",
    phone: "1234567890",
    profileImage: "/api/placeholder/150/150",
  },
};

export const MentorProfile = Template.bind({});
MentorProfile.args = {
  userType: "mentor",
  userData: {
    name: "Jane Smith",
    phone: "9876543210",
    profileImage: "/api/placeholder/150/150",
  },
};

export const CollegeProfile = Template.bind({});
CollegeProfile.args = {
  userType: "college",
  userData: {
    name: "XYZ College",
    about: "A prestigious institution for higher education.",
    location: "New York, USA",
    profileImage: "/api/placeholder/150/150",
  },
};
