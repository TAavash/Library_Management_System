import React, { useState } from "react";


const State = () => {

    const [isOpen,setIsOpen]=useState(false)
  return (
    <div>
      <div className="h-[40px] w-[200px] bg-red-300 fixed left-[200px] top-[50px]"></div>
    </div>
  );
};

export default State;
