import React from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../../assets/profilepicture.jpeg";
import Background from "../../assets/profilebg.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { motion } from "framer-motion";
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { HiArrowLeft } from "react-icons/hi";
import Profilecss from "../User/comp/Profile.css";

const UserProfile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate(`/`);
  };

  const handleBack = () => {
    navigate(-1); // Goes back to the previous page
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-20">
        <button onClick={handleBack} className="flex items-center text-white hover:text-red-800 bg-transparent border-none">
          <HiArrowLeft className="text-xl mr-2" /> 
        </button>
      </div>

      {/* Header Section */}
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={Profile}
            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
            alt="profile"
          />
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mt-4"
          >
            Fredy Mercury
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl text-white mt-2"
          >
            Student, Second Year
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={handleLogout}
            className="flex items-center mt-4 text-red-600 bg-white px-4 py-2 rounded-full shadow-md"
          >
            <CiLogout className="mr-1" /> Logout
          </motion.button>
        </div>
      </div>

      {/* Sticky Navigation
      <div className="sticky top-0 bg-white shadow-md z-10">
        <nav className="max-w-4xl mx-auto p-4 flex justify-around">
          <a href="#posts" className="text-blue-600 hover:text-blue-800">Posts</a>
          <a href="#photos" className="text-blue-600 hover:text-blue-800">Photos</a>
          <a href="#info" className="text-blue-600 hover:text-blue-800">Personal Info</a>
        </nav>
      </div> */}

      {/* Content Sections */}
      {/* <div id="posts" className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Posts</h3>
        <p className="text-gray-700">
          Here are some of the recent posts made by Fredy.
        </p>
      </div>
      <div id="photos" className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Photos</h3>
        <p className="text-gray-700">
          Check out some of the photos shared by Fredy.
        </p>
      </div> */}
      <div id="info" className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold mb-4">Personal Info</h3>
          <button>
            <MdOutlineModeEditOutline className="text-xl text-gray-600 hover:text-gray-800" />
          </button>
        </div>
        <div className="flex flex-col gap-2 text-gray-700">
          {[
            { label: "First Name", value: "Fredy" },
            { label: "Last Name", value: "Mercury" },
            { label: "Gender", value: "Male" },
            { label: "Address", value: "Patan" },
            { label: "Email", value: "fredymercury@mail.com" },
            { label: "Mobile", value: "977-9812121212" },
            { label: "Library Card Number", value: "2214618" },
          ].map((info, index) => (
            <div key={index} className="text-sm">
              <strong>{info.label}:</strong> {info.value}
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mt-8">
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="#"
          className="text-blue-600 hover:text-blue-800 text-3xl"
        >
          <FaFacebook />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="#"
          className="text-blue-400 hover:text-blue-600 text-3xl"
        >
          <FaTwitter />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="#"
          className="text-pink-600 hover:text-pink-800 text-3xl"
        >
          <FaInstagram />
        </motion.a>
      </div>
    </div>
  );
};

export default UserProfile;
