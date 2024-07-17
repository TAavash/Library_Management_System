import React from 'react';
import image from "../assets/bookCover.jpg";

const Card = () => {
  return (
    <div className="lg:w-1/3 md:w-1/2 sm:w-full p-2">
      <div className="item h-full flex flex-col justify-between">
        <div className="cours-bx pb-3 h-full flex flex-col justify-between">
          <div className="action-box">
            <img src={image} alt="Course" className="w-full" />
            <div className="btn btn-primary bg-red-600 text-white mt-2 block text-center">Read More</div>
          </div>
          <div className="info-bx text-center mt-4">
            <h5>
              <div className="text-blue-600">BSC (HONS) IN SOFTWARE ENGINEERING</div>
            </h5>
            <span className="text-gray-600">This aim in providing a foundation for specialist study in software engineering.</span>
          </div>
          <div className="cours-see-course-btn flex justify-center mt-4">
            <div className="btn bg-red-600 text-white text-center"><b>EXPLORE COURSE</b></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;