import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./comp/Navbar";
import Sidebar from "./comp/Sidebar";
import Hero from "./Hero";
import Discover from "./Discover";
import Added from "./Added";
import Ebooks from "./Ebooks";
import Wishlist from "./Wishlist";
import FlipCard from "../../components/FlipCard";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Userdash = () => {
  return (
    <div>
      <div className="bg-[#828282] min-h-screen w-full flex overflow-y-auto p-[20px]">
        <Sidebar />
        <div className="flex-grow">
          <div className="flex flex-col gap-[5px]">
            <Navbar />

            <div className="bg-white h-[625px] overflow-y-auto rounded-2xl flex justify-between px-[20px]">
              <div>
                <h1 className="m-[10px] font-bold text-[30px]">
                  Currently Reading
                </h1>
                <div className="flex gap-3 text-[20px]">
                  <div className="m-[10px]">
                    <FlipCard />
                  </div>
                  <p>
                    Good Morning
                    <br /> In the heart of a bustling metropolis, an unlikely
                    friendship blossoms between a reclusive artist haunted by
                    her past and a street-smart teenager with a gift for finding
                    beauty in unexpected places. As they navigate the city's
                    hidden wonders and dark corners, their bond deepens,
                    revealing secrets that threaten to unravel both their lives.
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <h1 className="m-[10px] font-bold text-[30px]">
                    Recently Finished
                  </h1>
                  <button className="border p-1 h-10 rounded-xl">
                    See All
                  </button>
                </div>
                <div className="flex gap-7">
                  <FlipCard />
                  <FlipCard />
                  <FlipCard />
                  <FlipCard />
                </div>
              </div>
              <div className="max-h-screen flex flex-col items-center bg-[#1f1a1a57] rounded-2xl p-[20px] w-[250px] my-auto">
                <Calendar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userdash;
