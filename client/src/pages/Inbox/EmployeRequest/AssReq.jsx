import React, { useState } from 'react';

const mockData = [
  {
    id: 1,
    category: 'Software',
    type: 'Design Software',
    requester: 'Richard Samuel',
    date: '28/08/2024, 04:40 AM',
    status: 'Pending',
  },
];

const AssReq = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-6 text-[13px]">
      {!selected ? (
        <>
          {/* Filters */}
          <div className="flex gap-4 mb-4">
            <select className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded px-2 py-1">
              <option>Select Category</option>
            </select>
            <select className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded px-2 py-1">
              <option>Select Asset</option>
            </select>
            <select className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded px-2 py-1">
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
            <button className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-1 rounded">Reset</button>
          </div>

          {/* Table */}
          <table className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none ">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-2">Request Type</th>
                <th className="p-2">Applied By</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-2">Asset: {item.type}</td>
                  <td className="p-2">
                    {item.requester} <br /> {item.date}
                  </td>
                  <td className="p-2">
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full ">
                      ● {item.status}
                    </span>
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => setSelected(item)}
                      className="hover:bg-gray-800 border hover:text-white cursor-pointer px-3 py-1 rounded-none"
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
        <div>
          {/* Detailed View */}
          <div className="bg-white text-[13px] shadow p-6 rounded-lg w-full">
            <h2 className=" font-semibold mb-4">Asset Request Details</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div><strong>Employee:</strong> Richard Samuel</div>
              <div><strong>Asset Type:</strong> {selected.type}</div>
              <div><strong>Category:</strong> {selected.category}</div>
              <div><strong>Status:</strong> {selected.status}</div>
              <div><strong>Applied on:</strong> {selected.date}</div>
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1">Asset Items</label>
              <select className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded">
                <option>No asset items available</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-1">Comments</label>
              <textarea
                className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
                placeholder="Enter comments"
              />
            </div>

            <div className="flex gap-2">
              <button className="hover:bg-red-600 hover:text-white border px-4 py-2 rounded-none cursor-pointer">Reject</button>
              <button className="hover:bg-blue-600 hover:text-white px-4 py-2 rounded-none border cursor-pointer">Approve</button>
              <button
                className="ml-auto  text-gray-900 hover:bg-gray-600 hover:text-white border p-2 cursor-pointer text-sm"
                onClick={() => setSelected(null)}
              >
                ← Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssReq;
