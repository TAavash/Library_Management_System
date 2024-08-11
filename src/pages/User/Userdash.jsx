import React from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IoBookSharp } from "react-icons/io5";
import { MdBookmarkAdded, MdLocalLibrary } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import { BsCalendar } from "react-icons/bs";
import Bannerimage from "../../assets/finaldashbanner.png";
import bookcover from "../../assets/images.jpeg";
import bookcover1 from "../../assets/36236124._SX300_.jpg";
import SearchBar from "../../pages/User/comp/SearchBar";
import Usernav from "../User/comp/Usernav";
import MobileNavBar from "../../../src/pages/User/comp/MobileNavBar";
import useWindowWidth from "./comp/useWindowWidth";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import calcss from "./comp/Cal.css"

function Userdash() {
  const navigate = useNavigate();
  const windowWidth = useWindowWidth();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5, // Number of items to show at once
    slidesToScroll: 5, // Number of items to scroll at once
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  
  

  const upcomingBooks = [
    {
      cover: bookcover,
      title: "Kafka on the Shore",
      rdate: "5/22/2024",
      edate: "6/22/2024",
      daysLeft: 5,
    },
    {
      cover: bookcover,
      title: "Kafka on the Shore",
      rdate: "5/22/2024",
      edate: "6/22/2024",
      daysLeft: 3,
    },
  ];

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
      <main className="pt-[100px] pb-[70px] px-4 sm:px-6 lg:px-8">
        <img src={Bannerimage} alt="Banner" className="w-full" />

        {windowWidth >= 768 && ( // Conditionally render cards navigation based on screen width
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              className="p-4 border border-gray-300 rounded-lg text-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
              onClick={() => navigate("/user/home")}
            >
              <MdLocalLibrary className="text-4xl mx-auto mb-2" />
              <p>Dashboard</p>
            </div>
            <div
              className="p-4 border border-gray-300 rounded-lg text-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
              onClick={() => navigate("/user/discover")}
            >
              <IoBookSharp className="text-4xl mx-auto mb-2" />
              <p>Discover</p>
            </div>
            <div
              className="p-4 border border-gray-300 rounded-lg text-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
              onClick={() => navigate("/user/reservations")}
            >
              <MdBookmarkAdded className="text-4xl mx-auto mb-2" />
              <p>Reservation</p>
            </div>
            <div
              className="p-4 border border-gray-300 rounded-lg text-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
              onClick={() => navigate("/user/e-books")}
            >
              <HiDocumentText className="text-4xl mx-auto mb-2" />
              <p>E-books</p>
            </div>
          </div>
        )}

        {/* Upcoming Deadline Section Start */}
        <div className="flex flex-col lg:flex-row lg:space-x-5">
          <div className="hidden lg:block mx-auto mt-5 w-full lg:w-auto">
            <Calendar />
          </div>

          <div className="flex-grow m-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Upcoming Deadline</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {upcomingBooks.map((book, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row p-4 border border-red-500 bg-red-100 rounded-lg transition-transform transform hover:scale-105 cursor-pointer relative"
                  onClick={() =>
                    navigate("/upcoming-deadline", { state: { book } })
                  }
                >
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full md:w-[100px] object-cover rounded-lg mb-2 md:mb-0 hidden md:block"
                  />
                  <div className="flex flex-col">
                    <p className="font-bold text-lg pl-4">{book.title}</p>
                    <div className="flex items-center text-gray-500 text-sm mt-2 pl-4">
                      <BsCalendar className="mr-1" />
                      <span className="mr-2">Borrowed Date:</span>
                      <span className="font-semibold">{book.rdate}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mt-2 pl-4">
                      <BsCalendar className="mr-1" />
                      <span className="mr-2">Expire Date:</span>
                      <span className="font-semibold">{book.edate}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-red-500 text-white rounded-full px-2 py-1 shadow-md text-sm">
                    {book.daysLeft} days left
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Upcoming Deadline Section End */}

        <div id="my-books" className="m-5">
  <div className="flex flex-col gap-4 mb-4">
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
  <Slider {...settings}>
  {books.map((book, index) => (
    <div key={index} className="px-2"> {/* Add padding between cards */}
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-30 transition-transform transform cursor-pointer"> {/* Set a specific width here */}
        <img
          src={book.cover}
          alt={book.title}
          className="w-24 sm:w-32 h-32 sm:h-40 object-cover mb-4 rounded-lg"
        />
        <h3 className="text-sm sm:text-lg font-semibold text-center mt-2 truncate max-w-[150px]">
  {book.title}
</h3>

        <p className="text-xs sm:text-sm text-gray-500 text-center">
          {book.author}
        </p>
      </div>
    </div>
  ))}
</Slider>


</div>

      </main>
      {windowWidth < 768 && <MobileNavBar />}{" "}
      {/* Conditionally render MobileNavBar */}
    </div>
  );
}

export default Userdash;
