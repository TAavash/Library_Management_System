import React from "react";
import BookCover from "../../../../assets/th.jpeg";

export default function BookRenewalRequest() {
  const BookRenewalRequests = [
    {
      Book: "Don't talk to anyone",
      Name: "Sudarshan Bam",
      role: "Student",
      cover: BookCover,
    },
    {
      Book: "Don't talk to anyone",
      Name: "Sudarshan Bam",
      role: "Student",
      cover: BookCover,
    },
    {
      Book: "Don't talk to anyone",
      Name: "Sudarshan Bam",
      role: "Student",
      cover: BookCover,
    },
    {
      Book: "Don't talk to anyone",
      Name: "Sudarshan Bam",
      role: "Student",
      cover: BookCover,
    },
    {
      Book: "Don't talk to anyone",
      Name: "Sudarshan Bam",
      role: "Student",
      cover: BookCover,
    },
    {
      Book: "Don't talk to anyone",
      Name: "Sudarshan Bam",
      role: "Student",
      cover: BookCover,
    },
    {
      Book: "Don't talk to anyone",
      Name: "Sudarshan Bam",
      role: "Student",
      cover: BookCover,
    },
  ];

  return (
    <>
      <div className="w-full h-full rounded-2xl">
        <div className="w-[100%] h-[20%] bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
          <div className="w-full h-full flex justify-evenly p-[10px] gap-[5px]">
            <div className="w-[100%] h-full flex-col">
              <div className="w-full h-auto text-start text-3xl p-1">
                Book Renewal Request
              </div>

              <div className="w-full h-auto text-start text-2xl text-gray-600 p-1">
                Manage all the book renewal request from users
              </div>
            </div>
          </div>
        </div>
        <div className="h-[80%] overflow-scroll">
          {BookRenewalRequests.map((item, index) => (
            <div className="flex border-2 mx-12 my-9 justify-evenly items-center">
              <div className="flex items-center w-2/4 p-4 gap-4">
                <img
                  src={item.cover}
                  alt={item.Book}
                  className="w-[70px] h-[110px] object-cover "
                />
                <div className="mr-4">
                  <div className="text-lg font-medium text-gray-900">
                    {item.Book}
                  </div>
                  <div className="text-sm text-gray-500">{item.Name}</div>
                  <div className="text-sm text-gray-500">{item.role}</div>
                </div>
              </div>
              <div className="flex">
                <div className="mx-7 my-9">
                  <button className="my-1 border rounded-lg py-2 px-8 md:px-12 bg-black text-white">
                    Renew
                  </button>
                </div>
                <div className="mx-7 my-9">
                  <button className="my-1 border rounded-lg py-2 px-8 md:px-12 bg-black text-white">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
