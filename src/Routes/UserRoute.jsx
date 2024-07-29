
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Reservations from '../pages/User/Reservations';
import Ebooks from '../pages/User/Ebooks';
import Discover from '../pages/User/Discover';
import Userdash from '../pages/User/Userdash';
import BookDetail from "../pages/User/BookDetail"
import MyLearning from '../pages/User/MyLearning';
import UserProfile from '../pages/User/UserProfile';
import UserNotification from '../../src/pages/User/comp/UserNotification'

export default function UserRoute() {
  return (
    <div>
              <Routes>
                <Route path="/user/home" element={<Userdash />} />
                <Route path="/user/discover" element={<Discover />} />
                <Route path="/user/reservations" element={<Reservations />} />
                <Route path="/user/e-books" element={<Ebooks />} />
                <Route path="/user/book-detail" element={<BookDetail />} />
                <Route path="/user/my-learning" element={<MyLearning />}/>
                <Route path="/user/profile" element={<UserProfile />} />
                <Route path="/user/notification" element={<UserNotification />} />

              </Routes>
            
      
    </div>
  );
};
