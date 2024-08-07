import React, { useState, useEffect } from "react";
import "./comp/Profile.css";
import abhi from "../../assets/abhi.JPG";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CgProfile } from "react-icons/cg";

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

  const [profilePhoto, setProfilePhoto] = useState(abhi);

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
      toast.success("Profile updated successfully!");
    };

    await saveData();
    setIsEditing(false);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePhoto = () => {
    setProfilePhoto(null);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="w-full bg-white shadow-lg rounded-lg mt-10 overflow-hidden flex flex-col p-8">
        <div className="header profile-banner mb-6">
          {/* Profile Banner Section */}
        </div>

        <div className="flex flex-col lg:flex-row items-center mb-6">
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white relative">
            {profilePhoto ? (
              <img
                className="w-full h-full object-cover"
                src={profilePhoto}
                alt="Profile"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-9xl">
                <CgProfile />
              </div>
            )}
          </div>
          <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col items-center lg:items-start">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-800">
              {`${profileInfo.firstName} ${profileInfo.lastName}`}
            </h3>
            <p className="text-gray-600">Student</p>
          </div>
          <div className="mt-4 lg:mt-0 lg:ml-auto flex flex-col items-center space-y-2 lg:space-y-0 lg:space-x-2 lg:flex-row">
            {isEditing && (
              <>
                <input
                  type="file"
                  id="upload-photo"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
                <label
                  htmlFor="upload-photo"
                  className="w-full lg:w-auto px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none text-sm font-semibold cursor-pointer"
                >
                  Upload New Photo
                </label>
                <button
                  className="w-full lg:w-auto px-4 py-2 border border-gray-500 text-gray-500 rounded-lg hover:bg-gray-200 focus:outline-none text-sm font-semibold"
                  onClick={handleDeletePhoto}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>

        {/* User Information Container */}
        <div className="profile-section flex flex-col space-y-4">
          <div className="flex flex-col lg:flex-row lg:space-x-4">
            <div className="w-full lg:w-1/2">
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
            <div className="w-full lg:w-1/2">
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
          <div className="flex flex-col lg:flex-row lg:space-x-4">
            <div className="w-full lg:w-1/2">
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
            <div className="w-full lg:w-1/2">
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
          <div className="w-full">
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

        <div className="mt-6 flex flex-col lg:flex-row justify-end space-y-4 lg:space-y-0 lg:space-x-4">
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
      <ToastContainer />
    </div>
  );
};

export default UserProfile;
