import React from 'react'
import Navbar from "./comp/Navbar";
import Sidebar from "./comp/Sidebar";

const Wishlist = () => {
  return (
    <div>
        <div className="bg-[#828282] min-h-screen min-w-screen flex">
          <Sidebar />
          <div className="flex-grow">
            <div className="flex flex-col gap-[20px]">
              <Navbar />
              <div className='bg-white h-[600px] overflow-y-auto rounded-2xl'>
                Hello
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
    </div>
  )
}

export default Wishlist
