import React, { useState } from "react";
import Navbar from "./comp/Navbar";
import Sidebar from "./comp/Sidebar";
import Bookcover from "../../assets/bookCover.jpg";

const Discover = () => {
  const popularBook = [
    {
      title: "Eleven Minutes",
      author: "sudarshan bam",
      cover: Bookcover,
    },
    {
      title: "Don't talk to anyone",
      author: "Griffin",
      cover: Bookcover,
    },
    {
      title: "Eleven Minutes",
      author: "sudarshan bam",
      cover: Bookcover,
    },
    {
      title: "Eleven Minutes",
      author: "sudarshan bam",
      cover: Bookcover,
    },
  ];

  const youMayLikeBook = [
    {
      title: "Eleven Minutes",
      author: "sudarshan bam",
      cover: Bookcover,
    },
    {
      title: "Eleven Minutes",
      author: "sudarshan bam",
      cover: Bookcover,
    },
    {
      title: "Eleven Minutes",
      author: "sudarshan bam",
      cover: Bookcover,
    },
    {
      title: "Eleven Minutes",
      author: "sudarshan bam",
      cover: Bookcover,
    },
  ];

  const categoriesBook = [
    {
      title: "Eleven Minutes",
      author: "sudarshan bam",
      cover: Bookcover,
    },
    {
      title: "Eleven Minutes",
      author: "sudarshan bam",
      cover: Bookcover,
    },
    {
      title: "Eleven Minutes",
      author: "sudarshan bam",
      cover: Bookcover,
    },
    {
      title: "Eleven Minutes",
      author: "sudarshan bam",
      cover: Bookcover,
    },
  ];

  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const [key, setKey] = useState(0);

  React.useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [selectedBook]);

  return (
    <div>
      <div className="bbg-[#828282] min-h-screen w-full flex overflow-y-auto p-[20px]">
        <Sidebar />
        <div className="flex-grow">
          <div className="flex flex-col gap-[20px]">
            <Navbar />
            <div className="bg-[#828282] h-[625px] overflow-y-scroll scrollbar-none rounded-2xl flex flex-col gap-[20px]">
              <div className="p-[20px] bg-white tl-2xl bl-2xl">
                <div className='text-[20px] font-semibold'>Popular</div>

                <div className=" flex gap-4 justify-between">
                  {popularBook.map((book, index) => (
                    <div
                      key={index}
                      className="-[200px] border border-slate-200 p-[10px]"
                      onClick={() => handleBookClick(book)}
                    >
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-[100%]"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{book.title}</h3>
                        <p className="text-sm text-gray-600">{book.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-[20px] bg-white tl-2xl bl-2xl">
                <div className='text-[20px] font-semibold'>You May Like</div>
                <div className=" flex gap-4 justify-between ">
                  {youMayLikeBook.map((book, index) => (
                    <div
                      key={index}
                      className="-[200px] border border-slate-200 p-[10px]"
                      onClick={() => handleBookClick(book)}
                    >
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-[100%]"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{book.title}</h3>
                        <p className="text-sm text-gray-600">{book.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-[20px] bg-white tl-2xl bl-2xl">
                <div className='text-[20px] font-semibold'>Categories</div>
                <div className=" flex gap-4 justify-between">
                  {categoriesBook.map((book, index) => (
                    <div
                      key={index}
                      className="-[200px] border border-slate-200 p-[10px]"
                      onClick={() => handleBookClick(book)}
                    >
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-[100%]"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{book.title}</h3>
                        <p className="text-sm text-gray-600">{book.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex mx-2  `}>
          <div
            className={`h-full justify-center items-center rounded-2xl ${
              selectedBook ? "w-1" : "w-full"
            }`}
          ></div>

          {selectedBook && (
            <div
              key={key}
              className={`flex flex-col bg-white  text-black p-2 mt-3 w-full rounded-xl justify-center items-center slide-in`}
            >
              <h4 className="text-center">Details</h4>
              <div className="flex flex-col items-center p-3 w-full text-center">
                <img
                  src={selectedBook.cover}
                  alt="Book Cover"
                  className="w-[90%] rounded-md"
                />
                <div className="flex flex-col mt-2">
                  <label htmlFor="Book Name" className="text-lg font-bold">
                    {selectedBook.title}
                  </label>
                  <label htmlFor="author">{selectedBook.author}</label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Discover;
