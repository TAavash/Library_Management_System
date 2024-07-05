import React from "react";
import { IoIosHelpCircle } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import NavNew from "../components/NavNew";

const Help = () => {
  return (
    <div>
      <NavNew />
      <div className="min-h-screen h-auto bg-gray-200 py-[10px]">
        <div className="p-[20px] ">
          <div className="flex h-[300px] w-[100%] mt-[100px] rounded-2xl bg-white shadow-slate-500 shadow-md ">
            <div className="h-[300px] w-[300px] rounded-l-2xl bg-[#14273D]">
              <div className="flex gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
                <IoIosHelpCircle className=" fill-[#A3A3A3] text-3xl" />
              </div>
              <div className="text-[#737373] flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-[50px]">
                <button className="h-[40px] hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]">
                  FAQ's
                </button>
              </div>
            </div>
            <div className="w-full h-full rounded-2xl">
              <div className="w-[100%] h-[20%] bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
                <div className="w-full h-full flex p-[10px]">
                  <div className="w-full h-auto flex justify-center items-center">
                    <div className="w-full text-start text-2xl">
                      Frequently Asked Questions
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col h-[80%] p-[30px] gap-[30px] bg-white rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
                <div className=" flex flex-col gap-[30px] my-2">
                  <div>
                    <div>Q1. How are you?</div>
                    <div>Ans. I am fine.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[400px] w-[100%] mt-[100px] rounded-2xl bg-white shadow-slate-500 shadow-md ">
            <div className="h-[400px] w-[300px] rounded-l-2xl bg-[#14273D]">
              <div className="flex gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
                <IoMail className=" fill-[#A3A3A3]  text-3xl" />
              </div>
              <div className="text-[#737373] flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-[50px]">
                <button className="h-[40px] hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]">
                  Contact Administrator
                </button>
              </div>
            </div>
            <div className="w-full h-full rounded-2xl">
              <div className="flex-col h-[100%] p-[30px] gap-[30px] bg-white rounded-r-2xl overflow-y-auto scroll-smooth scrollbar-thin">
                <div className=" flex flex-col gap-[30px] my-2">
                  <div className="flex flex-col">
                    <div className="flex flex-col gap-10 items-center">
                      <div className="relative w-fit mx-auto flex items-center rounded-[10px] border-2 border-[#A3A3A3]">
                        <input
                          type="email"
                          className=" max-w-[800px] rounded-[10px] h-[50px] pl-[50px]"
                          placeholder="Email"
                        />
                        <div className="absolute top-1/2 text-xl md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                          <IoIosHelpCircle />
                        </div>
                      </div>
                      <div className="relative w-fit mx-auto flex items-center justify-start rounded-[10px] border-2 border-[#A3A3A3]">
                        <input
                          type="email"
                          className=" max-w-[800px] rounded-[10px] h-[150px] pl-[50px]"
                          placeholder="Message"
                        />
                        <div className="absolute top-1/2 text-xl md:text-2xl transform -translate-y-1/2 ml-[10px] text-gray-500">
                          <IoIosHelpCircle />
                        </div>
                      </div>
                      <div className="relative w-fit mx-auto flex items-center justify-start">
                        <button className="bg-black text-white w-[100px] h-[30px] rounded-[5px] active:bg-slate-600">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Help;
