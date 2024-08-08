import React from "react";

const RequestedBooks = () => {

  return (
    <div className="w-full h-full rounded-2xl">
      <div className="w-[100%] h-[20%] bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
        <div className="w-full h-full flex justify-evenly p-[10px] gap-[5px]">
          <div className="w-[100%] h-full flex-col">
            <div className="w-full h-auto text-start text-3xl p-1">Message</div>

            <div className="w-full h-auto text-start text-2xl text-gray-600 p-1">
              Read all messages
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col h-[80%] gap-[30px] bg-white rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
        Requested Books
      </div>
    </div>
  );
};

export default RequestedBooks;
