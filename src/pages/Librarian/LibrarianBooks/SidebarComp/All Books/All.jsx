import React, { useEffect, useState } from "react";
import { getAllBooks } from "../../../../../utils/Api"; // Adjust the import path as needed
import { FiSearch } from "react-icons/fi";
import BookCover from '../../../../../assets/th (1).jpeg'; // Use a default or placeholder image if needed

const All = ({ viewMode }) => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getAllBooks();
        const data = response.data;
        if (Array.isArray(data)) {
          setBooks(data);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-full">
      <div className="w-full h-[20%] flex flex-col md:flex-row justify-between bg-[#F5F5F5] px-6 md:px-12 py-4 md:py-6 rounded-tr-2xl">
        <div className="h-full flex-col">
          <div className="w-full h-[70%] text-2xl md:text-3xl">
            All Books
          </div>
          <div className="w-full h-[30%] text-lg md:text-2xl text-[#525252]">
            View all books
          </div>
        </div>

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
      </div>

      <div className="flex-col h-[80%] bg-white p-6 md:p-12 gap-6 md:gap-12 rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
        {viewMode === 'grid' ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[30px] my-2">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <div
                  key={book.id}
                  className="group relative bg-white rounded-lg shadow-md w-full md:w-56 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                  <img src={book.cover || BookCover} alt={book.title} className="w-full h-72 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{book.title}</h3>
                    <p className="text-sm text-gray-600">{book.author}</p>
                  </div>
                </div>
              ))
            ) : (
              <div>No books available</div>
            )}
          </div>
        ) : (
          <div className="list">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <div
                  key={book.id}
                  className="flex items-center p-4 border-b border-gray-200 cursor-pointer"
                >

                  <div className='w-full flex justify-between'>
                    <h3 className="text-lg font-bold">{book.title}</h3>
                    <p className="text-sm text-gray-600">{book.author}</p>
                  </div>
                </div>
              ))
            ) : (
              <div>No books available</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default All;
