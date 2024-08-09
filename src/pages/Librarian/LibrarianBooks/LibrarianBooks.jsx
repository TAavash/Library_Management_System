import React, { useState } from "react";
import { FaBook, FaThList, FaThLarge } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import NavNew from "../../../components/NavNew";
import All from "./SidebarComp/All Books/All";
import Stock from "./SidebarComp/All Books/Stock";
import Categories from "./SidebarComp/All Books/Categories";
import ElectronicLocation from "./SidebarComp/All Books/ElectronicLocation";
import EBooks from "./SidebarComp/All Books/EBooks";

const LibrarianBooks = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // Add state to manage view mode

  const location = useLocation();

  const handleAllActive = () => setActive("all");
  const handleAddBooks = () => navigate(`/BookRegistration`);
  const handleStockActive = () => setActive("stock");
  const handleCategoriesActive = () => setActive("categories");
  const handleElectronicLocationActive = () => setActive("electronic-location");
  const handleRequestedActive = () => setActive("requested");
  const handleEBooksActive = () => setActive("e-books");

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  const renderActiveComponent = () => {
    const commonProps = { viewMode };
    switch (active) {
      case "stock":
        return <Stock {...commonProps} />;
      case "categories":
        return <Categories {...commonProps} />;
      case "electronic-location":
        return <ElectronicLocation {...commonProps} />;
      case "e-books":
        return <EBooks {...commonProps} />;
      default:
        return <All {...commonProps} />;
    }
  };

  return (
    <div>
      <NavNew />
      <div className="min-h-screen h-auto bg-gray-200 py-[10px]">
        <div className="flex flex-wrap justify-evenly gap-[20px] mx-[3%]">
          <button
            onClick={() => setActive("all")}
            className="w-full md:w-[150px] h-14 md:h-[120px] rounded-2xl bg-[#14273D] text-white shadow-slate-500 shadow-md mt-11 md:mt-[100px]"
          >
            All Books
          </button>
          <button
            onClick={() => navigate(`/librarian-books-check-in`)}
            className="w-full md:w-[150px] h-14 md:h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white shadow-slate-500 shadow-md md:mt-[100px]"
          >
            Check-In
          </button>
          <button
            onClick={() => navigate(`/librarian-books-check-out`)}
            className="w-full md:w-[150px] h-14 md:h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white shadow-slate-500 shadow-md md:mt-[100px]"
          >
            Check-Out
          </button>
          <button
            onClick={() => navigate(`/librarian-books-reservation`)}
            className="w-full md:w-[150px] h-14 md:h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white shadow-slate-500 shadow-md md:mt-[100px]"
          >
            Reservations
          </button>
        </div>
        <div className="p-[20px]">
          <div className="flex flex-col lg:flex-row h-auto lg:h-[1000px] w-full md:mt-[100px] md:rounded-2xl bg-white shadow-slate-500 shadow-md">
            <div className="h-auto lg:h-[1000px] w-full lg:w-[300px] md:rounded-l-2xl bg-[#14273D]">
              <div className="flex flex-col gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
                <FaBook className="fill-[#A3A3A3] h-14 md:h-[40%] w-14 md:w-[40%]" />
                <div className="text-white flex-col justify-center text-center text-3xl">
                  Books
                </div>
              </div>
              <div className="lg:hidden text-[#737373] flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px]">
                <button
                  onClick={toggleDropdown}
                  className=" h-[40px] hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                >
                  Menu
                </button>
                {dropdownOpen && (
                  <div className="text-[#737373] flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-3">
                    <button
                      className="hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                      onClick={handleAllActive}
                    >
                      {active === "all" ? (
                        <div className="text-white">All</div>
                      ) : (
                        <div>All</div>
                      )}
                    </button>
                    <button
                      className="hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                      onClick={handleAddBooks}
                    >
                      {active === "add" ? (
                        <div className="text-white">Add Books</div>
                      ) : (
                        <div>Add Books</div>
                      )}
                    </button>
                    <button
                      className="hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                      onClick={handleStockActive}
                    >
                      {active === "stock" ? (
                        <div className="text-white">Stock</div>
                      ) : (
                        <div>Stock</div>
                      )}
                    </button>
                    <button
                      className="hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                      onClick={handleCategoriesActive}
                    >
                      {active === "categories" ? (
                        <div className="text-white">Categories</div>
                      ) : (
                        <div>Categories</div>
                      )}
                    </button>
                    <button
                      className="hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                      onClick={handleElectronicLocationActive}
                    >
                      {active === "electronic-location" ? (
                        <div className="text-white">Electronic Location</div>
                      ) : (
                        <div>Electronic Location</div>
                      )}
                    </button>
                    <button
                      className="hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                      onClick={handleRequestedActive}
                    >
                      {active === "requested" ? (
                        <div className="text-white">Requested</div>
                      ) : (
                        <div>Requested</div>
                      )}
                    </button>
                    <button
                      className="hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                      onClick={handleEBooksActive}
                    >
                      {active === "e-books" ? (
                        <div className="text-white">E-Books</div>
                      ) : (
                        <div>E-Books</div>
                      )}
                    </button>
                  </div>
                )}
              </div>
              <div className="hidden text-[#737373] lg:flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px]">
                <button
                  className="hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleAllActive}
                >
                  {active === "all" ? (
                    <div className="text-white">All</div>
                  ) : (
                    <div>All</div>
                  )}
                </button>
                <button
                  className="hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleAddBooks}
                >
                  {active === "add" ? (
                    <div className="text-white">Add Books</div>
                  ) : (
                    <div>Add Books</div>
                  )}
                </button>
                <button
                  className="hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleStockActive}
                >
                  {active === "stock" ? (
                    <div className="text-white">Stock</div>
                  ) : (
                    <div>Stock</div>
                  )}
                </button>
                <button
                  className="hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleCategoriesActive}
                >
                  {active === "categories" ? (
                    <div className="text-white">Categories</div>
                  ) : (
                    <div>Categories</div>
                  )}
                </button>
                <button
                  className="hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleElectronicLocationActive}
                >
                  {active === "electronic-location" ? (
                    <div className="text-white">Electronic Location</div>
                  ) : (
                    <div>Electronic Location</div>
                  )}
                </button>
                <button
                  className="h-auto hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleEBooksActive}
                >
                  {active === "e-books" ? (
                    <div className="text-white">E-Books</div>
                  ) : (
                    <div>E-Books</div>
                  )}
                </button>
              </div>
            </div>
            <div className="relative flex flex-col lg:flex-row w-full h-full bg-[#F5F5F5] rounded-r-2xl">
              {renderActiveComponent()}
              <div
                className="absolute right-10 top-56 cursor-pointer"
                onClick={toggleViewMode}
              >
                {viewMode === "grid" ? (
                  <FaThList className="h-7 w-7 text-gray-500" />
                ) : (
                  <FaThLarge className="h-7 w-7 text-gray-500" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibrarianBooks;
