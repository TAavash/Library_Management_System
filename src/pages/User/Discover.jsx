import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/pcpslogo.png";
import bookcover1 from "../../assets/bookCover.jpg";
import { GrFilter } from "react-icons/gr";
import {
  FaBookDead,
  FaRocket,
  FaMagic,
  FaSearchDollar,
  FaHeart,
} from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";
import { MdBookmarkAdded, MdLocalLibrary } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Bannerimage from "../../assets/finaldashbanner.png";
import SearchBar from "../../pages/User/comp/SearchBar";
import UserFilpCard from "../../pages/User/comp/UserFlipCard";
import Usernav from "../User/comp/Usernav";
import MobileNavBar from "../../../src/pages/User/comp/MobileNavBar";
import useWindowWidth from "./comp/useWindowWidth";


const Discover = () => {
  const navigate = useNavigate();
  const windowWidth = useWindowWidth();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const books = [
    {
      cover: bookcover1,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      link: bookcover1,
    },
    {
      cover: bookcover1,
      title: "Marvel and a Wonder",
      author: "Joe Meno",
      link: bookcover1,
    },
    {
      cover: bookcover1,
      title: "Beautiful Ones",
      author: "Emily Hayse",
      link: bookcover1,
    },
    {
      cover: bookcover1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      link: bookcover1,
    },
  ];

  return (
    <div>
      <header className="fixed w-full z-50 bg-white shadow-md">
        <Usernav />
        <button
          className="lg:hidden absolute top-4 right-4 text-2xl"
          onClick={() => setMobileNavOpen(!isMobileNavOpen)}
        >
          ☰
        </button>
      </header>

      {/* Mobile Navbar */}
      {isMobileNavOpen && (
        <nav className="lg:hidden fixed top-0 right-0 w-full h-full bg-white shadow-lg flex flex-col items-center pt-16">
          <div
            className="p-4 border border-gray-300 rounded-lg text-center cursor-pointer"
            onClick={() => navigate("/user/home")}
          >
            <MdLocalLibrary className="text-4xl mb-2" />
            <p>Dashboard</p>
          </div>
          <div
            className="p-4 border border-gray-300 rounded-lg text-center cursor-pointer"
            onClick={() => navigate("/user/discover")}
          >
            <IoBookSharp className="text-4xl mb-2" />
            <p>Discover</p>
          </div>
          <div
            className="p-4 border border-gray-300 rounded-lg text-center cursor-pointer"
            onClick={() => navigate("/user/reservations")}
          >
            <MdBookmarkAdded className="text-4xl mb-2" />
            <p>Reservation</p>
          </div>
          <div
            className="p-4 border border-gray-300 rounded-lg text-center cursor-pointer"
            onClick={() => navigate("/user/e-books")}
          >
            <HiDocumentText className="text-4xl mb-2" />
            <p>E-books</p>
          </div>
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={() => setMobileNavOpen(false)}
          >
            ✕
          </button>
        </nav>
      )}

      <main className="pt-[100px] px-4 sm:px-6 lg:px-8">
        <img src={Bannerimage} className="w-full h-auto object-cover mb-4" alt="Banner" />

        <div className="hidden lg:flex mt-4 space-x-4">
          <div
            className="flex-1 p-4 border border-gray-300 rounded-lg text-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
            onClick={() => navigate("/user/home")}
          >
            <MdLocalLibrary className="text-4xl mx-auto mb-2" />
            <p>Dashboard</p>
          </div>
          <div
            className="flex-1 p-4 border border-gray-300 rounded-lg text-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
            onClick={() => navigate("/user/discover")}
          >
            <IoBookSharp className="text-4xl mx-auto mb-2" />
            <p>Discover</p>
          </div>
          <div
            className="flex-1 p-4 border border-gray-300 rounded-lg text-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
            onClick={() => navigate("/user/reservations")}
          >
            <MdBookmarkAdded className="text-4xl mx-auto mb-2" />
            <p>Reservation</p>
          </div>
          <div
            className="flex-1 p-4 border border-gray-300 rounded-lg text-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
            onClick={() => navigate("/user/e-books")}
          >
            <HiDocumentText className="text-4xl mx-auto mb-2" />
            <p>E-books</p>
          </div>
        </div>

        <div className="mx-4 my-8">
          <SearchBar />
        </div>

        <div className="mx-4">
          <div className="flex items-center justify-between mb-8 flex-wrap">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brown-700">
                CAN BE INTERESTING
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Check this list of books and choose something new!
              </p>
            </div>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm md:text-base"
              onClick={() => navigate("/user/view-all")}
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.map((book, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 cursor-pointer"
                // onClick={() => navigate(book.link)}
              >
                <UserFilpCard />
                <h3 className="text-lg md:text-xl font-semibold text-center mt-2">
                  {book.title}
                </h3>
                <p className="text-gray-500 text-center mt-1">{book.author}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      {windowWidth < 768 && <MobileNavBar />}{" "}
    </div>
  );
};

export default Discover;