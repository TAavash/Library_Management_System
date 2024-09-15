import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import BookCover from "../../../../../assets/PCPS Book Cover.png";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  getAllCheckout,
  completeCheckOut,
  cancelReservation,
} from "../../../../../utils/Api";

const All = ({ viewMode }) => {
  const [checkOut, setCheckOut] = useState([]);
  const [loading, setLoading] = useState(true);

  const [popupOpen, setPopupOpen] = useState(false);
  const [bookId, setBookId] = useState(null);

  const handleBookClick = (id) => {
    setBookId(id);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setBookId(null);
  };

  const navigate = useNavigate();

  const handleNameClick = (person) => {
    navigate("/MemberDetail", { state: { member_id: person.member_idS } });
    console.log(person);
  };

  const selectedBook = checkOut.find(
    (item) => item.reservations_idS === bookId
  );

  useEffect(() => {
    const fetchCheckOut = async () => {
      try {
        const data = await getAllCheckout();
        setCheckOut(data);
      } catch (error) {
        console.error("Error fetching check-in: ", error);
        toast.error("Failed to fetch check-in.");
      } finally {
        setLoading(false);
      }
    };

    fetchCheckOut();
  }, []);

  const checkOutAccept = async (userId) => {
    try {
      const data = await completeCheckOut(userId);
      setCheckOut(data);
      toast.success("Check-Out completed successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Check-Out cannot complete:", error);
      toast.error("Failed to complete check-out.");
    } finally {
      setLoading(false);
    }
  };

  const reservationCancel = async (checkOutId) => {
    try {
      const data = await cancelReservation(checkOutId);
      setCheckOut(data);
      toast.success("Check-Out canceled successfully!");
      window.location.reload(); // This will refresh the page to reflect changes
    } catch (error) {
      console.error("Check-Out cannot be canceled:", error);
      toast.error("Failed to cancel Check-Out.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full h-full ">
      <ToastContainer />
      <div className="w-[100%] h-[20%] flex justify-between bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
        <div className=" h-full flex-col">
          <div className="w-full h-[70%] text-3xl">All Check-Out</div>
          <div className="w-full h-[30%] text-[-2xl] text-[#525252]">
            Manage all the check-out
          </div>
        </div>

        <div className="flex justify-center m-2">
          <div className="flex w-[500px] items-center gap-1">
            <FiSearch className="h-5 w-5 ml-1" />
            <input
              type="text"
              placeholder="Search"
              className="p-1 w-[500px]  border-hidden focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex-col h-[80%] bg-white p-[30px] gap-[30px] rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
        {
          (viewMode = "grid" ? (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[30px] my-2">
              {checkOut.length > 0 ? (
                checkOut.map((reservation) => (
                  <div
                    key={reservation.reservations_idS}
                    className="group relative bg-white rounded-lg shadow-md w-56 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
                    onClick={() =>
                      handleBookClick(reservation.reservations_idS)
                    }
                  >
                    <div className="p-3">
                      <h3 className="text-lg font-bold">{reservation.title}</h3>
                      <p className="text-sm text-gray-600">
                        {reservation.sub_title}
                      </p>
                    </div>
                    <img
                      src={reservation.cover_pic || BookCover}
                      alt="Book Cover"
                      className="w-full h-72 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold">
                        Reserved by:{" "}
                        <span
                          className="text-blue-500 hover:text-blue-400 font-medium cursor-pointer"
                          onClick={() => handleNameClick(reservation)}
                        >
                          {reservation.first_name} {reservation.last_name}
                        </span>
                      </h3>
                      <p className="text-sm text-gray-600">
                        Reservation Date: {reservation.reservation_date}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No check-out found.</p>
              )}
            </div>
          ) : (
            <div className="list">
              {checkOut.length > 0 ? (
                checkOut.map((book) => (
                  <div
                    key={book.reservations_idS}
                    className="flex items-center p-4 border-b border-gray-200 cursor-pointer"
                  >
                    <div className="w-full flex-col justify-between">
                      <h3 className="text-lg font-bold">{book.title}</h3>
                      <p className="text-sm text-gray-600">
                        Reserved by:{" "}
                        <span
                          className="text-blue-500 hover:text-blue-400 font-medium cursor-pointer"
                          onClick={() => handleNameClick(book)}
                        >
                          {book.first_name} {book.last_name}
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-5">
                      <button
                        className="w-fit p-2 bg-green-500"
                        onClick={() => checkOutAccept(book.id)}
                      >
                        Accept
                      </button>
                      <button
                        className="w-fit p-2 bg-red-500"
                        onClick={() => reservationCancel(book.id)}
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div>No books available</div>
              )}
            </div>
          ))
        }
      </div>
      {popupOpen && selectedBook && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/30 brightness-50 z-[100]"></div>

          {/* Popup Container */}
          <div className="fixed inset-0 flex justify-center items-center p-4 z-[2000]">
            <div className="relative bg-slate-200 p-6 rounded-lg max-w-full max-h-full overflow-auto flex flex-col md:flex-row">
              {/* Close Button */}
              <div
                className="absolute top-4 right-4 text-3xl cursor-pointer z-[5000]"
                onClick={handleClosePopup}
              >
                &times;
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    {selectedBook.title}
                  </h2>
                  <p className="text-base md:text-lg mb-2">
                    Reserved by: {selectedBook.first_name}{" "}
                    {selectedBook.last_name}
                  </p>
                  <p className="text-base md:text-lg mb-2">
                    Reserved date: {selectedBook.reservation_date}
                  </p>
                  <p className="text-base md:text-lg mb-2">Learn more...</p>
                  <div className="flex gap-2 mt-4">
                    <button
                      className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded"
                      onClick={() =>
                        checkOutAccept(selectedBook.reservations_idS)
                      }
                    >
                      Complete
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                      onClick={() =>
                        reservationCancel(selectedBook.reservations_idS)
                      }
                    >
                      Cancel
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={selectedBook.cover_pic}
                    alt={selectedBook.title}
                    className="w-full max-w-[300px] md:max-w-[400px] h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default All;
