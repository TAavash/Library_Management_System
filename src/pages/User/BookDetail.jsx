import React from 'react';
import { FaStar, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import bookcover1 from "../../assets/bookCover.jpg";

const BookDetail = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            src={bookcover1}
            alt="Book Cover"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-2/3 md:ml-6 mt-6 md:mt-0">
          <div className="mb-4">
            <span className="text-gray-600 font-medium">ISBN:</span> 0446547654
          </div>
          <h1 className="text-3xl font-bold">Fight Club</h1>
          <p className="text-gray-700 text-sm">by: <span className="text-red-500">Chuck Palahniuk</span></p>
          <div className="flex items-center my-4">
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-gray-300" />
          </div>
          <p className="text-gray-700 my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis ...
          </p>
          
          <div className="flex space-x-4 mb-4">
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-orange-600">Read Now</button>
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300">Reserve</button>
          </div>
          <div className="text-gray-600 mb-4">
            TAG: <span className="text-gray-900">ART, ARCHITECTURE</span>
          </div>
          <div className="flex space-x-4 text-gray-600">
            <FaFacebook className="hover:text-gray-900 cursor-pointer" />
            <FaTwitter className="hover:text-gray-900 cursor-pointer" />
            <FaInstagram className="hover:text-gray-900 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
