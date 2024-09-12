import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

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
  const handleLibraryProfile = () => {
    navigate(`/libraian/profile`);
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
            <GiHamburgerMenu className="text-xl" />
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
              onClick={handleLibraryProfile}
              className="w-full px-4 py-2 text-end font-semibold text-red-600 hover:bg-gray-100"
              role="menuitem"
              id="options-menu-item-0"
            >
              My Profile
            </div>
            <div
              onClick={handleLibraryDash}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-3"
            >
              Home
            </div>
            <div
              onClick={handleLibraryBooks}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-3"
            >
              Books
            </div>
            <div
              onClick={handlePatrons}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-3"
            >
              Patrons
            </div>
            <div
              onClick={handleMessage}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-3"
            >
              Message
            </div>
            <div
              onClick={handleLibrarianFines}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-3"
            >
              Fines
            </div>
            <div
              onClick={handleLibrarianOthers}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-3"
            >
              Others
            </div>
            <div
              onClick={handleSettings}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-3"
            >
              Settings
            </div>
            <div
              onClick={handleNotification}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              id="options-menu-item-4"
            >
              Notification
            </div>
            <div
              onClick={handleHelp}
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
