import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import logo from "../../assets/pcpslogo.png";
import bookcover from "../../assets/images.jpeg";
import bookcover1 from "../../assets/36236124._SX300_.jpg";
import { IoBookSharp } from "react-icons/io5";
import { MdBookmarkAdded, MdLocalLibrary } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Bannerimage from "../../assets/finaldashbanner.png";
import SearchBar from "../../pages/User/comp/SearchBar";
import UserFilpCard from "../../pages/User/comp/UserFlipCard";
import Usernav from "../User/comp/Usernav";

function Userdash() {
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
    <div>
      <header className="fixed w-full z-50">
        <Usernav />
      </header>

      <main className="pt-[100px]">
        <img src={Bannerimage} alt="Banner" className="w-full" />

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

        <div className="flex">
          <div id="calendar" className="m-5">
            <Calendar />
          </div>

          <div className="flex-grow m-5">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Upcoming Deadline</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                View All
              </button>
            </div>
            <div className="flex space-x-4 mt-4">
              <div className="book-item flex items-center">
                <img
                  src={bookcover}
                  alt="Kafka on the Shore"
                  className="w-[100px]"
                />
                <div className="ml-4">
                  <p>
                    Book:{" "}
                    <a href="#" className="text-blue-500">
                      Kafka on the Shore
                    </a>
                  </p>
                  <p>R/D: 5/22/2024</p>
                  <p>E/D: 6/22/2024</p>
                </div>
              </div>
              <div className="book-item flex items-center">
                <img
                  src={bookcover}
                  alt="Kafka on the Shore"
                  className="w-[100px]"
                />
                <div className="ml-4">
                  <p>
                    Book:{" "}
                    <a href="#" className="text-blue-500">
                      Kafka on the Shore
                    </a>
                  </p>
                  <p>R/D: 5/22/2024</p>
                  <p>E/D: 6/22/2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="my-books" className="m-5">
          <div className="flex flex-col gap-[50px] mb-[10px]">
            <h2 className="text-3xl font-bold text-brown-700">My Books</h2>
            <SearchBar />
          </div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold">Currently Reading</h2>
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
                className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4  min-w-[150px] transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => navigate('/my-learning')}
              >
                <div className="relative">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-32 h-40 object-cover mb-4 rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
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
}

export default Userdash;
