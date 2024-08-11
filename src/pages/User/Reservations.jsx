import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import { MdBookmarkAdded, MdLocalLibrary } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import Bannerimage from "../../assets/finaldashbanner.png";
import bookcover1 from "../../assets/images.jpeg";
import SearchBar from "../../pages/User/comp/SearchBar";
import Usernav from "../User/comp/Usernav";
import MobileNavBar from "../../../src/pages/User/comp/MobileNavBar";
import useWindowWidth from "./comp/useWindowWidth";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reservations = () => {
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

  // Slider settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Adjust based on number of cards to show
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen">
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
            <p>Reservations</p>
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
        <img
          src={Bannerimage}
          alt="Banner"
          className="w-full h-auto object-cover mb-4"
        />

        <div className="hidden lg:flex mt-4 flex-wrap justify-center gap-4">
          <div
            className="w-full sm:w-auto flex-1 p-4 border border-gray-300 rounded-lg text-center cursor-pointer"
            onClick={() => navigate("/user/home")}
          >
            <MdLocalLibrary className="text-3xl sm:text-4xl mx-auto mb-2" />
            <p className="text-sm sm:text-base">Dashboard</p>
          </div>
          <div
            className="w-full sm:w-auto flex-1 p-4 border border-gray-300 rounded-lg text-center cursor-pointer"
            onClick={() => navigate("/user/discover")}
          >
            <IoBookSharp className="text-3xl sm:text-4xl mx-auto mb-2" />
            <p className="text-sm sm:text-base">Discover</p>
          </div>
          <div
            className="w-full sm:w-auto flex-1 p-4 border border-gray-300 rounded-lg text-center cursor-pointer"
            onClick={() => navigate("/user/reservations")}
          >
            <MdBookmarkAdded className="text-3xl sm:text-4xl mx-auto mb-2" />
            <p className="text-sm sm:text-base">Reservations</p>
          </div>
          <div
            className="w-full sm:w-auto flex-1 p-4 border border-gray-300 rounded-lg text-center cursor-pointer"
            onClick={() => navigate("/user/e-books")}
          >
            <HiDocumentText className="text-3xl sm:text-4xl mx-auto mb-2" />
            <p className="text-sm sm:text-base">E-books</p>
          </div>
        </div>

        <div className="my-8">
          <SearchBar />
        </div>

        <div className="my-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brown-700">
                My Reservations
              </h2>
            </div>
            <button
              className="mt-4 lg:mt-0 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm sm:text-base"
              onClick={() => navigate("/user/view-all")}
            >
              View All
            </button>
          </div>

          <Slider {...settings}>
            {books.map((book, index) => (
              <div key={index} className="px-2">
                <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-[180px] sm:w-[220px] cursor-pointer">
                  <div className="relative">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-24 sm:w-32 h-32 sm:h-40 object-cover mb-4 rounded-lg"
                    />
                    <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
                      <MdBookmarkAdded className="text-gray-500" />
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold text-center mt-2">
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
      {windowWidth < 768 && <MobileNavBar />}
    </div>
  );
};

export default Reservations;
