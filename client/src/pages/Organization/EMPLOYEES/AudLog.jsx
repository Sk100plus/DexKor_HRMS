import React from 'react';

const AudLog = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen text-[13px]">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-[15px] font-bold mb-6">Audit Log</h1>
        
        {/* Filter Section */}
        <div className="mb-6 ">
          <label className="block  font-medium text-gray-700 mb-1">Select Type</label>
          <select className="w-full md:w-64 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option value="">All Types</option>
            <option value="employee">Employee</option>
            <option value="viewer">Viewer</option>
            <option value="account">Account Types</option>
          </select>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Employee</th>
                <th className="px-4 py-3 text-left font-medium">Viewer</th>
                <th className="px-4 py-3 text-left font-medium">Account Types</th>
                <th className="px-4 py-3 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4" className="py-10 text-center text-gray-500">
                  <div className="flex flex-col items-center justify-center">
                    <p>No Result Found.1</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <div>
            Items per page:
            <select className="ml-2 border border-gray-300 rounded px-2 py-1 focus:outline-none">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>
          <div>
            0 of 0
            <button className="ml-4 px-2 py-1 rounded border border-gray-300">←</button>
            <button className="ml-2 px-2 py-1 rounded border border-gray-300">→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudLog;