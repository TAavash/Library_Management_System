import React from "react";
import Pcps from "../assets/pcps_logo.jpg";
import SearchBar from "../components/Search";
import Avatar from "../components/Avatar";
import { VscBellDot } from "react-icons/vsc";
import { IoIosHelpCircleOutline } from "react-icons/io";

const header = () => {
  return (
    <div className="w-screen bg-white">
      <div className="flex justify-between items-center">
        <img className="h-9 md:h-14" src={Pcps} alt="" />
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

export default header;
