import React from 'react';

const LibrarianProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden mt-10">
        <div className="bg-gradient-to-r from-blue-400 to-purple-600 h-32 w-full"></div>
        <div className="flex justify-center -mt-16">
          <img
            className="w-32 h-32 rounded-full border-4 border-white"
            src="path_to_profile_picture" 
            alt="User Profile"
          />
        </div>
        <div className="text-center mt-5">
          <h2 className="text-3xl font-semibold text-gray-800">Admin Name</h2>
          <p className="text-xl text-gray-600">Admin Role</p>
          <p className="text-lg text-gray-500">Location</p>
          <div className="flex justify-center mt-4">
            <span className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full">Library Management System</span>
            <span className="bg-gray-600 text-white text-sm px-4 py-2 rounded-full ml-2">Another Organization</span>
          </div>
        </div>
        <div className="mt-6 px-6 py-4 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Profile Information</h3>
          <p className="text-gray-600 mt-2">Contact Information: contact@example.com</p>
          <p className="text-gray-600 mt-2">Email: admin@example.com</p>
          <p className="text-gray-600 mt-2">Phone Number: (123) 456-7890</p>
          <p className="text-gray-600 mt-2">Address: 123 Library St, City, Country</p>
        </div>
        <div className="mt-6 px-6 py-4 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Recent Activities</h3>
          <p className="text-gray-600 mt-2">Recent activities related to the library management system...</p>
        </div>
      </div>
    </div>
  );
};

export default LibrarianProfile;
