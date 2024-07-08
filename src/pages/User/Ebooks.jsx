import React from 'react'
import Navbar from "./comp/Navbar";
import Sidebar from "./comp/Sidebar";
import Card from "./comp/card"

const Ebooks = () => {
  return (
    <div>
        <div className="bg-[#828282] min-h-screen min-w-screen flex pr-[20px]">
          <Sidebar />
          <div className="flex-grow">
            <div className="flex flex-col gap-[20px]">
              <Navbar />
              <div className='bg-white h-[600px] overflow-y-auto rounded-2xl'>
                <div className='px-4 flex gap-5 text-[20px] font-semibold'>
                  <button>Explore</button>
                  <button>My Learnings</button>
                </div>
                <Card/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Ebooks
