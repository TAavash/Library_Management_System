import React, { useState } from "react";
import { IoMail } from "react-icons/io5";
// import { FaBell } from "react-icons/fa";
// import { IoSettingsSharp } from "react-icons/io5";
// import { FiSearch } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import NavNew from "../../../../components/NavNew";
import BookRenewalRequest from "./BookRenewalRequest";
import UserAccountRequest from "./UserAccountRequest";

export default function LibraryRequestPage() {
  const navigate = useNavigate();

  const handleMemberRegistration = () => {
    navigate("/MemberRegistration");
  };

  const handlePatrons = () => {
    navigate("/LibraryDash");
  };

  const handleRequestClick = () => {
    navigate("/LibraryRequestPage");
  };

  const handleMembershipClick = () => {
    navigate("/MembershipPage");
  };

  const [active, setActive] = useState("User Account Request");

  const location = useLocation();

  const handleAccountActive = () => {
    setActive("User Account Request");
  };
  const handleRenewalActive = () => {
    setActive("Book Renewal Request");
  };

  console.log(location);

  const renderActiveComponent = () => {
    switch (active) {
      case "Book Renewal Request":
        return <BookRenewalRequest />;
      default:
        return <UserAccountRequest />;
    }
  };

  return (
    <div>
      <NavNew />
      <div className="min-h-screen h-auto bg-gray-200 py-[10px]">
        <div className="flex justify-evenly gap-[20px] mx-[3%]">
          <button
            className="w-[150px] h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white  shadow-slate-500 shadow-md mt-[100px]"
            onClick={handlePatrons}
          >
            Users
          </button>
          <button
            className="w-[150px] h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white  shadow-slate-500 shadow-md mt-[100px]"
            onClick={handleMemberRegistration}
          >
            Add Member
          </button>
          <button
            className="w-[150px] h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white  shadow-slate-500 shadow-md mt-[100px]"
            onClick={handleMembershipClick}
          >
            Membership
          </button>
          <button
            className="w-[150px] h-[120px] rounded-2xl bg-[#14273D] text-white shadow-slate-500 shadow-md mt-[100px]"
            onClick={handleRequestClick}
          >
            Request
          </button>
        </div>
        <div className="p-[20px] ">
          <div className="flex h-[800px] w-[100%] my-[100px] rounded-2xl bg-white shadow-slate-500 shadow-md ">
            <div className="h-[800px] w-[300px] rounded-l-2xl bg-[#14273D]">
              <div className="flex flex-col gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
                <IoMail className=" fill-[#A3A3A3]  text-4xl" />
                <div className="text-white flex-col justify-center text-center text-3xl">
                  Requests
                </div>
              </div>
              <div className="text-[#737373] flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-[50px]">
                <button
                  className="h-auto hover:text-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleAccountActive}
                >
                  {active === "User Account Request" ? (
                    <div className="text-white">User Account Request</div>
                  ) : (
                    <div>User Account Request</div>
                  )}
                </button>
                <button
                  className="h-auto hover:text-white  rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleRenewalActive}
                >
                  {active === "Book Renewal Request" ? (
                    <div className="text-white">Book Renewal Request</div>
                  ) : (
                    <div>Book Renewal Request</div>
                  )}
                </button>
              </div>
            </div>
            <div className="w-full h-full rounded-2xl">
              <div className="w-full h-full rounded-2xl">
                {renderActiveComponent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}