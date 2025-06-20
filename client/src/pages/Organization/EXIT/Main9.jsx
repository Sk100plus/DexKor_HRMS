import React, { useState } from "react";
import NotPer from "./NotPer";
import ExiProEmp from "./ExiProEmp";
import ExitTask from "./ExitTask";
import ExitRea from "./ExitRea";

// import other components like DailyAttendance, Leave, etc.

const Main9 = () => {
    const tabs = [
        "Notice Period",
        "Exit Process Employees",
        "Exit Tasks",
        "Exit Reason"
      ];
      

  const [activeTab, setActiveTab] = useState("Notice Period");

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
  activeTab == "Notice Period" && <NotPer/>
}
{
  activeTab == "Exit Process Employees" && <ExiProEmp/>
}
{
  activeTab == "Exit Tasks" && <ExitTask/>
}
{
  activeTab == "Exit Reason" && <ExitRea/>
}

      </div>
    </div>
  );
};

export default Main9;
