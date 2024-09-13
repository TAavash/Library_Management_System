import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaStar, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import bookcover1 from "../../assets/bookCover.jpg";
import logo from "../../assets/pcpslogo.png";
import { IoArrowBack } from "react-icons/io5";
import { getBooksById, reserveBook } from "../../utils/Api"; // Import your API function
import { useNavigate } from "react-router-dom";

const BookDetail = () => {
  const navigate = useNavigate();
  const { uuid } = useParams(); // Extract uuid from location.state

  const [bookInfo, setBookInfo] = useState({
    books_idS: "",
    class_number: "",
    book_number: "",
    title: "",
    sub_title: "",
    edition_statement: "",
    num_of_page: "",
    language: "",
    element_select: "",
    electronic_location_and_access: "",
    description: "",
    cover_pic: "",
    published_year: "",
    publication_name: "",
    name_of_publisher: "",
    place_of_publication: "",
    name: "",
    add_author: "",
    isbn_number: "",
    barcode__r_f_i_d_idS: "",
    identifier_type: "",
    identifier_value: "",
    status: "Available",
  });

  useEffect(() => {
    const fetchBookDetails = async () => {
      if (uuid) {
        try {
          const data = await getBooksById(uuid); // Fetch book details using the uuid
          setBookInfo(data.data[0]);
        } catch (error) {
          console.error("Error fetching book details:", error);
          toast.error("Failed to fetch book details.");
        }
      }
    };

    fetchBookDetails();
  }, [uuid]);

  // const handleReserve = async () => {
  //   const userId = localStorage.getItem("user_id");

  //   try {
  //     const response = await reserveBook({
  //       member_idS: userId,
  //       books_idS: uuid,
  //     });
  //     toast.success("Book reserved successfully!");
  //   } catch (error) {
  //     console.error("Error reserving book:", error);
  //     toast.error("Failed to reserve book.");
  //   }
  // };

  const handleReserve = async () => {
    const userId = localStorage.getItem("user_id");

    try {
      const response = await reserveBook(userId, uuid);
      toast.success(response.message || "Book reserved successfully!");
    } catch (error) {
      console.error("Error reserving book:", error);

      // Use custom error message from API response
      const errorMessage =
        error.response?.data?.message || "Failed to reserve book.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10">
      <ToastContainer />
      <div className="w-full max-w-6xl px-6">
        <div className="flex items-center justify-between mb-6">
          <IoArrowBack
            className="text-3xl cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out"
            onClick={() => navigate(-1)}
          />
          <img src={logo} alt="PCPS Logo" className="h-12" />
        </div>
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-50 to-blue-200 rounded-lg shadow-lg p-8">
          <div className="md:w-1/3 flex justify-center items-center mb-6 md:mb-0">
            <img
              src={bookInfo?.cover_pic || bookcover1}
              alt="Book Cover"
              className="w-72 h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3 md:ml-8">
            <div className="mb-4">
              <span className="text-gray-600 font-medium">ISBN:</span>{" "}
              <span className="text-gray-800">
                {bookInfo?.isbn_number || "Unavailable"}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {bookInfo?.title || "Unavailable"}
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              by:{" "}
              <span className="text-blue-500">
                {bookInfo?.name || "Unavailable"}
              </span>
              <span className="text-gray-800">
                {bookInfo?.add_author || ""}
              </span>
            </p>
            <div className="flex items-center mb-4">
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-gray-300" />
              <span className="ml-2 text-gray-600">(4.0)</span>
            </div>
            <p className="text-gray-700 mb-4">
              {bookInfo?.description || "Unavailable"}
            </p>
            <div className="mb-4">
              <span className="text-gray-600 font-medium">Edition:</span>{" "}
              <span className="text-gray-800">
                {bookInfo?.isbn_number || "Unavailable"}
              </span>
            </div>
            <div className="flex space-x-4 mb-6">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
                Borrow Now
              </button>
              <button
                className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out"
                onClick={handleReserve}
              >
                Reserve
              </button>
            </div>
            <div className="text-gray-600 mb-4">
              Genre:{" "}
              <span className="text-gray-900">
                {bookInfo?.element_select || "Unavailable"}
              </span>
            </div>
            <div className="flex space-x-4 text-gray-600">
              <FaFacebook className="hover:text-blue-500 cursor-pointer transition duration-300 ease-in-out" />
              <FaTwitter className="hover:text-blue-500 cursor-pointer transition duration-300 ease-in-out" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer transition duration-300 ease-in-out" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
