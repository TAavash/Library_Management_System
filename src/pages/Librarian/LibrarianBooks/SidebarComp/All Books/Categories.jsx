import React from "react";
import { FiSearch } from "react-icons/fi";
import { GiBookshelf } from "react-icons/gi";
import { FaPencilAlt, FaGlobe, FaLightbulb, FaRegHeart, FaPuzzlePiece, FaClock } from "react-icons/fa";
import { LuLampDesk } from "react-icons/lu";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { RiQuillPenFill } from "react-icons/ri";

const Categories = () => {
  return (
    <div className="w-full h-full ">
      <div className="w-full h-[20%] flex flex-col md:flex-row justify-between bg-[#F5F5F5] px-6 md:px-12 py-4 md:py-6 rounded-tr-2xl">
        <div className="h-full flex-col">
          <div className="w-full h-[70%] text-2xl md:text-3xl">
            Categories
          </div>
          <div className="w-full h-[30%] text-lg md:text-2xl text-[#525252]">
            Manage all the categories
          </div>
        </div>

        <div className='flex justify-center m-2'>
          <div className="flex w-full md:w-[500px] items-center gap-1">
            <FiSearch className="h-5 w-5 ml-1" />
            <input type="text" placeholder='Search' className='p-1 w-full border-hidden focus:outline-none' />
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
          <div>
            <div className="text-[30px]">Genre : </div>
            <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[30px] my-2">
              <button className=" flex flex-col gap-3 p-[10px] items-center w-[200px] h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white  shadow-slate-500 shadow-md">
                <div className="text-[20px]">Fiction</div>
                <div className="text-[50px]">
                  <RiQuillPenFill />
                </div>
              </button>
              <button className=" flex flex-col gap-3 p-[10px] items-center w-[200px] h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white  shadow-slate-500 shadow-md">
                <div className="text-[20px]">Non Fiction</div>
                <div className="text-[50px]">
                  <FaLightbulb />
                </div>
              </button>
              <button className=" flex flex-col gap-3 p-[10px] items-center w-[200px] h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white  shadow-slate-500 shadow-md">
                <div className="text-[20px]">Romance</div>
                <div className="text-[50px]">
                  <FaRegHeart />
                </div>
              </button>
              <button className=" flex flex-col gap-3 p-[10px] items-center w-[200px] h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white  shadow-slate-500 shadow-md">
                <div className="text-[20px]">Mystery</div>
                <div className="text-[50px]">
                  <FaPuzzlePiece />
                </div>
              </button>
              <button className=" flex flex-col gap-3 p-[10px] items-center w-[200px] h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white  shadow-slate-500 shadow-md">
                <div className="text-[20px]">Fantasy</div>
                <div className="text-[50px]">
                  <FaWandMagicSparkles />
                </div>
              </button>
              <button className=" flex flex-col gap-3 p-[10px] items-center w-[200px] h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white  shadow-slate-500 shadow-md">
                <div className="text-[20px]">History</div>
                <div className="text-[50px]">
                  <FaClock />
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
