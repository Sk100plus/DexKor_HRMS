import React, { useState } from "react";
import Cand from "./Cand";
import Outsource from "./Outsource";
import OnbGroup from "./OnbGroup";
import OnbTask from "./OnbTask";
import OnbEmp from "./OnbEmp";
import TaskCat from "./TaskCat";
import Requist from "./Requist";
import AgencyEmp from "./AgencyEmp";

// import other components like DailyAttendance, Leave, etc.

const Main8 = () => {
    const tabs = [
        "Candidates",
        "Outsources",
        "Onboarding Tasks",
        "Onboarding Groups",
        "Onboarding Employees",
        "Task Category",
        "Requisitions",
        "Agency Employee Page Configuration"
      ];
      

  const [activeTab, setActiveTab] = useState("Candidates");

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
  activeTab == "Candidates" && <Cand/>
}
{
  activeTab == "Outsources" && <Outsource/>
}
{
  activeTab == "Onboarding Tasks" && <OnbTask/>
}
{
  activeTab == "Onboarding Groups" && <OnbGroup/>
}
{
  activeTab == "Onboarding Employees" && <OnbEmp/>
}
{
  activeTab == "Task Category" && <TaskCat/>
}
{
  activeTab == "Requisitions" && <Requist/>
}
{
  activeTab == "Agency Employee Page Configuration" && <AgencyEmp/>
}

      </div>
    </div>
  );
};

export default Main8;
