import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/LoginPage'
import Register from '../pages/Register'
import LibrarianDash from '../pages/LibrarianDash'
import LibrarianBooks from '../pages/LibrarianBooks'

export default function RoutesNav () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/librarian-dashboard' element={<LibrarianDash />} />
        <Route path='/librarian-books' element={<LibrarianBooks />} />
      </Routes>
    </>
  )
}
