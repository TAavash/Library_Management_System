import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { LuBellDot } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoChevronDownOutline } from "react-icons/io5";
import profile from "../../../assets/gojo.jpg"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white h-fit p-[3px] rounded-2xl px-[20px] mt-[10px]">
      <form action="" className="relative flex items-center">
        <input
          type="text"
          placeholder="search"
          className="border border-black pl-10 pr-3 py-2 rounded-md flex-grow"
        />
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
          <CiSearch />
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white text-2xl px-3 py-2 rounded-xl ml-3 flex items-center justify-center"
        >
          <CiSearch />
        </button>
      </form>
      <div className="flex text-2xl justify-center items-center gap-[20px] px-[10px] py-[5px]">
        <div>
          <IoIosHelpCircleOutline />
        </div>
        <div>
          <LuBellDot />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <div className="text-4xl">
            <img src={profile} className='w-[40px] h-[30px] rounded-full'></img>
          </div>
          <div>
          <IoChevronDownOutline className='w-[15px]'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
