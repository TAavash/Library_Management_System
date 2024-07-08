import React from "react";
import NavNew from "../../components/NavNew";
import { MdMenuBook } from "react-icons/md";
import { FaDesktop } from "react-icons/fa";
import Cards from "../../components/Cards";
import Backg from "../../assets/bg-patterns/4.png";

const User = () => {
  return (
    <div>
      <NavNew />
      <div className="min-h-screen h-auto bg-white p-[10px]"
          style={{
            backgroundImage: `url(${Backg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "opacity(0.9)",
          }}>
        <div className="h-[200px] mt-20 w-[100%] flex justify-between">
          <div className="h-fit w-auto rounded-md p-[10px] flex flex-col bg-blue-600">
            <div className="text-[20px] text-white">Welcome Bits,</div>
            <div className="text-[10px] text-white">
              Borrow the beauty, keep the knowledge!
            </div>
          </div>
          <div className="w-[50%] flex gap-5">
            <button className="text-[30px] w-[200px] h-fit rounded-md flex items-center hover:text-red-600">
              <MdMenuBook />
              My Books
            </button>
            <button className="text-[30px] w-[200px] h-fit flex rounded-md items-center hover:text-red-600">
              <FaDesktop />
              Reservation
            </button>
          </div>
        </div>
        <div
          className="h-auto w-[100%] flex flex-col gap-[10px]"
        >
          <div className="w-full h-[600px] flex flex-col justify-between p-[10px]">
            <h1 className="text-red-600 text-[20px] w-full ">Trending Books</h1>
            <div className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-thin">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
          <div className="w-full h-[600px] flex flex-col justify-between p-[10px]">
            <h1 className="text-red-600 text-[20px] w-full ">Recent Books</h1>
            <div className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-none">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
          <div className="w-full h-[600px] flex flex-col justify-between p-[10px]">
            <h1 className="text-red-600 text-[20px] w-full ">Recommended</h1>
            <div className="flex gap-5 justify-between">
              <Cards />
              <Cards />
              <Cards />
            </div>
            <button className="w-fit h-fit text-white bg-red-600 rounded-sm flex justify-end items-end">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
