import React, { useState } from 'react';

const wfhRequests = [
  {
    id: 1,
    period: '27/08/2024 - 27/08/2024',
    appliedBy: 'Jaime Lannister',
    appliedOn: '28/08/2024',
    status: 'Pending',
  },
  {
    id: 2,
    period: '25/08/2024 - 26/08/2024',
    appliedBy: 'Arya Stark',
    appliedOn: '26/08/2024',
    status: 'Approved',
  },
  {
    id: 3,
    period: '24/08/2024 - 24/08/2024',
    appliedBy: 'Jon Snow',
    appliedOn: '25/08/2024',
    status: 'Rejected',
  },
];

const statusColor = {
  Approved: 'text-green-700 bg-green-100',
  Rejected: 'text-red-700 bg-red-100',
  Pending: 'text-yellow-700 bg-yellow-100',
};

const WFHReq = () => {
  const [selected, setSelected] = useState(null);
  const [comment, setComment] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredRequests = wfhRequests.filter((req) => {
    return filterStatus === 'All' || req.status === filterStatus;
  });

  return (
    <div className="p-6 text-sm font-sans">
      {!selected ? (
        <>
          {/* Filter Section */}
          <div className="flex items-center gap-2 mb-4">
            <select
              className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 px-2 py-1 rounded text-sm"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
              <option value="Pending">Pending</option>
            </select>
            <button
              className="cursor-pointer hover:text-white hover:bg-gray-700 px-3 py-1 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 text-sm"
              onClick={() => setFilterStatus('All')}
            >
              Reset
            </button>
          </div>

          {/* Table */}
          <table className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300">Request Type</th>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300">Applied By</th>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300">Status</th>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.length > 0 ? (
                filteredRequests.map((req) => (
                  <tr key={req.id} className="text-center">
                    <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300">
                      WFH Period: <br />
                      <span className="text-xs">{req.period}</span>
                    </td>
                    <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300">
                      {req.appliedBy}
                      <br />
                      <span className="text-xs">{req.appliedOn}</span>
                    </td>
                    <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${statusColor[req.status]}`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300">
                      <button
                        className="hover:text-white hover:bg-gray-700 border px-3 py-1 rounded-none cursor-pointer"
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
                    No matching WFH requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      ) : (
        <div className="max-w-2xl mx-auto bg-white shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded shadow-sm p-6 mt-4">
          <h2 className="text-lg font-semibold mb-4">WFH Request Details</h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div><strong>WFH Period:</strong> {selected.period}</div>
            <div><strong>Status:</strong> <span className={`font-semibold ${statusColor[selected.status]}`}>{selected.status}</span></div>
            <div><strong>Applied By:</strong> {selected.appliedBy}</div>
            <div><strong>Applied On:</strong> {selected.appliedOn}</div>
          </div>

          <div>
            <label className="font-medium mb-1 block">Comments</label>
            <textarea
              className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 p-2 rounded text-sm"
              rows={4}
              placeholder="Enter your comments..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <div className="mt-4 flex gap-3">
            <button className="px-4 py-2 cursor-pointer border hover:text-white rounded-none hover:bg-red-700">Reject</button>
            <button className="px-4 py-2 cursor-pointer border hover:text-white rounded-none hover:bg-green-700">Approve</button>
          </div>

          <button
            onClick={() => {
              setSelected(null);
              setComment('');
            }}
            className="mt-6 cursor-pointer border hover:text-white px-4 py-2 rounded-none hover:bg-gray-600"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default WFHReq;
