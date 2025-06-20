import React, { useState } from 'react';

const leaveRequests = [
  {
    id: 1,
    type: 'Casual Leave',
    days: '1 fullDay',
    from: '26/08/2024',
    to: '26/08/2024',
    status: 'Rejected',
    appliedOn: '28/08/2024 04:40 AM',
    reviewedBy: 'Richard Samuel',
    reviewedOn: '28/08/2024 04:40 AM',
  },
  {
    id: 2,
    type: 'Casual Leave',
    days: '1 fullDay',
    from: '27/08/2024',
    to: '27/08/2024',
    status: 'Pending',
    appliedOn: '',
    reviewedBy: '',
    reviewedOn: '',
  }
];

const LeaReq = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [statusFilter, setStatusFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [comment, setComment] = useState('');

  const handleViewDetails = (id) => {
    const req = leaveRequests.find(r => r.id === id);
    setSelectedRequest(req);
  };

  const filteredRequests = leaveRequests.filter(req =>
    (statusFilter === 'All' || req.status === statusFilter) &&
    (typeFilter === 'All' || req.type === typeFilter)
  );

  return (
    <div className="p-4 text-[11px]">
      {!selectedRequest ? (
        <>
          {/* Filters */}
          <div className="mb-4 flex gap-4 items-center">
            <select
              className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-2 py-1 rounded shadow-sm"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
            </select>
            <select
              className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-2 py-1 rounded shadow-sm"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="All">All Leave Types</option>
              <option value="Casual Leave">Casual Leave</option>
              {/* Add other leave types here if needed */}
            </select>
          </div>

          {/* Leave Request Table */}
          <table className="min-w-full shadow-sm shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Request Type</th>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Applied By</th>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Status</th>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map(req => (
                <tr key={req.id} className="text-center">
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{req.type}<br /><span className="text-sm text-gray-600">No. of Days: {req.days}</span></td>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Richard Samuel<br />{req.from} - {req.to}</td>
                  <td className={`p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none ${req.status === 'Rejected' ? 'text-red-500' : req.status === 'Pending' ? 'text-yellow-500' : 'text-green-500'}`}>{req.status}</td>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
                    {
                        req.status=='Pending'?
                        <button
                      className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-3 py-1.5 rounded-none "
                      onClick={() => handleViewDetails(req.id)}
                    >
                      Take Action
                    </button>
                    :
                    <button
                      className="text-black cursor-pointer hover:bg-gray-500 hover:text-white hover:border border rounded-none px-3 py-1.5 rounded"
                      onClick={() => handleViewDetails(req.id)}
                    >
                      View Detail
                    </button>
                    }
                    {/* <button
                      className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-3 py-1 rounded"
                      onClick={() => handleViewDetails(req.id)}
                    >
                      {req.status === 'Pending' ? 'Take Action' : 'View Details'}
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div className="bg-white p-4 shadow-sm shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded">
          <h2 className="text-xl font-semibold mb-4">Leave Request Approval</h2>
          <div className="grid gap-2">
            <p><strong>Leave Name:</strong> {selectedRequest.type}</p>
            <p><strong>Leave Request Type:</strong> {selectedRequest.days}</p>
            <p><strong>From Date:</strong> {selectedRequest.from}</p>
            <p><strong>To Date:</strong> {selectedRequest.to}</p>
            <p><strong>Status:</strong> <span className={selectedRequest.status === 'Rejected' ? 'text-red-500' : 'text-yellow-500'}>{selectedRequest.status}</span></p>
            <p><strong>Applied On:</strong> {selectedRequest.appliedOn || '-'}</p>
          </div>

          {/* Comment & Action */}
          {selectedRequest.status === 'Pending' && (
            <div className="mt-4">
              <h3 className="font-semibold mb-1">Review Details</h3>
              <textarea
                className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2 rounded text-sm"
                rows={3}
                placeholder="Enter comments"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <div className="mt-2 flex gap-2">
                <button className="border cursor-pointer hover:bg-red-500 hover:text-white px-3 py-1.5 rounded-none">Reject</button>
                <button className="border cursor-pointer hover:bg-green-500 hover:text-white px-3 py-1.5 rounded-none">Approve</button>
              </div>
            </div>
          )}

          {/* Approval Info */}
          <div className="mt-4">
            <h3 className="font-semibold">Approvals</h3>
            <p><strong>{selectedRequest.reviewedBy || '-'}</strong> (Level 1)</p>
            <p className="text-sm text-gray-600">Reviewed On: {selectedRequest.reviewedOn || '-'}</p>
            <p className={`text-sm ${selectedRequest.status === 'Rejected' ? 'text-red-500' : 'text-yellow-500'}`}>{selectedRequest.status}</p>
          </div>

          <button
            className="mt-4 px-4 py-2 border cursor-pointer hover:bg-gray-500 hover:text-white rounded-none"
            onClick={() => setSelectedRequest(null)}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default LeaReq;
