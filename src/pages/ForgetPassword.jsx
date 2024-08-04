import React from "react";
import { MdPhoneIphone } from "react-icons/md";
import RegImg from "../assets/library.jpg";
import { FaLock } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {

    const navigate = useNavigate();

    const handleOtp = () => {
        navigate(`/otp`);
    }
    const handleRegister = () => {
        navigate(`/register`);
      };

    return (
        <div
            className="bg-cover min-h-screen bg-no-repeat bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${RegImg})` }}
        >
            <div className="bg-white/70 rounded-[30px] w-[80%] md:w-[60%] mx-auto flex flex-col gap-7 items-center justify-center font-semibold py-[50px] md:py-[90px] text-center">
                <div className="border-b-2 border-white/0 md:border-slate-400">
                    <div className="mb-[10px] w-content">
                        <div className="flex w-full justify-center">
                            <FaLock className="text-8xl" />
                        </div>

                        <div className="flex gap-3 items-center justify-center mt-[25px]">

                            <div className="text-3xl">Trouble Logging In?</div>
                        </div>
                    </div>
                    <div className="text-sm md:text-l mb-[10px] mt-[15px]">
                        Enter your mobile number and we
                        will send you otp to get back into your account.
                    </div>
                    <form
                        className="flex flex-col items-center justify-center mt-[30px]"

                    >
                        <div className="flex flex-col gap-4">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    name="Contact"
                                    className="peer min-w-[200px] md:min-w-[300px] rounded-[10px] h-[50px] pl-[50px] md:pl-[70px]"
                                    placeholder="Phone Number"

                                />
                                <div className="absolute top-1/2 text-xl md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                                <MdPhoneIphone />
                                </div>
                            </div>

                            <button
                                className="w-full mx-auto bg-black text-white py-[6px] mb-3"
                                onClick={ handleOtp}
                            >
                                Reset Password
                            </button>
                        </div>
                    </form>

                </div>
                <div className="flex gap-1" onClick={handleRegister}>
                    Tap to{" "}
                    <div

                        className="text-red-600 font-bold italic cursor-pointer"
                    >
                        create an account
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;