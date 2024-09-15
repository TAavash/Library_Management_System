import React, { useEffect, useState } from "react";
import { getAllBooks, getCheckOutById } from "../../utils/Api"; // Adjust the import path as needed
import BookCover from "../../assets/PCPS Book Cover.png";
import { IoBookSharp } from "react-icons/io5";
import { MdBookmarkAdded, MdLocalLibrary } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Bannerimage from "../../assets/finaldashbanner.png";
import SearchBar from "../../pages/User/comp/SearchBar";
import Usernav from "../User/comp/Usernav";

const Discover = () => {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [checkOuts, setCheckOuts] = useState([]);
  const [checkOutsError, setCheckOutsError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getAllBooks();
        console.log("Fetched response:", response);
        const data = response.data;
        if (Array.isArray(data)) {
          setBooks(data);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching books:", error.message);
      }
    };

    const fetchCheckOuts = async () => {
      try {
        const userId = localStorage.getItem("user_id");
        if (!userId) {
          setCheckOutsError("User ID not found in localStorage");
          setLoading(false);
          return;
        }

        const response = await getCheckOutById(userId);
        setCheckOuts(response.checkOuts || []);
      } catch (error) {
        setCheckOutsError("Error fetching checkouts: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
    fetchCheckOuts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRowClick = (book) => {
    navigate(`/user/book-detail/${book.books_idS}`); // Corrected to use uuid
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header className="fixed w-full z-50">
        <Usernav />
      </header>
      <main className="pt-[100px]">
        <img src={Bannerimage} alt="banner" />
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

        <div className="mx-4 my-8">
          <SearchBar />
        </div>
        <div className="mx-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-brown-700">All Books</h2>
              <p className="text-gray-600">
                Check this list of books and choose something new!
              </p>
            </div>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={() => navigate("/user/view-all")}
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <div
                  key={book.id}
                  className="group relative bg-white rounded-lg shadow-md w-full md:w-56 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={book.cover_pic || BookCover}
                    alt={book.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{book.title}</h3>
                    <p className="text-sm text-gray-600">{book.author}</p>
                    <button
                      className="mt-2 rounded-md bg-rose-600 py-1 px-2 text-sm hover:bg-neutral-900 text-white"
                      onClick={() => handleRowClick(book)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>No books available</div>
            )}
          </div>
        </div>
        <div className="mx-4 mt-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-brown-700">
                CAN BE INTERESTING
              </h2>
              <p className="text-gray-600">
                Check this list of books and choose something new!
              </p>
            </div>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={() => navigate("/user/view-all")}
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <div
                  key={book.id}
                  className="group relative bg-white rounded-lg shadow-md w-full md:w-56 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={book.cover_pic || BookCover}
                    alt={book.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{book.title}</h3>
                    <p className="text-sm text-gray-600">{book.author}</p>
                    <button
                      className="mt-2 rounded-md bg-rose-600 py-1 px-2 text-sm hover:bg-neutral-900 text-white"
                      onClick={() => handleRowClick(book)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>No books available</div>
            )}
          </div>
        </div>
        <div className="mx-4 mt-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-brown-700">
                Completed Reading
              </h2>
              <p className="text-gray-600">
                Check this list of books you have completed reading!
              </p>
            </div>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={() => navigate("/user/view-all")}
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {checkOutsError ? (
              <div>{checkOutsError}</div>
            ) : checkOuts.length > 0 ? (
              checkOuts.map((book) => (
                <div
                  key={book.id}
                  className="group relative bg-white rounded-lg shadow-md w-full md:w-56 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={book.cover_pic || BookCover}
                    alt={book.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{book.title}</h3>
                    <p className="text-sm text-gray-600">{book.author}</p>
                    <button
                      className="mt-2 rounded-md bg-rose-600 py-1 px-2 text-sm hover:bg-neutral-900 text-white"
                      onClick={() => handleRowClick(book)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>No completed readings available</div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Discover;
