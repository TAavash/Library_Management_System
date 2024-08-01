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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-200">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg w-full mx-4 transform transition duration-500 hover:scale-105">
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-56 mb-6">
            <img
              src={book.cover}
              alt={book.title}
              className="object-cover w-full h-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          <h2 className="text-4xl font-extrabold mb-3 text-center text-gray-800">{book.title}</h2>
          <p className="text-gray-700 mb-5 text-center text-lg">{book.description || "No description available"}</p>
        </div>
        <div className="p-4 mb-6">
          <p className="text-gray-800 mb-2 text-lg">
            <span className="font-semibold">Borrowed Date:</span> {book.rdate}
          </p>
          <p className="text-gray-800 mb-4 text-lg">
            <span className="font-semibold">Expire Date:</span> {book.edate}
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
            onClick={handleRenew}
          >
            Renew Book
          </button>
          <button
            className="px-6 py-3 bg-gray-600 text-white rounded-full shadow-md hover:bg-gray-700 transition-transform duration-300 transform hover:scale-105"
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
