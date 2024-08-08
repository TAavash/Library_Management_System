import React, { useEffect, useState } from "react";
import Profile from "../../assets/User.jpg"; // Default profile image
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axiosInstance from "../../utils/axois";

import { memberRegister, getUserById, updateStatus } from "../../utils/Api"; // Import the new function

export default function MemberRegistration() {
  const [roleList, setRoleList] = useState([]);
  const { user_idS } = useParams();
  const [user_id, setuser_idS] = useState();

  const [profile, setProfile] = useState({
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

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const [profileImage, setProfileImage] = useState(Profile);
  const navigate = useNavigate();

  const handleBackIconClick = () => {
    navigate("/LibraryDash");
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };


  // const handleImageUpload = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append('profile_pic', event.target.files[0]);

  //   try {
  //     console.log('Attempting to upload image...');
  //     const response = await axiosInstance.post('/member/profile_pic', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     });
  //     console.log('Response:', response);
  //     if (response.status === 200) {
  //       console.log('Image uploaded successfully');
  //       // Handle success case
  //     } else {
  //       console.log('Failed to upload image, status:', response.status);
  //       // Handle other status codes
  //     }
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //     // Handle error
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/role/list", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (response.ok) {
          setRoleList(data.roles);
        } else {
          console.error("Error:", data.message);
          toast.error("Failed to fetch roles. Please try again later.");
        }
      } catch (error) {
        console.error("An error occurred:", error);
        toast.error(
          "An error occurred while fetching roles. Please try again later."
        );
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserById(user_idS);
        console.log(userData[0]);
        if (userData) {
          setProfile({
            username: userData[0].username || "",
            password: userData[0].password || "", // You may want to handle passwords differently
            first_name: userData[0].first_name || "",
            last_name: userData[0].last_name || "",
            dob: userData[0].dob || "",
            gender: userData[0].gender || "",
            address: userData[0].address || "",
            email: userData[0].email || "",
            mobile: userData[0].mobile || "",
            role_id: userData[0].role_id || "",
          });
          setuser_idS(userData[0].user_idS);
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

    if (user_idS) {
      fetchUserData();
    }
  }, [user_idS]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let register = await memberRegister(
        profile.username,
        profile.password,
        profile.first_name,
        profile.last_name,
        profile.dob,
        profile.gender,
        profile.address,
        profile.email,
        profile.mobile,
        profile.role_id,
        user_id
      );

      if (register) {
        toast.success("Register successful!");
        await updateStatus(user_idS);
        setTimeout(() => navigate("/LibraryRequestPage"), 2000); // Redirect after 2 seconds
      } else {
        toast.error("Register failed. Username or email already exists.");
      }
    } catch (error) {
      console.error("An error occurred:", error); // Log the error for debugging
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex w-full p-3 gap-2">
      <div className="w-2/3 flex flex-col">
        <div className="flex justify-around">
          <div>
            <IoArrowBackCircle
              className="h-14 w-14 cursor-pointer"
              onClick={handleBackIconClick}
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold">Create Membership</h2>
            <p className="text-slate-500">Registration Form</p>
          </div>
        </div>
        <div className="ml-36 mt-10">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col mt-3 gap-2">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                value={profile.first_name}
                onChange={handleInputChange}
                placeholder="Sudarshan"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                value={profile.last_name}
                onChange={handleInputChange}
                placeholder="Bam"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label>Date Of Birth</label>
              <input
                type="date"
                name="dob"
                value={profile.dob}
                onChange={handleInputChange}
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label>Gender</label>
              <select
                name="gender"
                className="w-2/3 pl-3 py-1 text-base border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                value={profile.gender}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleInputChange}
                placeholder="Kupandole"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label>Contact</label>
              <input
                type="text"
                name="mobile"
                value={profile.mobile}
                onChange={handleInputChange}
                placeholder="0000000000"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                placeholder="email@patancollege.edu.np"
                pattern="[a-zA-Z0-9._%+-]+@patancollege\.edu\.np"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={profile.username}
                onChange={handleInputChange}
                placeholder="@qwerty"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={profile.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="border-2 w-2/3 pl-3 py-1 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <label>Role</label>
              <select
                name="role_id"
                value={profile.role_id}
                onChange={handleInputChange}
                className="w-2/3 pl-3 py-1 text-base border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                required
              >
                <option value="" disabled>
                  Select role
                </option>
                {roleList.map((role) => (
                  <option key={role.role_idS} value={role.role_idS}>
                    {role.role_name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="border rounded-xl bg-black text-white mt-6 text-center h-10 w-2/3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="relative w-1/3 flex flex-col items-center p-3 mt-10">
        <div className="fixed text-center">
          <img
            src={profileImage}
            alt="profile"
            className="w-52 h-52 rounded-xl p-1 object-cover"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-2"
          />
          <h5 className="cursor-pointer mt-2">Upload Profile</h5>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
