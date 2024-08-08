import React from "react";
import { IoMail } from "react-icons/io5";
import { FiSearch,  } from "react-icons/fi";
import NavNew from "../components/NavNew";

const Message = () => {
  const tableData = [
    {
      id: 3542342,
      email: "sudarshan@gmail.com",
      messsage: "I am having trouble with changing password.",
      messageDate: "May 20, 2024",
    },
    {
      id: 3542342,
      email: "sudarshan@gmail.com",
      messsage: "I am having trouble with changing password.",
      messageDate: "May 20, 2024",
    },
    {
      id: 3542342,
      email: "sudarshan@gmail.com",
      messsage: "I am having trouble with changing password.",
      messageDate: "May 20, 2024",
    },
    {
      id: 3542342,
      email: "sudarshan@gmail.com",
      messsage: "I am having trouble with changing password.",
      messageDate: "May 20, 2024",
    },
    {
      id: 3542342,
      email: "sudarshan@gmail.com",
      messsage: "I am having trouble with changing password.",
      messageDate: "May 20, 2024",
    },
    {
      id: 3542342,
      email: "sudarshan@gmail.com",
      messsage: "I am having trouble with changing password.",
      messageDate: "May 20, 2024",
    },
    {
      id: 3542342,
      email: "sudarshan@gmail.com",
      messsage: "I am having trouble with changing password.",
      messageDate: "May 20, 2024",
    },
    {
      id: 3542342,
      email: "sudarshan@gmail.com",
      messsage: "I am having trouble with changing password.",
      messageDate: "May 20, 2024",
    },

    {
      id: 3542342,
      email: "sudarshan@gmail.com",
      messsage: "I am having trouble with changing password.",
      messageDate: "May 20, 2024",
    },
    {
      id: 3542342,
      email: "sudarshan@gmail.com",
      messsage: "I am having trouble with changing password.",
      messageDate: "May 20, 2024",
    },
    {
      id: 3542342,
      email: "sudarshan@gmail.com",
      messsage: "I am having trouble with changing password.",
      messageDate: "May 20, 2024",
    },
    {
      id: 3542342,
      email: "sudarshan@gmail.com",
      messsage: "I am having trouble with changing password.",
      messageDate: "May 20, 2024",
    },
    {
      id: 3542342,
      email: "sudarshan@gmail.com",
      messsage: "I am having trouble with changing password.",
      messageDate: "May 20, 2024",
    },
    {
      id: 3542342,
      email: "sudarshan@gmail.com",
      messsage: "I am having trouble with changing password.",
      messageDate: "May 20, 2024",
    },
    {
      id: 3542342,
      email: "sudarshan@gmail.com",
      messsage: "I am having trouble with changing password.",
      messageDate: "May 20, 2024",
    },
    {
      id: 3542342,
      email: "sudarshan@gmail.com",
      messsage: "I am having trouble with changing password.",
      messageDate: "May 20, 2024",
    },
    {
      id: 3542342,
      email: "sudarshan@gmail.com",
      messsage: "I am having trouble with changing password.",
      messageDate: "May 20, 2024",
    },

  ];
  return (
    <div>
      <NavNew />
      <div className="min-h-screen h-auto bg-gray-200 py-[10px]">
        <div className="p-[20px]">
          <div className="flex h-[800px] w-[100%] mt-[100px] rounded-2xl bg-white shadow-slate-500 shadow-md ">
            <div className="h-[800px] w-[300px] rounded-l-2xl bg-[#14273D]">
              <div className="flex flex-col gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
                <IoMail className=" fill-[#A3A3A3]  text-4xl" />
                <div className="text-white flex-col justify-center text-center text-3xl">
                  Message
                </div>
              </div>
              <div className="text-[#737373] flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-[50px]">
                <button className="h-[40px] text-white rounded-xl text-2xl p-[2px] px-[3px]">
                  Inbox
                </button>
              </div>
            </div>
            <div className="w-full h-full rounded-2xl">
              <div className="w-[100%] h-[20%] flex justify-between bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
                <div className=" h-full flex-col">
                  <div className="w-full h-[70%] text-3xl">
                    Message
                  </div>
                  <div className="w-full h-[30%] text-[-2xl] text-[#525252]">
                    View all the message
                  </div>
                </div>

                <div className='flex justify-center m-2'>
                  <div className="flex w-[500px] items-center gap-1">
                    <FiSearch className="h-5 w-5 ml-1" />
                    <input type="text" placeholder='Search' className='p-1 w-[500px]  border-hidden focus:outline-none'
                    />
                  </div>
                </div>

              </div>
              <div className="flex-col h-[80%] gap-[30px] bg-white rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
                <div>
                  <table className="h-full w-full bg-white">
                    <tr className=" sticky ">
                      <th className="p-3 text-start">ID</th>
                      <th className="p-3 text-start ">Email</th>
                      <th className="p-3 text-start">Message</th>
                      <th className=" p-3 text-start">Messaged Date</th>
                    </tr>
                    {tableData.map((person) => {
                      return (
                        <tr key={person.id}>
                          <td className="p-3">{person.id}</td>
                          <td className="p-3">{person.email}</td>
                          <td className="p-3">{person.messsage}</td>
                          <td className="p-3">{person.messageDate}</td>
                        </tr>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
