import React, { useState } from 'react';

const OptHoliday = () => {
  const [showForm, setShowForm] = useState(false);
  const [holidayRequests, setHolidayRequests] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [editingId, setEditingId] = useState(null); // Track if we're editing an item

  const [formData, setFormData] = useState({
    holidayName: '',
    requestedDate: '',
    comments: '',
  });

  const holidayOptions = [
    'Diwali',
    'Christmas',
    'Eid',
    'Good Friday',
    'Makar Sankranti',
    'Pongal',
    'Republic Day',
    'Independence Day',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      setHolidayRequests((prev) =>
        prev.map((req) =>
          req.id === editingId
            ? {
                ...req,
                holidayName: formData.holidayName,
                requestedDate: formData.requestedDate,
                comments: formData.comments,
              }
            : req
        )
      );
      setEditingId(null);
    } else {
      const newRequest = {
        id: Date.now(),
        requestedDate: formData.requestedDate || new Date().toISOString().split('T')[0],
        holidayName: formData.holidayName,
        status: 'Pending',
        comments: formData.comments,
      };
      setHolidayRequests([...holidayRequests, newRequest]);
    }

    setFormData({ holidayName: '', requestedDate: '', comments: '' });
    setShowForm(false);
  };

  const handleStatusFilter = (status) => {
    setFilterStatus(status);
  };

  const resetFilters = () => {
    setFilterStatus('All');
  };

  const handleEdit = (id) => {
    const toEdit = holidayRequests.find((req) => req.id === id);
    if (toEdit) {
      setFormData({
        holidayName: toEdit.holidayName,
        requestedDate: toEdit.requestedDate,
        comments: toEdit.comments,
      });
      setEditingId(id);
      setShowForm(true);
    }
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this request?');
    if (confirmed) {
      setHolidayRequests((prev) => prev.filter((req) => req.id !== id));
    }
  };

  const filteredRequests =
    filterStatus === 'All'
      ? holidayRequests
      : holidayRequests.filter((req) => req.status === filterStatus);

  const currentItems = filteredRequests.slice(0, itemsPerPage);
  const totalItems = filteredRequests.length;

  return (
    <div className="p-4 font-sans">
      <h1 className="text-2xl font-bold mb-4">Optional Holiday</h1>

      <div className=" justify-between items-center">
        <h2 className="text-lg font-semibold">Status</h2>
        <div className="flex gap-2">
          <button
            onClick={() => handleStatusFilter('All')}
            className={`px-3 py-1 rounded ${filterStatus === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'} cursor-pointer`}
          >
            All
          </button>
          <select
            value={filterStatus}
            onChange={(e) => handleStatusFilter(e.target.value)}
            className="px-3 py-1 rounded border border-gray-300 focus:ring-0 focus:outline-none"
          >
            <option value="Select Holiday" disabled>Select Holiday</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
          <button onClick={resetFilters} className="px-3 py-1 rounded bg-gray-200 cursor-pointer">
            Reset
          </button>
        </div>
      </div>

      <div className="mb-4 flex justify-end">
        <button
          onClick={() => {
            setFormData({ holidayName: '', requestedDate: '', comments: '' });
            setEditingId(null);
            setShowForm(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          + Request Holiday
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">
              {editingId ? 'Edit Holiday Request' : 'Optional Holiday Request'}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-medium mb-1">Select Holiday *</label>
                <select
                  name="holidayName"
                  value={formData.holidayName}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 focus:ring-0 focus:outline-none rounded px-3 py-2"
                >
                  <option value="">Select Optional Holiday</option>
                  {holidayOptions.map((holiday, index) => (
                    <option key={index} value={holiday}>
                      {holiday}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block font-medium mb-1">Requested Date *</label>
                <input
                  type="date"
                  name="requestedDate"
                  value={formData.requestedDate}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 focus:ring-0 focus:outline-none rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block font-medium mb-1">Comments *</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 focus:ring-0 focus:outline-none rounded px-3 py-2"
                  rows="3"
                  placeholder="Enter Comments"
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingId(null);
                  }}
                  className="px-4 py-2 border border-gray-300 focus:ring-0 focus:outline-none rounded cursor-pointer hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
                  {editingId ? 'Update' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 focus:ring-0 focus:outline-none">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Requested Date</th>
              <th className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Holiday Name</th>
              <th className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Status</th>
              <th className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((request) => (
                <tr key={request.id}>
                  <td className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">{request.requestedDate}</td>
                  <td className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">{request.holidayName}</td>
                  <td className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">
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
                  <td className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">
                    <button
                      className="text-blue-500 hover:text-blue-700 mr-2"
                      onClick={() => handleEdit(request.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(request.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-4 text-center">
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
            className="ml-2 border border-gray-300 focus:ring-0 focus:outline-none rounded px-2 py-1"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="text-sm text-gray-600">
          {currentItems.length} of {totalItems}
        </div>
      </div>
    </div>
  );
};

export default OptHoliday;
