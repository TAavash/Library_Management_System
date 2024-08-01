import React from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IoBookSharp } from "react-icons/io5";
import { MdBookmarkAdded, MdLocalLibrary } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import Bannerimage from "../../assets/finaldashbanner.png";
import bookcover from "../../assets/images.jpeg";
import bookcover1 from "../../assets/36236124._SX300_.jpg";
import SearchBar from "../../pages/User/comp/SearchBar";
import Usernav from "../User/comp/Usernav";
import Calcss from "../../../src/pages/User/comp/Cal.css"

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

  const upcomingBooks = [
    {
      cover: bookcover,
      title: "Kafka on the Shore",
      rdate: "5/22/2024",
      edate: "6/22/2024",
    },
    {
      cover: bookcover,
      title: "Kafka on the Shore",
      rdate: "5/22/2024",
      edate: "6/22/2024",
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

        {/* Upcoming Deadline Section Start */}
        <div className="flex">
          <div className="m-5 shadow-gray-400 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg ">
            <Calendar />
          </div>

          <div className="flex-grow m-5">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Upcoming Deadline</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                View All
              </button>
            </div>
            <div className="flex space-x-4 mt-4">
              {upcomingBooks.map((book, index) => (
                <div
                  key={index}
                  className="flex p-4 border border-gray-300 rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
                  onClick={() =>
                    navigate("/upcoming-deadline", { state: { book } })
                  }
                >
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-[100px] object-cover rounded-lg"
                  />
                  <div className="ml-4">
                    <p className="font-bold text-lg">{book.title}</p>
                    <p className="text-gray-500">Borrowed Date: {book.rdate}</p>
                    <p className="text-gray-500">Expire Date: {book.edate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Upcoming Deadline Section End */}

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
                className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 min-w-[150px] transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => navigate("/my-learning")}
              >
                <div className="relative">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-32 h-40 object-cover mb-4 rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"></div>
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
