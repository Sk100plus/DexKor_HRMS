import React, { useState } from "react";
import LetReq from "./LetReq";
import ResReq from "./ResReq";
import ResTaEmp from "./ResTaEmp";
import AssReq from "./AssReq";
import AssShiReq from "./AssShiReq";
import AssRepRe from "./AssRepRe";
import Prob from "./Prob";
import RepMan from "./repMan";


// import other components like DailyAttendance, Leave, etc.

const Main2 = () => {
  const tabs = [
    "Letter Requests",
    "Resignation Requests",
    "Resignation Task Employees",
    "Asset Requests",
    "Asset Shipment Requests",
    "Asset Repair Requests",
    "Probation",
    "Reporting Manager Request",
  ];

  const [activeTab, setActiveTab] = useState("Letter Requests");

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
    activeTab=="Letter Requests"&&(
        <LetReq/>
    )
   }
   {
    activeTab=="Resignation Requests"&&(
        <ResReq/>
    )
   }
   {
    activeTab=="Resignation Task Employees"&&(
        <ResTaEmp/>
    )
   }{
    activeTab=="Asset Requests"&&(
        <AssReq/>
    )
   }
   {
    activeTab=="Asset Shipment Requests"&&(
        <AssShiReq/>
    )
   }
   {
    activeTab=="Asset Repair Requests"&&(
        <AssRepRe/>
    )
      
    
   }{
    activeTab=="Probation"&&(
        <Prob/>
    )
   }
   {
    activeTab=="Reporting Manager Request"&&(
        <RepMan/>
    )
   }
      </div>
    </div>
  );
};

export default Main2;
