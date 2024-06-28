import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      className={`w-16 h-8 flex items-center rounded-full p-1 ${
        isToggled ? 'bg-green-500' : 'bg-gray-300'
      }`}
      onClick={handleToggle}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
          isToggled ? 'translate-x-8' : 'translate-x-0'
        }`}
      ></div>
    </button>
  );
};

export default ToggleButton;
