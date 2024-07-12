import React, { useState } from "react";
import { FaBookOpen } from "react-icons/fa6";
import { GrFilter } from "react-icons/gr";
import {
    FaBookDead,
    FaRocket,
    FaMagic,
    FaSearchDollar,
    FaHeart,
  } from "react-icons/fa";

const SearchBar = () => {
    const [showGenres, setShowGenres] = useState(false);
    const genres = [
      "Fiction",
      "Non-Fiction",
      "Science Fiction",
      "Fantasy",
      "Mystery",
      "Thriller",
    ];
  
    const genreIcons = {
      Fiction: <FaBookDead />,
      "Non-Fiction": <FaBookOpen />,
      "Science Fiction": <FaRocket />,
      Fantasy: <FaMagic />,
      Mystery: <FaSearchDollar />,
      Thriller: <FaHeart />,
    };
  
    const toggleGenres = () => {
      setShowGenres(!showGenres);
    };
  
    return (
      <div className="relative flex items-center justify-between border border-gray-300 rounded p-2">
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Search here"
            className="w-full p-2 border-none focus:outline-none"
          />
        </div>
        <div className="relative">
          <button
            onClick={toggleGenres}
            className="px-4 py-2 bg-gray-200 rounded flex items-center"
          >
            <span className="mr-2">
              <GrFilter />
            </span>
            Genre
          </button>
          {showGenres && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-[1000]">
              <ul>
                {genres.map((genre) => (
                  <li
                    key={genre}
                    className="p-2 hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out transform hover:scale-105 rounded-lg shadow-md hover:shadow-lg bg-gray-50 hover:bg-gray-200 flex items-center"
                    onClick={() => {
                      console.log(`Selected Genre: ${genre}`);
                      setShowGenres(false);
                    }}
                  >
                    <span className="mr-2">{genreIcons[genre]}</span>
                    {genre}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

export default SearchBar
