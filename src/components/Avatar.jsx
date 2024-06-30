import React from "react";
import ProfilePic from "../assets/gojo.jpg";
import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowUp } from "react-icons/io";

const Avatar = () => {
  return (
    <div className="flex gap-2 border-2 border-slate-600 rounded-r-full rounded-l-full p-[2px]">
      <img className="h-10 w-10 rounded-full" src={ProfilePic} alt="gojo" />
      <button className="p-[3px]">
        <IoIosArrowDown />
      </button>
    </div>
  );
};

export default Avatar;
