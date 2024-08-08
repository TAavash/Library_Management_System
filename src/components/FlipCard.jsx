import React from "react";

const FlipCard = ({ book }) => {
  return (
    <div className="group h-[320px] w-[200px] [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0">
          <img
            className="h-full w-full rounded-xl object-contain shadow-xl shadow-black/40"
            src={book.cover_pic || "path/to/default-image.jpg"}
            alt={book.title}
          />
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <p className="text-lg">{book.author}</p>
            <p className="text-base">{book.description}</p>
            <button className="mt-2 rounded-md bg-rose-600 py-1 px-2 text-sm hover:bg-neutral-900">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
