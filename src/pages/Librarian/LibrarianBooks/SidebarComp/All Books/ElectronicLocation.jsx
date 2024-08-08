import React from 'react'
import BookCover from '../../../../../assets/beOFkU.jpg';
import { FiSearch } from "react-icons/fi";

const LBook = [
  {
    title: "Kafka on the Shore",
    author: "Murakami",
    cover: BookCover,

  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    cover: BookCover,

  },
  {
    title: "How to Talk to Anyone",
    author: "Leil Lowndes",
    cover: BookCover,

  },
  {
    title: "Kafka on the Shore",
    author: "Murakami",
    cover: BookCover,

  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    cover: BookCover,

  },
  {
    title: "How to Talk to Anyone",
    author: "Leil Lowndes",
    cover: BookCover,

  },
  {
    title: "Kafka on the Shore",
    author: "Murakami",
    cover: BookCover,

  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    cover: BookCover,

  },
  {
    title: "How to Talk to Anyone",
    author: "Leil Lowndes",
    cover: BookCover,

  }
];

const ElectronicLocation = () => {
  return (
    <div className="w-full h-full ">
      <div className="w-full h-[20%] flex flex-col md:flex-row justify-between bg-[#F5F5F5] px-6 md:px-12 py-4 md:py-6 rounded-tr-2xl">
        <div className="h-full flex-col">
          <div className="w-full h-[70%] text-2xl md:text-3xl">
            Electronic Location
          </div>
          <div className="w-full h-[30%] text-lg md:text-2xl text-[#525252]">
            Manage all the elctronic location
          </div>
        </div>

        <div className='flex justify-center m-2'>
          <div className="flex w-full md:w-[500px] items-center gap-1">
            <FiSearch className="h-5 w-5 ml-1" />
            <input type="text" placeholder='Search' className='p-1 w-full border-hidden focus:outline-none' />
          </div>
        </div>

      </div>
      <div className="flex flex-col h-[80%] bg-white p-6 md:p-12 gap-6 md:gap-12 rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[30px] my-2">

          {LBook.map((book, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg shadow-md w-full md:w-56 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img src={book.cover} alt={book.title} className="w-full h-72 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div></div>
  )
}

export default ElectronicLocation;
