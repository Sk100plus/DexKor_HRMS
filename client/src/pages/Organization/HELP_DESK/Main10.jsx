import React, { useState } from "react";
import Summary from "./Summary";
import Categories from "./Categories";
import Grievance from "./Grievance";
import Tickets from "./Tickets";
import KnowBase from "./KnowBase";
import SLACod from "./SLACod";
import HelpDesk from "./HelpDesk";
import CloseRea from "./CloseRea";

// import other components like DailyAttendance, Leave, etc.

const Main10 = () => {
    const tabs = [
        "Summary",
        "Categories",
        "Grievance",
        "Tickets",
        "Close Reasons",
        "Knowledge Base",
        "SLA Config",
        "Help-Desk Team"
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
  activeTab == "Summary" && <Summary/>
}
{
  activeTab == "Categories" && <Categories/>
}
{
  activeTab == "Grievance" && <Grievance/>
}
{
  activeTab == "Tickets" && <Tickets/>
}
{
  activeTab == "Close Reasons" && <CloseRea/>
}
{
  activeTab == "Knowledge Base" && <KnowBase/>
}
{
  activeTab == "SLA Config" && <SLACod/>
}
{
  activeTab == "Help-Desk Team" && <HelpDesk/>
}

      </div>
    </div>
  );
};

export default Main10;
