import React, { useState } from "react";
import Logo from "../../../assets/pcpslogo.png";
import { IoSettingsSharp } from "react-icons/io5";
import { MdNotifications } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import UserNotification from "./UserNotification";
import { CgProfile } from "react-icons/cg";
import { MdSecurity } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { MdHelp } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import RequestBookForm from "../../../pages/User/comp/RequestBookForm";
const Usernav = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    navigate(`/`);
  };
  const handleUserHome = () => {
    navigate(`/user/home`);
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
        <img
          src={Logo}
          className="h-[60px] cursor-pointer"
          alt="logo"
          onClick={handleUserHome}
        />

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
            <IoSettingsSharp />
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
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-700 flex items-center">
              <IoSettingsSharp className="mr-2 text-xl text" />
              Settings
            </h3>
            <button
              className="p-1 rounded-full text-gray-500 hover:text-black"
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
          </div>
          <hr className="border-gray-300 my-2" />
          {/* settings start */}
          <div className="mt-4 space-y-4">
            <div className="flex flex-col gap-4">
              <button
                className="flex items-center justify-center p-2 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition duration-300 w-full text-base"
                onClick={() => navigate("/user/profile")}
              >
                <CgProfile className="mr-2 text-xl" />
                <span className="font-medium">View Profile</span>
              </button>
              <button
                className="flex items-center justify-center p-2 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition duration-300 w-full text-base"
                onClick={() => navigate("/user/password")}
              >
                <MdSecurity className="mr-2 text-xl" />
                <span className="font-medium">Password & Security</span>
              </button>
              <button
                className="flex items-center justify-center p-2 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-red-100 transition duration-300 w-full text-base"
                onClick={handleLogout}
              >
                <MdLogout className="mr-2 text-xl text-red-500" />
                <span className="font-medium text-red-500">Logout</span>
              </button>
            </div>

            {/* Cards */}
            <div className="mt-6 space-y-4">
              <div
                className="p-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition duration-300 cursor-pointer flex flex-col items-center"
                onClick={() => navigate("/user/requestbookform")}
              >
                <FaBookOpen className="mb-2 text-3xl text-blue-500" />
                <div className="text-center">
                  <h4 className="font-medium text-lg">Request Book</h4>
                  <p className="text-gray-600 text-sm">
                    Submit a request for the book you need.
                  </p>
                </div>
              </div>
              <div
                className="p-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition duration-300 cursor-pointer flex flex-col items-center"
                onClick={() => navigate("/user/subscribe")}
              >
                <IoMdMailOpen className="mb-2 text-3xl text-green-500" />
                <div className="text-center">
                  <h4 className="font-medium text-lg">
                    Subscribe to our Newsletter
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Stay updated with our latest news and updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* settings end */}
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
