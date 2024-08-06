import React, { useState, useEffect, useRef } from 'react';
import { IoArrowBackCircle } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useLocation } from 'react-router-dom';
import { getMemberById, uploadProfilePic } from "../../utils/Api";
import ProfileImage from '../../assets/gojo.jpg';

const MemberDetail = () => {
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
    profile_pic: "",
    role_name: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(''); // 'pending', 'success', or 'error'
  
  const fileInputRef = useRef(null); // Ref to the file input
  const navigate = useNavigate(); // Initialize navigate

  const location = useLocation();
  const member_id = location.state?.member_id;

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const memberData = await getMemberById(member_id);
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
            profile_pic: data.profile_pic || "",
            role_name: data.role_name || "",
            status: data.status || "",
          });
        } else {
          console.error("No user data found");
          toast.error("No user data found. Please try again later.");
        }
      } catch (error) {
        console.error("An error occurred while fetching user data:", error);
        toast.error("An error occurred while fetching user data. Please try again later.");
      }
    };

    if (member_id) {
      fetchMemberData();
    }
  }, [member_id]);

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
      // Add save logic here
    };

    await saveData();
    setIsEditing(false);
  };

  const handleFileChange = (e) => {
    console.log("File selected:", e.target.files[0]);
    setSelectedFile(e.target.files[0]);
    setUploadStatus('pending');
  };

  const handleUploadClick = async () => {
    if (!selectedFile) {
      toast.error("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("profile_pic", selectedFile);

    try {
      const response = await uploadProfilePic(profileInfo.member_id, formData);
      console.log(response);

      // Assuming the response contains the updated profile picture URL
      setProfileInfo({
        ...profileInfo,
        profile_pic: URL.createObjectURL(selectedFile),
      });
      setUploadStatus('success');
      toast.success("Profile picture updated successfully");
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      setUploadStatus('error');
      toast.error("Error uploading profile picture");
    }
  };

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click(); // Trigger file input click
  };

  return (
    <div className='bg-primary w-full h-full text-white'>
      <ToastContainer />
      <div className='w-full h-16 bg-secondary flex items-center justify-center text-3xl text-black font-semibold p-4 relative'>
        Member Details
        <button className='absolute left-4 text-4xl' onClick={handleBackClick}>
          <IoArrowBackCircle />
        </button>
      </div>
      <div className='flex w-full p-4'>
        <div className='bg-white text-black p-4 rounded-lg shadow-lg w-1/4'>
          <div className='flex flex-col items-center'>
            <div className='relative'>
              <img src={profileInfo.profile_pic || ProfileImage} alt="Profile" className='w-40 h-40 object-cover rounded-full shadow-md' />
              <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full ${uploadStatus === 'success' ? 'bg-green-500' : uploadStatus === 'error' ? 'bg-red-500' : 'bg-gray-500'}`}></div>
              {isEditing && (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className='hidden'
                    ref={fileInputRef}
                  />
                  <button
                    onClick={handleUploadButtonClick}
                    className="absolute bottom-0 right-0 bg-gray-200 p-2 rounded-full cursor-pointer"
                  >
                    <i className="fas fa-camera"></i>
                  </button>
                </>
              )}
            </div>
            {isEditing && (
              <button onClick={handleUploadClick} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
            )}
            <h2 className='text-xl font-semibold mt-2'>{profileInfo.first_name} {profileInfo.last_name}</h2>
            <p className='text-gray-500 p-1'>{profileInfo.email}</p>
            <div className='flex items-center w-auto bg-green-500 rounded-md p-1'>{profileInfo.status}</div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <div className="flex flex-col mt-3 gap-2 w-full">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="first_name"
                value={profileInfo.first_name}
                onChange={handleInputChange}
                className='border-2 pl-3 py-1 rounded-md text-black'
                readOnly={!isEditing}
              />
            </div>
            <div className="flex flex-col mt-3 gap-2 w-full">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="last_name"
                value={profileInfo.last_name}
                onChange={handleInputChange}
                className='border-2 pl-3 py-1 rounded-md text-black'
                readOnly={!isEditing}
              />
            </div>
            <div className="flex flex-col mt-3 gap-2 w-full">
              <label htmlFor="dob">Date Of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={profileInfo.dob}
                onChange={handleInputChange}
                className='border-2 pl-3 py-1 rounded-md text-black'
                readOnly={!isEditing}
              />
            </div>
            <div className="flex flex-col mt-3 gap-2 w-full">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={profileInfo.address}
                onChange={handleInputChange}
                className='border-2 pl-3 py-1 rounded-md text-black'
                readOnly={!isEditing}
              />
            </div>
            <div className="flex flex-col mt-3 gap-2 w-full">
              <label htmlFor="contact">Contact</label>
              <input
                type="text"
                id="contact"
                name="mobile"
                value={profileInfo.mobile}
                onChange={handleInputChange}
                className='border-2 pl-3 py-1 rounded-md text-black'
                readOnly={!isEditing}
              />
            </div>
            <div className="flex flex-col mt-3 gap-2 w-full">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={profileInfo.email}
                onChange={handleInputChange}
                className='border-2 pl-3 py-1 rounded-md text-black'
                readOnly={!isEditing}
              />
            </div>
            <div className="flex flex-col mt-3 gap-2 w-full">
              <label htmlFor="status">Status</label>
              {isEditing ? (
                <select
                  id="status"
                  name="status"
                  value={profileInfo.status}
                  onChange={handleInputChange}
                  className='pl-3 py-1 text-black border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md'
                >
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              ) : (
                <input
                  type="text"
                  id="status"
                  name="status"
                  value={profileInfo.status}
                  className='border-2 pl-3 py-1 rounded-md text-black'
                  readOnly
                />
              )}
            </div>
            <div className="flex flex-col mt-3 gap-2 w-full">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={profileInfo.username}
                onChange={handleInputChange}
                className='border-2 pl-3 py-1 rounded-md text-black'
                readOnly={!isEditing}
              />
            </div>
            <div className="flex flex-col mt-3 gap-2 w-full">
              <label htmlFor="role">Role</label>
              {isEditing ? (
                <select
                  id="role"
                  name="role_name"
                  value={profileInfo.role_name}
                  onChange={handleInputChange}
                  className='pl-3 py-1 text-black border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md'
                >
                  <option value="">Select Role</option>
                  <option value="Student">Student</option>
                  <option value="Faculty Members">Faculty Members</option>
                  <option value="Library Assistant">Library Assistant</option>
                  <option value="Program Coordinator">Program Coordinator</option>
                </select>
              ) : (
                <input
                  type="text"
                  id="role"
                  name="role_name"
                  value={profileInfo.role_name}
                  className='border-2 pl-3 py-1 rounded-md text-black'
                  readOnly
                />
              )}
            </div>
            <div className="flex w-full gap-4">
              <button className="border rounded-xl mt-3 bg-black text-white text-center h-10 w-1/2" onClick={handleEditClick}>Edit</button>
              <button className="border rounded-xl mt-3 bg-black text-white text-center h-10 w-1/2" onClick={handleSaveClick}>Save</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 p-4">
          <div className="flex flex-col w-full p-4 bg-white text-black rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Book Information</h3>
            {/* Add your book information display logic here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;
