import React, { useState } from 'react';

const overtimeRequests = [
  {
    id: 1,
    requestType: 'Extended Effort Excellence',
    date: '27/08/2024',
    hours: 1,
    appliedBy: 'Jaime Lannister',
    appliedOn: '27/08/2024',
    status: 'Pending',
  },
  {
    id: 2,
    requestType: 'Extended Effort Excellence',
    date: '25/08/2024',
    hours: 2,
    appliedBy: 'Jon Snow',
    appliedOn: '25/08/2024',
    status: 'Approved',
  },
  {
    id: 3,
    requestType: 'Weekend Support',
    date: '24/08/2024',
    hours: 3,
    appliedBy: 'Arya Stark',
    appliedOn: '24/08/2024',
    status: 'Rejected',
  },
];

const statusColor = {
  Approved: 'text-green-700 bg-green-100',
  Rejected: 'text-red-700 bg-red-100',
  Pending: 'text-yellow-700 bg-yellow-100',
};

const OverReq = () => {
  const [selected, setSelected] = useState(null);
  const [comment, setComment] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterType, setFilterType] = useState('All');

  const filteredRequests = overtimeRequests.filter((req) => {
    const statusMatch = filterStatus === 'All' || req.status === filterStatus;
    const typeMatch = filterType === 'All' || req.requestType === filterType;
    return statusMatch && typeMatch;
  });

  const uniqueRequestTypes = [...new Set(overtimeRequests.map((r) => r.requestType))];

  return (
    <div className="p-6 text-sm font-sans">
      {!selected ? (
        <>
          {/* Filter Controls */}
          <div className="flex items-center gap-2 mb-4">
            <select
              className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 px-2 py-1 rounded text-sm"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="All">Select Overtime</option>
              {uniqueRequestTypes.map((type, i) => (
                <option key={i} value={type}>{type}</option>
              ))}
            </select>
            <select
              className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 px-2 py-1 rounded text-sm"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
              <option value="Pending">Pending</option>
            </select>
            <button
              className="px-3 py-1 cursor-pointer hover:bg-gray-600 hover:text-white shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 text-sm"
              onClick={() => {
                setFilterType('All');
                setFilterStatus('All');
              }}
            >
              Reset
            </button>
          </div>

          {/* Table */}
          <table className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300">Request Type</th>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300">Applied By</th>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300">Status</th>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.length > 0 ? (
                filteredRequests.map((req) => (
                  <tr key={req.id} className="text-center">
                    <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300">
                      {req.requestType}<br />
                      <span className="text-xs">Date: {req.date}</span><br />
                      <span className="text-xs">Employee Requested Hours: {req.hours}</span>
                    </td>
                    <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300">
                      {req.appliedBy}<br />
                      <span className="text-xs">{req.appliedOn}</span>
                    </td>
                    <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${statusColor[req.status]}`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300">
                      <button
                        className="border hover:text-white px-3 py-1  cursor-pointer hover:bg-blue-700"
                        onClick={() => setSelected(req)}
                      >
                        Take Action
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-gray-500">
                    No matching requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      ) : (
        <div className="max-w-2xl mx-auto bg-white shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 rounded shadow-sm p-6 mt-4">
          <h2 className="text-lg font-semibold mb-4">Overtime Request Details</h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div><strong>Request Type:</strong> {selected.requestType}</div>
            <div><strong>Status:</strong> <span className={`font-semibold ${statusColor[selected.status]}`}>{selected.status}</span></div>
            <div><strong>Requested On:</strong> {selected.date}</div>
            <div><strong>Requested Hours:</strong> {selected.hours}</div>
            <div><strong>Applied By:</strong> {selected.appliedBy}</div>
            <div><strong>Applied Date:</strong> {selected.appliedOn}</div>
          </div>

          <div>
            <label className="font-medium mb-1 block">Comments</label>
            <textarea
              className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 p-2 rounded text-sm"
              rows={4}
              placeholder="Enter your comments..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <div className="mt-4 flex gap-3">
            <button className="px-4 py-2 hover:text-white border cursor-pointer  hover:bg-red-700">Reject</button>
            <button className="px-4 py-2 border hover:text-white  cursor-pointer hover:bg-green-700">Approve</button>
          </div>

          <button
            onClick={() => {
              setSelected(null);
              setComment('');
            }}
            className="mt-6 px-4 py-2 cursor-pointer border hover:text-white  hover:bg-gray-600"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default OverReq;
