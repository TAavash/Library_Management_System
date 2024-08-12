import React, { useState, useEffect } from "react";
import "./comp/Profile.css";
import abhi from "../../assets/abhi.JPG";
import { AiOutlineMail, AiOutlinePhone, AiOutlineArrowLeft } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CgProfile } from "react-icons/cg";
import { getMemberById } from "../../utils/Api";
import background from "../../assets/profilebg.png";

const UserProfile = () => {
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
    role_name: "",
  });

  const [profilePhoto, setProfilePhoto] = useState(abhi);

  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const memberData = await getMemberById(user_id);
        let data = memberData.data;
        if (memberData) {
          setProfileInfo({
            username: data.username || "",
            password: data.password || "",
            first_name: data.first_name || "",
            last_name: data.last_name || "",
            dob: data.dob || "",
            gender: data.gender || "",
            address: data.address || "",
            email: data.email || "",
            mobile: data.mobile || "",
            role_name: data.role_name || "",
          });
        } else {
          console.error("No user data found");
          toast.error("No user data found. Please try again later.");
        }
      } catch (error) {
        console.error("An error occurred while fetching user data:", error);
        toast.error(
          "An error occurred while fetching user data. Please try again later."
        );
      }
    };

    if (user_id) {
      fetchMemberData();
    }
  }, [user_id]);

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
      // Add your save logic here
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
      {/* Back Button */}
      <div className="flex items-center mt-4">
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <AiOutlineArrowLeft className="text-xl mr-1" />
        </button>
      </div>

      <div className="w-full bg-white shadow-lg rounded-lg mt-4 overflow-hidden flex flex-col p-8 relative">
        {/* Profile Banner Section */}
        <div className="header profile-banner mb-6 relative">
          <img
            src={background}
            alt="Background"
            className="w-full h-56 object-cover"
          />
          <div className="absolute left-4 top-36 w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white">
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
          {/* Student Label Overlay */}
          <div className="absolute left-4 bottom-0 transform translate-y-1/2 lg:left-44 lg:bottom-8 lg:translate-y-0 bg-gray-900 text-white px-3 py-1 rounded-full text-sm lg:text-base">
            Student
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center mb-6 mt-16 lg:mt-0">
          <div className="mt-4 lg:mt-0 lg:ml-40 flex flex-col items-center lg:items-start">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-800">
              {profileInfo.first_name} {profileInfo.last_name}
            </h3>
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
                value={profileInfo.first_name}
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
                value={profileInfo.last_name}
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
        {/* Button Section */}
        <div className="mt-8 flex justify-end">
          {isEditing ? (
            <>
              <button
                className="w-full lg:w-auto px-4 py-2 border border-gray-500 text-gray-500 rounded-lg hover:bg-gray-200 focus:outline-none text-sm font-semibold mr-2"
                onClick={handleEditClick}
              >
                Cancel
              </button>
              <button
                className="w-full lg:w-auto px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none text-sm font-semibold"
                onClick={handleSaveClick}
              >
                Save
              </button>
            </>
          ) : (
            <button
              className="w-full lg:w-auto px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none text-sm font-semibold"
              onClick={handleEditClick}
            >
              Edit Profile
              <MdModeEditOutline className="inline-block ml-2" />
            </button>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserProfile;
