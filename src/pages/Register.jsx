import React from "react";
import { FaHome, FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import RegImg from "../assets/registerImage.jpg";

const Register = () => {
  return (
    <div>
      <div
        className="bg-cover min-h-screen bg-no-repeat bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${RegImg})` }}
      >
        <div className="bg-white/80 rounded-[30px] w-[80%] md:w-[60%] my-[5px] md:my-0 mx-auto flex flex-col gap-7 items-center justify-center font-semibold py-[10px] md:py-[90px] text-center">
          <div className="text-xl md:text-2xl">
            <span className="font-bold text-red-600">Register</span> new account
          </div>
          <form action="">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row gap-3 md:-gap-[10px] xl:gap-14">
                <div className="relative w-fit mx-auto flex items-center">
                  <input
                    type="text"
                    className=" max-w-[200px] xl:max-w-[300px] rounded-[10px] h-[50px] pl-[50px] md:pl-[70px]"
                    placeholder="Full name"
                  />
                  <div className="absolute top-1/2 text-xl md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                    <IoIosPerson />
                  </div>
                </div>
                <div className="relative w-fit mx-auto flex items-center">
                  <input
                    type="text"
                    className=" max-w-[200px] xl:max-w-[300px] rounded-[10px] h-[50px] pl-[50px] md:pl-[70px]"
                    placeholder="Address"
                  />
                  <div className="absolute top-1/2 text-xl md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                    <FaHome />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:-gap-[10px] xl:gap-14">
                <div className="relative w-fit mx-auto flex items-center">
                  <input
                    type="text"
                    className="max-w-[200px] xl:max-w-[300px] rounded-[10px] h-[50px] pl-[50px] md:pl-[70px]"
                    placeholder="Phone Number"
                  />
                  <div className="absolute top-1/2 text-l md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                    <FaPhoneAlt />
                  </div>
                </div>
                <div className="relative w-fit mx-auto flex items-center">
                  <input
                    type="date"
                    className="max-w-[200px] xl:min-w-[265px] rounded-[10px] h-[50px] pl-[50px] md:pl-[70px]"
                    placeholder="Date of birth"
                  />
                  <div className="absolute top-1/2 text-xl md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                    <SlCalender />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:-gap-[10px] xl:gap-14">
                <div className="relative w-fit mx-auto flex items-center">
                  <input
                    type="email"
                    className="max-w-[200px] xl:max-w-[300px] rounded-[10px] h-[50px] pl-[50px] md:pl-[70px]"
                    placeholder="Email"
                  />
                  <div className="absolute top-1/2 text-xl md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                    <FaUserAlt />
                  </div>
                </div>
                <div className="relative w-fit mx-auto flex items-center">
                  <input
                    type="email"
                    className="max-w-[200px] xl:max-w-[300px] rounded-[10px] h-[50px] pl-[50px] md:pl-[70px]"
                    placeholder="Email"
                  />
                  <div className="absolute top-1/2 text-xl md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                    <FaUserAlt />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:-gap-[10px] xl:gap-14">
                <div className="relative w-fit mx-auto flex items-center">
                  <input
                    type="email"
                    className="max-w-[200px] xl:max-w-[300px] rounded-[10px] h-[50px] pl-[50px] md:pl-[70px]"
                    placeholder="Email"
                  />
                  <div className="absolute top-1/2 text-xl md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                    <FaUserAlt />
                  </div>
                </div>
                <div className="relative w-fit mx-auto flex items-center">
                  <input
                    type="email"
                    className="max-w-[200px] xl:max-w-[300px] rounded-[10px] h-[50px] pl-[50px] md:pl-[70px]"
                    placeholder="Email"
                  />
                  <div className="absolute top-1/2 text-xl md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                    <FaUserAlt />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:-gap-[10px] xl:gap-14">
                <div className="relative w-fit mx-auto flex items-center">
                  <input
                    type="email"
                    className="max-w-[200px] xl:max-w-[300px] rounded-[10px] h-[50px] pl-[50px] md:pl-[70px]"
                    placeholder="Email"
                  />
                  <div className="absolute top-1/2 text-xl md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                    <FaUserAlt />
                  </div>
                </div>
                <div className="relative w-fit mx-auto flex items-center">
                  <input
                    type="email"
                    className="max-w-[200px] xl:max-w-[300px] rounded-[10px] h-[50px] pl-[50px] md:pl-[70px]"
                    placeholder="Email"
                  />
                  <div className="absolute top-1/2 text-xl md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                    <FaUserAlt />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
