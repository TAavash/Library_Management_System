import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
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
  const handleAddBooks = () => {
    navigate(`/BookRegistration`);
  };

  const [active, setActive] = useState("all");
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCrossIcon = () => {
    setSelectedCard(null);
  };

  const location = useLocation();

  const handleAllActive = () => {
    setActive("all");
    setSelectedCard(null);
  };
  const handleAddBookActive = () => {
    setActive("add");
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

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

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


  const [key, setKey] = useState(0);

  React.useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [selectedCard]);

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
                  className="h-[40px] hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleAllActive}
                >
                  {active === "all" ? (
                    <div className="text-white">All</div>
                  ) : (
                    <div>All</div>
                  )}
                </button>
                <button
                  className="h-[40px] hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleAddBooks}
                >
                  {active === "add" ? (
                    <div className="text-white">Add Books</div>
                  ) : (
                    <div>Add Books</div>
                  )}
                </button>
                <button
                  className="h-auto hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleStockActive}
                >
                  {active === "stock" ? (
                    <div className="text-white">Stock</div>
                  ) : (
                    <div>Stock</div>
                  )}
                </button>
                <button
                  className="h-auto hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleCategoriesActive}
                >
                  {active === "categories" ? (
                    <div className="text-white">Categories</div>
                  ) : (
                    <div>Categories</div>
                  )}
                </button>
                <button
                  className="h-auto hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
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
                  onClick={handleRequestedActive}
                >
                  {active === "requested" ? (
                    <div className="text-white">Requested</div>
                  ) : (
                    <div>Requested</div>
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
            <div className="flex w-full h-full bg-[#F5F5F5]">
              <div
                className={`h-full rounded-2xl ${selectedCard ? "w-2/3" : "w-full"
                  }`}
              >
                {renderActiveComponent()}
              </div>
              {selectedCard && (
                <div key={key} className=" relative w-1/3 flex flex-col bg-[#011222] text-white p-2 mt-3 mx-7 rounded-xl justify-center items-center slide-in">
                  {selectedCard}
                  <div className="absolute top-[1%] right-[5%] ">
                    <RxCross2 className="h-8 w-8 cursor-pointer " 
                    onClick={handleCrossIcon}/>
                  </div>
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
