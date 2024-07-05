
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from '../pages/User/Hero';
import Wishlist from '../pages/User/Wishlist';
import Added from '../pages/User/Added';
import Ebooks from '../pages/User/Ebooks';
import Discover from '../pages/User/Discover';
import Userdash from '../pages/User/Userdash';

export default function UserRoute() {
  return (
    <div>
              <Routes>
                <Route path="/user/home" element={<Userdash />} />
                <Route path="/user/discover" element={<Discover />} />
                <Route path="/user/added" element={<Added />} />
                <Route path="/user/e-books" element={<Ebooks />} />
                <Route path="/user/wishlist" element={<Wishlist />} />
              </Routes>
            
      
    </div>
  );
};
