import React from 'react'
import FlipCard from "../../../../../components/FlipCard";
import { IoSearch, IoSettingsSharp } from "react-icons/io5";

const ElectronicLocation = () => {
  return (
    <div className="w-full h-full ">
      <div className="w-[100%] h-[20%] bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
                <div className="w-full h-full flex justify-evenly p-[10px] gap-[5px]">
                  <div className="w-[50%] h-full flex-col">
                    <div className="w-full h-[70%] text-start text-3xl">
                      Electronic Locations
                    </div>
                    <div className="w-full h-[30%] text-start text-[-2xl] text-[#525252]">
                      Manage all electronic locations
                    </div>
                  </div>
                  <div className="w-[30%] h-full flex p-[2px] justify-evenly">
                    <div className="w-full h-[30px] rounded-2xl bg-white border flex items-center p-[5px]">
                      <div className="text-[15px] w-[80%] text-[#525252]">
                        Search
                      </div>
                      <div className="w-[20%]">
                        <IoSearch className="w-[20px] h-[20px] justify-end fill-[#A3A3A3]" />
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
    <div className="flex-col h-[80%] p-[30px] gap-[30px] bg-yellow-600 rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[30px] my-2">
      <FlipCard />
      <FlipCard />
      <FlipCard />
      <FlipCard />
      <FlipCard />
      <FlipCard />
      <FlipCard />
      <FlipCard />
      <FlipCard />
      <FlipCard />
      <FlipCard />
      <FlipCard />
    </div>
  </div></div>
  )
}

export default ElectronicLocation;