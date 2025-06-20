import React, { useState } from "react";
import LeaReq from "./LeaReq";
import MissPun from "./MissPun";
import OptHolReq from "./OptHolReq";
import Comp_off from "./Comp_off";
import OverReq from "./OverReq";
import WFHReq from "./WFHReq";

// import other components like DailyAttendance, Leave, etc.

const Main = () => {
  const tabs = [
    "Leave Requests",
    "Missed Punch Requests",
    "Comp-Off Requests",
    "Overtime Requests",
    "WFH Requests",
    "Optional Holiday Requests",
  ];

  const [activeTab, setActiveTab] = useState("Leave Requests");

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
            activeTab=="Leave Requests"&&(
                <LeaReq/>
            )
        }
        {
            activeTab=="Missed Punch Requests"&&(
                <MissPun/>
            )
        }
          {
            activeTab=="Optional Holiday Requests"&&(
                <OptHolReq/>
            )
        }
        {
          activeTab=="Comp-Off Requests"&&(
            <Comp_off/>
          )
        }
        {
          activeTab=="Overtime Requests"&&(
            <OverReq/>
          )
        }{
          activeTab=="WFH Requests"&&(
            <WFHReq/>
          )
        }
      </div>
    </div>
  );
};

export default Main;
