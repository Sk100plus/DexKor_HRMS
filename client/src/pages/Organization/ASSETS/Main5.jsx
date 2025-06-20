import React, { useState } from "react";
import Summary from "./Summary";
import AssCateg from "./AssCateg";
import AssAvail from "./AssAvail";
import RepTeam from "./RepTeam";
import PurOrd from "./PurOrd";
// import other components like DailyAttendance, Leave, etc.

const Main5 = () => {
  const tabs = [
   "Summary",
   "Asset Categories",
   "Asset Availability",
   "Repair Team",
   "Purchase Order",
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
    activeTab=="Asset Categories"&&(
        <AssCateg/>
    )
   }
      {
    activeTab=="Asset Availability"&&(
        <AssAvail/>
    )
   }
   {
    activeTab=="Repair Team"&&(
        <RepTeam/>
    )
   }
    {
    activeTab=="Purchase Order"&&(
        <PurOrd/>
    )
   }
      </div>
    </div>
  );
};

export default Main5;
