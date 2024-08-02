import React from 'react'
import { FiSearch } from "react-icons/fi";
import BookCover from '../../../../../assets/th (1).jpeg';


const checkIn = [
  {
    title: "Kafka on the Shore",
    author: "Murakami",
    cover: BookCover,
    checkOutDate: "2 June, 2025",
    name: "Sudarshan Bam",
    role: "Student"

  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    cover: BookCover,
    checkOutDate: "3 June, 2025",
    name: "Sudarshan Bam",
    role: "Student"

  },
  {
    title: "How to Talk to Anyone",
    author: "Leil Lowndes",
    cover: BookCover,
    checkOutDate: "4 June, 2025",
    name: "Sudarshan Bam",
    role: "Student"

  },
  {
    title: "Kafka on the Shore",
    author: "Murakami",
    cover: BookCover,
    checkOutDate: "2 June, 2025",
    name: "Sudarshan Bam",
    role: "Student"

  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    cover: BookCover,
    checkOutDate: "3 June, 2025",
    name: "Sudarshan Bam",
    role: "Student"

  },
  {
    title: "How to Talk to Anyone",
    author: "Leil Lowndes",
    cover: BookCover,
    checkOutDate: "4 June, 2025",
    name: "Sudarshan Bam",
    role: "Student"

  },
  {
    title: "Kafka on the Shore",
    author: "Murakami",
    cover: BookCover,
    checkOutDate: "2 June, 2025",
    name: "Sudarshan Bam",
    role: "Student"

  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    cover: BookCover,
    checkOutDate: "3 June, 2025",
    name: "Sudarshan Bam",
    role: "Student"

  },
  {
    title: "How to Talk to Anyone",
    author: "Leil Lowndes",
    cover: BookCover,
    checkOutDate: "4 June, 2025",
    name: "Sudarshan Bam",
    role: "Student"

  }
];

const All = () => {
  return (
    <div className="w-full h-full ">
      <div className="w-[100%] h-[20%] flex justify-between bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
        <div className=" h-full flex-col">
          <div className="w-full h-[70%] text-3xl">
            All Check-In
          </div>
          <div className="w-full h-[30%] text-[-2xl] text-[#525252]">
            Manage all the check-in
          </div>
        </div>

        <div className='flex justify-center m-2'>
          <div className="flex w-[500px] items-center gap-1">
            <FiSearch className="h-5 w-5 ml-1" />
            <input type="text" placeholder='Search' className='p-1 w-[500px]  border-hidden focus:outline-none'
            />
          </div>
        </div>

      </div>
      <div className="flex-col h-[80%] bg-white p-[30px] gap-[30px] rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[30px] my-2">


          {checkIn.map((check, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg shadow-md w-56 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="p-3">
                <h3 className="text-lg font-bold"> {check.name}</h3>
                <p className="text-sm text-gray-600">{check.role}</p>
              </div>
              <img src={check.cover} alt={check.title} className="w-full h-72 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{check.title}</h3>
                <p className="text-sm text-gray-600">{check.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div></div>
  )
}

export default All