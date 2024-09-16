import React, { useState, useEffect } from "react";
import { getUserReservationsById } from "../../utils/Api";
import bookcover1 from "../../assets/images.jpeg";
import { IoBookSharp } from "react-icons/io5";
import { MdBookmarkAdded, MdLocalLibrary } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Bannerimage from "../../assets/finaldashbanner.png";
import SearchBar from "../../pages/User/comp/SearchBar";
import Usernav from "../User/comp/Usernav";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const userId = localStorage.getItem("user_id");
        const response = await getUserReservationsById(userId);
        console.log("API Response:", response);
        setReservations(response.reservations);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  const handleRowClick = (reservation) => {
    navigate(`/user/book-detail/${reservation.books_idS}`);
  };

  if (loading) return <div className="text-center">Loading...</div>;

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
              <h2 className="text-3xl font-bold text-brown-700">
                MY RESERVATIONS
              </h2>
            </div>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={() => navigate("/user/view-all")}
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {error && (
              <div className="col-span-full text-center text-red-500">
                {error}
              </div>
            )}
            {reservations.length === 0 && !error && (
              <div className="col-span-full text-center text-gray-500">
                No reservations found.
              </div>
            )}
            {reservations.map((reservation) => (
              <div
                key={reservation.reservations_idS}
                className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => handleRowClick(reservation)}
              >
                <div className="relative">
                  <img
                    src={bookcover1} // Placeholder image, adjust as needed
                    alt="Book Cover"
                    className="w-32 h-40 object-cover mb-4 rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
                    <MdBookmarkAdded className="text-gray-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center">
                  {reservation.title}{" "}
                  {/* You might want to replace this with actual book title */}
                </h3>
                <p className="text-gray-500 text-center">
                  Status: {reservation.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reservations;
