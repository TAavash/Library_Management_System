import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoBookSharp } from 'react-icons/io5';
import { MdBookmarkAdded, MdLocalLibrary } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi';

const MobileNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { icon: <MdLocalLibrary />, label: 'Dashboard', path: '/user/home' },
    { icon: <IoBookSharp />, label: 'Discover', path: '/user/discover' },
    { icon: <MdBookmarkAdded />, label: 'Reservations', path: '/user/reservations' },
    { icon: <HiDocumentText />, label: 'E-books', path: '/user/e-books' },
  ];

  useEffect(() => {
    // On mount, set the active index based on the current route
    const currentPath = location.pathname;
    const foundIndex = navItems.findIndex(item => item.path === currentPath);
    if (foundIndex !== -1) {
      setActiveIndex(foundIndex);
      // Store in localStorage as fallback
      localStorage.setItem('activeIndex', foundIndex);
    } else {
      const storedIndex = localStorage.getItem('activeIndex');
      if (storedIndex !== null) {
        setActiveIndex(parseInt(storedIndex, 10));
      }
    }
  }, [location.pathname]);

  const handleNavigation = (index, path) => {
    setActiveIndex(index);
    navigate(path);
    // Store in localStorage to preserve state across page navigations
    localStorage.setItem('activeIndex', index);
  };

  return (
    <div className="fixed bottom-0 w-full bg-white py-2 px-4 flex justify-around items-center z-50 shadow-lg rounded-t-lg">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center cursor-pointer p-2 transition-transform duration-300 transform ${
            activeIndex === index ? 'scale-110' : ''
          }`}
          onClick={() => handleNavigation(index, item.path)}
        >
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'bg-black text-white' : 'bg-transparent text-black'
            }`}
          >
            {item.icon}
          </div>
          <p className={`mt-1 text-sm transition-all duration-300 ${activeIndex === index ? 'text-black' : 'text-gray-500'}`}>
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MobileNavBar;
