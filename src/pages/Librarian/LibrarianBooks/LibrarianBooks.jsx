import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import NavNew from "../../../components/NavNew";
import All from "./SidebarComp/All Books/All";
import Stock from "./SidebarComp/All Books/Stock";
import Categories from "./SidebarComp/All Books/Categories";
import ElectronicLocation from "./SidebarComp/All Books/ElectronicLocation";
import Requested from "./SidebarComp/All Books/Requested";
import EBooks from "./SidebarComp/All Books/EBooks";

const LibrarianBooks = () => {
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
  const [selectedCard, setSelectedCard] = useState(null);

  const location = useLocation();

  const handleAllActive = () => {
    setActive("all");
    setSelectedCard(null);
  };
  const handleStockActive = () => {
    setActive("stock");
    setSelectedCard(null);
  };
  const handleCategoriesActive = () => {
    setActive("categories");
    setSelectedCard(null);
  };
  const handleElectronicLocationActive = () => {
    setActive("electronic-location");
    setSelectedCard(null);
  };
  const handleRequestedActive = () => {
    setActive("requested");
    setSelectedCard(null);
  };
  const handleEBooksActive = () => {
    setActive("e-books");
    setSelectedCard(null);
  };

  console.log(location);

  const renderActiveComponent = () => {
    switch (active) {
      case "stock":
        return <Stock onCardClick={handleCardClick} />;
      case "categories":
        return <Categories onCardClick={handleCardClick} />;
      case "electronic-location":
        return <ElectronicLocation onCardClick={handleCardClick} />;
      case "requested":
        return <Requested onCardClick={handleCardClick} />;
      case "e-books":
        return <EBooks onCardClick={handleCardClick} />;
      default:
        return <All onCardClick={handleCardClick} />;
    }
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div>
      <NavNew />
      <div className="min-h-screen h-auto bg-gray-200 py-[10px]">
        <div className="flex justify-evenly gap-[20px] mx-[3%]">
          <button
            onClick={handleOpenLibrary}
            className="w-[150px] h-[120px] rounded-2xl bg-[#14273D] text-white shadow-slate-500 shadow-md mt-[100px]"
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
            className="w-[150px] h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white  shadow-slate-500 shadow-md mt-[100px]"
          >
            Reservations
          </button>
        </div>
        <div className="p-[20px]">
          <div className="flex h-[1000px] w-[100%] mt-[100px] rounded-2xl bg-white shadow-slate-500 shadow-md">
            <div className="h-[1000px] w-[300px] rounded-l-2xl bg-[#14273D]">
              <div className="flex flex-col gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
                <FaBook className="fill-[#A3A3A3] h-[40%] w-[40%]" />
                <div className="text-white flex-col justify-center text-center text-3xl">
                  Books
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
                  onClick={handleStockActive}
                >
                  {active === "stock" ? (
                    <div className="text-red-600">Stock</div>
                  ) : (
                    <div>Stock</div>
                  )}
                </button>
                <button
                  className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleCategoriesActive}
                >
                  {active === "categories" ? (
                    <div className="text-red-600">Categories</div>
                  ) : (
                    <div>Categories</div>
                  )}
                </button>
                <button
                  className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleElectronicLocationActive}
                >
                  {active === "electronic-location" ? (
                    <div className="text-red-600">Electronic Location</div>
                  ) : (
                    <div>Electronic Location</div>
                  )}
                </button>
                <button
                  className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleRequestedActive}
                >
                  {active === "requested" ? (
                    <div className="text-red-600">Requested</div>
                  ) : (
                    <div>Requested</div>
                  )}
                </button>
                <button
                  className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleEBooksActive}
                >
                  {active === "e-books" ? (
                    <div className="text-red-600">E-Books</div>
                  ) : (
                    <div>E-Books</div>
                  )}
                </button>
              </div>
            </div>
            <div className="flex w-full h-full">
              <div
                className={`h-full rounded-2xl ${
                  selectedCard ? "w-2/3" : "w-full"
                }`}
              >
                {renderActiveComponent()}
              </div>
              {selectedCard && (
                <div className="w-1/3 flex flex-col bg-[#011222] text-white p-2 mt-3 mx-7 rounded-xl justify-center items-center slide-in`">
                  {selectedCard}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibrarianBooks;
