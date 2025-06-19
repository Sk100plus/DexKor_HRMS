import React, { useState } from 'react';

const Leave = () => {
  const [leaveData, setLeaveData] = useState([
    {
      id: 1,
      type: 'Casual Leave',
      startDate: '2024-08-26',
      totalDays: '1 - Full Day(s)',
      status: 'Rejected',
    },
    {
      id: 2,
      type: 'Casual Leave',
      startDate: '2024-08-27',
      totalDays: '1 - Full Day(s)',
      status: 'Pending',
    },
  ]);

  const [statusFilter, setStatusFilter] = useState('All');
  const [leaveTypeFilter, setLeaveTypeFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);

  const [newLeave, setNewLeave] = useState({
    type: '',
    startDate: '',
    totalDays: '',
  });

  const statuses = ['All', 'Pending', 'Approved', 'Rejected'];
  const leaveTypes = ['All', 'Casual Leave', 'Sick Leave', 'Vacation Leave'];

  const filteredData = leaveData.filter((item) => {
    return (
      (statusFilter === 'All' || item.status === statusFilter) &&
      (leaveTypeFilter === 'All' || item.type === leaveTypeFilter)
    );
  });

  const handleAddLeave = () => {
    const newEntry = {
      id: leaveData.length + 1,
      ...newLeave,
      status: 'Pending',
    };
    setLeaveData([...leaveData, newEntry]);
    setShowForm(false);
    setNewLeave({ type: '', startDate: '', totalDays: '' });
  };

  return (
    <div className="p-6 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">My Leave Requests History</h2>
        <button
          className="text-2xl bg-blue-500 text-white w-10 h-10 rounded-full hover:bg-blue-600"
          onClick={() => setShowForm(true)}
        >
          +
        </button>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
            <h3 className="text-xl font-semibold mb-4">New Leave Request</h3>
            <div className="flex flex-col gap-4 mb-4">
              <select
                className="border px-3 py-2 rounded"
                value={newLeave.type}
                onChange={(e) =>
                  setNewLeave({ ...newLeave, type: e.target.value })
                }
              >
                <option value="">Select Leave Type</option>
                {leaveTypes.slice(1).map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
              <input
                type="date"
                className="border px-3 py-2 rounded"
                value={newLeave.startDate}
                onChange={(e) =>
                  setNewLeave({ ...newLeave, startDate: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="e.g. 1 - Full Day(s)"
                className="border px-3 py-2 rounded"
                value={newLeave.totalDays}
                onChange={(e) =>
                  setNewLeave({ ...newLeave, totalDays: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={handleAddLeave}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filter controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          className="border border-gray-300 px-4 py-2 rounded"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          {statuses.map((status) => (
            <option key={status}>{status}</option>
          ))}
        </select>

        <select
          className="border border-gray-300 px-4 py-2 rounded"
          value={leaveTypeFilter}
          onChange={(e) => setLeaveTypeFilter(e.target.value)}
        >
          {leaveTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>

        <button
          onClick={() => {
            setStatusFilter('All');
            setLeaveTypeFilter('All');
          }}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Reset
        </button>
      </div>

      {/* Leave Table */}
      <table className="min-w-full border">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="border px-4 py-2">Leave Type</th>
            <th className="border px-4 py-2">Leave Start Date</th>
            <th className="border px-4 py-2">Total Days</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((leave) => (
            <tr key={leave.id}>
              <td className="border px-4 py-2">{leave.type}</td>
              <td className="border px-4 py-2">{leave.startDate}</td>
              <td className="border px-4 py-2">{leave.totalDays}</td>
              <td className="border px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-white text-sm ${
                    leave.status === 'Rejected'
                      ? 'bg-red-500'
                      : leave.status === 'Pending'
                      ? 'bg-yellow-500'
                      : 'bg-green-500'
                  }`}
                >
                  {leave.status}
                </span>
              </td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredData.length === 0 && (
        <div className="text-center text-gray-500 mt-4">No records found.</div>
      )}
    </div>
  );
};

export default Leave;
