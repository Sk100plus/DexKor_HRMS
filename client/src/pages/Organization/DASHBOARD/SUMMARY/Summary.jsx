import React, { useState } from 'react';
import EmpCusFei from './EmpCusFei';
import NewAnn from './NewAnn';
import BulEmp from './BulEmp';
import OrgTree from './OrgTree';
import NewEmp from './NewEmp';



const Summary = () => {
  const [activeTab, setActiveTab] = useState("Current");

  return (
    <div className="min-h-screen font-sans text-gray-800 mx-auto">
      {/* Tab Selector */}
    
      {activeTab === "Current" &&(
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="w-full lg:w-2/5">
            {/* Employees Count */}
            <div className="mb-8 shadow-sm border border-gray-300 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Employees</h2>
              <div className="flex gap-3">
                <div className="flex items-baseline">
                  <span className="text-xl font-bold mr-2">7</span>
                  <span className="text-gray-600">Total employees</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-xl font-bold mr-2">6</span>
                  <span className="text-gray-600">Onboarding</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-xl font-bold mr-2">0</span>
                  <span className="text-gray-600">Not Migrated</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mb-8 shadow-sm border border-gray-300 p-6">
              <h2 className="font-semibold text-gray-900 mb-3">Quick Links</h2>
              <ul className="space-y-2 text-[10px]">
  {[
    "+Employee Custom Fields",
    "+New Announcement",
    "+Bulk Employee Import",
    "+Org Tree",
    "+New Employee"
  ].map((item, index) => (
    <li
      key={index}
      className="text-blue-700 cursor-pointer font-medium"
      onClick={() => setActiveTab(item)}
    >
      {item}
    </li>
  ))}
</ul>

            </div>

            {/* Upcoming Joiners */}
            <div className="mb-8 shadow-sm border border-gray-300 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Upcoming Joiners</h2>
              <ul className="space-y-4">
                {[
                  { name: "Tam Holland", email: "tam.holland@client8h.com" },
                  { name: "Haiho Shabriad", email: "haihao.shabriad@client8h.com" },
                  { name: "Florence Pugh", email: "florence.pugh@client8h.com" },
                  { name: "Oscar Hace", email: "oscar.hace@client8h.com" },
                  { name: "Kit Harbghan", email: "kit.harbghan@client8h.com" },
                  { name: "Award Tahir", email: "award.tahir@client8h.com" }
                ].map((person, index) => (
                  <li key={index}>
                    <p className="font-medium text-blue-600 cursor-pointer text-[15px]">{person.name}</p>
                    <p className="text-gray-500 text-sm">{person.email}</p>
                    <hr className="border border-gray-200" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-3/5">
            {/* Employee Login Rate */}
            <div className="mb-8 shadow-sm border border-gray-300 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Employee Login Rate</h2>

              {/* Date Range */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-900 mb-2">Date Range</h3>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-4">
                  <div className="flex items-center">
                    <span className="mr-2">Last 1 week</span>
                    <span className="text-xs">↓</span>
                  </div>
                  <span className="text-blue-600">Login Summary</span>
                </div>
              </div>

              {/* Graph Placeholder */}
              <div className="border border-gray-200 rounded p-4 mb-6">
                <div className="flex justify-between items-end h-40">
                  <div className="h-20 w-6 bg-gray-300"></div>
                  <div className="h-16 w-6 bg-gray-300"></div>
                  <div className="h-14 w-6 bg-gray-300"></div>
                  <div className="h-12 w-6 bg-gray-300"></div>
                  <div className="h-10 w-6 bg-gray-300"></div>
                  <div className="h-4 w-6 bg-gray-300"></div>
                  <div className="h-2 w-6 bg-gray-300"></div>
                </div>
              </div>

              {/* Graph Values */}
              <div className="flex justify-between text-xs text-gray-500 mb-6 px-2">
                <span>2.0</span>
                <span>1.5</span>
                <span>1.4</span>
                <span>1.2</span>
                <span>1.0</span>
                <span>0.0</span>
                <span>0.4</span>
                <span>0.2</span>
              </div>

              {/* Dates */}
              <div className="flex justify-between text-sm text-gray-700 border-t border-gray-200 pt-4">
                <span>Jan 14, 2023</span>
                <span>Jan 15, 2023</span>
                <span>Jan 16, 2023</span>
                <span>Jan 17, 2023</span>
                <span>Jan 18, 2023</span>
                <span>Jan 20, 2023</span>
              </div>
            </div>
          </div>
        </div>
      ) }
      {
        activeTab=="+Employee Custom Fields"&&(
          <EmpCusFei activeTab={activeTab} setActiveTab={setActiveTab}/>
        )
      }
       {
        activeTab=="+New Announcement"&&(
          <NewAnn activeTab={activeTab} setActiveTab={setActiveTab}/>
        )
      }
       {
        activeTab=="+Bulk Employee Import"&&(
          <BulEmp activeTab={activeTab} setActiveTab={setActiveTab}/>
        )
      }
      {
        activeTab=="+Org Tree"&&(
          <OrgTree activeTab={activeTab} setActiveTab={setActiveTab}/>
        )
      }
       {
        activeTab=="+New Employee"&&(
          <NewEmp activeTab={activeTab} setActiveTab={setActiveTab}/>
        )
      }
    </div>
  );
};

export default Summary;
