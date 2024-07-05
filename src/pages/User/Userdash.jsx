import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./comp/Navbar";
import Sidebar from "./comp/Sidebar";
import Hero from "./Hero";
import Discover from "./Discover";
import Added from "./Added";
import Ebooks from "./Ebooks";
import Wishlist from "./Wishlist";
import FlipCard from "../../components/FlipCard";

const Userdash = () => {
  // const [active, setActive] = useState("hero");

  // const location = useLocation();

  // const handleHome = () => {
  //   setActive("hero");
  // };
  // const handleAdded = () => {
  //   setActive("added");
  // };
  // const handleWishlist = () => {
  //   setActive("wishlist");
  // };
  // const handleEBooks = () => {
  //   setActive("e-books");
  // };
  // const handleDiscover = () => {
  //   setActive("discover");
  // };

  // console.log(location);

  // const renderActiveComponent = () => {
  //   switch (active) {
  //     case "wishlist":
  //       return <Wishlist />;
  //     case "added":
  //       return <Added />;
  //       case "e-books":
  //       return <Ebooks />;
  //       case "discover":
  //       return <Discover />;
  //     default:
  //       return <Hero />;
  //   }
  // };
  return (
    <div>
      <div className="bg-[#828282] min-h-screen min-w-screen flex">
        <Sidebar />
        <div className="flex-grow">
          <div className="flex flex-col gap-[20px]">
            <Navbar />
            <div className="bg-white h-[600px] overflow-y-auto rounded-2xl">
              <h1 className='m-[10px] font-bold text-[30px]'>Currently Reading</h1>
              <div className='flex'>
              <div className='m-[10px]'><FlipCard /></div>
              <p>Good Morning</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen flex flex-col items-center bg-white rounded-2xl m-5 p-5"></div>
      </div>
    </div>
  );
};

export default Userdash;
