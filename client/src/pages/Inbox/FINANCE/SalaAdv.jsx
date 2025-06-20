import React, { useState } from 'react';

const SalAdv = () => {
  const [policy, setPolicy] = useState('');
  const [status, setStatus] = useState('Pending');
  const [filteredData, setFilteredData] = useState([]);

  const salaryAdvanceRequests = [
    {
      id: 1,
      requestType: 'Medical Advance',
      appliedBy: 'Anil Mehra',
      status: 'Pending',
      policy: 'Health Policy',
    },
    {
      id: 2,
      requestType: 'Emergency Advance',
      appliedBy: 'Priya Kapoor',
      status: 'Approved',
      policy: 'Emergency Policy',
    },
  ];

  const handleSearch = () => {
    const result = salaryAdvanceRequests.filter((item) => {
      return (
        (status === 'All' || item.status === status) &&
        (policy === '' || item.policy === policy)
      );
    });
    setFilteredData(result);
  };

  const handleReset = () => {
    setStatus('Pending');
    setPolicy('');
    setFilteredData([]);
  };

  return (
    <div className="p-6 text-[13px]">
      <h2 className="font-semibold mb-4">Salary Advance Requests</h2>

      <div className="flex items-center gap-4 mb-4">
        <select
          className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonepx-4 py-2 rounded"
          value={policy}
          onChange={(e) => setPolicy(e.target.value)}
        >
          <option value="">Select policy</option>
          <option value="Health Policy">Health Policy</option>
          <option value="Emergency Policy">Emergency Policy</option>
        </select>

        <select
          className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonepx-4 py-2 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
          <option value="All">All</option>
        </select>

        <button
          className="hover:bg-gray-600 hover:text-white px-4 py-1 rounded-none  border cursor-pointer"
          onClick={handleReset}
        >
          Reset
        </button>

        <button
          className="ml-auto hover:bg-blue-600 border cursor-pointer hover:text-white px-4 py-2 rounded-none "
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <table className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonerounded overflow-hidden">
        <thead className="bg-gray-100">
          <tr className="text-left text-sm">
            <th className="p-3">Request Type</th>
            <th className="p-3">Applied By</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-12 text-gray-500">
                <div className="flex flex-col items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                    alt="No Data"
                    className="w-16 h-16 mb-2 opacity-60"
                  />
                  <p>No Result Found..!</p>
                </div>
              </td>
            </tr>
          ) : (
            filteredData.map((item) => (
              <tr key={item.id} className="border-t text-sm">
                <td className="p-3">{item.requestType}</td>
                <td className="p-3">{item.appliedBy}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      item.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : item.status === 'Approved'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-3">
                  <button className="cursor-pointer border py-1 px-4 hover:bg-gray-600 hover:text-white">View</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="text-sm text-right mt-4 text-gray-500">
        Items per page: 10 &nbsp; | &nbsp; {filteredData.length} of {filteredData.length}
      </div>
    </div>
  );
};

export default SalAdv;
