import React from 'react'
import LibrarianHeader from '../../components/librarianHeader'
import Navbar from '../../components/Navbar'
import { FiSearch } from "react-icons/fi";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


export const LibrarianDashboard = () => {

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
  }];

  return (

    <div className='bg-gray-200 flex flex-col gap-10 w-full p-2'>
      <LibrarianHeader />

      <Navbar />

      <div className="flex justify-evenly ">
        <button className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 active:bg-black shadow-slate-500 shadow-md mt-[100px] text-center"
          onClick={handleAddBookClick}>
          STUDENTS
        </button>
        <button className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 shadow-slate-500 shadow-md mt-[100px] text-center">
          FACULTY MEMBERS
        </button>
        <button className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 shadow-slate-500 shadow-md mt-[100px] text-center">
          LIBRARY ASSISTANT
        </button>
        <button className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 shadow-slate-500 shadow-md mt-[100px] text-center">
          PROGRAM COORDINATOR
        </button>
      </div>

      <div className='mx-[170px] flex flex-col bg-white relative'>

        <div className='flex justify-center m-2'>
          <div className="flex w-[500px] items-center gap-1 border rounded ">
            <FiSearch className="h-5 w-5 ml-1" />
            <input type="text" placeholder='Search' className='p-1 w-[500px]  border-hidden rounded-r-xl focus:outline-none' />
          </div>
        </div>
        <div className="h-[360px] overflow-scroll ">

          <div className="absolute left-[85%] bottom-[15%] ">
            <IoIosAddCircle className="h-16 w-16 cursor-pointer text-blue-500 hover:text-black "
              onClick={handleAddIconClick} />
          </div>
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


  )
}
