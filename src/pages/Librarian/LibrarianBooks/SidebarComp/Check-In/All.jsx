import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import BookCover from "../../../../../assets/PCPS Book Cover.png";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getAllCheckin, completeCheckIn } from "../../../../../utils/Api";

const All = ({ viewMode }) => {
  const [checkIn, setCheckIn] = useState([]);
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

  const selectedBook = checkIn.find((item) => item.reservations_idS === bookId);

  useEffect(() => {
    const fetchCheckIn = async () => {
      try {
        const data = await getAllCheckin();
        setCheckIn(data);
      } catch (error) {
        console.error("Error fetching check-in: ", error);
        toast.error("Failed to fetch check-in.");
      } finally {
        setLoading(false);
      }
    };

    fetchCheckIn();
  }, []);

  const checkInAccept = async (userId) => {
    try {
      const data = await completeCheckIn(userId);
      setCheckIn(data);
      toast.success("Check-In completed successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Check-In cannot complete:", error);
      toast.error("Failed to complete check-in.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full h-full">
      <ToastContainer />
      <div className="w-[100%] h-[20%] flex justify-between bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
        <div className="h-full flex-col">
          <div className="w-full h-[70%] text-3xl">All Check-In</div>
          <div className="w-full h-[30%] text-[-2xl] text-[#525252]">
            Manage all the check-in
          </div>
        </div>

        <div className="flex justify-center m-2">
          <div className="flex w-[500px] items-center gap-1">
            <FiSearch className="h-5 w-5 ml-1" />
            <input
              type="text"
              placeholder="Search"
              className="p-1 w-[500px] border-hidden focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex-col h-[80%] bg-white p-[30px] gap-[30px] rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
        {
          (viewMode = "grid" ? (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[30px] my-2">
              {checkIn.length > 0 ? (
                checkIn.map((reservation) => (
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
                <p>No check-in found.</p>
              )}
            </div>
          ) : (
            <div className="list">
              {checkIn.length > 0 ? (
                checkIn.map((book) => (
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
                      <button className="w-fit p-2 bg-green-500">Accept</button>
                      <button className="w-fit p-2 bg-red-500">Reject</button>
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
          <div className="fixed h-[100vh] w-[100vw] top-0 left-0 bg-black/30 brightness-50 z-[100]"></div>
          <div className="fixed top-[10vh] left-[20vw] h-[80vh] w-[60vw] bg-purple-200 blur-[100px] z-[1000]"></div>
          <div className="fixed top-[10vh] left-[20vw] h-[80vh] w-[60vw] bg-slate-200 z-[2000]">
            <div
              className="absolute top-[30px] right-[30px] text-3xl Z-[5000] cursor-pointer"
              onClick={handleClosePopup}
            >
              &times;
            </div>
            <div className="p-10 flex flex-row-reverse gap-[50px] w-fit mx-auto">
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  {selectedBook.title}
                </h2>
                <p className="text-lg mb-2">
                  Reserved by: {selectedBook.first_name}{" "}
                  {selectedBook.last_name}
                </p>
                <p className="text-lg mb-2">
                  Reserved date: {selectedBook.reservation_date}
                </p>
                <p className="text-lg mb-2">Learn more...</p>
                <div className="text-2xl font-bold gap-[10px] flex mt-[30px]">
                  <button
                    className="bg-green-500 text-white hover:bg-green-500/80 w-fit px-[50px] p-[10px]"
                    onClick={() => checkInAccept(selectedBook.reservations_idS)}
                  >
                    Check-Out
                  </button>
                  <button className="bg-red-500 hover:bg-red-500/80 text-white w-fit px-[50px] p-[10px]">
                    Cancel
                  </button>
                </div>
              </div>
              <img
                src={selectedBook.cover_pic}
                alt={selectedBook.title}
                className="w-[40vh] xl:h-[60vh] h-[40vh] object-cover mt-4"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default All;
