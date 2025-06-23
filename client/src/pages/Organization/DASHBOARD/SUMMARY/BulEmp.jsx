import React, { useState } from 'react';
import { Download } from 'lucide-react';

const BulEmp = ({ activeTab, setActiveTab }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* Step 1 */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => setActiveTab("Current")}
          className="text-blue-600 hover:text-blue-800 cursor-pointer"
        >
          &lt; Back
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-4">
        <h2 className="text-[15px] font-semibold text-gray-800 mb-2">
          Step 1: Download Excel Import Template
        </h2>
        <p className="text-gray-600 text-[13px] mb-2">
          Download a blank excel template, prepare your employee data and upload below.
        </p>
        <p className="text-gray-600 text-[13px] mb-2">
          Choose the required fields mentioned in the Excel Template has entered before upload.
        </p>

        <div className="border-t border-gray-200 pt-2 flex">
          <button className="hover:bg-gray-200 border cursor-pointer px-3 py-1 rounded-none flex items-center gap-2">
            <Download size={16} />
            Download Template
          </button>
        </div>
      </div>

      {/* Step 2 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 ">
        <h2 className="text-[15px] font-semibold text-gray-800 mb-2">
          Step 2: Upload Employees Data
        </h2>
        <p className="text-gray-600 mb-2 text-[13px]">
          Upload excel template completed with employee records.
        </p>

        <div className="border border-gray-300 border-dashed rounded-lg p-3 text-center mb-4">
          <div className="flex flex-col items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400 mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="text-sm text-gray-500 mb-1">
              {file ? file.name : 'Drag and drop file here or click to browse'}
            </p>
            <p className="text-xs text-gray-400 mb-3">upload XLS, XLSX, CSV etc. *</p>
            <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded text-sm">
              Browse Files
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept=".xls,.xlsx,.csv"
              />
            </label>
          </div>
        </div>

        <button className="hover:bg-blue-600 hover:text-white border px-4 py-1 rounded-none cursor-pointer">
          Submit
        </button>
      </div>
    </div>
  );
};

export default BulEmp;
