import React from 'react'
import LibrarianHeader from '../../components/librarianHeader'
import Navbar from '../../components/Navbar'


export const LibrarianDashboard = () => {
  return (
    <div className='bg-gray-200 flex flex-col w-full  h-screen p-2'>
      <LibrarianHeader />
      
      <Navbar />

    </div>


  )
}
