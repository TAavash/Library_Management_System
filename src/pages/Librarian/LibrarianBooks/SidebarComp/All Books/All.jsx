import React, { useEffect, useState } from "react";
import FlipCard from "../../../../../components/FlipCard";
import { getAllBooks } from "../../../../../utils/Api"; // Adjust the import path as needed

const All = ({ onCardClick }) => {
  const [books, setBooks] = useState([]);

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

  return (
    <div className="w-full h-full">
      <div className="w-[100%] h-[20%] bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
        <div className="w-full h-full flex justify-evenly p-[10px] gap-[5px]">
          <div className="w-[100%] h-full flex-col">
            <div className="w-full h-auto text-start text-3xl p-1">
              All Books
            </div>
            <div className="w-full h-auto text-start text-2xl text-gray-600 p-1">
              View all books
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col h-[80%] p-[30px] gap-[30px] bg-white rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[30px] my-2">
          {books.length > 0 ? (
            books.map((book) => (
              <div key={book.id} onClick={() => onCardClick(book)}>
                <FlipCard book={book} />
              </div>
            ))
          ) : (
            <div>No books available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default All;
