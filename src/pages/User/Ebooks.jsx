import React from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/pcpslogo.png";
import bookcover1 from "../../assets/images.jpeg";
import { GrFilter, GrFormAdd } from "react-icons/gr";
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
import ToggleButton from "../../pages/User/comp/ToggleButton";
import Usernav from "../User/comp/Usernav";


const Ebooks = () => {
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-white">
      <header className="fixed w-full z-50">
        <Usernav />
      </header>
      <main className="pt-[100px]">
      <img src={Bannerimage} alt="Banner" />
      <div className="mt-4 flex space-x-4">
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
      <ToggleButton />
      <div className="mx-4 my-8">
        <SearchBar />
      </div>

      <div className="mx-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-brown-700">
              Most Popular Courses
            </h2>
          </div>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            onClick={() => navigate("/user/view-all")}
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {books.map((book, index) => (
            <div
              key={index}
              className="group flex flex-col items-center bg-white shadow-lg rounded-lg p-4 min-w-[150px] transition-transform transform hover:scale-105 cursor-pointer"
              // onClick={() => navigate(book.link)}
            >
              <div className="relative">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-32 h-40 object-cover mb-4 rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <GrFormAdd className="text-gray-500" onClick={()=>{
                    navigate('/user/my-learning')
                  }}/>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center">
                {book.title}
              </h3>
              <p className="text-gray-500 text-center">{book.author}</p>
            </div>
          ))}
        </div>
      </div>
      </main>

    </div>
  );
};

export default Ebooks;
