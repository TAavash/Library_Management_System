import React from 'react';
import { useNavigate } from 'react-router-dom';
import abhinab from '../../assets/drake.jpeg';
import NavNew from '../../components/NavNew';

const LibrarianProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 w-screen">
      <NavNew />
      <div className="flex-grow w-full bg-white shadow-lg rounded-lg mt-10 overflow-hidden flex flex-col">
        <div className="relative">
          <div className="h-40 bg-blue-500 w-full"></div>
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mb-4 relative">
              <img
                className="w-full h-full object-cover"
                src={abhinab}
                alt="User Profile"
              />
              
            </div>
           
          </div>
        </div>
        <div className="mt-10 px-8 py-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Ram Yadav</h2>
          <p className="text-lg text-gray-600">Librarian</p>
        </div>      
        <div className="flex-col border-t px-8 py-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Profile Information</h3>
          <div className="flex flex-col space-y-4">
            <p className="text-gray-600"><span className="font-bold">First Name:</span> Ram</p>
            <p className="text-gray-600"><span className="font-bold">Last Name:</span> Yadav</p>
            <p className="text-gray-600"><span className="font-bold">DOB:</span> 2004-02-10</p>
            <p className="text-gray-600"><span className="font-bold">Gender:</span> Male</p>
            <p className="text-gray-600"><span className="font-bold">Address:</span> 123 Library St, City, Country</p>
            <p className="text-gray-600"><span className="font-bold">Email:</span> admin@example.com</p>
            <p className="text-gray-600"><span className="font-bold">Phone Number:</span> (123) 456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibrarianProfile;
