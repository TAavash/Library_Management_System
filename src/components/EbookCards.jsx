import React from "react";
import image from "../assets/bookCover.jpg";
import { FaRegHeart, FaRegBookmark } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";

const EbookCards = () => {
  return (
    <div
      className="rounded-lg shadow-md w-[300px] h-[400px] mx-auto flex items-end hover:scale-105 transition duration-300 ease-in-out"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: 'opacity(0.9)'
      }}
    >
      <div className="p-4 flex flex-col float-end">
        <h5 className="text-lg font-bold mb-2 text-white">Lorem Ipsum</h5>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          deleniti odit perspiciatis nemo iste error illo labore voluptate.
        </p>
        <div className="flex mt-4">
          <button className="bg-slate-600 text-white font-bold py-2 px-4 rounded">
            <FaRegHeart />
          </button>
          <button className="bg-slate-600 text-white font-bold py-2 px-4 rounded ml-2">
          <FaRegBookmark />
          </button>
          <button className="bg-slate-600 text-white font-bold py-2 px-4 rounded ml-2">
          <BiShareAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EbookCards;
