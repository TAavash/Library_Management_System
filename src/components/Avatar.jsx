import React, { useState, useEffect } from "react";
import DefaultProfile from "../assets/User.jpg";
import { useNavigate } from "react-router-dom";
import LightDarkToggle from "./LightDarkToggle";
import { getMemberById } from "../utils/Api"; // Ensure this import is correct

const Avatar = () => {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(DefaultProfile);
  // const [isOpen, setIsOpen] = useState(false);

  const user_id = localStorage.getItem('user_id'); // Get the user ID from localStorage

  useEffect(() => {
    const fetchUserData = async () => {
      if (user_id) {
        try {
          const memberData = await getMemberById(user_id);
          console.log("Fetched user data:", memberData); // Log the API response
          if (memberData && memberData.data && memberData.data.profile_pic) {
            setProfilePic(memberData.data.profile_pic);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [user_id]);

  const handleLibraryProfile = () => {
    navigate(`/libraian/profile`);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate(`/`);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-right">
      <div
        onClick={handleToggle}
        className="cursor-pointer inline-flex w-fit rounded-md shadow-sm "
      >
        <span className="inline-flex items-center px-3 py-2 text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <div className="flex gap-2 border-2 border-slate-600 rounded-r-full rounded-l-full p-[2px]">
            <img
              className="h-9 w-9 rounded-full"
              src={profilePic}
              alt="Profile"
            />
          </div>
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <div
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-0"
              onClick={handleLibraryProfile}
            >
              My Profile
            </div>
            <div
              className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-2"
            >
              <LightDarkToggle /> Mode
            </div>
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-end font-semibold text-red-600 hover:bg-gray-100 "
            >
              Logout
            </button>
          </div >
        </div >
      )}
    </div >
  );
};

export default Avatar;
