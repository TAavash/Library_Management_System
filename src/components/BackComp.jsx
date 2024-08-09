import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BackComp = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div>
      <button className="absolute left-4 text-4xl" onClick={handleBackClick}>
        <IoArrowBackCircle />
      </button>
    </div>
  );
};

export default BackComp;
