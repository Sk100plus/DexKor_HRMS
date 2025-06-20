import React, { useState } from 'react';

const missedPunches = [
  {
    id: 1,
    name: 'Richard Samuel',
    empId: 'EMP-20240425-001',
    punchTime: '09:30',
    punchDate: '25/08/2024',
    appliedOn: '28/08/2024 04:40 AM',
    status: 'Pending',
  },
];

const MissPun = () => {
  const [selected, setSelected] = useState(null);
  const [comment, setComment] = useState('');

  return (
    <div className="p-6 text-sm font-sans">
      {!selected ? (
        <table className="w-full border border-gray-300 shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border border-gray-300">Punch Date</th>
              <th className="p-2 border border-gray-300">Punch Time</th>
              <th className="p-2 border border-gray-300">Applied On</th>
              <th className="p-2 border border-gray-300">Status</th>
              <th className="p-2 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {missedPunches.map((req) => (
              <tr key={req.id} className="text-center">
                <td className="p-2 border border-gray-300">{req.punchDate}</td>
                <td className="p-2 border border-gray-300">{req.punchTime}</td>
                <td className="p-2 border border-gray-300">{req.appliedOn}</td>
                <td className="p-2 border border-gray-300 text-yellow-500">{req.status}</td>
                <td className="p-2 border border-gray-300">
                  <button
                    onClick={() => setSelected(req)}
                    className="px-3 py-1 text-black border hover:text-white cursor-pointer rounded-none hover:bg-blue-700"
                  >
                    Take Action
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="max-w-2xl mx-auto bg-white border border-gray-300 rounded shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">Missed Punch Request Approval</h2>

          <div className="mb-6">
            <div className="mb-1">
              <strong>{selected.name}</strong> ({selected.empId})
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><strong>Missed Punch time:</strong> {selected.punchTime}</div>
              <div><strong>Status:</strong> <span className="text-yellow-500">{selected.status}</span></div>
              <div><strong>Missed Punch Date:</strong> {selected.punchDate}</div>
              <div><strong>Applied on:</strong> {selected.appliedOn}</div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Review Details</h3>
            <textarea
              rows={4}
              className="w-full border border-gray-300 p-2 rounded text-sm"
              placeholder="Enter Comments"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="mt-3 flex gap-3">
              <button className="px-4 py-2 text-black border hover:text-white cursor-pointer rounded-none hover:bg-red-700">
                Reject
              </button>
              <button className="px-4 py-2 hover:bg-green-600 text-black border rounded-none cursor-pointer hover:text-white">
                Approve
              </button>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-medium mb-2">Approvals</h3>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{selected.name}</div>
                <div className="text-xs text-gray-500">Level 1</div>
              </div>
              <span className="text-yellow-500 font-semibold">Pending</span>
            </div>
          </div>

          <button
            onClick={() => setSelected(null)}
            className="mt-6 px-4 py-2 hover:text-white cursor-pointer border text-black rounded-none hover:bg-gray-600"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default MissPun;
