import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LightDarkToggle from "./LightDarkToggle";
import { GiHamburgerMenu } from "react-icons/gi";
import ProfilePic from "../assets/gojo.jpg";

const Hamburger = () => {
    const navigate = useNavigate();
  const handleLibraryDash = () => {
    navigate(`/librarian-dashboard`);
  };
  const handleLibraryBooks = () => {
    navigate(`/librarian-books`);
  };
  const handlePatrons = () => {
    navigate(`/patrons`);
  };
  const handleMessage = () => {
    navigate(`/message`);
  };
  const handleSettings = () => {
    navigate(`/settings`);
  };
  const handleHelp = () => {
    navigate(`/help`);
  };
  const handleNotification = () => {
    navigate(`/notifications`);
  };
  const handleLibrarianFines = () => {
    navigate(`/librarian-fines`);
  };
  const handleLibrarianOthers = () => {
    navigate(`/librarian-others`);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-right">
      <div
        onClick={handleToggle}
        className="cursor-pointer inline-flex w-fit rounded-md shadow-sm"
      >
        <span className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <div className="flex gap-2 p-[2px]">
            <GiHamburgerMenu />
          </div>
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
              className="block flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-0"
            >
              <div className="flex w-fit gap-2 border-2 border-slate-600 rounded-r-full rounded-l-full p-[2px]">
                <img
                  className="h-10 w-10 rounded-full"
                  src={ProfilePic}
                  alt="gojo"
                />
              </div>
              My Profile
            </div>
            <div
              className="flex justify-between block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-2"
            >
              <LightDarkToggle /> : Mode
            </div>
            <div onClick={handleLibraryDash}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-3"
            >
              Home
            </div>
            <div onClick={handleLibraryBooks}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-3"
            >
              Books
            </div>
            <div onClick={handlePatrons}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-3"
            >
              Patrons
            </div>
            <div onClick={handleMessage}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-3"
            >
              Message
            </div>
            <div onClick={handleLibrarianFines}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-3"
            >
              Fines
            </div>
            <div onClick={handleLibrarianOthers}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-3"
            >
              Others
            </div>
            <div onClick={handleSettings}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-3"
            >
              Settings
            </div>
            <div onClick={handleNotification}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-4"
            >
              Notification
            </div>
            <div onClick={handleHelp}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-5"
            >
              Help
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Hamburger;
