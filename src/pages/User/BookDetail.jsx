import React from "react";
import { FaStar, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import bookcover1 from "../../assets/bookCover.jpg";
import logo from "../../assets/pcpslogo.png";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BookDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10">
      <div className="w-full max-w-6xl px-6">
        <div className="flex items-center justify-between mb-6">
          <IoArrowBack
            className="text-3xl cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out"
            onClick={() => navigate(-1)}
          />
          <img src={logo} alt="PCPS Logo" className="h-12" />
        </div>
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-50 to-blue-200 rounded-lg shadow-lg p-8">
          <div className="md:w-1/3 flex justify-center items-center mb-6 md:mb-0">
            <img
              src={bookcover1}
              alt="Book Cover"
              className="w-72 h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3 md:ml-8">
            <div className="mb-4">
              <span className="text-gray-600 font-medium">ISBN:</span>{" "}
              <span className="text-gray-800">0446547654</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Fight Club</h1>
            <p className="text-lg text-gray-700 mb-4">
              by: <span className="text-blue-500">Chuck Palahniuk</span>
            </p>
            <div className="flex items-center mb-4">
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-gray-300" />
              <span className="ml-2 text-gray-600">(4.0)</span>
            </div>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Harum et voluptates ullam laborum voluptatem!
              Incidunt expedita suscipit, sed voluptatem, temporibus iste
              excepturi voluptatum velit delectus laboriosam explicabo.
              Assumenda, nemo numquam? Fugit soluta debitis odit cumque fuga
              pariatur nihil commodi, molestias suscipit, eius eum nisi
              doloremque quisquam consequatur.
            </p>
            <div className="flex space-x-4 mb-6">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
                Borrow Now
              </button>
              <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out">
                Reserve
              </button>
            </div>
            <div className="text-gray-600 mb-4">
              TAG: <span className="text-gray-900">ART, ARCHITECTURE</span>
            </div>
            <div className="flex space-x-4 text-gray-600">
              <FaFacebook className="hover:text-blue-500 cursor-pointer transition duration-300 ease-in-out" />
              <FaTwitter className="hover:text-blue-500 cursor-pointer transition duration-300 ease-in-out" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer transition duration-300 ease-in-out" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
