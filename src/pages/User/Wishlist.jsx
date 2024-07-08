import React, { useState } from "react";
import Navbar from "./comp/Navbar";
import Sidebar from "./comp/Sidebar";
import { MdOutlineChromeReaderMode } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import Bookcover from '../../assets/beOFkU.jpg';

const favorites = [
  {
    src: Bookcover,
    alt: "All Posts",
  },
  {
    src: Bookcover,
    alt: "Recipes",
  },
  {
    src: Bookcover,
    alt: "Home Decor",
  },
  {
    src: Bookcover,
    alt: "Travel",
  },
  {
    src: Bookcover,
    alt: "DIY",
  },
  {
    src: Bookcover,
    alt: "Restaurants to try",
  },
];

const Wishlist = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="bg-[#828282] min-h-screen flex pr-[20px]">
      <Sidebar />
      <div className="flex-grow">
        <div className="flex flex-col gap-[20px]">
          <Navbar />
          <div className="flex justify-center items-center h-full">
            <div className="relative bg-white h-[625px] min-w-full max-w-3xl overflow-y-scroll scrollbar-none rounded-2xl p-4">
              <div className="grid grid-cols-2 gap-4 w-full">
                {favorites.map((favorite, index) => (
                  <div
                    key={index}
                    className={`relative ${hoveredCard === index ? 'hovered' : ''}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={favorite.src}
                      alt={favorite.alt}
                      className="w-full h-auto rounded-lg"
                      style={{
                        filter: hoveredCard === index ? 'blur(5px)' : 'none',
                      }}
                    />
                    {hoveredCard === index && (
                      <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        style={{ zIndex: 1 }}
                      >
                        <div className="flex space-x-4 p-4 bg-white rounded-lg shadow-lg">
                          <button className="p-2 flex items-center space-x-2 shadow-sm">
                            <MdOutlineChromeReaderMode />
                            <p className="text-sm">Read Now</p>
                          </button>
                          <button className="p-2 flex items-center space-x-2 shadow-sm">
                            <IoMdAddCircleOutline />
                            <p className="text-sm">Reserve</p>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Sidebar /> */}
    </div>
  );
};

export default Wishlist;