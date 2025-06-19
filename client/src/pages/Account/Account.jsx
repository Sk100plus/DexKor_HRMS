import React from 'react';
import Profile from '../Dashboard/Profile';

const Account = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <Profile/>
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 mt-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Left: Profile Info */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-white text-xl">
              {/* Placeholder avatar */}
              <span className="text-3xl">👤</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Suraj</h2>
              <p className="text-sm text-gray-600">
                EMP-wsd-001 | Admin | Admin Department
              </p>
              <p className="text-sm text-gray-600">+919696979807  kasaudhansuraj25@gmail.com</p>
            </div>
          </div>

          {/* Right: Controls */}
          <div className="w-full sm:w-auto text-left sm:text-right space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center gap-2">
              <button className="text-blue-600 hover:underline text-sm">Enable/Disable MFA</button>
              <button className="text-blue-600 hover:underline text-sm">View Profile</button>
              <button className="text-blue-600 hover:underline text-sm">Update Password</button>
            </div>
            <div className="mt-2">
              <select className="border border-gray-300 rounded px-2 py-1 text-sm w-full sm:w-auto">
                <option>Asia/Kolkata</option>
                <option>UTC</option>
                <option>America/New_York</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Personal Details */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h3 className="text-md font-semibold mb-4">Personal Details</h3>
          <div className="text-sm space-y-2">
            <p><strong>Personal Mobile:</strong> -</p>
            <p><strong>Personal Email:</strong> kasaudhansuraj25@gmail.com</p>
            <p><strong>Date Of Join:</strong> 2/05/2022</p>
            <p><strong>Blood Group:</strong> -</p>
            <p><strong>Date Of Birth:</strong> -</p>
          </div>
        </div>

        {/* Address Details */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h3 className="text-md font-semibold mb-4">Address</h3>
          <div className="text-sm space-y-2">
            <p><strong>Permanent Address:</strong> -</p>
            <p><strong>City:</strong> -</p>
            <p><strong>State:</strong> -</p>
            <p><strong>Zipcode:</strong> -</p>
            <p><strong>Present Address:</strong> -</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
