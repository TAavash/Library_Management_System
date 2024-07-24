import React from "react";
import Profile from "../../assets/profilepicture.jpeg";
import Background from "../../assets/profilebg.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const UserProfile = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      {/* Container with Profile and Info */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 bg-white shadow-gray-600 shadow-xl rounded-lg p-6 pb-3 w-full max-w-4xl">
        {/* Profile Section */}
        <div className="bg-gradient-to-r from-black via-gray-500 to-white p-4 flex items-center rounded-lg mb-6">
          <img
            src={Profile}
            className="w-24 h-24 object-cover rounded-full border-4 border-white mr-4"
            alt="profile"
          />
          <div className="text-white">
            <h2 className="text-2xl font-semibold">Abhinab Prajapati</h2>
            <p className="text-lg">Student</p>
          </div>
        </div>

        {/* Profile Information */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-3 rounded-lg shadow-md">
              <h3 className="text-base font-semibold text-gray-800 mb-1">First Name</h3>
              <p className="text-gray-700 text-sm">Abhinab</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg shadow-md">
              <h3 className="text-base font-semibold text-gray-800 mb-1">Last Name</h3>
              <p className="text-gray-700 text-sm">Prajapati</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg shadow-md">
              <h3 className="text-base font-semibold text-gray-800 mb-1">Gender</h3>
              <p className="text-gray-700 text-sm">Male</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg shadow-md">
              <h3 className="text-base font-semibold text-gray-800 mb-1">Address</h3>
              <p className="text-gray-700 text-sm">Patan</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg shadow-md">
              <h3 className="text-base font-semibold text-gray-800 mb-1">Email</h3>
              <p className="text-gray-700 text-sm">abhinabsuii@mail.com</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg shadow-md">
              <h3 className="text-base font-semibold text-gray-800 mb-1">Mobile</h3>
              <p className="text-gray-700 text-sm">977-9812121212</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg shadow-md">
              <h3 className="text-base font-semibold text-gray-800 mb-1">Library Card Number</h3>
              <p className="text-gray-700 text-sm">2214618</p>
            </div>
          </div>
          <div className="flex gap-3 justify-center">
            <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-800 text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
