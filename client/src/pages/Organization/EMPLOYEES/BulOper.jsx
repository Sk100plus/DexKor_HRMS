import React, { useState } from 'react';

const BulOper = () => {
  const [activePage, setActivePage] = useState(null);
  const [activeAction, setActiveAction] = useState(null);

  const pages = [
    { name: 'Employee', action: 'Action' },
    { name: 'Bank Details', action: 'Action' },
    { name: 'Reporting Employees', action: 'Action' },
    { name: 'Employee Work Skills', action: 'Action' },
    { name: 'Employee Remedial Code', action: 'Action' }
  ];

  const handleActionClick = (page) => {
    setActivePage(page);
    if (page === 'Bank Details') {
      setActiveAction('bankDetails');
    } else {
      setActiveAction(null);
    }
  };

  const handleBackClick = () => {
    setActivePage(null);
    setActiveAction(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {!activePage ? (
        // Main Table View
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-[15px] font-bold mb-6">Bulk Operations</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Pages</th>
                  <th className="px-4 py-3 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pages.map((page, index) => (
                  <tr key={index} className="border border-gray-300 rounded-lg focus:ring-0 focus:outline-none   text-[13px] border-gray-200">
                    <td className="px-4 py-3 cursor-pointer">{page.name}</td>
                    <td className="px-4 py-3 ">
                      <button
                        onClick={() => handleActionClick(page.name)}
                        className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium"
                      >
                        {page.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        // Action-specific View
        <div className="w-1/2 rounded-none text-[13px] shadow p-6">
          <button
            onClick={handleBackClick}
            className="mb-4 flex items-center text-blue-600 hover:text-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Bulk Operations
          </button>

          {activeAction === 'bankDetails' && (
            <div className="space-y-6">
              <h2 className="text-[15px] font-bold">Bulk Bank Details Upload</h2>
              
              {/* Step 1 */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-700 mb-2">Step 1: Download bulk bank details structure</h3>
                <p className="text-gray-600 mb-4 text-[13px]">
                  Download a blank excel template, prepare your bank details data and upload below.<br />
                  Ensure the required finish certificate in the excel template has entered before upload.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                      Download Template
                    </button>
                  </div>
                  <div className="text-xs text-gray-500">Last Update History</div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="border border-gray-200 rounded-lg p-4 text-[13px]">
                <h3 className="font-bold text-gray-700 mb-2">Step 2: Upload bank details data</h3>
                <p className="text-gray-600 mb-4  ">
                  Upload excel template completed with bank details records.
                </p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <p className="text-gray-500 mb-2">Upload XLS,XLSX *</p>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm">
                    Browse Files
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Default view for other actions */}
          {activeAction !== 'bankDetails' && (
  <div className="space-y-6 w-1/2">
    <h2 className="text-[15px] font-bold">Bulk {activePage} Operations</h2>
    
    {/* Step 1 - Download Template */}
    <div className="border border-gray-200 rounded-lg p-4 text-[13px]">
      <h3 className="font-bold text-gray-700 mb-2">Step 1: Download bulk {activePage.toLowerCase()} structure</h3>
      <p className="text-gray-600 mb-4 ">
        Download a blank excel template, prepare your {activePage.toLowerCase()} data and upload below.<br />
        Ensure all required fields in the excel template are completed before upload.
      </p>
      <div className="flex items-center justify-between">
        <div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
            Download Template
          </button>
        </div>
        <div className="text-xs text-gray-500">Last Update History</div>
      </div>
    </div>

    {/* Step 2 - Upload Data */}
    <div className="border border-gray-200 rounded-lg p-4 text-[13px]">
      <h3 className="font-bold text-gray-700 mb-2">Step 2: Upload {activePage.toLowerCase()} data</h3>
      <p className="text-gray-600 mb-4 ">
        Upload excel template completed with {activePage.toLowerCase()} records.
      </p>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <p className="text-gray-500 mb-2 text-sm">Upload XLS,XLSX *</p>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm">
          Browse Files
        </button>
      </div>
    </div>

    {/* Additional Step for Specific Pages */}
    {(activePage === 'Employee Work Skills' || activePage === 'Employee Remedial Code') && (
      <div className="border border-gray-200 rounded-lg p-4 text-[13xp]">
        <h3 className="font-bold text-gray-700 mb-2">Step 3: Review and confirm</h3>
        <p className="text-gray-600 mb-4 ">
          Review the uploaded data before final submission to ensure accuracy.
        </p>
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">
          Validate Data
        </button>
      </div>
    )}
  </div>
)}
 <div>
          <button className="px-4 py-2 m-3 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
            Submit
          </button>
        </div>
        </div>
      )}
    </div>
  );
};

export default BulOper;