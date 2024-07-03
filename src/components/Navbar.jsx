import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-[10%] mx-[170px] mt-[10px] items-center justify-between">
      <div className="flex lg:w-[1132px] md:w-[800px] sm:w-[500px] h-[76px] rounded-[30px] bg-slate-400 shadow-slate-500  shadow-md items-center justify-evenly">
        <button className="w-91 hover:text-red-600 ">Home</button>
        <button className="w-91 hover:text-red-600">Books</button>
        <button className="w-91 hover:text-red-600">Patrons</button>
        <button className="w-91 hover:text-red-600">Message</button>
        <button className="w-91 hover:text-red-600">Fines</button>
        <button className="w-91 hover:text-red-600">Others</button>
      </div>
    </div>
  );
};

export default Navbar;
