import React, { useState, useEffect } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineMail, AiOutlinePhone, AiOutlineLock } from "react-icons/ai";
import abhinab from "../../assets/abhinab.jpg";
import NavNew from "../../components/NavNew";
import { ToastContainer, toast } from "react-toastify";
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
    // role_id: "",
    role_name: "",
  });

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
            // role_id: data.role_id || "",
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
            <h3 className="text-xl font-semibold text-gray-800">{`${profileInfo.first_name} ${profileInfo.last_name}`}</h3>
            <p className="text-gray-600">{`${profileInfo.role_name}`}</p>
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
                htmlFor="first_name"
              >
                First Name
              </label>
              <input
                id="first_name"
                type="text"
                name="first_name"
                value={profileInfo.first_name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                disabled={!isEditing}
              />
            </div>
            <div className="w-1/2">
              <label
                className="text-gray-600 font-semibold"
                htmlFor="last_name"
              >
                Last Name
              </label>
              <input
                id="last_name"
                type="text"
                name="last_name"
                value={profileInfo.last_name}
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
              <label className="text-gray-600 font-semibold" htmlFor="mobile">
                Phone Number
              </label>
              <div className="flex items-center border rounded p-2">
                <AiOutlinePhone className="text-gray-500 mr-2" />
                <input
                  id="mobile"
                  type="text"
                  name="mobile"
                  value={profileInfo.mobile}
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
              <label className="text-gray-600 font-semibold" htmlFor="gender">
                Username
              </label>
              <input
                id="username"
                type="text"
                name="username"
                value={profileInfo.username}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="text-gray-600 font-semibold" htmlFor="password">
                Current Password
              </label>
              <div className="flex items-center border rounded p-2">
                <AiOutlineLock className="text-gray-500 mr-2" />
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={profileInfo.password}
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
      <ToastContainer />
    </div>
  );
};

export default LibrarianProfile;
