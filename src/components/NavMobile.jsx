import React from "react";
import { useNavigate } from "react-router-dom";

const NavMobile = () => {
  const navigate = useNavigate();
  const handleLibraryDash = () => {
    navigate(`/librarian-dashboard`);
  };
  const handleLibraryBooks = () => {
    navigate(`/librarian-books`);
  };
  const handleMessage = () => {
    navigate(`/message`);
  };
  const handleSettings = () => {
    navigate(`/settings`);
  };
  const handleHelp = () => {
    navigate(`/help`);
  };
  const handleNotification = () => {
    navigate(`/notifications`);
  };
  const handleLibrarianFines = () => {
    navigate(`/librarian-fines`);
  };
  const handleLibrarianOthers = () => {
    navigate(`/librarian-others`);
  };
  return (
    <div className="relative w-screen h-screen flex flex-col text-white items-center justify-center text-2xl bg-black/80">
      <button
        onClick={handleLibraryDash}
        className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700"
      >
        Home
      </button>
      <button
        onClick={handleLibraryBooks}
        className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 "
      >
        Books
      </button>
      <button className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 ">
        Patrons
      </button>
      <button
        onClick={handleMessage}
        className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700"
      >
        Message
      </button>
      <button
        onClick={handleLibrarianFines}
        className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700"
      >
        Fines
      </button>
      <button
        onClick={handleLibrarianOthers}
        className="w-[80px] h-[40px] rounded-r-full rounded-l-full hover:bg-red-700 "
      >
        Others
      </button>
      <div className="absolute top-[10%] right-[10%] text-[40px] ">&times;</div>
    </div>
  );
};

export default NavMobile;
