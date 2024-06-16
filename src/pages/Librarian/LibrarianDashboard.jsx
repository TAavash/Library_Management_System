import React from 'react'
import LibrarianHeader from '../../components/librarianHeader'
import Navbar from '../../components/Navbar'


export const LibrarianDashboard = () => {
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
  }]
  return (
    <div className='bg-gray-200 flex flex-col gap-10 w-full p-2'>
      <LibrarianHeader />

      <Navbar />

      <div className="flex justify-evenly ">
        <button className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 active:bg-black shadow-slate-500 shadow-md mt-[100px]">
          All Books
        </button>
        <button className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 shadow-slate-500 shadow-md mt-[100px]">
          Check-In
        </button>
        <button className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 shadow-slate-500 shadow-md mt-[100px]">
          Check-Out
        </button>
        <button className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 shadow-slate-500 shadow-md mt-[100px]">
          Reservations
        </button>
      </div>

      <div className='mx-[170px]'>
        <table className='border border-collapse bg-white'>
          <tr className=''>
            <th className='w-24 p-2'>ID</th>
            <th className='w-24 p-2'>Name</th>
            <th className='w-24 p-2'>Status</th>
            <th className='w-32 p-2'>Joined Date</th>
          </tr>
          {tableData.map((person) => {
            return (
              <tr key={person.id}>
                <td className='p-3'>{person.id}</td>
                <td className='p-3'>{person.fullname}</td>
                <td className='p-3'>{person.status}</td>
                <td className='p-3'>{person.joinDate}</td>
              </tr>)
          })}

        </table>
      </div>

    </div>


  )
}
