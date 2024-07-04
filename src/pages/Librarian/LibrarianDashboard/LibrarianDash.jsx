import React from "react";
import { GoArrowSwitch } from "react-icons/go";
import NavNew from "../../../components/NavNew";

const LibrarianDash = () => {
  return (
    <div>
      <NavNew />
      <div className="min-h-screen h-auto bg-gray-200 py-[10px]">
        <div className="flex justify-evenly gap-[20px] mx-[3%]">
          <button className="w-[200px] h-[120px] rounded-2xl bg-red-400 shadow-slate-500 shadow-md mt-[100px]">
            Total Books : 3000
          </button>
          <button className="w-[200px] h-[120px] rounded-2xl bg-green-400 shadow-slate-500 shadow-md mt-[100px]">
            Total Users : 3000
          </button>
          <button className="w-[200px] h-[120px] rounded-2xl bg-yellow-400 shadow-slate-500 shadow-md mt-[100px]">
            Fines Collected : 1M$
          </button>
        </div>
        <div className="p-[20px] ">
          <div className="flex h-[300px] w-[100%] mt-[100px] rounded-2xl bg-white shadow-slate-500 shadow-md ">
            <div className="h-[300px] w-[300px] rounded-l-2xl bg-[#14273D]">
              <div className="flex gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
                <GoArrowSwitch className=" fill-[#A3A3A3] text-3xl" />
              </div>
              <div className="text-[#737373] flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-[50px]"></div>
            </div>
            <div className="w-full h-full rounded-2xl">
              <div className="w-[100%] h-[20%] bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
                <div className="w-full h-full flex p-[10px]">
                  <div className="w-full h-auto flex justify-center items-center">
                    <div className="w-full text-start text-2xl">
                      Today's Task
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col h-[80%] p-[30px] gap-[30px] bg-white rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
                <div className=" flex flex-col gap-[30px] my-2">
                  <div>Manage: Books Issued / Returned</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LibrarianDash;