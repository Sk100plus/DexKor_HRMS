import React, { useState } from 'react';

const bulkPages = [
  'Departments',
  'Designations',
  'Legal Entities',
  'Work Location',
  'Salary Structure',
  'Employee Asset Item'
];

const BulOper = () => {
  const [activeForm, setActiveForm] = useState(null);
  const [file, setFile] = useState(null);

  const handleActionClick = (page) => {
    setActiveForm(page);
    setFile(null); // Reset file on open
  };

  const handleClose = () => {
    setActiveForm(null);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (file) {
      alert(`Uploaded ${file.name} for ${activeForm}`);
      setActiveForm(null);
    } else {
      alert('Please upload a file.');
    }
  };

  return (
    <div className="p-6">
      <div className="border border-gray-300 rounded-lg focus:ring-0 focus:outline-none  rounded">
        <div className="grid grid-cols-2 bg-blue-100 font-semibold p-2 text-[13px]">
          <span>Pages</span>
          <span>Actions</span>
        </div>
        {bulkPages.map((page) => (
          <div key={page} className=" text-[10px] grid grid-cols-2 p-1 border border-gray-300 rounded-none hover:bg-gray-100 focus:ring-0 focus:outline-none   items-center">
            <span>{page}</span>
            <button
              onClick={() => handleActionClick(page)}
              className="border border-gray-300 rounded-lg focus:ring-0 focus:outline-none  px-4 py-1 rounded-none cursor-pointer hover:bg-blue-100 w-1/6"
            >
              Action
            </button>
          </div>
        ))}
      </div>

      {activeForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4">
              Bulk Excel Upload - {activeForm}
            </h2>

            {/* Step 1 */}
            <div className="mb-6 border border-gray-300 rounded-lg focus:ring-0 focus:outline-none  p-4 rounded bg-gray-50">
              <p className="font-semibold">Step 1: Download bulk {activeForm.toLowerCase()} structure</p>
              <p className="text-sm text-red-500 mb-2">
                Ensure the required fields mentioned in the excel template has entered before upload.
              </p>
              <div className="flex gap-2">
                <button className="bg-blue-500 text-white px-4 py-1 rounded">Download Template</button>
                <button className="border border-gray-300 rounded-lg focus:ring-0 focus:outline-none  px-4 py-1 rounded">Last Update History</button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-4 border border-gray-300 rounded-lg focus:ring-0 focus:outline-none  p-4 rounded bg-gray-50">
              <p className="font-semibold mb-2">Step 2: Upload {activeForm.toLowerCase()} data</p>
              <input type="file" accept=".xls,.xlsx" onChange={handleFileChange} className="mb-2" />
              <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-1 rounded mt-2">Submit</button>
            </div>

            <button
              onClick={handleClose}
              className="absolute top-2 right-3 text-xl text-gray-600 hover:text-red-500"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BulOper;
