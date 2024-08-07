import React, { useState, useEffect } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineMail, AiOutlinePhone, AiOutlineLock } from "react-icons/ai";
import abhinab from "../../assets/abhinab.jpg";
import NavNew from "../../components/NavNew";
import { getMemberById } from "../../utils/Api";

const LibrarianProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    dob: "",
    gender: "",
    address: "",
    email: "",
    mobile: "",
    role_id: "",
  });
  
  const user_id = localStorage.getItem("user_id");

  getMemberById(user_id);

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        firstName: "Ram",
        lastName: "Yadav",
        dob: "2004-02-10",
        gender: "Male",
        address: "123 Library St, City, Country",
        email: "admin@example.com",
        phoneNumber: "(123) 456-7890",
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
    <div className="min-h-screen flex flex-col items-center bg-gray-100 w-screen">
      <NavNew />
      <div className="flex-grow w-full bg-white shadow-lg rounded-lg mt-10 overflow-hidden flex flex-col p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">User Profile</h2>
        <div className="flex items-center mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white relative">
            <img
              className="w-full h-full object-cover"
              src={abhinab}
              alt="User Profile"
            />
          </div>
          <div className="ml-6 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-gray-800">{`${profileInfo.firstName} ${profileInfo.lastName}`}</h3>
            <p className="text-gray-600">Librarian</p>
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

        <div className="flex flex-col space-y-4">
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
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label
                className="text-gray-600 font-semibold"
                htmlFor="currentPassword"
              >
                Current Password
              </label>
              <div className="flex items-center border rounded p-2">
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
            <div className="w-1/2">
              <label
                className="text-gray-600 font-semibold"
                htmlFor="newPassword"
              >
                New Password
              </label>
              <div className="flex items-center border rounded p-2">
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
          </div>
          <div className="flex space-x-4">
            <div className="w-full">
              <label
                className="text-gray-600 font-semibold"
                htmlFor="confirmPassword"
              >
                Confirm New Password
              </label>
              <div className="flex items-center border rounded p-2">
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
            <MdModeEditOutline
              className="text-2xl cursor-pointer rounded-lg hover:bg-gray-200 "
              onClick={handleEditClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LibrarianProfile;
