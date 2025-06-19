import React, { useState } from 'react';
import bimage from './bookimage.jpg';
import image from './profile.jfif';
import Navbar from '../../../Navbar/Navbar';
import Profile from '../../../Dashboard/Profile';
import MyExp from './MyExp';
import MyCont from './MyCont';
import MyDocu from './MyDocu';
import ReportMan from './ReportMan';

const BasicDetail = () => {
  const tabs = [
    'Basic Details',
    'My Experience',
    'My Contracts',
    'My Documents',
    'Reporting Manager',
  ];

  const [activeTab, setActiveTab] = useState('Basic Details');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* NAVBAR if needed */}
      {/* <Navbar /> */}

      <div className="flex flex-1">
        {/* MAIN SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto">
          {/* Tabs */}
          <div className="flex space-x-6 mb-4 md:text-sm font-medium border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 transition cursor-pointer text-[10px]   ${
                  activeTab === tab
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'Basic Details' && (
            <>
              <h2 className="text-xl font-semibold mb-4">My Profile</h2>

              {/* Profile Summary */}
              <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img
                      src={image}
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Richard Samuel</h3>
                    <p className="text-sm text-gray-600">
                      EMP-20240425-001 | Admin Department | Executive
                    </p>
                    <p className="text-sm text-gray-600">
                      +918888888848 | richard@dexkcor.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Personal & Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white shadow rounded-lg p-4">
                  <h4 className="text-md font-semibold mb-3">Personal Details</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>Personal Mobile:</strong> -</li>
                    <li><strong>Personal Email:</strong> richard@dexkcor.com</li>
                    <li><strong>Date of Join:</strong> 25/04/2022</li>
                    <li><strong>Blood Group:</strong> -</li>
                    <li><strong>Date of Birth:</strong> -</li>
                    <li><strong>Gender:</strong> Male</li>
                    <li><strong>L2 Manager:</strong> -</li>
                    <li><strong>Reporting To:</strong> -</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white shadow rounded-lg p-4">
                    <h4 className="text-md font-semibold mb-3">Address</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li><strong>Permanent Address:</strong> -</li>
                      <li><strong>Present Address:</strong> -</li>
                      <li><strong>City:</strong> -</li>
                      <li><strong>State:</strong> -</li>
                      <li><strong>Country:</strong> India</li>
                      <li><strong>Zipcode:</strong> -</li>
                      <li><strong>Nationality:</strong> -</li>
                    </ul>
                  </div>

                  <div className="bg-white shadow rounded-lg p-4">
                    <h4 className="text-md font-semibold mb-3">Identity Information</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li><strong>Passport Number:</strong> -</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Other Details */}
              <div className="bg-white shadow rounded-lg p-4 mb-6">
                <h4 className="text-md font-semibold mb-3">Other Details</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Passport Number:</strong> -</li>
                  <li><strong>Bank Name:</strong> -</li>
                  <li><strong>Account Number:</strong> -</li>
                </ul>
              </div>

              {/* Education */}
              <div className="bg-white shadow rounded-lg p-4 mb-6">
                <h4 className="text-md font-semibold mb-3">Education Details</h4>
                <table className="w-full text-sm text-left border-t border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2">Institution Name</th>
                      <th className="px-4 py-2">Course Name</th>
                      <th className="px-4 py-2">Period</th>
                      <th className="px-4 py-2">Pass Grade</th>
                      <th className="px-4 py-2">Document</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="6" className="py-4 text-gray-400 text-center">
                        <img src={bimage} alt="book" width={100} height={100} className="mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Family */}
              <div className="bg-white shadow rounded-lg p-4 mb-6">
                <h4 className="text-md font-semibold mb-3">Family Details</h4>
                <table className="w-full text-sm text-left border-t border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Relation</th>
                      <th className="px-4 py-2">Date Of Birth</th>
                      <th className="px-4 py-2">Dependent</th>
                      <th className="px-4 py-2">Nominee</th>
                      <th className="px-4 py-2">Emergency Contact</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="7" className="py-4 text-gray-400 text-center">
                        <img src={bimage} alt="family" width={100} height={100} className="mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === 'My Experience' && <MyExp />}
          {activeTab === 'My Contracts' && <MyCont />}
          {activeTab === 'My Documents' && <MyDocu />}
          {activeTab === 'Reporting Manager' && <ReportMan />}
        </div>
      </div>
    </div>
  );
};

export default BasicDetail;
