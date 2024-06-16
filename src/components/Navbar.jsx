import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-[10%] mx-[154px] mt-[10px] items-center justify-between">
      <div className="flex lg:w-[1132px] md:w-[800px] sm:w-[500px] h-[76px] rounded-[30px] bg-red-500 shadow-slate-500 shadow-md items-center justify-evenly">
        <button className="w-91 ">Home</button>
        <button className="w-91 ">Books</button>
        <button className="w-91 ">Patrons</button>
        <button className="w-91 ">Message</button>
        <button className="w-91 ">Fines</button>
        <button className="w-91 ">Others</button>
      </div>
    </div>
  );
};

export default Navbar;
