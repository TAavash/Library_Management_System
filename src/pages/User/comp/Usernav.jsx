// src/components/Usernav.js
import React, { useState } from "react";
import Logo from "../../../assets/pcpslogo.png";
import { RiSettings3Fill } from "react-icons/ri";
import { MdNotifications } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import UserNotification from "./UserNotification";

const Usernav = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate(`/`);
  };
  
  const handleHome = () => {
    navigate(`/user/home`);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleSettingsPanel = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const toggleNotificationPanel = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 fixed w-full top-0 left-0 z-50">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <img src={Logo} className="h-[60px] cursor-pointer" alt="logo" onClick={handleHome}/>

        <div className="flex items-center space-x-6">
          
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
          <h3 className="text-lg font-semibold">Material UI Configurator</h3>
          <p className="text-sm text-gray-500">See our dashboard options.</p>
          <div className="mt-4">
            <p className="font-medium">Navigation Colors</p>
            <div className="flex space-x-2 mt-2">
              <button className="w-8 h-8 rounded-full bg-pink-500"></button>
              <button className="w-8 h-8 rounded-full bg-black"></button>
              <button className="w-8 h-8 rounded-full bg-blue-500"></button>
              <button className="w-8 h-8 rounded-full bg-green-500"></button>
              <button className="w-8 h-8 rounded-full bg-orange-500"></button>
              <button className="w-8 h-8 rounded-full bg-red-500"></button>
            </div>
            <div className="flex flex-col gap-5 justify-center mt-4">
              <button
                className="p-2 border-2 border-black rounded w-full"
                onClick={() => navigate("/user/profile")}
              >
                View Profile
              </button>
              <button
                className="p-2 border-2 border-black rounded w-full"
                onClick={handleLogout}
              >
                Logout
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
