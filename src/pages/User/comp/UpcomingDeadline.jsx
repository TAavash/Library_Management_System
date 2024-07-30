import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UpcomingDeadline() {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state || {};

  if (!book) {
    return <div className="text-center text-red-500">No book details available</div>;
  }

  const handleRenew = () => {
    // Logic to renew the book
    console.log("Renew book");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full mx-4 transform transition duration-500 hover:scale-105">
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-60 mb-4">
            <img
              src={book.cover}
              alt={book.title}
              className="object-cover w-full h-full rounded-lg shadow-md"
            />
          </div>
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">{book.title}</h2>
          <p className="text-gray-600 mb-4 text-center">{book.description || "No description available"}</p>
        </div>
        <div className=" p-4 rounded-lg  mb-4">
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Borrowed Date:</span> {book.rdate}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Expire Date:</span> {book.edate}
          </p>
        </div>
        <div className="flex justify-start space-x-4 mt-4">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={handleRenew}
          >
            Renew Book
          </button>
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpcomingDeadline;
