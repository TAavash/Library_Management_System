import React from 'react';
import { FiBookmark } from "react-icons/fi";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const Card = () => {
  const handleClick = () => {
    window.location.href = 'https://www.coursera.org/specializations/python?utm_source=gg&utm_medium=sem&utm_campaign=b2c_apac_python_michigan_ftcof_specializations_arte_june-24_dr_geo-set-3-multi_sem_rsa_gads_lg-all&utm_content=b2c&campaignid=21319388324&adgroupid=162007546039&device=c&keyword=python%20course&matchtype=p&network=g&devicemodel=&adpostion=&creativeid=700498974668&hide_mobile_promo&gad_source=1&gclid=Cj0KCQjw-ai0BhDPARIsAB6hmP4ZHu8LGH5OQe6gsfuQgVJyhZcC37uyCjuF1F8RNff3QwWv4jV72ZQaAjkeEALw_wcB';
  };

  return (
    <div 
      className="max-w-[200px] m-4 rounded overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer" 
      onClick={handleClick}
    >
      <img className="w-full h-32 object-cover" src="https://via.placeholder.com/200x150" alt="Mountain" />
      <div className="px-4 py-3">
        <div className="font-bold mb-2">Python for Everybody Specialization</div>
        <p className="text-gray-700 text-sm">
        Learn to Program and Analyze Data with Python. Develop programs to gather, clean, analyze, and visualize data.
        </p>
      </div>
      <div className="px-4 pt-3 pb-2 flex gap-3  rounded-lg">
        <div className="bg-gray-200 rounded-lg p-1">
          <button className="hover:text-red-400 transition duration-300 ease-in-out">
          <FiBookmark />
          </button>
        </div>
        <div className="bg-gray-200 rounded-lg p-1">
          <button className="hover:text-red-400 transition duration-300 ease-in-out">
          <MdOutlineAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
