import React, { useState } from "react";

const ToggleButton = () => {
  const [active, setActive] = useState("Explore");

  const toggle = (option) => {
    setActive(option);
  };

  return (
    <div className="flex flex-col mx-4 mt-8">
      <div className="flex justify-between items-center w-full">
        <div className="text-3xl font-bold text-brown-700">
          Delve into the world of E-Books
        </div>
        <div className="flex">
          <button
            className={`px-4 py-2 ${
              active === "Explore"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            } rounded-l-lg transition duration-300 ease-in-out`}
            onClick={() => toggle("Explore")}
          >
            Explore
          </button>
          <button
            className={`px-4 py-2 ${
              active === "MyLearnings"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            } rounded-r-lg transition duration-300 ease-in-out`}
            onClick={() => toggle("MyLearnings")}
          >
            My Learnings
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;
