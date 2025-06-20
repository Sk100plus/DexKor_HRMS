import React, { useState } from 'react';

const compOffRequests = [
  {
    id: 1,
    requestType: 'Full Day',
    appliedBy: 'Richard Samuel',
    appliedDate: '14/08/2024',
    status: 'Approved',
  },
  {
    id: 2,
    requestType: 'Full Day',
    appliedBy: 'Richard Samuel',
    appliedDate: '21/08/2024',
    status: 'Rejected',
  },
  {
    id: 3,
    requestType: 'Full Day',
    appliedBy: 'Richard Samuel',
    appliedDate: '28/08/2024',
    status: 'Pending',
  },
];

const statusColor = {
  Approved: 'text-green-700 bg-green-100',
  Rejected: 'text-red-700 bg-red-100',
  Pending: 'text-yellow-700 bg-yellow-100',
};

const Comp_off = () => {
  const [selected, setSelected] = useState(null);
  const [comment, setComment] = useState('');
  const [isAction, setIsAction] = useState(false);

  return (
    <div className="p-6 text-sm font-sans">
      {!selected ? (
        <>
          <div className="flex items-center gap-2 mb-4">
            <label>Status</label>
            <select className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 px-2 py-1 rounded text-sm">
              <option>All</option>
              <option>Approved</option>
              <option>Rejected</option>
              <option>Pending</option>
            </select>
            <button className=" cursor-pointer hover:bg-gray-400 px-3 py-1 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 text-sm">Reset</button>
          </div>

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
              {compOffRequests.map((req) => (
                <tr key={req.id} className="text-center">
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300">{req.requestType}</td>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300">{`${req.appliedBy} (${req.appliedDate})`}</td>
                  <td className={`p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300`}>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${statusColor[req.status]}`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300">
                    {req.status === 'Pending' ? (
                      <button
                        onClick={() => {
                          setSelected(req);
                          setIsAction(true);
                        }}
                        className="cursor-pointer hover:text-white hover:bg-blue-600  text-black px-3 py-1 rounded-none border"
                      >
                        Take Action
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setSelected(req);
                          setIsAction(false);
                        }}
                        className=" cursor-pointer hover:text-white hover:bg-gray-600  text-black px-2.5 py-1 rounded-none border"
                      >
                        View Details
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div className="max-w-2xl mx-auto bg-white shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 rounded shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">
            {isAction ? 'Take Action on Comp-Off Request' : 'Comp-Off Request Details'}
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div><strong>Request Type:</strong> {selected.requestType}</div>
            <div><strong>Status:</strong> <span className={`font-semibold ${statusColor[selected.status]}`}>{selected.status}</span></div>
            <div><strong>Applied By:</strong> {selected.appliedBy}</div>
            <div><strong>Applied On:</strong> {selected.appliedDate}</div>
          </div>

          {isAction && (
            <div className="mb-6">
              <h3 className="font-medium mb-2">Comments</h3>
              <textarea
                rows={4}
                className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 p-2 rounded text-sm"
                placeholder="Enter Comments"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <div className="mt-3 flex gap-3">
                <button className="px-4 py-2 hover:bg-red-600 hover:text-white rounded-none border cursor-pointer hover:bg-red-700">
                  Reject
                </button>
                <button className="px-4 py-2 cursor-pointer hover:bg-green-600 hover:text-white rounded-none border hover:bg-green-700">
                  Approve
                </button>
              </div>
            </div>
          )}

          <button
            onClick={() => {
              setSelected(null);
              setComment('');
            }}
            className="mt-6 px-4 py-2 cursor-pointer border hover:text-white rounded-none hover:bg-gray-600"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Comp_off;
