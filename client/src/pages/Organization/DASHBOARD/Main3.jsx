import React, { useState } from "react";
import Summary from "./SUMMARY/Summary";
import Reports from "./REPORTS/Reports";

// import other components like DailyAttendance, Leave, etc.

const Main3 = () => {
  const tabs = [
   "Summary",
   "Reports"
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
   {
    activeTab=="Summary"&&(
        <Summary/>
    )
   }
   {
    activeTab=="Reports"&&(
        <Reports/>
    )
   }
      </div>
    </div>
  );
};

export default Main3;
