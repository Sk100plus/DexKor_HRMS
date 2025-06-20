import React, { useState } from 'react';

const Prob = () => {
  const data = []; // Add actual data here
  const itemsPerPage = 10;

  return (
    <div className="p-6 text-[13px]">
      <h2 className=" font-semibold mb-4">Probation Feedback</h2>

      <div className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded overflow-x-auto">
        <table className="min-w-full  text-left">
          <thead className="bg-gray-100 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
            <tr>
              <th className="px-4 py-2">Employee Name</th>
              <th className="px-4 py-2">Policy Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Review Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none ">
                  <td className="px-4 py-2">{item.employeeName}</td>
                  <td className="px-4 py-2">{item.policyName}</td>
                  <td className="px-4 py-2">{item.email}</td>
                  <td className="px-4 py-2">{item.status}</td>
                  <td className="px-4 py-2">—</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  <div className="flex flex-col items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                      alt="No result"
                      className="w-10 h-10 mb-2 opacity-40"
                    />
                    No Result Found..!
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <span>Items per page:</span>
          <select className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded p-1">
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div>
          0 of 0
        </div>
      </div>
    </div>
  );
};

export default Prob;
