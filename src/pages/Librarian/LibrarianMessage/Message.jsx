import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import NavNew from "../../../components/NavNew";
import Inbox from "./SidebarComp/Inbox";
import RequestedBooks from "./SidebarComp/Request";

const Message = () => {
  const [active, setActive] = useState("inbox");

  const location = useLocation();

  const handleInboxActive = () => {
    setActive("inbox");
  };
  const handleRequestedBooksActive = () => {
    setActive("requested");
  };

  console.log(location);

  const renderActiveComponent = () => {
    switch (active) {
      case "requested":
        return <RequestedBooks />;
      default:
        return <Inbox />;
    }
  };
  return (
    <div>
      <NavNew />
      <div className="min-h-screen h-auto bg-gray-200 py-[10px]">
        <div className="p-[20px]">
          <div className="flex h-[800px] w-[100%] mt-[100px] rounded-2xl bg-white shadow-slate-500 shadow-md ">
            <div className="h-[800px] w-[300px] rounded-l-2xl bg-[#14273D]">
              <div className="flex flex-col gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
                <IoMail className="fill-[#A3A3A3] text-4xl" />
                <div className="text-white flex-col justify-center text-center text-3xl">
                  Message
                </div>
              </div>
              <div className="text-[#737373] flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-[50px]">
                <button
                  onClick={handleInboxActive}
                  className="h-auto hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                >
                  {active === "inbox" ? (
                    <div className="text-white">Inbox</div>
                  ) : (
                    <div>Inbox</div>
                  )}
                </button>
                <button
                  onClick={handleRequestedBooksActive}
                  className="h-auto hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                >
                  {active === "requested" ? (
                    <div className="text-white">Requested Books</div>
                  ) : (
                    <div>Requested Books</div>
                  )}
                </button>
              </div>
            </div>
            <div className="w-full h-full rounded-2xl">
              {renderActiveComponent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
