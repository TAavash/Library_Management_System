import React, { useState } from "react";
import Pcps from "../assets/pcps_logo.jpg";
import SearchBar from "../components/Search";
import Avatar from "../components/Avatar";
import { VscBellDot } from "react-icons/vsc";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import NavMobile from "./NavMobile";

const NavNew = () => {
  const navigate = useNavigate();
  const handleLibraryDash = () => {
    navigate(`/librarian-dashboard`);
  };
  const handleLibraryBooks = () => {
    navigate(`/librarian-books`);
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

  const [mobileNaavbarOpen, setMobileNaavbarOpen] = useState(false);
  return (
    <div className="w-screen fixed z-10 bg-white ">
      <div className="flex justify-between items-center lg:mr-10">
        <img
          onClick={handleLibraryDash}
          className="h-9 md:h-14 cursor-pointer"
          src={Pcps}
          alt=""
        />
        <div className="hidden md:flex mx-auto justify-evenly content-stretch">
          <button
            onClick={handleLibraryDash}
            className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 text-black"
          >
            Home
          </button>
          <button
            onClick={handleLibraryBooks}
            className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 text-black"
          >
            Books
          </button>
          <button className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 text-black">
            Patrons
          </button>
          <button
            onClick={handleMessage}
            className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 text-black"
          >
            Message
          </button>
          <button
            onClick={handleLibrarianFines}
            className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 text-black"
          >
            Fines
          </button>
          <button
            onClick={handleLibrarianOthers}
            className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 text-black"
          >
            Others
          </button>
        </div>
        <div className="md:hidden" onClick={() => setMobileNaavbarOpen(true)}>
          <GiHamburgerMenu />
        </div>
        <div className=" flex items-center gap-4">
          <VscBellDot
            onClick={handleNotification}
            className="text-2xl hover:fill-red-600 cursor-pointer"
          />
          <IoIosHelpCircleOutline
            onClick={handleHelp}
            className="text-2xl hover:fill-red-600 cursor-pointer"
          />
          <IoSettingsSharp
            onClick={handleSettings}
            className="text-2xl hover:fill-red-600 cursor-pointer"
          />
          <div className="md:hidden">
            <span
              className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className="pt-[20px] hidden md:block">
            <SearchBar />
          </div>
          <div className=" cursor-pointer">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavNew;