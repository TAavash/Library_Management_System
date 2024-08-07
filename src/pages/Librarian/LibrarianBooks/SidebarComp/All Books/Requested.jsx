import React from 'react'
import FlipCard from "../../../../../components/FlipCard";
import { FiSearch } from "react-icons/fi";

const Requested = ({onCardClick}) => {
  return (
    <div className="w-full h-full ">
    <div className="w-full h-[20%] flex flex-col md:flex-row justify-between bg-[#F5F5F5] px-6 md:px-12 py-4 md:py-6 rounded-tr-2xl">
        <div className="h-full flex-col">
          <div className="w-full h-[70%] text-2xl md:text-3xl">
            Requested
          </div>
          <div className="w-full h-[30%] text-lg md:text-2xl text-[#525252]">
            Manage all the request
          </div>
        </div>

        <div className='flex justify-center m-2'>
          <div className="flex w-full md:w-[500px] items-center gap-1">
            <FiSearch className="h-5 w-5 ml-1" />
            <input type="text" placeholder='Search' className='p-1 w-full border-hidden focus:outline-none' />
          </div>
        </div>

      </div> 
    <div className="flex-col h-[80%] p-[30px] gap-[30px] bg-gray-600 rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[30px] my-2">
          <div onClick={() => onCardClick(<FlipCard />)}>
            <FlipCard />
          </div>
          <div onClick={() => onCardClick(<FlipCard />)}>
            <FlipCard />
          </div>
          <div onClick={() => onCardClick(<FlipCard />)}>
            <FlipCard />
          </div>
          <div onClick={() => onCardClick(<FlipCard />)}>
            <FlipCard />
          </div>
          <div onClick={() => onCardClick(<FlipCard />)}>
            <FlipCard />
          </div>
          <div onClick={() => onCardClick(<FlipCard />)}>
            <FlipCard />
          </div>
          <div onClick={() => onCardClick(<FlipCard />)}>
            <FlipCard />
          </div>
          <div onClick={() => onCardClick(<FlipCard />)}>
            <FlipCard />
          </div>
          <div onClick={() => onCardClick(<FlipCard />)}>
            <FlipCard />
          </div>
          <div onClick={() => onCardClick(<FlipCard />)}>
            <FlipCard />
          </div>
          <div onClick={() => onCardClick(<FlipCard />)}>
            <FlipCard />
          </div>
          <div onClick={() => onCardClick(<FlipCard />)}>
            <FlipCard />
          </div>
        </div>
  </div></div>
  )
}

export default Requested;