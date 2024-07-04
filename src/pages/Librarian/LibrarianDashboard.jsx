import React from "react";
import { IoMail } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import NavNew from '../../components/NavNew';
import { useNavigate } from "react-router-dom";

export default function LibrarianDashboard() {

  const navigate = useNavigate();

  const handleAddIconClick = () => {
    navigate('/MemberRegistration');
  };

  const handleAddBookClick = () => {
    navigate('/BookRegistration');
  };

  const handleRowClick = () => {
    navigate('/MemberDetail');
  };

  const handleRequestClick = () => {
    navigate('/LibraryRequestPage')
  };

  const tableData = [{
    id: 3542342,
    fullname: "sudarshan",
    status: "active",
    joinDate: "May 20, 2024"
  }, {
    id: 3542342,
    fullname: "sudarshan",
    status: "active",
    joinDate: "May 20, 2024"
  }, {
    id: 3542342,
    fullname: "sudarshan",
    status: "active",
    joinDate: "May 20, 2024"
  }, {
    id: 3542342,
    fullname: "sudarshan",
    status: "active",
    joinDate: "May 20, 2024"
  }, {
    id: 3542342,
    fullname: "sudarshan",
    status: "active",
    joinDate: "May 20, 2024"
  }, {
    id: 3542342,
    fullname: "sudarshan",
    status: "active",
    joinDate: "May 20, 2024"
  }, {
    id: 3542342,
    fullname: "sudarshan",
    status: "active",
    joinDate: "May 20, 2024"
  }, {
    id: 3542342,
    fullname: "sudarshan",
    status: "active",
    joinDate: "May 20, 2024"
  }, {
    id: 3542342,
    fullname: "sudarshan",
    status: "active",
    joinDate: "May 20, 2024"
  }, {
    id: 3542342,
    fullname: "sudarshan",
    status: "active",
    joinDate: "May 20, 2024"
  }, {
    id: 3542342,
    fullname: "sudarshan",
    status: "active",
    joinDate: "May 20, 2024"
  }, {
    id: 3542342,
    fullname: "sudarshan",
    status: "active",
    joinDate: "May 20, 2024"
  }];
  return (
    <div>
      <NavNew />
      <div className="min-h-screen h-auto bg-gray-200 py-[10px]">
        <div className="flex justify-evenly gap-[20px] mx-[3%]">
          <button className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 shadow-slate-500 shadow-md mt-[100px]"
            onClick={handleAddBookClick}>
            Users
          </button>
          <button className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 shadow-slate-500 shadow-md mt-[100px]"
            onClick={handleAddIconClick}>
            Add Member
          </button>
          <button className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 shadow-slate-500 shadow-md mt-[100px]">
            Membership
          </button>
          <button className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 shadow-slate-500 shadow-md mt-[100px]"
          onClick={handleRequestClick}>
            Request
          </button>
        </div>
        <div className="p-[20px] ">
          <div className="flex h-[800px] w-[100%] my-[100px] rounded-2xl bg-white shadow-slate-500 shadow-md ">
            <div className="h-[800px] w-[300px] rounded-l-2xl bg-[#14273D]">
              <div className="flex flex-col gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
                <IoMail className=" fill-[#A3A3A3]  text-4xl" />
                <div className="text-white flex-col justify-center text-center text-3xl">
                  Users
                </div>
              </div>
              <div className="text-[#737373] flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-[50px]">
                <button className="h-auto hover:text-white  rounded-xl text-2xl p-[2px] px-[3px]">
                  All
                </button>
                <button className="h-auto hover:text-white  rounded-xl text-2xl p-[2px] px-[3px]">
                  Students
                </button>
                <button className="h-auto hover:text-white  rounded-xl text-2xl p-[2px] px-[3px]">
                  Faculty Members
                </button>
                <button className="h-auto hover:text-white  rounded-xl text-2xl p-[2px] px-[3px]">
                  Program Coordinators
                </button>
                <button className="h-auto hover:text-white  rounded-xl text-2xl p-[2px] px-[3px]">
                  Library Assistants
                </button>
              </div>
            </div>
            <div className="w-full h-full rounded-2xl">
              <div className="w-[100%] h-[20%] bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
                <div className="w-full h-full flex justify-evenly p-[10px] gap-[5px]">
                  <div className="w-[50%] h-full flex-col">
                    <div className="w-full h-[70%] text-start text-3xl">
                      All Users
                    </div>
                    <div className="w-full h-[30%] text-start text-[-2xl] text-[#525252]">
                      Please view all the user list.
                    </div>
                  </div>
                  <div className="w-[180px] h-full flex p-[2px] justify-evenly">
                    <div className="w-full h-[30px] rounded-2xl bg-white border flex items-center p-[5px]">
                      <div className="w-[20%]">
                        <FaBell className="w-[20px] h-[20px] justify-end fill-[#A3A3A3]" />
                      </div>
                      <div className="text-[15px] w-[80%] text-[#525252]">
                        2 Notifications
                      </div>
                    </div>
                  </div>
                  <div className="w-[20%] h-full flex p-[2px]">
                    <div className="w-[40px] h-[30px] rounded-2xl bg-white border flex items-center justify-start p-[10px]">
                      <div className="w-[20%]">
                        <IoSettingsSharp className="w-[20px] h-[20px] fill-[#A3A3A3]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=' flex flex-col w-full h-[80%]  bg-white'>

                <div className='flex justify-center m-2'>
                  <div className="flex w-[500px] items-center gap-1 border rounded ">
                    <FiSearch className="h-5 w-5 ml-1" />
                    <input type="text" placeholder='Search' className='p-1 w-[500px]  border-hidden rounded-r-xl focus:outline-none' />
                  </div>
                </div>
                <div className=" overflow-scroll ">
                  <table className='w-full border border-collapse bg-white'>
                    <tr>
                      <th className=' p-3 '>ID</th>
                      <th className=' p-3'>Name</th>
                      <th className=' p-3'>Status</th>
                      <th className=' p-3'>Joined Date</th>
                    </tr>
                    {tableData.map((person) => {
                      return (
                        <tr key={person.id} onClick={handleRowClick} className="cursor-pointer hover:bg-gray-100">
                          <td className='p-3'>{person.id}</td>
                          <td className='p-3'>{person.fullname}</td>
                          <td className='p-3'>{person.status}</td>
                          <td className='p-3'>{person.joinDate}</td>
                        </tr>)
                    })}

                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

