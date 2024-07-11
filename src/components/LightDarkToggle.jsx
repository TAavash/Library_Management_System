import React, { useState, useEffect } from 'react';

const LightDarkToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className={`w-16 h-8 flex items-center rounded-full p-1 ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-300'
      }`}
      onClick={handleToggle}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
          isDarkMode ? 'translate-x-8' : 'translate-x-0'
        }`}
      ></div>
    </button>
  );
};

export default LightDarkToggle;
