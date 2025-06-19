import React, { useState } from 'react';
import Profile from '../Dashboard/Profile';
import Navbar from '../Navbar/Navbar';
import BasicDetail from './AllPArt/My Profile/BasicDetail.jsx';
import Attendance1 from './Attendance/Attendance1.jsx'
import Performance from './Performance/Performanece1.jsx'
import Prob from './Probation/Prob.jsx';
import Main from './MyFinance/Main.jsx';
import MyAsset from './Assets/MyAsset';
import Res from './Resignation/Res';
import Task from './Tasks/Task';
import Help from './HelpDesk/Help';
import Myform from './MY form/Myform';
import MyLetter from './My Letter/MyLetter';
import MySurvey from './My Survey/MySurvey';
const Service = () => {
  const tabs = [
    "MY PROFILE", "ATTENDANCE", "PERFORMANCE", "PROBATION", "MY FINANCES",
    "ASSET", "RESIGNATION", "TASKS", "HELP DESK", "MY FORMS", "MY LETTERS", "MY SURVEY"
  ];

  const [activeTab, setActiveTab] = useState("MY PROFILE");

  return (
    <div className="flex flex-col h-screen select-none">
      {/* Sticky Profile Bar */}
      <div className="sticky top-0 z-50 bg-white shadow">
        <Profile />
      </div>

      <div className="flex flex-1">
        {/* Sticky Left Navbar */}
        <div className="sticky top-[60px] h-[calc(100vh-60px)] bg-white shadow-md z-40">
          <Navbar />
        </div>

        {/* Right Main Content Scrollable */}
        <div className="flex-1 overflow-y-auto p-1 bg-gray-50">
          {/* Horizontal Tabs */}
          <div className="flex flex-wrap items-center justify-start space-x-4 overflow-x-auto text-[13px] font-medium text-gray-600 py-2 bg-white shadow rounded">
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
            {activeTab === "MY PROFILE" && (
                <div className='ml-2 select-none'>
              <BasicDetail />
              </div>
            )}
            {activeTab === "ATTENDANCE" && (
              <Attendance1/>
            )}
            {activeTab === "PERFORMANCE" && (
             <Performance/>
            )}
 {activeTab === "PROBATION" && (
             <Prob/>
            )}
             {activeTab === "MY FINANCES" && (
             <Main/>
            )}
             {activeTab === "ASSET" && (
             <MyAsset/>
            )}{
              activeTab=="RESIGNATION"&&(
                <Res/>
              )
            }
            {
              activeTab=="TASKS"&&(
                <Task/>
              )
            }
            {
              activeTab=="HELP DESK"&&(
                <Help/>
              )
            }
             {
              activeTab=="MY FORMS"&&(
                <Myform/>
              )
            }
             {
              activeTab=="MY LETTERS"&&(
                <MyLetter/>
              )
            }
            {
              activeTab=="MY SURVEY"&&(
                <MySurvey/>
              )
            }
            {/* Add other tab content similarly */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
