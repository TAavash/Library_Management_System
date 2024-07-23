import React from "react";
import Logo from "../../../assets/pcpslogo.png";
import { RiSettings3Fill } from "react-icons/ri";
import { MdNotifications } from "react-icons/md";

const Usernav = () => {
  return (
    <nav className="bg-white shadow-md py-4 fixed w-full top-0 left-0 z-50">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <img src={Logo} className="h-[60px]" alt="logo" />

        <div className="flex items-center space-x-6">
          <a href="#find-property" className="text-black hover:text-red-500 text-xl">
            <RiSettings3Fill />
          </a>
          <a href="#news-press" className="text-black hover:text-red-500 text-xl">
            <MdNotifications />
          </a>
          <div className="text-black">AR</div>
          <div className="rounded-full border border-black p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 12a5 5 0 100-10 5 5 0 000 10zM2 18a8 8 0 0116 0H2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Usernav;
