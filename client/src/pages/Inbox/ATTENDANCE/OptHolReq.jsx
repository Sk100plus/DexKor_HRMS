import React, { useState } from 'react';

const OptHolReq = () => {
  const [holiday, setHoliday] = useState('');
  const [status, setStatus] = useState('All');

  const holidays = ['Holi', 'Diwali', 'Christmas'];
  const statusOptions = ['All', 'Approved', 'Rejected', 'Pending'];

  return (
    <div className="p-6 font-sans text-[13px]">
      {/* Filters */}
      <div className="flex items-center gap-3 mb-4">
        <select
          className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 px-2 py-1 rounded"
          value={holiday}
          onChange={(e) => setHoliday(e.target.value)}
        >
          <option value="">Select Holiday</option>
          {holidays.map((h, index) => (
            <option key={index} value={h}>{h}</option>
          ))}
        </select>

        <select
          className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 px-2 py-1 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {statusOptions.map((s, index) => (
            <option key={index} value={s}>{s}</option>
          ))}
        </select>

        <button
              className="cursor-pointer hover:text-white hover:bg-gray-700 px-3 py-1 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 text-sm"
              onClick={() => {
            setHoliday('');
            setStatus('All');
          }}
        >
          Reset
        </button>
      </div>

      {/* Table Header */}
      <table className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 text-left">Request Type</th>
            <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 text-left">Applied By</th>
            <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 text-left">Status</th>
            <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 text-left">Actions</th>
          </tr>
        </thead>
      </table>

      {/* No Results */}
      <div className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-x shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-b shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 text-center p-10 text-gray-500 flex flex-col items-center justify-center">
        <img
          src="https://img.icons8.com/ios/100/search--v1.png"
          alt="No Result Found"
          className="w-12 h-12 opacity-50 mb-2"
        />
        <p className="text-sm font-medium">No Result Found..!</p>
      </div>

      {/* Footer Pagination */}
      <div className="flex items-center justify-between shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-t shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-200 px-4 py-3 text-sm">
        <div className="flex items-center gap-1">
          <span>Items per page:</span>
          <select className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 rounded px-1 py-0.5 text-sm">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>
        <div>0 of 0</div>
      </div>
    </div>
  );
};

export default OptHolReq;
