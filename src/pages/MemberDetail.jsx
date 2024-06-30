import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5";
import Profile from '../assets/gojo.jpg'
import FlipCard from '../components/FlipCard';
import BookCover from '../assets/bookCover.jpg'
import { FaStar } from "react-icons/fa6";

export const MemberDetail = () => {
    return (
        <div className='flex w-full p-3'>
            <div className="w-2/3  flex flex-col">
                <div className="flex justify-around">
                    <div className=" ">
                        <IoArrowBackCircle className="h-14 w-14 cursor-pointer  " />
                    </div>
                    <h2>Sudarshan Bam</h2>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-5 ml-48">
                    <div className="flex flex-col">
                        <label For="Number">Roll Number</label>
                        <label For="id">2148338</label>
                    </div>
                    <div className="flex flex-col">
                        <label For="Joined">Joined Date</label>
                        <label For="jDate">22 August, 2024</label>
                    </div>
                    <div className="flex flex-col">
                        <label For="Expiration">Expiration Date</label>
                        <label For="eDate">22 June, 2025</label>
                    </div>

                </div>
                <h3 className='mt-14 ml-36'>Books Taken</h3>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center p-4">
                <img src={Profile} alt="profile" className='h-48 w-48 rounded-xl p-1 object-cover' />
                <h5>Add Profile</h5>
                <div className="flex flex-col bg-customColor text-white p-2 mt-3 w-full rounded-xl justify-center items-center">
                    <h4 className='text-center'>Details</h4>
                    <div className="flex flex-col items-center p-4 text-center">
                        <img src={BookCover} alt="Book Cover" className="w-2/3 rounded-md" />
                        <div className="flex flex-col mt-2">
                            <label For="Book Name" className='text-lg font-bold'>Murakami</label>
                            <label For="author">Kafka</label>
                        </div>
                        <div className="flex mt-3">
                            <FaStar className="h-6 w-6 text-yellow-400  " />
                            <FaStar className="h-6 w-6 text-yellow-400  " />
                            <FaStar className="h-6 w-6 text-yellow-400  " />
                            <FaStar className="h-6 w-6 text-yellow-400  " />
                            <FaStar className="h-6 w-6 text-yellow-400  " />
                        </div>
                        <div className="flex flex-col mt-3">
                            <label For="Check Out date">Check Out Date</label>
                            <label For="coDate">2 June, 2025</label>
                        </div>
                        <div className="flex flex-col mt-3">
                            <label For="Overdue">Overdue</label>
                            <label For="oDay">1 day</label>
                        </div>
                        <div className="flex flex-col mt-3">
                            <label For="Renewal Date">Renewal Date</label>
                            <label For="rDate">No renewal</label>
                        </div>

                    </div>
                    <button className='border rounded-xl bg-black text-center h-10 w-1/2 '>Renew</button>
                    <button className='border rounded-xl bg-black text-center h-10 w-1/2 my-3'>Check In</button>
                </div>
            </div>

        </div>
    )
}
