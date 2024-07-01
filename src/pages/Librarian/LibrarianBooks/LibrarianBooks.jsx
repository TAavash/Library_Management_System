import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import { IoSearch, IoSettingsSharp } from "react-icons/io5";
import FlipCard from "../../../components/FlipCard";
import { useNavigate } from "react-router-dom";
import NavNew from "../../../components/NavNew";
import All from "./SidebarComp/All Books/All";
import Stock from "./SidebarComp/All Books/Stock";
import Categories from "./SidebarComp/All Books/Categories";
import ElectronicLocation from "./SidebarComp/All Books/ElectronicLocation";
import Requested from "./SidebarComp/All Books/Requested";
import EBooks from "./SidebarComp/All Books/EBooks";

const LibrarianBooks = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("all");

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleActiveChange = (category) => {
    setActive(category);
  };

  const renderContent = () => {
    if (active === "stock") {
      return <Stock />;
    } else if (active === "categories") {
      return <Categories />;
    } else if (active === "electronic-location") {
      return <ElectronicLocation />;
    } else if (active === "requested") {
      return <Requested />;
    } else if (active === "e-books") {
      return <EBooks />;
    } else {
      return (
        <div className="flex-col h-[84%] p-[30px] gap-[30px] bg-blue-600 rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[30px] my-2">
            {Array.from({ length: 12 }).map((_, index) => (
              <FlipCard key={index} />
            ))}
          </div>
        </div>
      );
    }
  };

  const getButtonClass = (label) => {
    return `w-[150px] h-[120px] rounded-2xl shadow-slate-500 shadow-md mt-[200px] ${
      label === "All Books" ? 'bg-[#A3A3A3]' : 'bg-white'
    } hover:bg-red-600`;
  };

  return (
    <div>
      <NavNew />
      <div className="min-h-screen h-auto bg-gray-200 py-[10px]">
        <div className="flex justify-evenly gap-[20px] mx-[3%]">
          {[
            { path: "/librarian-books", label: "All Books" },
            { path: "/librarian-books-check-in", label: "Check-In" },
            { path: "/librarian-books-check-out", label: "Check-Out" },
            { path: "/librarian-books-reservation", label: "Reservations" }
          ].map(({ path, label }, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(path)}
              className={getButtonClass(label)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="p-[20px]">
          <div className="flex h-[1000px] w-[100%] my-[100px] rounded-2xl bg-white shadow-slate-500 shadow-md">
            <div className="h-[1000px] w-[300px] rounded-l-2xl bg-[#14273D]">
              <div className="flex flex-col gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
                <FaBook className="fill-[#A3A3A3] h-[40%] w-[40%]" />
                <div className="text-white text-3xl">Books</div>
              </div>
              <div className="text-[#737373] flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-[50px]">
                {[
                  { category: "all", label: "All" },
                  { category: "stock", label: "Stock" },
                  { category: "categories", label: "Categories" },
                  { category: "electronic-location", label: "Electronic Location" },
                  { category: "requested", label: "Requested" },
                  { category: "e-books", label: "E-Books" }
                ].map(({ category, label }, index) => (
                  <button
                    key={index}
                    className={`h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px] ${
                      active === category ? "text-red-600" : ""
                    }`}
                    onClick={() => handleActiveChange(category)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full h-full rounded-2xl">
              <div className="w-[100%] h-[16%] bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
                <div className="w-full h-full flex justify-evenly p-[10px] gap-[5px]">
                  <div className="w-[50%] h-full flex-col">
                    <div className="w-full h-[70%] text-start text-3xl">
                      {active.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                    </div>
                    <div className="w-full h-[30%] text-start text-2xl text-[#525252]">
                      Manage all the books
                    </div>
                  </div>
                  <div className="w-[30%] h-full flex p-[2px] justify-evenly">
                    <div className="w-full h-[30px] rounded-2xl bg-white border flex items-center p-[5px]">
                      <div className="text-[15px] w-[80%] text-[#525252]">Search</div>
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
              {renderContent()}
            </div>
          </div>
          <div>slide</div>
        </div>
      </div>
    </div>
  );
};

export default LibrarianBooks;
