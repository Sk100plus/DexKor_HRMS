import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Profile from '../Dashboard/Profile';
import Summary from './Summary';
import Attendance from './Attendance';

const MyTeam = () => {
    const tabs = [
"SUMMARY","ATTENDANCE","PERFORMANCE","TASK"
      ];
      

  const [activeTab, setActiveTab] = useState("SUMMARY");

  return (
    <div className="flex flex-col h-screen select-none">
      {/* Sticky Profile Bar */}
      <div className="sticky top-0 z-50 bg-white shadow">
        <Profile/>
      </div>

      <div className="flex flex-1">
        {/* Sticky Left Navbar */}
        <div className="sticky top-[60px] h-[calc(100vh-60px)] bg-white shadow-md z-40">
          <Navbar/>
        </div>

        {/* Right Main Content Scrollable */}
        <div className="flex-1 overflow-y-auto p-1 bg-gray-50">
          {/* Horizontal Tabs */}
          <div className="px-2 flex flex-wrap items-center justify-start space-x-4 overflow-x-auto text-[13px] font-medium text-gray-600 py-2 bg-white shadow rounded">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer whitespace-nowrap text-[11px] pb-1 border-b-2 transition-all duration-200 ${
                  activeTab === tab
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-600 border-transparent hover:text-blue-500"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6">
  {
    activeTab=="SUMMARY"&&(
        <Summary/>
    )
  }
  {
    activeTab=="ATTENDANCE"&&(
        <Attendance/>
    )
  }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
