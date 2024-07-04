import React from 'react'
import { CiHome } from "react-icons/ci";
import { IoBookOutline, IoBookmarkOutline, IoDocumentOutline } from "react-icons/io5";
import { MdAddTask } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate()
  return (
    <div className='h-screen flex flex-col items-center bg-white rounded-2xl m-5 p-5'>
      <div><img src='/logo.png' className='w-[200px] mb-8' alt='Logo'/></div>
      <div className='flex flex-col items-start space-y-6'>
        <div className='flex items-center text-2xl space-x-2 cursor-pointer'
        onClick={()=>{
            navigate('/')
        }}>
          <CiHome />
          <span>Home</span>
        </div>
        <div className='flex items-center text-2xl space-x-2 cursor-pointer'
        onClick={()=>{
            navigate('/discover')
        }}
        >
          <IoBookOutline />
          <span>Discover</span>
        </div>
        <div
        onClick={()=>{
            navigate('/wishlist')
        }}
        className='flex items-center text-2xl space-x-2 cursor-pointer'>
          <IoBookmarkOutline />
          <span>Wishlist</span>
        </div>
        <div
        onClick={()=>{
            navigate('/added')
        }}
        className='flex items-center text-2xl space-x-2 cursor-pointer'>
          <MdAddTask />
          <span>Added</span>
        </div>
        <div
        onClick={()=>{
            navigate('/e-books')
        }}
        className='flex items-center text-2xl space-x-2 cursor-pointer'>
          <IoDocumentOutline />
          <span>E-books</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
