import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Membership = () => {
    const navigate = useNavigate();
    const handleBackIconClick = () => {
        navigate(-1);
      };
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className=' text-4xl'>
                404: Page Not Found
                <button className="absolute top-4 left-4 text-4xl" onClick={handleBackIconClick}>
          <IoArrowBackCircle />
        </button>
            </div>
        </div>
    )
}

export default Membership