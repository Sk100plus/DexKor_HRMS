import React, { useState } from "react";

import HRLetter from "./HRLetter";
import EmpDoc from "./EmpDoc";
import Policies from "./Policies";
import DocType from "./DocType";
import BulkDat from "./BulkDat";

// import other components like DailyAttendance, Leave, etc.

const Main11 = () => {
    const tabs = [
        "HR Letters",
        "Employee Documents",
        "Bulk Data Upload",
        "Policies",
        "Document Type"
      ];
      

  const [activeTab, setActiveTab] = useState("HR Letters");

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
  activeTab == "HR Letters" && <HRLetter/>
}
{
  activeTab == "Employee Documents" && <EmpDoc/>
}
{
  activeTab == "Bulk Data Upload" && <BulkDat/>
}
{
  activeTab == "Policies" && <Policies/>
}
{
  activeTab == "Document Type" && <DocType/>
}

      </div>
    </div>
  );
};

export default Main11;
