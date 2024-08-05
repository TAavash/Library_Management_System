import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    navigate(`/`);
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="h-fit w-[100px] rounded-md text-white bg-red-600 hover:bg-slate-800 active:bg-black text-2xl p-[2px] px-[3px]"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
