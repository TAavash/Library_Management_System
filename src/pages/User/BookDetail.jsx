import React from 'react';
import { FaStar, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import bookcover1 from "../../assets/bookCover.jpg";
import logo from "../../assets/pcpslogo.png";


const BookDetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="flex items-center">
          <img src={logo} alt="PCPS Logo" className="w-25 h-12 mr-4" />
        </div>
      <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 flex justify-center items-center">
            <img
              src={bookcover1}
              alt="Book Cover"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3 md:ml-8 mt-6 md:mt-0">
            <div className="mb-4">
              <span className="text-gray-600 font-medium">ISBN:</span> <span className="text-gray-800">0446547654</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Fight Club</h1>
            <p className="text-lg text-gray-700 mb-4">by: <span className="text-red-500">Chuck Palahniuk</span></p>
            <div className="flex items-center my-4">
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-gray-300" />
              <span className="ml-2 text-gray-600">(4.0)</span>
            </div>
            <p className="text-gray-700 my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum et voluptates ullam laborum voluptatem! Incidunt expedita suscipit, sed voluptatem, temporibus iste excepturi voluptatum velit delectus laboriosam explicabo. Assumenda, nemo numquam?
              Fugit soluta debitis odit cumque fuga pariatur nihil commodi, molestias suscipit, eius eum nisi doloremque quisquam consequatur. Ratione, expedita recusandae quo magni ipsum nihil nobis rem, mollitia quaerat minus possimus.
              Ducimus temporibus cum velit illo facilis modi laboriosam minima aspernatur? Quia doloremque repudiandae voluptatum culpa sapiente consequatur, odit omnis? Accusamus voluptate debitis ea, adipisci culpa corrupti odit ab similique dolore!
            </p>
            <div className="flex space-x-4 mb-6">
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300 ease-in-out">Borrow Now</button>
              <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition duration-300 ease-in-out">Reserve</button>
            </div>
            <div className="text-gray-600 mb-4">
              TAG: <span className="text-gray-900">ART, ARCHITECTURE</span>
            </div>
            <div className="flex space-x-4 text-gray-600">
              <FaFacebook className="hover:text-gray-900 cursor-pointer transition duration-300 ease-in-out" />
              <FaTwitter className="hover:text-gray-900 cursor-pointer transition duration-300 ease-in-out" />
              <FaInstagram className="hover:text-gray-900 cursor-pointer transition duration-300 ease-in-out" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
