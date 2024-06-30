import React from "react";
import Header from "./Header";

const Navbar = () => {
  return (
    <div>
    <Header />
    <div className="w-[65%] z-20 p-[5px] rounded-[30px] bg-red-500 shadow-slate-500 shadow-md fixed top-[15%] mx-[15%] mt-[10px]">
      <div className="flex mx-auto justify-evenly content-stretch">
        <button className="w-[70px] h-[50px] rounded-r-full rounded-l-full hover:bg-blue-700 text-white">Home</button>
        <button className="w-[70px] h-[50px] rounded-r-full rounded-l-full hover:bg-blue-700 text-white">Books</button>
        <button className="w-[70px] h-[50px] rounded-r-full rounded-l-full hover:bg-blue-700 text-white">Patrons</button>
        <button className="w-[70px] h-[50px] rounded-r-full rounded-l-full hover:bg-blue-700 text-white">Message</button>
        <button className="w-[70px] h-[50px] rounded-r-full rounded-l-full hover:bg-blue-700 text-white">Fines</button>
        <button className="w-[70px] h-[50px] rounded-r-full rounded-l-full hover:bg-blue-700 text-white">Others</button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
