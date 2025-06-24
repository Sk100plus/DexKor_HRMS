import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const Attendance = () => {
  const mainTabs = ["Tracking", "Employee Assignments", "Leaves Overview"];
  const [activeTab, setActiveTab] = useState("Tracking");
  const [assignmentTab, setAssignmentTab] = useState("Assigned Shifts");
  const leaveOverview = [
    { type: "Casual Leave", used: 2, allocated: 12 },
    { type: "Sick Leave", used: 1, allocated: 8 },
    { type: "Annual Leave", used: 0, allocated: 15 },
  ];
  const employees = [
    {
      name: "Elena Martell",
      title: "Software Engineer",
      location: "HO - IND - Delhi",
      shift: "Day Shift",
      duration: "9:30 - 17:30",
      break: "No Break",
      weekOffs: [true, false, false, false, false, false, true],
    },
    {
      name: "Jaime Lannister",
      title: "Software Engineer",
      location: "HO - IND - Delhi",
      shift: "Day Shift",
      duration: "9:30 - 17:30",
      break: "No Break",
      weekOffs: [true, false, false, false, false, false, true],
    }
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Main Tabs */}
      <div className="flex space-x-6 border-b border-gray-200 text-sm font-medium">
        {mainTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* === Tracking Tab === */}
      {activeTab === "Tracking" && (
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
       {/* Left Section */}
       <div className="lg:col-span-2 space-y-4">
         {/* Filters */}
         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
           <select className="border p-2 rounded text-sm">
             <option>All Legal Entities</option>
           </select>
           <select className="border p-2 rounded text-sm">
             <option>All Departments</option>
           </select>
           <select className="border p-2 rounded text-sm">
             <option>Select Employee</option>
           </select>
           <div className="flex space-x-2">
             <button className="bg-gray-200 px-3 py-2 rounded text-sm">Direct</button>
             <button className="bg-gray-200 px-3 py-2 rounded text-sm">Indirect</button>
           </div>
         </div>

         {/* Submit + Reset */}
         <div className="flex space-x-2 mt-2">
           <button className="bg-blue-600 text-white text-sm px-4 py-1 rounded">Submit</button>
           <button className="bg-gray-200 text-sm px-4 py-1 rounded">Reset</button>
         </div>

         {/* Calendar Placeholder */}
         <div className="mt-4 border rounded p-4 bg-white shadow">
           <div className="text-gray-700 font-semibold text-sm mb-2">
             Daily Attendance - June 2025
           </div>

           {/* Simple Calendar UI */}
           <div className="grid grid-cols-7 text-center text-[13px] mt-4 gap-y-2">
             {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
               <div key={day} className="font-medium text-gray-500">{day}</div>
             ))}

             {Array.from({ length: 30 }, (_, i) => {
               const date = i + 1;
               const absentDates = [4, 11, 12, 13]; // Example absent dates
               const isAbsent = absentDates.includes(date);

               return (
                 <div
                   key={date}
                   className={`h-14 border flex flex-col justify-start items-center pt-1 ${
                     isAbsent ? 'bg-red-50' : ''
                   }`}
                 >
                   <div className="text-xs text-gray-700">{date}</div>
                   {isAbsent && (
                     <div className="text-[10px] text-red-600 mt-1">Absent</div>
                   )}
                 </div>
               );
             })}
           </div>
         </div>
       </div>

       {/* Right Section: Employee Details */}
       <div className="bg-white border rounded shadow p-4 space-y-4">
         <div className="text-gray-800 font-medium text-sm">Employee Details</div>
         <div className="text-[13px] text-gray-600 space-y-1">
           <div><strong>Employee Code:</strong> EMP-20240425-001</div>
           <div><strong>Name:</strong> Richard Samuel</div>
           <div><strong>Department:</strong> Admin Department</div>
           <div><strong>Date Of Join:</strong> April 25, 2022</div>
           <div><strong>Shift:</strong> 09:30 - 17:30</div>
         </div>

         <hr />

         <div className="text-gray-800 font-medium text-sm">Check In/Out Details</div>
         <div className="text-[13px] text-gray-600 space-y-1">
           <div><strong>Date:</strong> 23 Jun 2025</div>
           <div><strong>Check-In:</strong> -</div>
           <div><strong>Check-Out:</strong> -</div>
           <div><strong>In Hours:</strong> 00 hrs 00 mins</div>
           <div><strong>Status:</strong> -</div>
         </div>
         <div className="text-blue-600 text-xs cursor-pointer mt-2">View Logs</div>
       </div>
     </div>
      )}

      {/* === Employee Assignments Tab === */}
      {activeTab === "Employee Assignments" && (
        <div className="space-y-4">
          {/* Sub-tabs for Employee Assignments */}
          <div className="flex space-x-6 border-b border-gray-200 text-sm font-medium">
            {["Assigned Shifts", "Assigned Week-Off"].map((sub) => (
              <button
                key={sub}
                onClick={() => setAssignmentTab(sub)}
                className={`pb-2 ${
                  assignmentTab === sub
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          {/* === Assigned Shifts Table === */}
          {assignmentTab === "Assigned Shifts" && (
            <div className="bg-white rounded shadow overflow-x-auto p-4 text-sm">
              <div className="mb-2 font-medium">Team Employees Shifts</div>
              <table className="min-w-full text-left border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 border">Employee</th>
                    <th className="p-2 border">Work Location</th>
                    <th className="p-2 border">Shift Name</th>
                    <th className="p-2 border">Shift Duration</th>
                    <th className="p-2 border">Break Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((emp, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="p-2 border">
                        <div>{emp.name}</div>
                        <div className="text-xs text-gray-500">{emp.title}</div>
                      </td>
                      <td className="p-2 border">{emp.location}</td>
                      <td className="p-2 border">{emp.shift}</td>
                      <td className="p-2 border">{emp.duration}</td>
                      <td className="p-2 border">{emp.break}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* === Assigned Week-Off Table === */}
          {assignmentTab === "Assigned Week-Off" && (
            <div className="bg-white rounded shadow overflow-x-auto p-4 text-sm">
              <div className="mb-2 font-medium">Team Employees Week-Offs</div>
              <table className="min-w-full text-left border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 border">Employee</th>
                    {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(day => (
                      <th key={day} className="p-2 border">{day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {employees.map((emp, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="p-2 border">
                        <div>{emp.name}</div>
                        <div className="text-xs text-gray-500">{emp.title}</div>
                      </td>
                      {emp.weekOffs.map((off, i) => (
                        <td key={i} className="p-2 border text-center">
                          {off ? (
                            <CheckCircle size={16} className="text-green-500 inline" />
                          ) : (
                            <XCircle size={16} className="text-red-500 inline" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Legend */}
              <div className="mt-4 flex space-x-4 text-xs">
                <div className="flex items-center space-x-1">
                  <CheckCircle size={14} className="text-green-500" />
                  <span>Week-off Day</span>
                </div>
                <div className="flex items-center space-x-1">
                  <XCircle size={14} className="text-red-500" />
                  <span>Working Day</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* === Leaves Overview Placeholder === */}
      {activeTab === "Leaves Overview" && (
       <div className="bg-white p-4 shadow rounded space-y-4 text-sm">
       <div className="font-medium mb-2">Leave Overview</div>
       <table className="min-w-full text-left border">
         <thead className="bg-gray-100">
           <tr>
             <th className="p-2 border">Leave Type</th>
             <th className="p-2 border">Used</th>
             <th className="p-2 border">Allocated</th>
             <th className="p-2 border">Remaining</th>
           </tr>
         </thead>
         <tbody>
           {leaveOverview.map((lv, i) => (
             <tr key={i} className="border-t">
               <td className="p-2 border">{lv.type}</td>
               <td className="p-2 border">{lv.used}</td>
               <td className="p-2 border">{lv.allocated}</td>
               <td className="p-2 border">{lv.allocated - lv.used}</td>
             </tr>
           ))}
         </tbody>
       </table>
       </div>
      )}
    </div>
  );
};

export default Attendance;
