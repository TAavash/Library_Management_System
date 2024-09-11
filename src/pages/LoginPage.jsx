import React, { useState } from "react";
import { FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import PcpsLogo from "../assets/pcpslogo.png";
import { useNavigate } from "react-router-dom";
import RegImg from "../assets/library.jpg";
import { ToastContainer, toast } from "react-toastify";
import { login } from "../utils/Api";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRegister = () => {
    navigate(`/register`);
  };

  const handleForgetPassword = () => {
    navigate(`/forgetPassword`);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await login(username, password);
      console.log(response);
      if (response) {
        if (response.data.role_name === "Student") {
          toast.success("Login successful!");
          setTimeout(() => navigate(`/user/home`), 1000);
        } else if (response.data.role_name === "Faculty Member") {
          toast.success("Login successful!");
          setTimeout(() => navigate(`/user/home`), 1000);
        } else if (response.data.role_name === "Program Coordinator") {
          toast.success("Login successful!");
          setTimeout(() => navigate(`/librarian-dashboard`), 1000);
        } else if (response.data.role_name === "Library Assistant") {
          toast.success("Login successful!");
          setTimeout(() => navigate(`/librarian-dashboard`), 1000);
        } else if (response.data.role_name === "Librarian") {
          toast.success("Login successful!");
          setTimeout(() => navigate(`/librarian-dashboard`), 1000);
        }
      } else {
        toast.error(
          response.data.message ||
            "Login failed. Please check your credentials."
        );
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
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
              <div className="text-2xl text-red-600 font-bold">LIBRARY</div>
            </div>
          </div>
          <div className="text-sm md:text-l mb-[10px] mt-[15px]">
            Log in to get the Books that interest you.
          </div>
          <form
            className="flex flex-col items-center justify-center mt-[30px]"
            onSubmit={handleLogin}
          >
            <div className="flex flex-col gap-5">
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  className="peer min-w-[200px] md:min-w-[300px] rounded-[10px] h-[50px] pl-[50px] md:pl-[70px]"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                <div className="absolute top-1/2 text-xl md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                  <FaUserAlt />
                </div>
              </div>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  className="peer min-w-[200px] md:min-w-[300px] rounded-[10px] h-[50px] pl-[50px] md:pl-[70px]"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button
                  type="button"
                  className="absolute right-3"
                  onClick={togglePasswordVisibility}
                  aria-label={
                    passwordVisible ? "Hide password" : "Show password"
                  }
                >
                  {passwordVisible ? (
                    <FaEyeSlash className="fill-gray-500" />
                  ) : (
                    <FaEye className="fill-gray-500" />
                  )}
                </button>
                <div className="absolute top-1/2 text-xl md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                  <RiLockPasswordFill />
                </div>
              </div>
              <button
                type="submit"
                className="w-full mx-auto bg-black text-white py-[6px] -mt-[4px]"
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </button>
            </div>
          </form>
          <div
            className="mt-[5px] text-end md:mb-[20px] text-[14px] underline cursor-pointer"
            onClick={handleForgetPassword}
          >
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
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
