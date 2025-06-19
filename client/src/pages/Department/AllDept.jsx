import React from 'react';
import { ChevronRight } from 'lucide-react';
import image from '../profile.jfif';
import Profile from '../Dashboard/Profile';
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/Navbar';

 export const departments = [
  {
    name: "Design Department",
    membersCount: 20,
    members: [
      { name: "Dianne Russell", role: "Lead UI/UX Designer", image },
      { name: "Arlene McCoy", role: "Sr. UI/UX Designer", image },
      { name: "Cody Fisher", role: "Sr. UI/UX Designer", image },
      { name: "Brooklyn Simmons", role: "Sr. Marketing Manager", image },
      { name: "Dianne Russell", role: "Lead UI/UX Designer", image },
      { name: "Arlene McCoy", role: "Sr. UI/UX Designer", image },
      { name: "Cody Fisher", role: "Sr. UI/UX Designer", image },
      { name: "Brooklyn Simmons", role: "Sr. Marketing Manager", image },
      { name: "Dianne Russell", role: "Lead UI/UX Designer", image },
      { name: "Arlene McCoy", role: "Sr. UI/UX Designer", image },
      { name: "Cody Fisher", role: "Sr. UI/UX Designer", image },
      { name: "Brooklyn Simmons", role: "Sr. Marketing Manager", image },
    ],
  },
  {
    name: "Sales Department",
    membersCount: 14,
    members: [
      { name: "Darrell Steward", role: "Sr. Sales Manager", image },
      { name: "Kristin Watson", role: "Sr. Sales Manager", image },
      { name: "Darrell Steward", role: "Sr. Sales Manager", image },
      { name: "Kristin Watson", role: "Sr. Sales Manager", image },
      { name: "Darrell Steward", role: "Sr. Sales Manager", image },
      { name: "Kristin Watson", role: "Sr. Sales Manager", image },
      { name: "Darrell Steward", role: "Sr. Sales Manager", image },
      { name: "Kristin Watson", role: "Sr. Sales Manager", image },
      { name: "Darrell Steward", role: "Sr. Sales Manager", image },
      { name: "Kristin Watson", role: "Sr. Sales Manager", image },
      { name: "Darrell Steward", role: "Sr. Sales Manager", image },
      { name: "Kristin Watson", role: "Sr. Sales Manager", image },

    ],
  },
  {
    name: "Project Manager Department",
    membersCount: 18,
    members: [
      { name: "Leslie Alexander", role: "Sr. Project Manager", image },
      { name: "Ronald Richards", role: "Sr. Project Manager", image },
      { name: "Savannah Nguyen", role: "Project Manager", image },
      { name: "Brooklyn Simmons", role: "Sr. Marketing Manager", image },
      { name: "Leslie Alexander", role: "Sr. Project Manager", image },
      { name: "Ronald Richards", role: "Sr. Project Manager", image },
      { name: "Savannah Nguyen", role: "Project Manager", image },
      { name: "Brooklyn Simmons", role: "Sr. Marketing Manager", image },
      { name: "Leslie Alexander", role: "Sr. Project Manager", image },
      { name: "Ronald Richards", role: "Sr. Project Manager", image },
      { name: "Savannah Nguyen", role: "Project Manager", image },
      { name: "Brooklyn Simmons", role: "Sr. Marketing Manager", image },
      { name: "Leslie Alexander", role: "Sr. Project Manager", image },
      { name: "Ronald Richards", role: "Sr. Project Manager", image },
      { name: "Savannah Nguyen", role: "Project Manager", image },
      { name: "Brooklyn Simmons", role: "Sr. Marketing Manager", image },
    ],
  },
  {
    name: "Marketing Department",
    membersCount: 10,
    members: [
      { name: "Wade Warren", role: "Sr. Marketing Manager", image },
      { name: "Brooklyn Simmons", role: "Sr. Marketing Manager", image },
      { name: "Kristin Watson", role: "Marketing Coordinator", image },
      { name: "Brooklyn Simmons", role: "Sr. Marketing Manager", image },
      { name: "Wade Warren", role: "Sr. Marketing Manager", image },
      { name: "Brooklyn Simmons", role: "Sr. Marketing Manager", image },
      { name: "Kristin Watson", role: "Marketing Coordinator", image },
      { name: "Brooklyn Simmons", role: "Sr. Marketing Manager", image },
      { name: "Wade Warren", role: "Sr. Marketing Manager", image },
      { name: "Brooklyn Simmons", role: "Sr. Marketing Manager", image },
      { name: "Kristin Watson", role: "Marketing Coordinator", image },
      { name: "Brooklyn Simmons", role: "Sr. Marketing Manager", image },
      { name: "Wade Warren", role: "Sr. Marketing Manager", image },
      { name: "Brooklyn Simmons", role: "Sr. Marketing Manager", image },
      { name: "Kristin Watson", role: "Marketing Coordinator", image },
      { name: "Brooklyn Simmons", role: "Sr. Marketing Manager", image },
    ],
  },
];

const AllDept = () => {
    const navigate = useNavigate();
  return (
    <div className='font-sans select-none  '>
 <div >
  <Profile/>
 </div>
<div className="h-auto    w-full flex">
     
        <div className=''>
        <Navbar/>
        </div>
    <div className=" bg-white   p-6  pt-10 w-full">
      {/* <h1 className="text-xl font-semibold text-gray-800 mb-1">All Departments</h1>
      <p className="text-sm text-gray-500 mb-6">All Departments Information</p>
   */}
      <div className="grid grid-cols-2 gap-4">
      {departments.map((dept, idx) => (
  <div
    key={idx}
    className="bg-white rounded-lg border border-gray-200 shadow p-4"
  >
    <div className="flex justify-between items-start mb-3">
      <div>
        <h2 className="text-base font-semibold text-gray-900">{dept.name}</h2>
        <p className="text-sm text-gray-500">{dept.membersCount} Members</p>
      </div>
      <button
        className="text-sm text-blue-600 hover:underline cursor-pointer"
        onClick={() =>
          navigate(
            `/DexKor_HRMS/allDepartment/department/${encodeURIComponent(
              dept.name
            )}`
          )
        }
      >
        View All
      </button>
    </div>

    {/* Show only first 4 members */}
    <div>
      {dept.members.slice(0, 4).map((member, i) => (
        <div
          key={i}
          className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md transition cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <img
              src={member.image}
              alt={member.name}
              className="w-8 h-8 rounded-full object-cover border"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">{member.name}</p>
              <p className="text-xs text-gray-500">{member.role}</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
      ))}
    </div>
  </div>
))}

      </div>
     
    </div>
  </div>
    </div>
   
  
  );
};

export default AllDept;
