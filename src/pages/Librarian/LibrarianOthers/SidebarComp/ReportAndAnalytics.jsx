import React from "react";
import { FiSearch,  } from "react-icons/fi";

const ReportAndAnalytics = () => {
  return (
    <div className="w-full h-full ">
      <div className="w-[100%] h-[20%] flex justify-between bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
        <div className=" h-full flex-col">
          <div className="w-full h-[70%] text-3xl">
            Report & Analytics
          </div>
          <div className="w-full h-[30%] text-[-2xl] text-[#525252]">
            Manage all the reports
          </div>
        </div>

        <div className='flex justify-center m-2'>
          <div className="flex w-[500px] items-center gap-1">
            <FiSearch className="h-5 w-5 ml-1" />
            <input type="text" placeholder='Search' className='p-1 w-[500px]  border-hidden focus:outline-none'
            />
          </div>
        </div>

      </div>
      <div className="flex-col h-[80%] p-[30px] gap-[30px] bg-blue-600 rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[30px] my-2">
          Report
        </div>
      </div>
    </div>
  );
};

export default ReportAndAnalytics;
