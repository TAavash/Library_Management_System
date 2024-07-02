import React from "react";
import Pcps from "../assets/pcps_logo.jpg";
import SearchBar from "../components/Search";
import Avatar from "../components/Avatar";
import { VscBellDot } from "react-icons/vsc";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const NavNew = () => {
  const navigate = useNavigate();
  const handleLibraryDash = () => {
    navigate(`/librarian-dashboard`);
  };
  const handleLibraryBooks = () => {
    navigate(`/librarian-books`);
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
  return (
    <div className="w-screen fixed z-10 bg-white justify-evenly">
      <div className="flex justify-between items-center lg:mr-10">
        <img
          onClick={handleLibraryDash}
          className="h-9 md:h-14 cursor-pointer"
          src={Pcps}
          alt=""
        />
        <div className="flex mx-auto justify-evenly content-stretch">
          <button onClick={handleLibraryDash} className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 text-black">
            Home
          </button>
          <button onClick={handleLibraryBooks} className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 text-black">
            Books
          </button>
          <button className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 text-black">
            Patrons
          </button>
          <button className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 text-black">
            Message
          </button>
          <button onClick={handleLibrarianFines} className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 text-black">
            Fines
          </button>
          <button onClick={handleLibrarianOthers} className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 text-black">
            Others
          </button>
        </div>
        <div className="w-[600px] flex items-center gap-4">
          <IoSettingsSharp onClick={handleSettings} className="text-2xl hover:fill-red-600 cursor-pointer" />
          <IoIosHelpCircleOutline onClick={handleHelp} className="text-2xl hover:fill-red-600 cursor-pointer" />
          <VscBellDot onClick={handleNotification} className="text-2xl hover:fill-red-600 cursor-pointer" />
          <div className="pt-[20px]">
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
