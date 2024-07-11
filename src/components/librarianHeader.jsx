import React from 'react'
import Logo from '../assets/pcps_logo.jpg'
import Profile from '../assets/gojo.jpg'
import { IoIosArrowDown } from "react-icons/io";
import { VscBellDot } from "react-icons/vsc";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

const librarianHeader = () => {
    return (
        <div className="bg-white h-14 w-full mx-auto flex my-1 p-1 rounded-xl overflow-hidden justify-between items-center ">
            <img src={Logo} alt="logo" className='h-14 w-32 object-fill' />

            <div className='flex gap-2 items-center mr-2'>

                <IoIosHelpCircleOutline className="h-6 w-6 " />
                <VscBellDot className="h-6 w-6 hover:fill-red-600 m-2" />


                <div className='flex items-center border rounded-xl overflow-hidden gap-1'>
                    <FiSearch className="h-5 w-5 ml-1" />
                    <input type="text" placeholder='Search' className='p-1 w-64 border-hidden rounded-r-xl focus:outline-none' />

                </div>

                <div className="flex gap-1 border border-slate-600 rounded-r-full rounded-l-full h-10 items-center">

                    <img src={Profile} alt="profile" className='h-12 w-12 rounded-full p-2' />
                    <button className="mr-2"><IoIosArrowDown /></button>
                </div>

            </div>

        </div>
    )
}

export default librarianHeader;