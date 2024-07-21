import React, { useState } from "react";
import RegImg from "../assets/library.jpg";
import PcpsLogo from "../assets/pcpslogo.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDOB] = useState("");
  const [gender, setGender] = useState("Male");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(`/`);
  };

  const validateFields = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = "First name is required.";
    if (!lastName) newErrors.lastName = "Last name is required.";
    if (!dob) newErrors.dob = "Date of birth is required.";
    if (!address) newErrors.address = "Address is required.";
    if (!contact) newErrors.contact = "Contact number is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!username) newErrors.username = "Username is required.";
    if (!password) newErrors.password = "Password is required.";
    if (email && !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid.";
    if (contact && !/^\d{10}$/.test(contact)) newErrors.contact = "Contact number must be 10 digits.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateFields()) return; // Only proceed if validation passes

    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          first_name: firstName,
          last_name: lastName,
          dob: dob,
          gender: gender,
          address: address,
          email: email,
          mobile: contact,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Register successful!");
        setTimeout(() => navigate(`/`), 2000); // Redirect after 2 seconds
      } else {
        toast.error(data.message || "Register failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("An error occurred:", error); // Log the error for debugging
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <div
        className="bg-cover min-h-screen bg-no-repeat bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${RegImg})` }}
      >
        <div className="bg-white/70 rounded-[30px] w-[80%] md:w-[60%] my-[10px] md:my-4 mx-auto flex flex-col gap-6 items-center justify-center font-semibold py-[10px] md:py-[50px] text-center">
          <div className="mb-[2px] w-content">
            <div className="text-xl md:text-2xl">Register to</div>
            <br />
            <div className="flex gap-3 items-center justify-center -mt-[30px]">
              <img src={PcpsLogo} width={150} alt="" />
              <div className="text-2xl text-red-600 font-bold">LIBRARY</div>
            </div>
          </div>
          <form action="" onSubmit={handleRegister}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col mt-3 gap-2">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  placeholder="Sudarshan"
                  className={`border-2 pl-3 py-1 rounded-md w-full ${errors.firstName ? "border-red-500" : ""}`}
                  id="firstName"
                  name="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>

              <div className="flex flex-col mt-3 gap-2">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  placeholder="Bam"
                  className={`border-2 pl-3 py-1 rounded-md w-full ${errors.lastName ? "border-red-500" : ""}`}
                  id="lastName"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>

              <div className="flex flex-col mt-3 gap-2 col-span-1 md:col-span-2">
                <label htmlFor="dob">Date Of Birth</label>
                <input
                  type="date"
                  placeholder="email@gmail.com"
                  className={`border-2 pl-3 py-1 rounded-md w-full ${errors.dob ? "border-red-500" : ""}`}
                  id="dob"
                  name="dob"
                  onChange={(e) => setDOB(e.target.value)}
                  value={dob}
                />
                {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
              </div>

              <div className="flex flex-col mt-3 gap-2 col-span-1 md:col-span-2">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                  className={`w-full pl-3 py-1 text-base border-2 rounded-md ${errors.gender ? "border-red-500" : ""}`}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col mt-3 gap-2">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  placeholder="Kupandole"
                  className={`border-2 pl-3 py-1 rounded-md w-full ${errors.address ? "border-red-500" : ""}`}
                  id="address"
                  name="address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />
                {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
              </div>

              <div className="flex flex-col mt-3 gap-2">
                <label htmlFor="contact">Contact</label>
                <input
                  type="text"
                  placeholder="0000000000"
                  className={`border-2 pl-3 py-1 rounded-md w-full ${errors.contact ? "border-red-500" : ""}`}
                  id="contact"
                  name="contact"
                  onChange={(e) => setContact(e.target.value)}
                  value={contact}
                />
                {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
              </div>

              <div className="flex flex-col mt-3 gap-2 col-span-1 md:col-span-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="email@gmail.com"
                  className={`border-2 pl-3 py-1 rounded-md w-full ${errors.email ? "border-red-500" : ""}`}
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="flex flex-col mt-3 gap-2 col-span-1 md:col-span-2">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  placeholder="@qwerty"
                  className={`border-2 pl-3 py-1 rounded-md w-full ${errors.username ? "border-red-500" : ""}`}
                  id="username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
              </div>

              <div className="flex flex-col mt-3 gap-2 col-span-1 md:col-span-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className={`border-2 pl-3 py-1 rounded-md w-full ${errors.password ? "border-red-500" : ""}`}
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>

              <div className="col-span-1 md:col-span-2 flex justify-center gap-2">
                <button
                  type="submit"
                  className="border rounded-xl bg-black text-white mt-6 text-center h-10 w-1/2"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="border rounded-xl bg-black text-white mt-6 text-center h-10 w-1/2"
                  onClick={handleLogin}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer /> {/* Add this line to display toasts */}
    </div>
  );
};

export default Register;
