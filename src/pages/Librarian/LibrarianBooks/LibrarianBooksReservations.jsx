import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import { IoSearch, IoSettingsSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import NavNew from "../../../components/NavNew";
import All from "./SidebarComp/Reservations/All";
import Books from "./SidebarComp/Reservations/Books";
import Member from "./SidebarComp/Reservations/Member";

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

  const [active, setActive] = useState("all");

  const location = useLocation();

  const handleAllActive = () => {
    setActive("all");
  };
  const handleBooksActive = () => {
    setActive("books");
  };
  const handleMemberActive = () => {
    setActive("member");
  };

  console.log(location);

  const renderActiveComponent = () => {
    switch (active) {
      case "books":
        return <Books />;
      case "member":
        return <Member />;
      default:
        return <All />;
    }
  };

  return (
    <div>
      <NavNew />
      <div className="min-h-screen h-auto bg-gray-200 py-[10px]">
        <div className="flex justify-evenly gap-[20px] mx-[3%]">
          <button
            onClick={handleOpenLibrary}
            className="w-[150px] h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white  shadow-slate-500 shadow-md mt-[100px]"
          >
            All Books
          </button>
          <button
            onClick={handleCheckIn}
            className="w-[150px] h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white  shadow-slate-500 shadow-md mt-[100px]"
          >
            Check-In
          </button>
          <button
            onClick={handleCheckOut}
            className="w-[150px] h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white  shadow-slate-500 shadow-md mt-[100px]"
          >
            Check-Out
          </button>
          <button
            onClick={handleReservations}
            className="w-[150px] h-[120px] rounded-2xl bg-[#14273D] text-white shadow-slate-500 shadow-md mt-[100px]"
          >
            Reservations
          </button>
        </div>
        <div className="p-[20px]">
          <div className="flex h-[1000px] w-[100%] mt-[100px] rounded-2xl bg-white shadow-slate-500 shadow-md ">
            <div className="h-[1000px] w-[300px] rounded-l-2xl bg-[#14273D]">
              <div className="flex flex-col gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
                <FaBook className=" fill-[#A3A3A3]  h-[40%] w-[40%]" />
                <div className="text-white flex-col justify-center text-center text-3xl">
                  Reservations
                </div>
              </div>
              <div className="text-[#737373] flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-[50px]">
                <button
                  className="h-[40px] hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleAllActive}
                >
                  {active === "all" ? (
                    <div className="text-red-600">All</div>
                  ) : (
                    <div>All</div>
                  )}
                </button>
                <button
                  className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleMemberActive}
                >
                  {active === "member" ? (
                    <div className="text-red-600">Member</div>
                  ) : (
                    <div>Member</div>
                  )}
                </button>
                <button
                  className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleBooksActive}
                >
                  {active === "books" ? (
                    <div className="text-red-600">Books</div>
                  ) : (
                    <div>Books</div>
                  )}
                </button>
              </div>
            </div>
            <div className="w-full h-full rounded-2xl">
              {renderActiveComponent()}
            </div>
          </div>
          <div>slide</div>
        </div>
      </div>
    </div>
  );
};

export default LibrarianBooksReservations;