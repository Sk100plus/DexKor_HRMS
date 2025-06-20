import React, { useState } from "react";
import { Download } from "lucide-react"; // Add this at the top
const ResTaEmp = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="p-6 text-[13px]">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="">Resignation Task Employees</h2>

        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded px-3 py-1 "
          />
          <button className=" cursor-pointer hover:bg-gray-400 px-2 py-1 text-bold rounded-full bg-gray-300 shadow-sm flex items-center">
  <Download className="w-4 h-6 text-gray-600" />
</button>
        </div>
      </div>

      {/* Table Section */}
      <div className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonrounded overflow-hidden">
        <table className="w-full  text-left">
          <thead className="bg-gray-100 border-b text-gray-700">
            <tr>
              <th className="px-4 py-2">Employee Name</th>
              <th className="px-4 py-2">Employee Code</th>
              <th className="px-4 py-2">Resignation Reason</th>
              <th className="px-4 py-2">Requested Resignation Date</th>
              <th className="px-4 py-2">Actual Notice Period</th>
              <th className="px-4 py-2">Decided Notice Period</th>
              <th className="px-4 py-2">Task Status</th>
              <th className="px-4 py-2">Added On</th>
              <th className="px-4 py-2">Tasks</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* No Result Row */}
            <tr>
              <td colSpan="10" className="text-center py-10 text-gray-500">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="/no-results-icon.png" // Replace with your icon if needed
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

      {/* Pagination Section */}
      <div className="flex justify-between items-center  text-gray-600 mt-4">
        <div>
          Items per page:
          <select className="ml-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonrounded px-2 py-1">
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

export default ResTaEmp;
