import React, { useState } from 'react';

const Overtime = () => {
  const [showForm, setShowForm] = useState(false);
  const [overtimeRequests, setOvertimeRequests] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [editingRequest, setEditingRequest] = useState(null);

  const [formData, setFormData] = useState({
    date: '',
    hours: '',
    comments: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingRequest) {
      const updatedRequests = overtimeRequests.map((request) =>
        request.id === editingRequest.id
          ? { ...request, ...formData }
          : request
      );
      setOvertimeRequests(updatedRequests);
      setEditingRequest(null);
    } else {
      const newRequest = {
        id: Date.now(),
        name: `OVT-${Date.now().toString().slice(-4)}`,
        date: formData.date,
        requestedHours: formData.hours,
        status: 'Pending',
        approver: '-',
        comments: formData.comments,
      };
      setOvertimeRequests([...overtimeRequests, newRequest]);
    }

    setFormData({ date: '', hours: '', comments: '' });
    setShowForm(false);
  };

  const handleEdit = (request) => {
    setEditingRequest(request);
    setFormData({
      date: request.date,
      hours: request.requestedHours,
      comments: request.comments,
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this overtime request?')) {
      setOvertimeRequests(overtimeRequests.filter((request) => request.id !== id));
    }
  };

  const handleStatusFilter = (status) => {
    setFilterStatus(status);
  };

  const resetFilters = () => {
    setFilterStatus('All');
  };

  const filteredRequests =
    filterStatus === 'All'
      ? overtimeRequests
      : overtimeRequests.filter((req) => req.status === filterStatus);

  const currentItems = filteredRequests.slice(0, itemsPerPage);
  const totalItems = filteredRequests.length;

  return (
    <div className="p-4 font-sans">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Overtime Requests</h2>
      </div>

      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Filter by Status:</label>
          <select
            value={filterStatus}
            onChange={(e) => handleStatusFilter(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
          {filterStatus !== 'All' && (
            <button
              onClick={resetFilters}
              className="text-blue-500 underline text-sm ml-2"
            >
              Reset
            </button>
          )}
        </div>

        <button
          onClick={() => {
            setEditingRequest(null);
            setFormData({ date: '', hours: '', comments: '' });
            setShowForm(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          + Add Overtime
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-medium mb-4">
              {editingRequest ? 'Edit Overtime' : 'Overtime Application'}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-medium mb-1">
                  Overtime Working Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block font-medium mb-1">
                  Comments *
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  rows="3"
                  placeholder="Enter Comments"
                />
              </div>

              <div className="mb-4">
                <label className="block font-medium mb-1">
                  Overtime Working Hours *
                </label>
                <input
                  type="number"
                  name="hours"
                  value={formData.hours}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Enter overtime working hours"
                  min="0"
                  step="0.5"
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  {editingRequest ? 'Update' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Overtime Name</th>
              <th className="border px-4 py-2 text-left">Date</th>
              <th className="border px-4 py-2 text-left">Requested Hours</th>
              <th className="border px-4 py-2 text-left">Status</th>
              <th className="border px-4 py-2 text-left">Approver</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((request) => (
                <tr key={request.id}>
                  <td className="border px-4 py-2">{request.name}</td>
                  <td className="border px-4 py-2">{request.date}</td>
                  <td className="border px-4 py-2">{request.requestedHours}</td>
                  <td className="border px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        request.status === 'Approved'
                          ? 'bg-green-100 text-green-800'
                          : request.status === 'Rejected'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td className="border px-4 py-2">{request.approver}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleEdit(request)}
                      className="text-blue-500 hover:text-blue-700 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(request.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="border px-4 py-4 text-center text-gray-600"
                >
                  No Result Found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-600">
          Items per page:
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="ml-2 border border-gray-300 rounded px-2 py-1"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="text-sm text-gray-600">
          Showing {currentItems.length} of {totalItems}
        </div>
      </div>
    </div>
  );
};

export default Overtime;
