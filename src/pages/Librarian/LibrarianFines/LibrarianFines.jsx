import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import NavNew from "../../../components/NavNew";
import All from "../LibrarianFines/SidebarComp/All";
import Damaged from "../LibrarianFines/SidebarComp/Damaged";
import Overdue from "../LibrarianFines/SidebarComp/Overdue";
import Payment from "../LibrarianFines/SidebarComp/Payment";

const LibrarianFines = () => {
  const [active, setActive] = useState("all");

  const location = useLocation();

  const handleAllActive = () => {
    setActive("all");
  };
  const handleDamagedActive = () => {
    setActive("damaged");
  };
  const handleOverdueActive = () => {
    setActive("overdue");
  };
  const handlePaymentActive = () => {
    setActive("payment");
  };

  console.log(location);

  const renderActiveComponent = () => {
    switch (active) {
      case "damaged":
        return <Damaged />;
      case "overdue":
        return <Overdue />;
      case "payment":
        return <Payment />;
      default:
        return <All />;
    }
  };

  return (
    <div>
      <NavNew />
      <div className="min-h-screen h-auto bg-gray-200 py-[10px]">
        <div className="p-[20px]">
          <div className="flex h-[800px] w-[100%] mt-[100px] rounded-2xl bg-white shadow-slate-500 shadow-md ">
            <div className="h-[800px] w-[300px] rounded-l-2xl bg-[#14273D]">
              <div className="flex flex-col gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
                <FaDollarSign className=" fill-[#A3A3A3]  text-4xl" />
                <div className="text-white flex-col justify-center text-center text-3xl">
                  Fines
                </div>
              </div>
              <div className="text-[#737373] flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-[50px]">
                <button
                  onClick={handleAllActive}
                  className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                >
                  {active === "all" ? (
                    <div className="text-red-600">All Fines</div>
                  ) : (
                    <div>All Fines</div>
                  )}
                </button>
                <button
                  onClick={handleOverdueActive}
                  className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                >
                  {active === "overdue" ? (
                    <div className="text-red-600">Overdue</div>
                  ) : (
                    <div>Overdue</div>
                  )}
                </button>
                <button
                  onClick={handleDamagedActive}
                  className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                >
                  {active === "damaged" ? (
                    <div className="text-red-600">Damaged</div>
                  ) : (
                    <div>Damaged</div>
                  )}
                </button>
                <button
                  onClick={handlePaymentActive}
                  className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                >
                  {active === "payment" ? (
                    <div className="text-red-600">Payment</div>
                  ) : (
                    <div>Payment</div>
                  )}
                </button>
              </div>
            </div>
            <div className="w-full h-full rounded-2xl">
              {renderActiveComponent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibrarianFines;
