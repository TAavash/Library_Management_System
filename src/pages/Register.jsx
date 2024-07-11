import React, { useState } from 'react';
import RegImg from "../assets/library.jpg";
import RegImg2 from "../assets/library2.jpg";
import PcpsLogo from "../assets/pcpslogo.png";
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(`/`);
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
              <div className="text-2xl text-red-600  font-bold">LIBRARY</div>
            </div>
          </div>
          <form action="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col mt-3 gap-2">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  placeholder="Sudarshan"
                  className="border-2 pl-3 py-1 rounded-md w-full"
                  id="firstName"
                />
              </div>

              <div className="flex flex-col mt-3 gap-2">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  placeholder="Bam"
                  className="border-2 pl-3 py-1 rounded-md w-full"
                  id="lastName"
                />
              </div>

              <div className="flex flex-col mt-3 gap-2 col-span-1 md:col-span-2">
                <label htmlFor="dob">Date Of Birth</label>
                <input
                  type="date"
                  placeholder="email@gmail.com"
                  className="border-2 pl-3 py-1 rounded-md w-full"
                  id="email"
                />

              </div>

              <div className="flex flex-col mt-3 gap-2 col-span-1 md:col-span-2">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  className="w-full pl-3 py-1 text-base border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col mt-3 gap-2 ">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  placeholder="Kupandole"
                  className="border-2 pl-3 py-1 rounded-md w-full"
                  id="address"
                />
              </div>

              <div className="flex flex-col mt-3 gap-2">
                <label htmlFor="contact">Contact</label>
                <input
                  type="text"
                  placeholder="0000000000"
                  className="border-2 pl-3 py-1 rounded-md w-full"
                  id="contact"
                />
              </div>

              <div className="flex flex-col mt-3 gap-2 col-span-1 md:col-span-2">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="email@gmail.com"
                  className="border-2 pl-3 py-1 rounded-md w-full"
                  id="email"
                />
              </div>

              <div className="flex flex-col mt-3 gap-2 col-span-1 md:col-span-2">
                <label htmlFor="enrollment_date">Year Of Enrollment</label>
                <input
                  type="date"
                  placeholder="email@gmail.com"
                  className="border-2 pl-3 py-1 rounded-md w-full"
                  id="email"
                />
              </div>

              <div className="flex flex-col mt-3 gap-2">
                <label htmlFor="rollNumber">Roll Number</label>
                <input
                  type="text"
                  placeholder="0000000000"
                  className="border-2 pl-3 py-1 rounded-md w-full"
                  id="rollNumber"
                />
              </div>

              <div className="flex flex-col mt-3 gap-2">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  placeholder="@qwerty"
                  className="border-2 pl-3 py-1 rounded-md w-full"
                  id="username"
                />
              </div>

              <div className="flex flex-col mt-3 gap-2 col-span-1 md:col-span-2">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  placeholder="Password"
                  className="border-2 pl-3 py-1 rounded-md w-full"
                  id="password"
                />
              </div>

              <div className="col-span-1 md:col-span-2 flex justify-center gap-2">
                <button
                  type="submit"
                  className="border rounded-xl bg-black text-white mt-6 text-center h-10 w-1/2"
                >
                  Submit
                </button>
                <button
                  type=""
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
    </div>
  );
};

export default Register;
