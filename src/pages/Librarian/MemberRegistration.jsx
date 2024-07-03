import React, { useState } from 'react';
import Profile from '../../assets/gojo.jpg'
import { IoArrowBackCircle } from "react-icons/io5";
import 'flatpickr/dist/themes/material_blue.css';
import Flatpickr from 'react-flatpickr';
import { FiCalendar, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function MemberRegistration() {

    const navigate = useNavigate();

    const handleBackIconClick = () => {
        navigate('/');
    };

    const [cDate, setDate] = useState(new Date());
    const [eDate, setEDate] = useState(new Date());
    return (
        <div className='flex w-full p-3 gap-2'>
            <div className="w-2/3  flex flex-col">
                <div className="flex justify-around">
                    <div className=" ">
                        <IoArrowBackCircle className="h-14 w-14 cursor-pointer  "
                            onClick={handleBackIconClick} />
                    </div>
                    <div className="flex flex-col">
                        <h2>Create Membership</h2>
                        <p className='text-slate-500'>Registration Form</p>
                    </div>
                </div>
                <div className='ml-36 mt-10'>

                    <form action="">

                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">First Name</label>
                            <input type="text" placeholder='Sudarshan' className='border-2 w-2/3 pl-3 py-1 rounded-md' />
                        </div>
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Last Name</label>
                            <input type="text" placeholder='Bam' className='border-2 w-2/3 pl-3 py-1 rounded-md' />
                        </div>
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Date Of Birth</label>
                            <div className=' relative w-2/3 pl-3 py-1 text-base border-2 focus:outline-none rounded-md'>
                                <Flatpickr
                                    id="date"
                                    className=" w-full cursor-pointer border-gray-300 focus:outline-none"
                                    options={{ dateFormat: 'F j, Y' }}
                                    value={cDate}
                                    onChange={([date]) => setDate(date)}
                                    placeholder="Select Date"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <FiCalendar className="h-5 w-5 text-gray-400" />
                                </div>

                            </div>


                        </div>
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Gender</label>
                            <select id="" class=" w-2/3 pl-3 py-1 text-base border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md">
                                <option value="">Male</option>
                                <option value="">Female</option>
                                <option value="">Other</option>
                            </select>
                        </div>

                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Address</label>
                            <input type="text" placeholder='Kupandole' className='border-2 w-2/3 pl-3 py-1 rounded-md' />
                        </div>
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Contact</label>
                            <input type="text" placeholder='0000000000' className='border-2 w-2/3 pl-3 py-1 rounded-md' />
                        </div>
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='email@gmail.com' className='border-2 w-2/3 pl-3 py-1 rounded-md' />
                        </div>

                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Year Of Enrollment</label>
                            <div className=' relative w-2/3 pl-3 py-1 text-base border-2 focus:outline-none rounded-md'>
                                <Flatpickr
                                    id="enrollment_date"
                                    className=" w-full cursor-pointer border-gray-300 focus:outline-none"
                                    options={{ dateFormat: 'F j, Y' }}
                                    value={eDate}
                                    onChange={([date]) => setEDate(date)}
                                    placeholder="Select Date"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <FiCalendar className="h-5 w-5 text-gray-400" />
                                </div>

                            </div>


                        </div>
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Roll Number</label>
                            <input type="text" placeholder='0000000000' className='border-2 w-2/3 pl-3 py-1 rounded-md' />

                        </div>
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Username</label>
                            <input type="text" placeholder='@qwerty' className='border-2 w-2/3 pl-3 py-1 rounded-md' />
                        </div>
                        <div className="flex flex-col mt-3 gap-2">
                            <label htmlFor="">Password</label>
                            <input type="text" placeholder='Password' className='border-2 w-2/3 pl-3 py-1 rounded-md' />
                        </div>
                        <button type="submit" className='border rounded-xl bg-black text-white mt-6 text-center h-10 w-1/2'>

                            Submit
                        </button>


                    </form>
                </div>


            </div>
            <div className=" relative w-1/3 flex flex-col items-center p-3 mt-10">
                <div className='fixed text-center'>

                    <img src={Profile} alt="profile" className=' w-52 rounded-xl p-1 object-cover' />
                    <h5 className='cursor-pointer mt-2'>Add Profile</h5>

                </div>

            </div>

        </div>
    )
}
