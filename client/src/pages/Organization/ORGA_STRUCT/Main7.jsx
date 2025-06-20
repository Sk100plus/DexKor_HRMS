import React, { useState } from "react";
import LegaEnt from "./LegaEnt";
import Depart from "./Depart";
import Design from "./Design";
import WorkLoc from "./WorkLoc";
import CosCent from "./CosCent";
import SalStr from "./SalStr";
import CustField from "./CustField";
import BulOper from "./BulOper";
import FinaYrCon from "./FinaYrCon";
import BusiUni from "./BusiUni";

// import other components like DailyAttendance, Leave, etc.

const Main7 = () => {
    const tabs = [
        "Legal Entity",
        "Department",
        "Designation",
        "Work Location",
        "Cost Center",
        "Salary Structures",
        "Custom Fields",
        "Pay Bands",
        "Bulk Operations",
        "Financial Year Configuration",
        "Business Unit"
      ];
      

  const [activeTab, setActiveTab] = useState("Legal Entity");

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
  activeTab == "Legal Entity" && <LegaEnt/>
}
{
  activeTab == "Department" && <Depart/>
}
{
  activeTab == "Designation" && <Design/>
}
{
  activeTab == "Work Location" && <WorkLoc/>
}
{
  activeTab == "Cost Center" && <CosCent/>
}
{
  activeTab == "Salary Structures" && <SalStr/>
}
{
  activeTab == "Custom Fields" && <CustField/>
}
{
  activeTab == "Pay Bands" && <PayBand/>
}
{
  activeTab == "Bulk Operations" && <BulOper/>
}
{
  activeTab == "Financial Year Configuration" && <FinaYrCon/>
}
{
  activeTab == "Business Unit" && <BusiUni/>
}
      </div>
    </div>
  );
};

export default Main7;
