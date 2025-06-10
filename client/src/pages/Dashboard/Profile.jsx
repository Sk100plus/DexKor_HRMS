import React from 'react'
import { Input } from "@/components/ui/input";
import image from '../profile.jfif'

const Profile = ({setSearchText2,setCurrentPage}) => {
  return (
    <div className="flex justify-between items-center mb-2">
    {/* Left: Page Title */}
    <h3 className="text-lg font-semibold">All Employees</h3>
  
    {/* Right: Search + Profile */}
    <div className="flex items-center space-x-4">
      {/* Search Input */}
      <div className="relative w-64">
        { (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        )}
       <Input
    placeholder="Search"
    className="pl-9 w-full rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
    onChange={(e) => {
      setSearchText2(e.target.value);
      setCurrentPage(1);

    }}
  />
  
      </div>
  
      {/* Profile Dropdown */}
      {/* Profile Dropdown */}
  <div className="relative group">
    {/* Trigger area */}
    <div className="flex items-center space-x-2 focus:outline-none cursor-pointer">
      <img
        src={image}
        alt="Profile"
        className="w-8 h-8 rounded-full object-cover"
      />
      <span className="text-sm font-medium text-gray-700">John Doe</span>
      <svg
        className="w-4 h-4 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  
    {/* Dropdown menu (now properly tied to the wrapper hover) */}
    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-10">
      <ul className="text-sm text-gray-700">
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Account</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
      </ul>
    </div>
  </div>
  
  
      
    </div>
  </div>
  
  )
}

export default Profile
