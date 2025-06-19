import React, { useState } from 'react';

const WFH = () => {
  const [showForm, setShowForm] = useState(false);
  const [wfhRequests, setWfhRequests] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ reason: '', status: '' });

  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    reason: '',
    attachment: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      attachment: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
      id: Date.now(),
      period: `${formData.startDate} to ${formData.endDate}`,
      reason: formData.reason,
      attachment: formData.attachment ? formData.attachment.name : 'No file attached',
      status: 'Pending',
      approver: '-',
    };

    setWfhRequests([...wfhRequests, newRequest]);
    setFormData({ startDate: '', endDate: '', reason: '', attachment: null });
    setShowForm(false);
  };

  const handleStatusFilter = (status) => {
    setFilterStatus(status);
  };

  const filteredRequests = filterStatus === 'All'
    ? wfhRequests
    : wfhRequests.filter((req) => req.status === filterStatus);

  const currentItems = filteredRequests.slice(0, itemsPerPage);
  const totalItems = filteredRequests.length;

  return (
    <div className="p-4 font-sans">
      <div className=" justify-between items-center ">
        <h2 className="text-lg font-semibold">Status</h2>
        <div className="flex items-center gap-2">
          <label className="text-sm">Filter by Status:</label>
          <select
            value={filterStatus}
            onChange={(e) => handleStatusFilter(e.target.value)}
            className="border border-gray-300 focus:ring-0 focus:outline-none rounded px-2 py-1"
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div className="mb-4 flex justify-end">
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          + Apply WFH
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">WFH Apply</h3>

            <div className="mb-4">
              <h4 className="font-medium mb-2">WFH Period</h4>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="block text-sm mb-1">Start date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 focus:ring-0 focus:outline-none rounded px-3 py-2"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm mb-1">End date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 focus:ring-0 focus:outline-none rounded px-3 py-2"
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-medium mb-2">Supporting documents</h4>
              <p className="text-sm text-gray-600 mb-2">
                Accepted formats: PNG, JPEG, PDF, DOCX, XLSX and file must be less than 5MB.
              </p>
              <div>
                <label className="block text-sm mb-1">Reason for Work from home</label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 focus:ring-0 focus:outline-none rounded px-3 py-2"
                  rows="3"
                />
              </div>
              <div className="mt-2">
                <label className="block text-sm mb-1">Attachment</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full border border-gray-300 focus:ring-0 focus:outline-none rounded px-3 py-2"
                  accept=".png,.jpeg,.jpg,.pdf,.docx,.xlsx"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 border border-gray-300 focus:ring-0 focus:outline-none rounded hover:bg-gray-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className=" cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 focus:ring-0 focus:outline-none">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">WFH Period</th>
              <th className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Reason</th>
              <th className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Attachment</th>
              <th className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Status</th>
              <th className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Approver</th>
              <th className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((request) => (
                <tr key={request.id}>
                  {editingId === request.id ? (
                    <>
                      <td className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">{request.period}</td>
                      <td className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">
                        <input
                          className="border border-gray-300 focus:ring-0 focus:outline-none px-2 py-1 w-full"
                          value={editData.reason}
                          onChange={(e) =>
                            setEditData({ ...editData, reason: e.target.value })
                          }
                        />
                      </td>
                      <td className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">{request.attachment}</td>
                      <td className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">
                        <select
                          className="border border-gray-300 focus:ring-0 focus:outline-none px-2 py-1 w-full"
                          value={editData.status}
                          onChange={(e) =>
                            setEditData({ ...editData, status: e.target.value })
                          }
                        >
                          <option>Pending</option>
                          <option>Approved</option>
                          <option>Rejected</option>
                        </select>
                      </td>
                      <td className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">{request.approver}</td>
                      <td className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">
                        <button
                          className="text-green-600 mr-2"
                          onClick={() => {
                            const updated = wfhRequests.map((r) =>
                              r.id === request.id
                                ? { ...r, ...editData }
                                : r
                            );
                            setWfhRequests(updated);
                            setEditingId(null);
                          }}
                        >
                          Save
                        </button>
                        <button
                          className="text-gray-600"
                          onClick={() => setEditingId(null)}
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">{request.period}</td>
                      <td className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">{request.reason}</td>
                      <td className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">{request.attachment}</td>
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
                      <td className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">{request.approver}</td>
                      <td className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">
                        <button
                          className="text-blue-500 hover:text-blue-700 mr-2 cursor-pointer"
                          onClick={() => {
                            setEditingId(request.id);
                            setEditData({
                              reason: request.reason,
                              status: request.status,
                            });
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700 cursor-pointer"
                          onClick={() =>
                            setWfhRequests(
                              wfhRequests.filter((r) => r.id !== request.id)
                            )
                          }
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="border border-gray-300 focus:ring-0 focus:outline-none px-4 py-4 text-center">
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

export default WFH;
