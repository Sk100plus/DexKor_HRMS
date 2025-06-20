import React, { useState } from 'react';

const LoanReq = () => {
  const [loanTypeFilter, setLoanTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('Pending');
  const [showDetail, setShowDetail] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const allRequests = [
    {
      id: 1,
      type: 'Home Loan',
      appliedBy: 'Richard Samuel',
      date: '28/08/2024, 04:40 AM',
      amount: 1000000,
      tenure: 60,
      status: 'Pending'
    }
  ];

  const filtered = allRequests.filter(req =>
    (loanTypeFilter === '' || req.type === loanTypeFilter) &&
    (statusFilter === 'All' || req.status === statusFilter)
  );

  const handleTakeAction = (req) => {
    setSelectedRequest(req);
    setShowDetail(true);
  };

  const handleBack = () => {
    setShowDetail(false);
    setSelectedRequest(null);
  };

  return (
    <div className="p-6 text-[13px]">
      {!showDetail ? (
        <>
          <h2 className="text-xl font-bold mb-4">Loan Requests</h2>
          <div className="flex gap-4 mb-4">
            <select
              className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonepx-3 py-2 rounded"
              value={loanTypeFilter}
              onChange={(e) => setLoanTypeFilter(e.target.value)}
            >
              <option value="">Select Loan Type</option>
              <option value="Home Loan">Home Loan</option>
              <option value="Personal Loan">Personal Loan</option>
            </select>
            <select
              className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonepx-3 py-2 rounded"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <table className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonerounded">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Request Type</th>
                <th className="p-3">Applied By</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((req) => (
                <tr key={req.id} className="border-t">
                  <td className="p-3">
                    {req.type}
                    <br />
                    <span className="text-sm text-gray-500">
                      Sanctioned Amount: INR {req.amount.toLocaleString()}
                    </span>
                  </td>
                  <td className="p-3">{req.appliedBy}<br /><span className="text-xs text-gray-500">{req.date}</span></td>
                  <td className="p-3">
                    <span className="text-yellow-700 bg-yellow-100 px-2 py-1 rounded text-sm">{req.status}</span>
                  </td>
                  <td className="p-3">
                    <button
                      className="border hover:bg-blue-600 hover:text-white px-4 py-1 rounded-none cursor-pointer "
                      onClick={() => handleTakeAction(req)}
                    >
                      Take Action
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        selectedRequest && (
          <div className="max-w-2xl mx-auto p-5 shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonep-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Loan Request Approval</h2>
            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
              <div><strong>Name:</strong> {selectedRequest.appliedBy}</div>
              <div><strong>Loan Name:</strong> {selectedRequest.type}</div>
              <div><strong>Loan Tenure Months:</strong> {selectedRequest.tenure}</div>
              <div><strong>Loan Amount Sanctioned:</strong> {selectedRequest.amount}</div>
              <div><strong>Status:</strong> 
                <span className="ml-2 text-yellow-700 bg-yellow-100 px-2 py-1 rounded text-sm">{selectedRequest.status}</span>
              </div>
              <div><strong>Applied On:</strong> {selectedRequest.date}</div>
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1">Loan End Period (in Months)</label>
              <input
                className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonepx-3 py-2 rounded"
                defaultValue={selectedRequest.tenure}
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Loan Amount Sanctioned</label>
              <input
                className="w-full p-2  shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonepx-3 py-2 rounded"
                defaultValue={selectedRequest.amount}
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Comments</label>
              <textarea
                className="w-full p-2  shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonepx-3 py-2 rounded"
                placeholder="Enter comments"
              />
            </div>

            <div className="flex gap-4">
              <button className="hover:bg-red-500 hover:text-white px-4 py-2 rounded-none border cursor-pointer">Reject</button>
              <button className=" border cursor-pointer hover:bg-green-600 hover:text-white px-4 py-2 rounded-none">Approve</button>
              <button className="ml-auto text-sm underline text-gray-600 cursor-pointer" onClick={handleBack}>
                ← Back to list
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default LoanReq;
