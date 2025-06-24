import React from 'react';
import { Users, Clock, UserCheck, UserX } from 'lucide-react';

const Summary = () => {
  return (
    <div className="p-4 space-y-4">
      {/* Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <StatCard icon={<Users className="text-blue-600 w-5 h-5" />} label="Team Strength" value="2" />
        <StatCard icon={<Clock className="text-green-600 w-5 h-5" />} label="Early Check-In" value="0" />
        <StatCard icon={<Clock className="text-yellow-600 w-5 h-5" />} label="Early Check-Out" value="0" />
        <StatCard icon={<Clock className="text-purple-600 w-5 h-5" />} label="Late Check-In" value="0" />
        <StatCard icon={<Clock className="text-red-600 w-5 h-5" />} label="Late Check-Out" value="0" />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Box title="Monthly Attendance">
          <div className="flex justify-center mt-10">
            <span className="text-gray-400 text-sm">[Graph Placeholder]</span>
          </div>
          <div className="flex justify-center mt-4 space-x-2 text-[11px] text-gray-600">
            <Legend color="red" label="Leave" />
            <Legend color="green" label="Present" />
            <Legend color="gray" label="Absent" />
            <Legend color="purple" label="P/A" />
          </div>
        </Box>

        <Box title="Leave Statistics">
          <div className="flex flex-col items-center justify-center h-32 text-gray-400 text-sm">
            <Users className="w-8 h-8 mb-2" />
            No Result Found..!
          </div>
        </Box>

        <Box title="Not In Yet (2)">
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Elena Martell — Software Engineer</li>
            <li>Jaime Lannister — Software Engineer</li>
          </ul>
        </Box>
      </div>

      {/* Time-Off and Direct Reports */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Box title="Time-Off Statistics">
          <div className="text-center text-sm text-gray-400 mt-8">[Bar Chart Placeholder]</div>
        </Box>

        <Box title="Direct Reporting Employees">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <ProfileCard
              name="Elena Martell"
              dept="Information Technology Department"
              empId="EMP-202406281988"
              email="elena.martell@scientelbin.com"
            />
            <ProfileCard
              name="Jaime Lannister"
              dept="Information Technology Department"
              empId="EMP-202406282921"
              email="jaime.lannister@scientelbin.com"
            />
          </div>
        </Box>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value }) => (
  <div className="flex items-center space-x-2 p-3 bg-white rounded shadow text-sm">
    {icon}
    <div>
      <div className="text-gray-500">{label}</div>
      <div className="font-semibold text-black">{value}</div>
    </div>
  </div>
);

const Box = ({ title, children }) => (
  <div className="bg-white p-4 rounded shadow">
    <div className="font-medium text-[14px] mb-2 text-gray-800">{title}</div>
    {children}
  </div>
);

const Legend = ({ color, label }) => (
  <div className="flex items-center space-x-1">
    <span className={`w-3 h-3 rounded-full`} style={{ backgroundColor: color }} />
    <span>{label}</span>
  </div>
);

const ProfileCard = ({ name, dept, empId, email }) => (
  <div className="border rounded p-3 bg-gray-50">
    <div className="font-medium text-gray-800">{name}</div>
    <div className="text-[12px] text-gray-500">{dept}</div>
    <div className="text-[11px] mt-1">ID: {empId}</div>
    <div className="text-[11px] text-blue-600">{email}</div>
    <div className="text-[11px] text-gray-400">To be updated</div>
  </div>
);

export default Summary;
