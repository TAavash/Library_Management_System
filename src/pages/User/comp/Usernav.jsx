// src/components/Usernav.js
import React, { useState } from "react";
import Logo from "../../../assets/pcpslogo.png";
import { RiSettings3Fill } from "react-icons/ri";
import { MdNotifications } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import UserNotification from "./UserNotification";
import { CgProfile } from "react-icons/cg";
import { MdSecurity } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { MdHelp } from "react-icons/md";

const Usernav = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    navigate(`/`);
  };

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleSettingsPanel = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const toggleNotificationPanel = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 fixed w-full top-0 left-0 z-50">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <img src={Logo} className="h-[60px]" alt="logo" />

        <div className="flex items-center space-x-6">
          <button
            className="text-black hover:text-red-500 text-xl"
            onClick={() => navigate("/user/userhelp")}
          >
            <MdHelp />
          </button>
          <button
            className="text-black hover:text-red-500 text-xl"
            onClick={toggleSettingsPanel}
          >
            <RiSettings3Fill />
          </button>
          <button
            className="text-black hover:text-red-500 text-xl"
            onClick={toggleNotificationPanel}
          >
            <MdNotifications />
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform ${
          isSettingsOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 relative">
          <button
            className="absolute top-2 right-2 p-1 rounded-full text-gray-500 hover:text-black"
            onClick={toggleSettingsPanel}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="mt-6 space-y-4">
            <div className="flex flex-col gap-5 justify-center">
              <button
                className="flex items-center justify-center p-3 border-2 border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition duration-300 w-full"
                onClick={() => navigate("/user/profile")}
              >
                <CgProfile className="mr-2 text-xl" />
                <span className="font-medium text-lg">View Profile</span>
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="flex items-center justify-center p-3 border-2 border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition duration-300 w-full"
                onClick={() => navigate("/user/password")}
              >
                <MdSecurity className="mr-2 text-xl" />
                <span className="font-medium text-lg">Password & Security</span>
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="flex items-center justify-center p-3 border-2 border-gray-300 rounded-lg shadow-sm bg-white hover:bg-red-100 transition duration-300 w-full"
                onClick={handleLogout}
              >
                <MdLogout className="mr-2 text-xl text-red-500" />
                <span className="font-medium text-lg text-red-500">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform ${
          isNotificationsOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <UserNotification toggleNotificationPanel={toggleNotificationPanel} />
      </div>
    </nav>
  );
};

export default Usernav;
