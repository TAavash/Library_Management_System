import React from "react";
import Pcps from "../assets/pcps_logo.jpg";
import SearchBar from "../components/Search";
import Avatar from "../components/Avatar";
import { VscBellDot } from "react-icons/vsc";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const NavNew = () => {
  const navigate = useNavigate();
  const handleLibraryDash = () => {
    navigate(`/librarian-dashboard`);
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
          <button className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 text-black">
            Home
          </button>
          <button className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 text-black">
            Books
          </button>
          <button className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 text-black">
            Patrons
          </button>
          <button className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 text-black">
            Message
          </button>
          <button className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 text-black">
            Fines
          </button>
          <button className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 text-black">
            Others
          </button>
        </div>
        <div className="w-[500px] flex items-center gap-4">
          <IoIosHelpCircleOutline className="h-5 w-5 " />
          <VscBellDot className="h-5 w-5 hover:fill-red-600" />
          <div className="pt-[20px]">
            <SearchBar />
          </div>
          <div className="">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavNew;
