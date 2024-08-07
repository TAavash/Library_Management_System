import React, { useEffect, useState } from "react";
import { IoMail } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import NavNew from "../components/NavNew";
import { getAllContact } from "../utils/Api";

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllContact();
        console.log("Fetched response:", response);

        let list = response.contacts; // Adjust this line based on your actual API response structure
        if (Array.isArray(list)) {
          setMessages(list); // Set the original list of contacts
          setFilteredData(list); // Also set it as the initial filtered data
        } else {
          console.error("Expected an array but got:", JSON.stringify(list));
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = messages.filter((message) =>
      `${message.subject} ${message.message} ${message.email}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    setFilteredData(filtered);
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
              <div className="flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-[50px]">
                <button className="h-[40px] text-white rounded-xl text-2xl p-[2px] px-[3px]">
                  Inbox
                </button>
              </div>
            </div>
            <div className="w-full h-full rounded-2xl">
              <div className="w-[100%] h-[20%] bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
                <div className="w-full h-full flex justify-evenly p-[10px] gap-[5px]">
                  <div className="w-[100%] h-full flex-col">
                    <div className="w-full h-auto text-start text-3xl p-1">
                      Message
                    </div>

                    <div className="w-full h-auto text-start text-2xl text-gray-600 p-1">
                      Read all messages
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col h-[80%] gap-[30px] bg-white rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
                <div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search messages..."
                    className="p-2 border-b-2 border-gray-300 mb-4"
                  />
                  <table className="h-full w-full bg-white">
                    <thead>
                      <tr className="sticky top-0 bg-white">
                        <th className="p-3 text-start">User ID</th>
                        <th className="p-3 text-start">Email</th>
                        <th className="p-3 text-start">Subject</th>
                        <th className="p-3 text-start">Message</th>
                        <th className="p-3 text-start">Messaged Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((contact) => (
                        <tr
                          key={contact.contact_idS}
                          className="cursor-pointer hover:bg-gray-200"
                        >
                          <td className="p-3">{contact.member_idS}</td>
                          <td className="p-3">{contact.email}</td>
                          <td className="p-3">{contact.subject}</td>
                          <td className="p-3">{contact.message}</td>
                          <td className="p-3">{contact.created_at}</td>
                        </tr>
                      ))}
                    </tbody>
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
