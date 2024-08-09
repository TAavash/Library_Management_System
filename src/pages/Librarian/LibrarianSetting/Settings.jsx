import React from "react";
import { useNavigate } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import NavNew from "../../../components/NavNew";

const Settings = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_id");
    navigate(`/`);
  };
  const handleSignin = () => {
    navigate(`/register`);
  };

  return (
    <div>
      <NavNew />
      <div className="min-h-screen h-auto bg-gray-200 py-[10px]">
        <div className="p-[20px]">
          <div className="flex h-[800px] w-[100%] mt-[100px] rounded-2xl bg-white shadow-slate-500 shadow-md ">
            <div className="h-[800px] w-[300px] rounded-l-2xl bg-[#14273D]">
              <div className="flex flex-col gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
                <IoSettingsSharp className=" fill-[#A3A3A3]  text-4xl" />
              </div>
              <div className="text-[#737373] flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-[50px]">
                <button className="h-[40px] text-white rounded-xl text-2xl p-[2px] px-[3px]">
                  Settings
                </button>
              </div>
            </div>
            <div className="w-full h-full rounded-2xl">
              <div className="w-[100%] h-[20%] bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
                <div className="w-full h-full flex justify-evenly p-[10px] gap-[5px]">
                  <div className="w-[100%] h-full flex-col">
                    <div className="w-full h-auto text-start text-3xl p-1">
                      Settings
                    </div>

                    <div className="w-full h-auto text-start text-2xl text-gray-600 p-1">
                      Manage settings
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col h-[80%] p-[30px] gap-[30px] bg-white rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
                <div className=" flex gap-[30px] my-2">
                  <button
                    onClick={handleSignin}
                    className="h-fit w-[100px] rounded-md text-white bg-green-600 hover:bg-slate-800 active:bg-black text-2xl p-[2px] px-[3px]"
                  >
                    Signin
                  </button>
                  <button
                    onClick={handleLogout}
                    className="h-fit w-[100px] rounded-md text-white bg-red-600 hover:bg-slate-800 active:bg-black text-2xl p-[2px] px-[3px]"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
