import React, { useState } from "react";
import Dir from "./Dir";
import OrgTree from "./OrgTree";
import LogOver from "./LogOver";
import Prob from "./Prob";
import Contr from "./Contr";
import ContStaff from "./ContStaff";
import Insur from "./Insur";
import EmpCode from "./EmpCode";
import BulOper from "./BulOper";
import AudLog from "./AudLog";

// import other components like DailyAttendance, Leave, etc.

const Main6 = () => {
  const tabs = [
   "Directry",
   "Organization Tree",
   "Login Overview",
   "Probation",
   "Contingent Staff",
   "Insurances",
   "Contracts",
   "Emloyee Code Setup",
   "Bulk Operations",
   "Audit Logs"
  ];

  const [activeTab, setActiveTab] = useState("Directry");

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
    activeTab=="Directry"&&(
        <Dir/>
    )
   }
   {
    activeTab=="Organization Tree"&&(
        <OrgTree/>
    )
   }
     {
    activeTab=="Login Overview"&&(
        <LogOver/>
    )
   }
   {
    activeTab=="Probation"&&(
        <Prob/>
    )
   }
     {
    activeTab=="Contingent Staff"&&(
        <ContStaff/>
    )
   }
   {
    activeTab=="Insurances"&&(
        <Insur/>
    )
   }
       {
    activeTab=="Contracts"&&(
        <Contr/>
    )
   }
   {
    activeTab=="Emloyee Code Setup"&&(
        <EmpCode/>
    )
   }
       {
    activeTab=="Bulk Operations"&&(
        <BulOper/>
    )
   }
   {
    activeTab=="Audit Logs"&&(
        <AudLog/>
    )
   }
      </div>
    </div>
  );
};

export default Main6;
