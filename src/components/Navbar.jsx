import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-[15%] mx-[154px] mt-[10px] items-center justify-between">
      <div className="flex lg:w-[1132px] md:w-[800px] sm:w-[500px] h-[76px] rounded-[30px] bg-red-500 shadow-slate-500 shadow-md items-center justify-evenly">
        <button className="w-91 h-44">Home</button>
        <button className="w-91 h-44">Books</button>
        <button className="w-91 h-44">Patrons</button>
        <button className="w-91 h-44">Message</button>
        <button className="w-91 h-44">Fines</button>
        <button className="w-91 h-44">Others</button>
      </div>
    </div>
  );
};

export default Navbar;
