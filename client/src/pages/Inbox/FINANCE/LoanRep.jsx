import React, { useState } from 'react';

const LoanRep = () => {
  const [status, setStatus] = useState('Pending');
  const [loanType, setLoanType] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const loanRepayments = [
    {
      id: 1,
      requestType: 'Home Loan',
      repaymentBy: 'Richard Samuel',
      status: 'Pending',
    },
    {
      id: 2,
      requestType: 'Personal Loan',
      repaymentBy: 'Amit Sharma',
      status: 'Approved',
    }
  ];

  const handleSearch = () => {
    const result = loanRepayments.filter(item => {
      return (
        (status === 'All' || item.status === status) &&
        (loanType === '' || item.requestType === loanType)
      );
    });
    setFilteredData(result);
  };

  const handleReset = () => {
    setStatus('Pending');
    setLoanType('');
    setFilteredData([]);
  };

  return (
    <div className="p-6 text-[13px]">
      <h2 className="font-semibold mb-4">Loan Repayment Requests</h2>

      <div className="flex items-center gap-4 mb-4">
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

        <select
          className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonepx-4 py-2 rounded"
          value={loanType}
          onChange={(e) => setLoanType(e.target.value)}
        >
          <option value="">Select Loan Types</option>
          <option value="Home Loan">Home Loan</option>
          <option value="Personal Loan">Personal Loan</option>
        </select>

        <button
          className="hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-none cursor-pointer border"
          onClick={handleReset}
        >
          Reset
        </button>

        <button
          className="ml-auto hover:bg-blue-600 border  hover:text-white px-5 py-2 rounded-none cursor-pointer"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <table className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonerounded overflow-hidden">
        <thead className="bg-gray-100">
          <tr className="text-left text-sm">
            <th className="p-3">Request Type</th>
            <th className="p-3">Repayment by</th>
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
            filteredData.map(item => (
              <tr key={item.id} className="border-t text-sm">
                <td className="p-3">{item.requestType}</td>
                <td className="p-3">{item.repaymentBy}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs ${
                    item.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                    item.status === 'Approved' ? 'bg-green-100 text-green-700' :
                    'bg-red-100 text-red-600'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-3">
                  <button className="hover:text-white cursor-pointer border px-4 py-1  hover:bg-gray-600 ">View</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="text-sm text-right mt-4 text-gray-500">
        Items per page: 25 &nbsp; | &nbsp; {filteredData.length} of {filteredData.length}
      </div>
    </div>
  );
};

export default LoanRep;
