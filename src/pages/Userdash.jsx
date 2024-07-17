import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


const Userdash = () => {
  return (
    <div>
        <div className="bg-[#828282] min-h-screen min-w-screen flex">
          <Sidebar />
          <div className="flex-grow">
            <div className="flex flex-col gap-[20px]">
              <Navbar />
            </div>
          </div>
          <Sidebar />
        </div>
      
    </div>
  );
};

export default Userdash;
