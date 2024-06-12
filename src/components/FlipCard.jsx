import React from "react";
import imagage from "../assets/bookCover.jpg";

const FlipCard = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="group h-96 w-80 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <img
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              src={imagage}
              alt=""
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-3xl font-bold">Aavash Tamang</h1>
              <p className="text-lg">Software Endineering</p>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                officia quasi delectus porro eum illo, temporibus repellat.
                Ipsam in eveniet sint eius non harum tempore est porro nihil.
                Magni, magnam.
              </p>
              <button className="mt-2 rounded-md bg-rose-600 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
