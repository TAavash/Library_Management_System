import * as React from "react";
import NavNew from "../../components/NavNew";
import BookShelf from "../../assets/bookshelf.jpg";
import Person from "../../assets/person.png";

const User1 = () => {
  return (
    <div className="flex flex-col bg-fuchsia-950">
      <NavNew />
      <div className="flex overflow-hidden relative flex-col items-center px-16 pt-14 w-full min-h-[1024px] max-md:px-5 max-md:max-w-full">
        <img
          src={BookShelf}
          alt="bookshelf"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          src={Person}
          alt="person"
          className="object-cover absolute inset-0 size-[1000px]"
        />
        <div className="flex relative flex-col w-full max-w-[1119px] max-md:max-w-full">
          <div className="mt-12">
            <div className="text-[40px] text-white">Library Management System</div>
            <button className="bg-green-600 text-white  w-[200px] h-[50px] rounded-full">Get Started</button>
          </div>
          <div className="flex flex-col self-end mr-20 max-w-full w-[460px] max-md:mr-2.5">
            <div className="items-start self-end px-6 pt-11 pb-32 text-4xl text-white whitespace-nowrap bg-red-400 aspect-square w-[230px] max-md:px-5 max-md:pb-10">
              Lorem
            </div>
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="shrink-0 mx-auto bg-teal-500 aspect-square h-[230px] w-[230px]" />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="shrink-0 mx-auto bg-amber-400 aspect-square h-[230px] w-[230px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-center max-w-full w-[920px]">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="shrink-0 mx-auto bg-pink-800 aspect-square h-[230px] w-[230px]" />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="shrink-0 mx-auto aspect-square bg-slate-700 h-[230px] w-[230px]" />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="shrink-0 mx-auto bg-pink-700 aspect-square h-[230px] w-[230px]" />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="shrink-0 mx-auto bg-orange-400 aspect-square h-[230px] w-[230px]" />
              </div>
            </div>
          </div>
          <div className="px-12 pt-12 bg-white max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="shrink-0 mx-auto bg-orange-400 aspect-square h-[230px] w-[230px] max-md:mt-10" />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="shrink-0 mx-auto bg-amber-400 aspect-square h-[230px] w-[230px] max-md:mt-10" />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="shrink-0 mx-auto bg-teal-500 aspect-square h-[230px] w-[230px] max-md:mt-10" />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="shrink-0 mx-auto aspect-square bg-slate-700 h-[230px] w-[230px] max-md:mt-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User1;
