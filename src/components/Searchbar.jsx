import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";

export function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = booksData.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='flex justify-center m-2'>
      <div className="flex w-full md:w-[500px] items-center gap-1">
        <FiSearch className="h-5 w-5 ml-1" />
        <input
          type="text"
          placeholder='Search'
          value={searchTerm}
          onChange={handleSearchChange}
          className='p-1 w-full border-hidden focus:outline-none'
        />
      </div>
    </div>
  );
}