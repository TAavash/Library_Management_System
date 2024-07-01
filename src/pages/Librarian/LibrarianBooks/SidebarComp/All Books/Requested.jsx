import React from "react";
import FlipCard from "../../../../../components/FlipCard";

const Requested = () => {
  return (
    <div className="flex-col h-[84%] p-[30px] gap-[30px] bg-blue-600 rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[30px] my-2">
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
      </div>
    </div>
  );
};

export default Requested;