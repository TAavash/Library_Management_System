import React from "react";
import { FaBook } from "react-icons/fa";

const LibrarianBooks = () => {
  return (
    <div className="min-h-screen h-auto bg-slate-500 py-[10px]">
      <div className="flex gap-[20px] mx-[10px]">
        <button className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 mt-[200px]">
          All Books
        </button>
        <button className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 mt-[200px]">
          Check-In
        </button>
        <button className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 mt-[200px]">
          Check-Out
        </button>
        <button className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 mt-[200px]">
          Reservations
        </button>
      </div>
      <div>
        Content
        <div className="h-[1000px] my-[100px] mx-[20px] rounded-2xl bg-white">
          <div className="h-[1000px] w-[300px] rounded-l-2xl bg-[#14273D]">
            <div className=" h-[20%] rounded-t-2x bg-red-500"><FaBook className=" fill-[#A3A3A3]"/>csc</div>
          </div>
          <div>content</div>
        </div>
        <div>slide</div>
      </div>
    </div>
  );
};

export default LibrarianBooks;
