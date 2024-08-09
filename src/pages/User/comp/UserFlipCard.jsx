import React from "react";
import { useNavigate } from "react-router-dom";
import bookcover1 from "../../../assets/bookCover.jpg";

const UserFlipCard = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate('/user/book-detail');
  };

  return (
    <div className="group h-[200px] w-[150px] md:h-[250px] md:w-[180px] [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0">
          <img
            className="h-full w-full rounded-xl object-contain shadow-xl shadow-black/40"
            src={bookcover1}
            alt=""
          />
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-8 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <button
              className="mt-2 rounded-md bg-rose-600 py-1 px-2 text-sm hover:bg-neutral-900"
              onClick={handleReadMoreClick}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFlipCard;
