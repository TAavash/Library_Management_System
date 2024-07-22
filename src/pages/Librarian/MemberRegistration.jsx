import React, { useState } from "react";
import Profile from "../../assets/gojo.jpg"; // Default profile image
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MemberRegistration() {
  const [profile, setProfile] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    dob: "",
    gender: "",
    address: "",
    email: "",
    mobile: "",
  });

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const [profileImage, setProfileImage] = useState(Profile);
  const navigate = useNavigate();

  const handleBackIconClick = () => {
    navigate("/LibraryDash");
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!validateFields()) return; // Only proceed if validation passes

    try {
      const response = await fetch("http://127.0.0.1:8000/api/member/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: profile.username,
          password: profile.password,
          first_name: profile.first_name,
          last_name: profile.last_name,
          dob: profile.dob,
          gender: profile.gender,
          address: profile.address,
          email: profile.email,
          mobile: profile.mobile,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Register successful!");
        setTimeout(() => navigate(`/LibraryRequestPage`), 2000); // Redirect after 2 seconds
      } else {
        toast.error(
          data.message || "Register failed. Please check your credentials."
        );
        console.log(data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error); // Log the error for debugging
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex w-full p-3 gap-2">
      <div className="w-2/3 flex flex-col">
        <div className="flex justify-around">
          <div>
            <IoArrowBackCircle
              className="h-14 w-14 cursor-pointer"
              onClick={handleBackIconClick}
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold">Create Membership</h2>
            <p className="text-slate-500">Registration Form</p>
          </div>
        </div>
        <div className="ml-36 mt-10">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col mt-3 gap-2">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                value={profile.first_name}
                onChange={handleInputChange}
                placeholder="Sudarshan"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                value={profile.last_name}
                onChange={handleInputChange}
                placeholder="Bam"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label>Date Of Birth</label>
              <input
                type="date"
                name="dob"
                value={profile.dob}
                onChange={handleInputChange}
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label>Gender</label>
              <select
                name="gender"
                className="w-2/3 pl-3 py-1 text-base border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                value={profile.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleInputChange}
                placeholder="Kupandole"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label>Contact</label>
              <input
                type="text"
                name="mobile"
                value={profile.mobile}
                onChange={handleInputChange}
                placeholder="0000000000"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                placeholder="email@gmail.com"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={profile.username}
                onChange={handleInputChange}
                placeholder="@qwerty"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={profile.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label>Role</label>
              <select className="w-2/3 pl-3 py-1 text-base border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md">
                <option value="">Select Role</option>
                <option value="Student">Student</option>
                <option value="Faculty Members">Faculty Members</option>
                <option value="Library Assistant">Library Assistant</option>
                <option value="Program Coordinator">Program Coordinator</option>
              </select>
            </div>
            <button
              type="submit"
              className="border rounded-xl bg-black text-white mt-6 text-center h-10 w-2/3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="relative w-1/3 flex flex-col items-center p-3 mt-10">
        <div className="fixed text-center">
          <img
            src={profileImage}
            alt="profile"
            className="w-52 h-52 rounded-xl p-1 object-cover"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-2"
          />
          <h5 className="cursor-pointer mt-2">Add Profile</h5>
        </div>
      </div>
    </div>
  );
}
