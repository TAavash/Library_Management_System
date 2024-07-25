import React from "react";
import Profile from "../../assets/profilepicture.jpeg";
import Background from "../../assets/profilebg.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { BiSolidMessageAltAdd } from "react-icons/bi";
import { MdUnsubscribe } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";

const UserProfile = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      {/* Container with Profile and Info */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 bg-white shadow-gray-600 shadow-xl rounded-lg p-6 pb-3 w-full max-w-4xl flex gap-8">
        {/* Profile Section */}
        <div className="flex-1">
          <div className="bg-slate-600 p-4 flex items-center rounded-lg mb-6">
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
          <div className="flex justify-around">
            <div className="flex-col">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-semibold mr-2">Profile Information</h3>
                <button>
                  <MdOutlineModeEditOutline className="text-xl text-gray-600 hover:text-gray-800" />
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-gray-700 text-sm">
                  <strong>First Name:</strong> Abhinab
                </div>
                <div className="text-gray-700 text-sm">
                  <strong>Last Name:</strong> Prajapati
                </div>
                <div className="text-gray-700 text-sm">
                  <strong>Gender:</strong> Male
                </div>
                <div className="text-gray-700 text-sm">
                  <strong>Address:</strong> Patan
                </div>
                <div className="text-gray-700 text-sm">
                  <strong>Email:</strong> abhinabsuii@mail.com
                </div>
                <div className="text-gray-700 text-sm">
                  <strong>Mobile:</strong> 977-9812121212
                </div>
                <div className="text-gray-700 text-sm">
                  <strong>Library Card Number:</strong> 2214618
                </div>
              </div>
              <div className="flex gap-3 justify-center mt-4">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-xl"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 text-xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-pink-600 hover:text-pink-800 text-xl"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            {/* Cards Section */}
            <div className="flex-none w-1/3 flex flex-col gap-4">
              <div className="bg-blue-100 p-4 rounded-lg shadow-md flex flex-col items-center">
              <BiSolidMessageAltAdd className="text-3xl mb-3 text-blue-500" />
              <h4 className="text-lg font-semibold mb-1">Request Books</h4>
                <p className="text-gray-700 text-xs text-center">
                  Request for the books you want to borrow.
                </p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg shadow-md flex flex-col items-center">
              <MdUnsubscribe className="text-3xl mb-3 text-green-500" />
              <h4 className="text-lg font-semibold mb-1">
                  Subscribe to Our Newsletter
                </h4>
                <p className="text-gray-700 text-xs text-center">
                  Stay updated with the latest news and updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
