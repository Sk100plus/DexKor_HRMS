import React, { useState } from "react";

const LetReq = () => {
  const [statusFilter, setStatusFilter] = useState("Pending");

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  return (
    <div className="p-6 text-[13px]">
      {/* Filter Row */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <label className=" ">Status</label>
          <select
            value={statusFilter}
            onChange={handleStatusChange}
            className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonrounded px-3 py-1 "
          >
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
            <option value="All">All</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonrounded px-3 py-1 "
          />
        </div>
      </div>

      {/* Table */}
      <div className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonrounded overflow-hidden">
        <table className="w-full  text-left">
          <thead className="bg-gray-100 border-b">
            <tr className="text-gray-700">
              <th className="px-4 py-2">Request Type</th>
              <th className="px-4 py-2">Applied By</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4" className="text-center py-10 text-gray-500">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="/no-results-icon.png" // replace with your icon if needed
                    alt="No Results"
                    className="w-12 h-12 mb-2 opacity-60"
                  />
                  No Result Found..!
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center  text-gray-600 mt-4">
        <div>Items per page: 
          <select className="ml-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonrounded px-2 py-1">
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>
        <div>0 of 0</div>
      </div>
    </div>
  );
};

export default LetReq;
