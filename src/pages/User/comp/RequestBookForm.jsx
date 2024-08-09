import React, { useState } from "react";
import Library from "../../../assets/pcpslib.jpg";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const RequestBookForm = () => {
  const [formData, setFormData] = useState({
    requested_book_type: "",
    requested_book_title: "",
    requested_book_edition: "",
    url: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-100 to-red-200 flex items-center justify-center py-12 px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-6xl mx-auto">
        <div className="relative w-full md:w-1/2 h-80 md:h-auto hidden md:block">
          <img src={Library} alt="Library" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="w-full md:w-1/2 p-8 relative">
          <button
            onClick={() => navigate(-1)}
          >
            <IoMdArrowRoundBack size={24} />
          </button>
          <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Request Book</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="requested_book_type"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Book Type
              </label>
              <select
                id="requested_book_type"
                name="requested_book_type"
                value={formData.requested_book_type}
                onChange={handleChange}
                className="md:block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              >
                <option value="">Select Genre</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Mystery">Mystery</option>
                <option value="Thriller">Thriller</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="requested_book_title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Book Title
              </label>
              <input
                type="text"
                id="requested_book_title"
                name="requested_book_title"
                value={formData.requested_book_title}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Enter requested book title"
              />
            </div>
            <div>
              <label
                htmlFor="requested_book_edition"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Book Edition
              </label>
              <input
                type="text"
                id="requested_book_edition"
                name="requested_book_edition"
                value={formData.requested_book_edition}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Enter requested book edition"
              />
            </div>
            <div>
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                URL
              </label>
              <input
                type="text"
                id="url"
                name="url"
                value={formData.url}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Enter URL"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-150 ease-in-out"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestBookForm;
