import React from "react";
import Pcps from "../../assets/pcpslogo.png";
import Dropdown from "../../components/Dropdown";
import { CiBookmark, CiCircleCheck } from "react-icons/ci";
import FlipCard from "../../components/FlipCard";
import BookCover from "../../assets/bookCover.jpg";

const LandingPage = () => {
  return (
    <div>
      <div className=" h-screen bg-[#E6E6E6] gap-[2%] flex flex-col">
        <div className="flex flex-col h-[63%] w-[100%] rounded-b-2xl bg-white shadow-slate-500 shadow-md ">
          <div className="w-screen h-[20%] z-10 bg-white flex flex-col">
            <div className="w-full flex justify-between items-center lg:mr-10">
              <img
                className="h-9 md:h-14"
                style={{ cursor: "pointer" }}
                src={Pcps}
                alt=""
              />
              <div className=" flex gap-5">
                <button className="h-fit w-[120px] bg-[#E69244] border-2 border-slate-700 rounded-full text-2xl p-[2px] px-[3px]">
                  Books
                </button>
                <button className="h-fit w-[120px] bg-white border-2 border-slate-700 rounded-full text-2xl p-[2px] px-[3px]">
                  E-Books
                </button>
              </div>

              <div className="w-[200px] flex items-center gap-4">
                <CiBookmark className="h-5 w-5 hover:fill-red-600" />
                <CiCircleCheck className="h-5 w-5 hover:fill-red-600" />

                <div>
                  <Dropdown />
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[80%] p-[30px] gap-[30px] bg-white rounded-2xl overflow-y-auto scroll-smooth scrollbar-thin">
            <div className="w-[40%] flex justify-center items-center">
              <div className="text-5xl">New & Trending</div>
            </div>
            <div className="flex justify-between w-[60%] gap-[20px]">
              <img src={BookCover} alt="book" className="h-[300px] w-fit" />
              <img src={BookCover} alt="book" className="h-[300px] w-fit" />
              <img src={BookCover} alt="book" className="h-[300px] w-fit" />
            </div>
          </div>
        </div>
        <div className="flex h-[35%] w-[100%] rounded-t-2xl bg-white shadow-slate-500 shadow-md ">
          <div className="flex w-full p-[30px] gap-[30px] bg-white rounded-2xl overflow-y-auto scroll-smooth scrollbar-thin">
            <div className=" flex justify-between gap-[30px] w-full">
              <FlipCard /> <FlipCard /> <FlipCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
