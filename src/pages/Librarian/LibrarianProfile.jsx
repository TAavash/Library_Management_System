import React, { useState, useEffect } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineMail, AiOutlinePhone, AiOutlineLock } from "react-icons/ai";
import defaultProfile from "../../assets/User.jpg";
import NavNew from "../../components/NavNew";
import { ToastContainer, toast } from "react-toastify";
import { getMemberById, uploadProfilePic } from "../../utils/Api";
import { CgProfile } from "react-icons/cg";

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
    role_name: "",
  });
  const [profilePhoto, setProfilePhoto] = useState(defaultProfile);
  const [newProfilePhoto, setNewProfilePhoto] = useState(null); // Temporary state for new photo
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
          setProfilePhoto(data.profile_pic || defaultProfile); // Set the initial profile photo
        } else {
          console.error("No user data found");
          toast.error("No user data found. Please try again later.");
        }
      } catch (error) {
        console.error("An error occurred while fetching user data:", error);
        toast.error("An error occurred while fetching user data. Please try again later.");
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
    try {
      console.log("Saving data...", profileInfo);
      // Add your save logic here

      // Save the profile picture if a new one is uploaded
      if (newProfilePhoto) {
        await uploadProfilePic(user_id, newProfilePhoto);
        // Update profile photo state to reflect the new photo
        const updatedProfileData = await getMemberById(user_id);
        setProfilePhoto(updatedProfileData.data.profile_pic || defaultProfile);
      }

      setIsEditing(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("An error occurred while saving profile data:", error);
      toast.error("An error occurred while saving profile data. Please try again.");
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
        setNewProfilePhoto(file); // Store the file for uploading later
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePhoto = () => {
    setProfilePhoto(defaultProfile); // Reset to default profile photo
    setNewProfilePhoto(null); // Clear new photo
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 w-screen">
      <NavNew />
      <div className="flex-grow w-full bg-white shadow-lg rounded-lg mt-10 overflow-hidden flex flex-col p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">User Profile</h2>
        <div className="flex items-center mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white relative">
            {profilePhoto ? (
              <img
                className="w-full h-full object-cover"
                src={profilePhoto}
                alt="User Profile"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-9xl">
                <CgProfile />
              </div>
            )}
          </div>
          <div className="ml-6 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-gray-800">{`${profileInfo.first_name} ${profileInfo.last_name}`}</h3>
            <p className="text-gray-600">{`${profileInfo.role_name}`}</p>
          </div>
          {isEditing && (
            <div className="ml-auto flex flex-col items-center space-y-2">
              <input
                type="file"
                id="upload-photo"
                className="hidden"
                onChange={handlePhotoUpload}
              />
              <label
                htmlFor="upload-photo"
                className="w-40 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none text-sm font-semibold cursor-pointer"
              >
                Upload New Photo
              </label>
              <button
                className="w-40 px-4 py-2 border border-gray-500 text-gray-500 rounded-lg hover:bg-gray-200 focus:outline-none text-sm font-semibold"
                onClick={handleDeletePhoto}
              >
                Delete
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="text-gray-600 font-semibold" htmlFor="first_name">
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
              <label className="text-gray-600 font-semibold" htmlFor="last_name">
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
              <label className="text-gray-600 font-semibold" htmlFor="username">
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
