import React, { useState } from "react";

const ShipReq = () => {
  const [statusFilter, setStatusFilter] = useState("All");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-white shadow-sm rounded p-4 mb-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          My Asset Shipment
        </h2>

        {/* Status Filter */}
        <div className="flex items-center gap-2">
          <label htmlFor="status" className="text-sm text-gray-600">
            Status
          </label>
          <select
            id="status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none"
          >
            <option value="All">All</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white shadow-sm rounded p-4">
        {/* Table */}
        <div className="overflow-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100 border-b text-gray-600">
              <tr>
                <th className="p-2 font-medium">Asset Item</th>
                <th className="p-2 font-medium">Shipment Initiated On</th>
                <th className="p-2 font-medium">Expected Delivery Date</th>
                <th className="p-2 font-medium">Shipment Initiated By</th>
                <th className="p-2 font-medium">Approver</th>
                <th className="p-2 font-medium">Status</th>
                <th className="p-2 font-medium">Comments</th>
                <th className="p-2 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Empty State */}
              <tr>
                <td colSpan="8" className="text-center py-12 text-gray-500">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <img
                      src="https://www.svgrepo.com/show/327408/search-document.svg"
                      alt="No result"
                      className="w-20 h-20 opacity-40"
                    />
                    <p className="text-sm font-medium">No Result Found..!</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            Items per page:
            <select className="border border-gray-300 rounded px-2 py-1">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>
          <div>0 of 0</div>
        </div>
      </div>
    </div>
  );
};

export default ShipReq;
