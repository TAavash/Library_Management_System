import React from 'react'
import { FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function UserAccountRequest() {

    const navigate = useNavigate();

    const handleAcceptClick = () => {
        navigate('/MemberRegistration');
    };

    const AccountRequests = [
        {
            Name: "Sudarshan Bam",
            email: "sudarshanbam2021@gmail.com",
            status: "Account Request",
        },
        {
            Name: "Sudarshan Bam",
            email: "sudarshanbam2021@gmail.com",
            status: "Account Request",
        },
        {
            Name: "Sudarshan Bam",
            email: "sudarshanbam2021@gmail.com",
            status: "Account Request",
        },
        {
            Name: "Sudarshan Bam",
            email: "sudarshanbam2021@gmail.com",
            status: "Account Request",
        },
        {
            Name: "Sudarshan Bam",
            email: "sudarshanbam2021@gmail.com",
            status: "Account Request",
        },
        {
            Name: "Sudarshan Bam",
            email: "sudarshanbam2021@gmail.com",
            status: "Account Request",
        },
        {
            Name: "Sudarshan Bam",
            email: "sudarshanbam2021@gmail.com",
            status: "Account Request",
        },
    ];

    return (
        <>
            <div className="w-full h-full rounded-2xl">
                <div className="w-[100%] h-[20%] bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
                    <div className="w-full h-full flex justify-evenly p-[10px] gap-[5px]">
                        <div className="w-[50%] h-full flex-col">
                            <div className="w-full h-[70%] text-start text-3xl">
                                New Account Request
                            </div>
                            <div className="w-full h-[30%] text-start text-[-2xl] text-[#525252]">
                                Manage all the account request from users.
                            </div>
                        </div>
                        <div className="w-[180px] h-full flex p-[2px] justify-evenly">
                            <div className="w-full h-[30px] rounded-2xl bg-white border flex items-center p-[5px]">
                                <div className="w-[20%]">
                                    <FaBell className="w-[20px] h-[20px] justify-end fill-[#A3A3A3]" />
                                </div>
                                <div className="text-[15px] w-[80%] text-[#525252]">
                                    2 Notifications
                                </div>
                            </div>
                        </div>
                        <div className="w-[20%] h-full flex p-[2px]">
                            <div className="w-[40px] h-[30px] rounded-2xl bg-white border flex items-center justify-start p-[10px]">
                                <div className="w-[20%]">
                                    <IoSettingsSharp className="w-[20px] h-[20px] fill-[#A3A3A3]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[80%] overflow-scroll'>

                    {AccountRequests.map((item, index) => (
                        <div className="flex border-2 mx-12 my-9 justify-evenly items-center">
                            <div className="flex items-center w-2/4 p-4">
                                <div>
                                    <div className="text-lg font-medium text-gray-900">
                                        {item.Name}
                                    </div>
                                    <div className="text-sm text-gray-500">{item.email}</div>
                                    <div className="text-sm text-gray-500">{item.status}</div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mx-7 my-9">
                                    <button className="my-1 border rounded-lg py-2 px-8 md:px-12 bg-black text-white"
                                    onClick={handleAcceptClick}>
                                        Accept
                                    </button>
                                </div>
                                <div className="mx-7 my-9">
                                    <button className="my-1 border rounded-lg py-2 px-8 md:px-12 bg-black text-white">
                                        Reject
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}
