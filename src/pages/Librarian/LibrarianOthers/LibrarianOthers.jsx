import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import NavNew from "../../../components/NavNew";
import ReportAndAnalytics from "../LibrarianOthers/SidebarComp/ReportAndAnalytics";
import ReviewAndRatings from "../LibrarianOthers/SidebarComp/ReviewAndRatings";
import Calendar from "../LibrarianOthers/SidebarComp/Calendar";
import History from "../LibrarianOthers/SidebarComp/History";

const LibrarianOthers = () => {
  const [active, setActive] = useState("report");

  const location = useLocation();

  const handleCalendarActive = () => {
    setActive("calendar");
  };
  const handleHistoryActive = () => {
    setActive("history");
  };
  const handleReportActive = () => {
    setActive("report");
  };
  const handleReviewActive = () => {
    setActive("review");
  };

  console.log(location);

  const renderActiveComponent = () => {
    switch (active) {
      case "calendar":
        return <Calendar />;
      case "history":
        return <History />;
      case "review":
        return <ReviewAndRatings />;
      default:
        return <ReportAndAnalytics />;
    }
  };

  return (
    <div>
      <NavNew />
      <div className="min-h-screen h-auto bg-gray-200 py-[10px]">
        <div className="p-[20px]">
          <div className="flex h-[800px] w-[100%] my-[100px] rounded-2xl bg-white shadow-slate-500 shadow-md ">
            <div className="h-[800px] w-[300px] rounded-l-2xl bg-[#14273D]">
              <div className="flex flex-col gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
                <GiHamburgerMenu className=" fill-[#A3A3A3]  text-4xl" />
                <div className="text-white flex-col justify-center text-center text-3xl">
                  Others
                </div>
              </div>
              <div className="text-[#737373] flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-[50px]">
                <button
                  onClick={handleReportActive}
                  className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                >
                  {active === "report" ? (
                    <div className="text-red-600">Report & Analytics</div>
                  ) : (
                    <div>Report & Analytics</div>
                  )}
                </button>
                <button
                  onClick={handleReviewActive}
                  className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                >
                  {active === "review" ? (
                    <div className="text-red-600">Review & Ratings</div>
                  ) : (
                    <div>Review & Ratings</div>
                  )}
                </button>
                <button
                  onClick={handleCalendarActive}
                  className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                >
                  {active === "calendar" ? (
                    <div className="text-red-600">Calendar</div>
                  ) : (
                    <div>Calendar</div>
                  )}
                </button>
                <button
                  onClick={handleHistoryActive}
                  className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                >
                  {active === "history" ? (
                    <div className="text-red-600">History</div>
                  ) : (
                    <div>History</div>
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

export default LibrarianOthers;
