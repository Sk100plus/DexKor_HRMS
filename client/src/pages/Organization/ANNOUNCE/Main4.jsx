import React, { useState } from "react";
import Category from "./Category";
import AllAnnoun from "./AllAnnoun";

// import other components like DailyAttendance, Leave, etc.

const Main4 = () => {
  const tabs = [
   "Categories",
   "All Announcements"
  ];

  const [activeTab, setActiveTab] = useState("Categories");

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
    activeTab=="Categories"&&(
        <Category/>
    )
   }
   {
    activeTab=="All Announcements"&&(
        <AllAnnoun/>
    )
   }
      </div>
    </div>
  );
};

export default Main4;
