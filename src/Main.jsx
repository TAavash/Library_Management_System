import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './pages/User/Hero'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Discover from './pages/User/Discover'
import Ebooks from './pages/User/Ebooks'
import Added from './pages/User/Added'
import Wishlist from './pages/User/Wishlist'

const App = () => {
  return (
    <Router>
    <div className='bg-[#828282] min-h-screen min-w-screen flex'>
      <Sidebar />
      <div className='flex-grow'>
        <div className='flex flex-col gap-[20px]'>
        <Navbar />
          <Routes>
            <Route path='/' element={<Hero />}/>
            <Route path='/discover' element={<Discover />}/>
            <Route path='/added' element={<Added />}/>
            <Route path='/e-books' element={<Ebooks />}/>
            <Route path='/wishlist' element={<Wishlist />}/>
          </Routes>
        </div>
      </div>
      <Sidebar />
    </div>
    </Router>
  )
}

export default App
