import React, { useState, useEffect } from 'react';
import { AiOutlineLock } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Password = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      };
      setProfileInfo(data);
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo({
      ...profileInfo,
      [name]: value,
    });
  };

  const handleSaveClick = async () => {
    const saveData = async () => {
      console.log("Saving data...", profileInfo);
    };

    await saveData();
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="password-section bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          Change Password
        </h2>
        <div className="space-y-6">
          <div>
            <label className="text-gray-600 font-semibold" htmlFor="currentPassword">
              Current Password
            </label>
            <div className="flex items-center border rounded p-2 mt-2">
              <AiOutlineLock className="text-gray-500 mr-2" />
              <input
                id="currentPassword"
                type="password"
                name="currentPassword"
                value={profileInfo.currentPassword}
                onChange={handleInputChange}
                className="w-full focus:outline-none"
                disabled={!isEditing}
              />
            </div>
          </div>
          <div>
            <label className="text-gray-600 font-semibold" htmlFor="newPassword">
              New Password
            </label>
            <div className="flex items-center border rounded p-2 mt-2">
              <AiOutlineLock className="text-gray-500 mr-2" />
              <input
                id="newPassword"
                type="password"
                name="newPassword"
                value={profileInfo.newPassword}
                onChange={handleInputChange}
                className="w-full focus:outline-none"
                disabled={!isEditing}
              />
            </div>
          </div>
          <div>
            <label className="text-gray-600 font-semibold" htmlFor="confirmPassword">
              Confirm New Password
            </label>
            <div className="flex items-center border rounded p-2 mt-2">
              <AiOutlineLock className="text-gray-500 mr-2" />
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={profileInfo.confirmPassword}
                onChange={handleInputChange}
                className="w-full focus:outline-none"
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            className="px-4 py-2 border border-gray-500 text-gray-500 rounded-lg hover:bg-gray-200 font-semibold transition duration-200 w-full sm:w-auto"
            onClick={() => navigate(-1)} // Navigates to the previous page
          >
            Back
          </button>
          <button
            className="px-4 py-2 border border-gray-500 text-gray-500 rounded-lg hover:bg-gray-200 font-semibold transition duration-200 w-full sm:w-auto"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          {isEditing && (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none text-sm font-semibold transition duration-200 w-full sm:w-auto"
              onClick={handleSaveClick}
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Password;
