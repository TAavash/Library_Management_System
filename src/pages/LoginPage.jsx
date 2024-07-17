import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import PcpsLogo from "../assets/pcpslogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import RegImg from "../assets/library.jpg";

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate(`/register`);
  };
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email) => {
    if (email == null) {
      return false;
    } else {
      const emailRegex = /^[^\s@]+@patancollege\.edu\.np$/;
      return emailRegex.test(email);
    }
  };
  const handleLibrarianDash = () => {
    navigate(`/librarian-dashboard`);
  };

  const handleEmailChange = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    // setIsValidEmail(validateEmail(currentEmail));
  };

  const handleLogin = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: email, password: password }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      navigate(`/librarian-dashboard`);
    } else {
      navigate(`/`);
    }
  };

  return (
    <div
      className="bg-cover min-h-screen bg-no-repeat bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${RegImg})` }}
    >
      <div className="bg-white/70 rounded-[30px] w-[80%] md:w-[60%] mx-auto flex flex-col gap-7 items-center justify-center font-semibold py-[50px] md:py-[90px] text-center">
        <div className="border-b-2 border-white/0 md:border-slate-400">
          <div className="mb-[10px] w-content">
            <div className="text-xl md:text-2xl">Welcome to</div>
            <br />
            <div className="flex gap-3 items-center justify-center -mt-[30px]">
              <img src={PcpsLogo} width={150} alt="" />
              <div className="text-2xl text-red-600  font-bold">LIBRARY</div>
            </div>
          </div>
          <div className="text-sm md:text-l mb-[10px] mt-[15px]">
            Log in to get the Books that interests you.
          </div>
          <form
            action=""
            className="flex flex-col items-center justify-center mt-[30px]"
          >
            <div className="flex flex-col gap-5">
              <div className="relative">
                <input
                  type="email"
                  className="peer min-w-[200px] md:min-w-[300px] rounded-[10px] h-[50px] pl-[50px] md:pl-[70px]"
                  placeholder="Email"
                  onChange={handleEmailChange}
                />
                <div className="absolute top-1/2 text-xl md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                  <FaUserAlt />
                </div>
              </div>
              {!isValidEmail && (
                <p className="text-[11px] text-start text-red-600 -mt-[18px] mb-0">
                  Please provide a valid email address
                </p>
              )}
              <div className="relative">
                <input
                  type="password"
                  className={`peer min-w-[200px] md:min-w-[300px] rounded-[10px] h-[50px] pl-[50px] md:pl-[70px] ${
                    !isValidEmail ? "-mt-[10px]" : ""
                  }`}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                />
                <div className="absolute top-1/2 text-xl md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                  <RiLockPasswordFill />
                </div>
              </div>

              <div
                onClick={handleLogin}
                className="w-full mx-auto bg-black text-white py-[6px] -mt-[4px]"
              >
                Sign In
              </div>
            </div>
          </form>
          <div className="mt-[5px] text-end md:mb-[20px] text-[14px] underline cursor-pointer">
            Forgot Password ?
          </div>
        </div>

        <div className="flex gap-1">
          Tap to{" "}
          <div
            onClick={handleRegister}
            className="text-red-600 font-bold italic cursor-pointer"
          >
            create an account
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
