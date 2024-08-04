import React, { useState, useEffect } from "react";
import "./comp/Profile.css";
import abhi from "../../assets/abhi.JPG";
import { AiOutlineMail, AiOutlinePhone, AiOutlineLock } from "react-icons/ai";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    address: "",
    email: "",
    phoneNumber: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        firstName: "Abhinab",
        lastName: "Prajapati",
        dob: "2004-02-10",
        gender: "Male",
        address: "Patan",
        email: "abhi@patancollege.edu.np",
        phoneNumber: "+977 49652845732",
      };
      setProfileInfo(data);
    };

    fetchData();
  }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

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
    <div>
      <div className="flex-grow w-full bg-white shadow-lg rounded-lg mt-10 overflow-hidden flex flex-col p-8">
        <div className="header profile-banner flex items-center justify-between mb-6"></div>

        <div className="flex items-center mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white relative">
            <img
              className="w-full h-full object-cover"
              src={abhi}
              alt="Profile"
            />
          </div>
          <div className="ml-6 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-gray-800">{`${profileInfo.firstName} ${profileInfo.lastName}`}</h3>
            <p className="text-gray-600">Student</p>
          </div>
          <div className="ml-auto flex flex-col items-center space-y-2">
            <button className="w-40 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none text-sm font-semibold">
              Upload New Photo
            </button>
            <button className="w-40 px-4 py-2 border border-gray-500 text-gray-500 rounded-lg hover:bg-gray-200 focus:outline-none text-sm font-semibold">
              Delete
            </button>
          </div>
        </div>

        {/* User Information Container */}
        <div className="profile-section flex flex-col space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label
                className="text-gray-600 font-semibold"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={profileInfo.firstName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                disabled={!isEditing}
              />
            </div>
            <div className="w-1/2">
              <label className="text-gray-600 font-semibold" htmlFor="lastName">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={profileInfo.lastName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-full">
              <label className="text-gray-600 font-semibold" htmlFor="dob">
                Date of Birth
              </label>
              <input
                id="dob"
                type="text"
                name="dob"
                value={profileInfo.dob}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-full">
              <label className="text-gray-600 font-semibold" htmlFor="address">
                Address
              </label>
              <input
                id="address"
                type="text"
                name="address"
                value={profileInfo.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="text-gray-600 font-semibold" htmlFor="email">
                Email Address
              </label>
              <div className="flex items-center border rounded p-2">
                <AiOutlineMail className="text-gray-500 mr-2" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={profileInfo.email}
                  onChange={handleInputChange}
                  className="w-full focus:outline-none"
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="w-1/2">
              <label
                className="text-gray-600 font-semibold"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <div className="flex items-center border rounded p-2">
                <AiOutlinePhone className="text-gray-500 mr-2" />
                <input
                  id="phoneNumber"
                  type="text"
                  name="phoneNumber"
                  value={profileInfo.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full focus:outline-none"
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="text-gray-600 font-semibold" htmlFor="gender">
                Gender
              </label>
              <input
                id="gender"
                type="text"
                name="gender"
                value={profileInfo.gender}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          {isEditing && (
            <>
              <button
                className="px-4 py-2 border border-gray-500 text-gray-500 rounded-lg hover:bg-gray-200 font-semibold"
                onClick={handleEditClick}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 font-semibold"
                onClick={handleSaveClick}
              >
                Save Changes
              </button>
            </>
          )}
          {!isEditing && (
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none text-sm font-semibold"
              onClick={handleEditClick}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
