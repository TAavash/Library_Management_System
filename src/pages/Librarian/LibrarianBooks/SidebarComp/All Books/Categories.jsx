import React from "react";
import { GiBookshelf } from "react-icons/gi";
import { FaPencilAlt, FaGlobe } from "react-icons/fa";
import { LuLampDesk } from "react-icons/lu";

const Categories = () => {
  return (
    <div className="w-full h-full ">
      <div className="w-[100%] h-[20%] bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
        <div className="w-full h-full flex justify-evenly p-[10px] gap-[5px]">
          <div className="w-[100%] h-full flex-col">
            <div className="w-full h-auto text-start text-3xl p-1">Category</div>

            <div className="w-full h-auto text-start text-2xl text-gray-600 p-1">
              Manage all categories
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col h-[80%] p-[30px] gap-[30px] bg-white rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
        <div>
          <div className="mb-10">
            <div className="text-[30px]">Element Select : </div>
            <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[30px] my-2">
              <button className=" flex flex-col gap-3 p-[10px] items-center w-[200px] h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white  shadow-slate-500 shadow-md">
                <div className="text-[20px]">General Collection</div>
                <div className="text-[50px]">
                  <GiBookshelf />
                </div>
              </button>
              <button className=" flex flex-col gap-3 p-[10px] items-center w-[200px] h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white  shadow-slate-500 shadow-md">
                <div className="text-[20px]">Textbooks</div>
                <div className="text-[50px]">
                  <FaPencilAlt />
                </div>
              </button>
              <button className=" flex flex-col gap-3 p-[10px] items-center w-[200px] h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white  shadow-slate-500 shadow-md">
                <div className="text-[20px]">Reference Books</div>
                <div className="text-[50px]">
                  <FaGlobe />
                </div>
              </button>
              <button className=" flex flex-col gap-3 p-[10px] items-center w-[200px] h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white  shadow-slate-500 shadow-md">
                <div className="text-[20px]">Other options</div>
                <div className="text-[50px]">
                  <LuLampDesk />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
