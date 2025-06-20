import React, { useState } from 'react';

const mockData = []; // You can populate this array with mock objects if needed

const RepMan = () => {
  const [statusFilter, setStatusFilter] = useState('All');
  const [filteredData, setFilteredData] = useState(mockData);

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setStatusFilter(value);
    if (value === 'All') {
      setFilteredData(mockData);
    } else {
      setFilteredData(mockData.filter(item => item.status === value));
    }
  };

  const resetFilter = () => {
    setStatusFilter('All');
    setFilteredData(mockData);
  };

  return (
    <div className="p-4 bg-white rounded shadow text-[13x]">
      <h2 className="font-semibold mb-4">Reporting Manager Change Request</h2>
      <div className="flex items-center gap-4 mb-4">
        <label>Status:</label>
        <select
          value={statusFilter}
          onChange={handleStatusChange}
          className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none  rounded px-4 py-1 cursor-pointer"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
        <button onClick={resetFilter} className="hover:text-white hover:bg-blue-500 cursor-pointer border  px-3 py-1 rounded-none">
          Reset
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
          <thead className="bg-gray-100 text-[13px]">
            <tr>
              <th className="px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Employee Name</th>
              <th className="px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Reporting To Employee</th>
              <th className="px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Comments</th>
              <th className="px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Requested Date</th>
              <th className="px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Approver</th>
              <th className="px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Status</th>
              <th className="px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  <div className="flex flex-col items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
                      alt="No Result"
                      width="50"
                      className="mb-2"
                    />
                    No Result Found..!
                  </div>
                </td>
              </tr>
            ) : (
              filteredData.map((item, index) => (
                <tr key={index}>
                  <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonepx-3 py-2">{item.employeeName}</td>
                  <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonepx-3 py-2">{item.reportingTo}</td>
                  <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonepx-3 py-2">{item.comments}</td>
                  <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonepx-3 py-2">{item.requestedDate}</td>
                  <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonepx-3 py-2">{item.approver}</td>
                  <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonepx-3 py-2">{item.status}</td>
                  <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonepx-3 py-2">
                    <button className="text-blue-600 hover:underline">View</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RepMan;
