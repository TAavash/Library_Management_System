import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import BookCover from "../../../../../assets/OIP.jpeg";

const checkOut = [
  {
    id: "1",
    title: "Kafka on the Shore",
    author: "Murakami",
    cover: BookCover,
    checkOutDate: "2 June, 2025",
    name: "Sudarshan Bam",
    role: "Student",
  },
  {
    id: "2",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    cover: BookCover,
    checkOutDate: "3 June, 2025",
    name: "Sudarshan Bam",
    role: "Student",
  },
  {
    id: "3",
    title: "How to Talk to Anyone",
    author: "Leil Lowndes",
    cover: BookCover,
    checkOutDate: "4 June, 2025",
    name: "Sudarshan Bam",
    role: "Student",
  },
  {
    id: "4",
    title: "Kafka on the Shore",
    author: "Murakami",
    cover: BookCover,
    checkOutDate: "2 June, 2025",
    name: "Sudarshan Bam",
    role: "Student",
  },
  {
    id: "5",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    cover: BookCover,
    checkOutDate: "3 June, 2025",
    name: "Sudarshan Bam",
    role: "Student",
  },
  {
    id: "6",
    title: "How to Talk to Anyone",
    author: "Leil Lowndes",
    cover: BookCover,
    checkOutDate: "4 June, 2025",
    name: "Sudarshan Bam",
    role: "Student",
  },
  {
    id: "7",
    title: "Kafka on the Shore",
    author: "Murakami",
    cover: BookCover,
    checkOutDate: "2 June, 2025",
    name: "Sudarshan Bam",
    role: "Student",
  },
  {
    id: "8",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    cover: BookCover,
    checkOutDate: "3 June, 2025",
    name: "Sudarshan Bam",
    role: "Student",
  },
  {
    id: "9",
    title: "How to Talk to Anyone",
    author: "Leil Lowndes",
    cover: BookCover,
    checkOutDate: "4 June, 2025",
    name: "Sudarshan Bam",
    role: "Student",
  },
];

const All = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [bookId, setBookId] = useState(null);

  const handleBookClick = (id) => {
    setBookId(id);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setBookId(null);
  };

  const selectedBook = checkOut.find((item) => item.id === bookId);
  return (
    <div className="w-full h-full ">
      <div className="w-[100%] h-[20%] flex justify-between bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
        <div className=" h-full flex-col">
          <div className="w-full h-[70%] text-3xl">All Check-Out</div>
          <div className="w-full h-[30%] text-[-2xl] text-[#525252]">
            Manage all the check-out
          </div>
        </div>

        <div className="flex justify-center m-2">
          <div className="flex w-[500px] items-center gap-1">
            <FiSearch className="h-5 w-5 ml-1" />
            <input
              type="text"
              placeholder="Search"
              className="p-1 w-[500px]  border-hidden focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex-col h-[80%] bg-white p-[30px] gap-[30px] rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[30px] my-2">
          {checkOut.map((check, index) => (
            <div
              key={check.id}
              onClick={() => handleBookClick(check.id)}
              className="group relative bg-white rounded-lg shadow-md w-56 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="p-3">
                <h3 className="text-lg font-bold"> {check.name}</h3>
                <p className="text-sm text-gray-600">{check.role}</p>
              </div>
              <img
                src={check.cover}
                alt={check.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{check.title}</h3>
                <p className="text-sm text-gray-600">{check.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {popupOpen && selectedBook && (
        <>
          <div className="fixed h-[100vh] w-[100vw] top-0 left-0 bg-black/30 brightness-50 z-[100]"></div>
          <div className="fixed top-[10vh] left-[20vw] h-[80vh] w-[60vw] bg-purple-200 blur-[100px] z-[1000]"></div>
          <div className="fixed top-[10vh] left-[20vw] h-[80vh] w-[60vw] bg-slate-200 z-[2000]">
            <div
              className="absolute top-[30px] right-[30px] text-3xl Z-[5000] cursor-pointer"
              onClick={handleClosePopup}
            >
              &times;
            </div>
            <div className="p-10 flex flex-row-reverse gap-[50px] w-fit mx-auto ">
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  {selectedBook.title}
                </h2>
                <p className="text-lg mb-2">Author: {selectedBook.author}</p>
                <p className="text-lg mb-2">
                  Checked out by: {selectedBook.name}
                </p>
                <p className="text-lg mb-2">Role: {selectedBook.role}</p>
                <p className="text-lg mb-2">
                  Check-out date: {selectedBook.checkOutDate}
                </p>
                <div className="text-2xl font-bold gap-[10px] flex mt-[30px]">
                  <button
                    className="bg-green-500 text-white hover:bg-green-500/80 w-fit px-[50px] p-[10px]"
                    onClick={() => console.log("accepted")}
                  >
                    Accept
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-500/80 text-white w-fit px-[50px] p-[10px]"
                    onClick={() => console.log("rejected")}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <img
                src={selectedBook.cover}
                alt={selectedBook.title}
                className="w-auto xl:h-[60vh] h-[40vh] object-cover mt-4"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default All;
