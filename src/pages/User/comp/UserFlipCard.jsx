import React from "react";
import { useNavigate } from "react-router-dom";
import bookcover1 from "../../../assets/bookCover.jpg";

const UserFlipCard = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate('/user/book-detail');
  };

  return (
    <div className="group h-[180px] w-[130px] md:h-[200px] md:w-[150px] [perspective:1000px]">
      <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front side of the card */}
        <div className="absolute inset-0">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={bookcover1}
            alt="Book Cover"
          />
        </div>
        {/* Back side of the card */}
        <div className="absolute inset-0 h-full w-full rounded-lg bg-black/80 px-4 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
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
