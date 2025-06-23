import React, { useState } from "react";
import AppConfig from "./AppConfig";
import SmartForWo from "./SmartForWo";
import CustAppEm from "./CustAppEm";
import SMTPConf from "./SMTPConf";

// import other components like DailyAttendance, Leave, etc.

const Main13 = () => {
  const tabs = [
    "Approval Configuration",
    "Smart Forms & Workflows",
    "Customizable Appreciation Email",
    "SMTP Configuration"
  ];

  const [activeTab, setActiveTab] = useState("Approval Configuration");

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
      {activeTab === "Approval Configuration" && <AppConfig/>}
      {activeTab === "Smart Forms & Workflows" && <SmartForWo/>}
      {activeTab === "Customizable Appreciation Email" && <CustAppEm/>}
      {activeTab === "SMTP Configuration" && <SMTPConf/>}
      </div>
    </div>
  );
};

export default Main13;
