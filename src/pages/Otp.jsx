import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import RegImg from "../assets/library.jpg";
import { FaLock } from "react-icons/fa6";

const Otp = () => {


    return (
        <div
            className="bg-cover min-h-screen bg-no-repeat bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${RegImg})` }}
        >
            <div className="bg-white/70 rounded-[30px] w-[80%] md:w-[60%] mx-auto flex flex-col gap-7 items-center justify-center font-semibold py-[50px] md:py-[90px] text-center">
                <div className="border-b-2 border-white/0 md:border-slate-400">
                    <div className="mb-[10px] w-content">
                        <div className="flex w-full justify-center ">
                            <FaLock className="text-8xl" />
                        </div>
                    </div>
                    <div className="text-sm md:text-l mb-[10px] mt-[15px]">
                        Enter OTP we sent you.
                    </div>
                    <form
                        className="flex flex-col items-center justify-center mt-[30px]"
                    >
                        <div className="flex flex-col gap-4">

                            <input
                                type="text"
                                name="otp"
                                className="text-center min-w-[200px] md:min-w-[300px] rounded-[10px] h-[50px]  "
                                placeholder="OTP"

                            />
                            <input
                                type="text"
                                name="n_password"
                                className="text-center min-w-[200px] md:min-w-[300px] rounded-[10px] h-[50px]  "
                                placeholder="New Password"

                            />
                            <input
                                type="text"
                                name="c_password"
                                className="text-center min-w-[200px] md:min-w-[300px] rounded-[10px] h-[50px]  "
                                placeholder="Confirm Password"

                            />



                            <button
                                className="w-full mx-auto bg-black text-white py-[6px] mb-3"

                            >
                                Save
                            </button>
                        </div>
                    </form>

                </div>
                <div className="flex gap-1">
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

export default Otp;