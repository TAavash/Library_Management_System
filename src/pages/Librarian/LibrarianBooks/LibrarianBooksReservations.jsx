import React from "react";
import { FaBook } from "react-icons/fa";
import { IoSearch, IoSettingsSharp } from "react-icons/io5";
import FlipCard from "../../../components/FlipCard";
import NavNew from "../../../components/NavNew";
import { useNavigate } from "react-router-dom";

const LibrarianBooksReservations = () => {
  const navigate = useNavigate();
  const handleOpenLibrary = () => {
    navigate(`/librarian-books`);
  };
  const handleCheckIn = () => {
    navigate(`/librarian-books-check-in`);
  };
  const handleCheckOut = () => {
    navigate(`/librarian-books-check-out`);
  };
  const handleReservations = () => {
    navigate(`/librarian-books-reservation`);
  };
  return (
    <div>
      <NavNew />
      <div className="min-h-screen h-auto bg-gray-200 py-[10px]">
        <div className="flex justify-evenly gap-[20px] mx-[3%]">
          <button
            onClick={handleOpenLibrary}
            className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 active:bg-black shadow-slate-500 shadow-md mt-[200px]"
          >
            All Books
          </button>
          <button
            onClick={handleCheckIn}
            className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 shadow-slate-500 shadow-md mt-[200px]"
          >
            Check-In
          </button>
          <button onClick={handleCheckOut} className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 shadow-slate-500 shadow-md mt-[200px]">
            Check-Out
          </button>
          <button onClick={handleReservations} className="w-[150px] h-[120px] rounded-2xl bg-[#A3A3A3] hover:bg-red-600 shadow-slate-500 shadow-md mt-[200px]">
            Reservations
          </button>
        </div>
        <div className="p-[20px]">
          <div className="flex h-[1000px] w-[100%] my-[100px] rounded-2xl bg-white shadow-slate-500 shadow-md ">
            <div className="h-[1000px] w-[300px] rounded-l-2xl bg-[#14273D]">
              <div className="flex flex-col gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
                <FaBook className=" fill-[#A3A3A3]  h-[40%] w-[40%]" />
                <div className="text-white flex-col justify-center text-center text-3xl">
                  Reservation
                </div>
              </div>
              <div className="text-[#737373] flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-[50px]">
                <button className="h-[40px] hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]">
                  All
                </button>
                <button className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]">
                  Member
                </button>
                <button className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]">
                  Books
                </button>
                <button className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]">
                  Upcoming Dates
                </button>
              </div>
            </div>
            <div className="w-full h-full rounded-2xl">
              <div className="w-[100%] h-[16%] bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
                <div className="w-full h-full flex justify-evenly p-[10px] gap-[5px]">
                  <div className="w-[50%] h-full flex-col">
                    <div className="w-full h-[70%] text-start text-3xl">
                      All Books
                    </div>
                    <div className="w-full h-[30%] text-start text-[-2xl] text-[#525252]">
                      Manage all the books
                    </div>
                  </div>
                  <div className="w-[30%] h-full flex p-[2px] justify-evenly">
                    <div className="w-full h-[30px] rounded-2xl bg-white border flex items-center p-[5px]">
                      <div className="text-[15px] w-[80%] text-[#525252]">
                        Search
                      </div>
                      <div className="w-[20%]">
                        <IoSearch className="w-[20px] h-[20px] justify-end fill-[#A3A3A3]" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[20%] h-full flex p-[2px]">
                    <div className="w-[40px] h-[30px] rounded-2xl bg-white border flex items-center justify-start p-[10px]">
                      <div className="w-[20%]">
                        <IoSettingsSharp className="w-[20px] h-[20px] fill-[#A3A3A3]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col h-[84%] p-[30px] gap-[30px] bg-blue-600 rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[30px] my-2">
                  <FlipCard />
                  <FlipCard />
                  <FlipCard />
                  <FlipCard />
                  <FlipCard />
                  <FlipCard />
                  <FlipCard />
                  <FlipCard />
                  <FlipCard />
                  <FlipCard />
                  <FlipCard />
                  <FlipCard />
                </div>
              </div>
            </div>
          </div>
          <div>slide</div>
        </div>
      </div>
    </div>
  );
};

export default LibrarianBooksReservations;