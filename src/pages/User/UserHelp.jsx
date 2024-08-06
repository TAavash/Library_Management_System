import React, { useState } from "react";
import Library from "../../assets/pcpslib.jpg";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const UserHelp = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subject:", subject);
    console.log("Message:", message);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-100 to-red-200 flex items-center justify-center py-12 px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex max-w-4xl mx-auto">
        <div className="relative w-1/2 hidden lg:block">
          <img
            src={Library}
            alt="Help illustration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-5">
            <h3 className="text-white text-3xl font-bold mb-4 text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              Contact Information
            </h3>
            <div className="text-white text-center">
              <p className="mb-4 flex items-center justify-center">
                <FaPhone className="mr-2" /> 
                <span className="text-lg">+1012 3456 789</span>
              </p>
              <p className="mb-4 flex items-center justify-center">
                <FaEnvelope className="mr-2" /> 
                <span className="text-lg">demo@gmail.com</span>
              </p>
              <p className="flex items-center justify-center">
                <FaMapMarkerAlt className="mr-2" /> 
                <span className="text-lg">Kupundole, Lalitpur</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-white flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-red-600 mb-6 text-center lg:text-left">PCPS Library Help</h2>
          <p className="text-gray-700 mb-6 text-center lg:text-left">
We'll respond promptly to your inquiries and feedback.          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Subject
              </label>
              <div className="mt-1">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm sm:leading-5"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-150 ease-in-out"
              >
                Let's talk!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserHelp;
