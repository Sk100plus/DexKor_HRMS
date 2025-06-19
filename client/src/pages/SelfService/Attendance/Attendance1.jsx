import React, { useState } from "react";
import Summary from "./Summary.jsx";
import DailyAtt from "./DailyAtt.jsx";
import Holiday from "./Holiday.jsx";
import Leave from "./Leave.jsx";
import Mispunch from "./Mispunch.jsx";
import OptHoliday from "./OptHoliday.jsx";
import Overtime from "./Overtime.jsx";
import WFH from "./WFH.jsx";
import CompOff from "./CompOff.jsx";

// import other components like DailyAttendance, Leave, etc.

const Attendance1 = () => {
  const tabs = [
    "Summary",
    "Daily Attendance",
    "Holiday",
    "Leave",
    "Missed Punch",
    "Comp-Off",
    "Overtime",
    "WFH",
    "Optional Holiday",
  ];

  const [activeTab, setActiveTab] = useState("Summary");

  return (
    <div className="ml-3 select-none">
      {/* Horizontal Tabs */}
      <div className="flex space-x-4 border-b border-gray-200 pb-2 font-medium">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={` text-[10px] cursor-pointer pb-1 border-b-2 ${
              activeTab === tab
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-blue-500"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
      {activeTab === "Summary" && <Summary/>}
      {activeTab === "Daily Attendance" && <DailyAtt/>}
      {activeTab === "Holiday" && <Holiday/>}
      {activeTab === "Leave" && <Leave/>}
      {activeTab === "Missed Punch" && <Mispunch/>}
      {activeTab === "Comp-Off" && <CompOff/>}
      {activeTab === "Optional Holiday" && <OptHoliday/>}
      {activeTab === "WFH" && <WFH/>}
      {activeTab === "Overtime" && <Overtime/>}
        
      </div>
    </div>
  );
};

export default Attendance1;
