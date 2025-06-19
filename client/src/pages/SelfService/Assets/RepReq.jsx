import React, { useState } from "react";

const ReqRep = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(null);
  const [requests, setRequests] = useState([
    {
      name: "Request A",
      type: "Repair",
      item: "Mouse",
      date: "12/06/2024 10:20 AM",
      status: "Pending",
    },
    {
      name: "Request B",
      type: "Replace",
      item: "Keyboard",
      date: "11/06/2024 03:15 PM",
      status: "Approved",
    },
  ]);

  const [filters, setFilters] = useState({ type: "", status: "" });
  const [newRequest, setNewRequest] = useState({ name: "", type: "", item: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date().toLocaleString("en-GB");
    setRequests([
      ...requests,
      { ...newRequest, date: now, status: "Pending" },
    ]);
    setShowForm(false);
    setNewRequest({ name: "", type: "", item: "" });
  };

  const filteredRequests = requests.filter((r) =>
    (!filters.type || r.type === filters.type) &&
    (!filters.status || r.status === filters.status)
  );

  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Request/Replace History</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setFilters({ type: "", status: "" })}
            className="shadow-sm border border-gray-300 px-3 py-1 rounded text-sm"
          >
            Reset
          </button>
          <button
            onClick={() => {
              setShowForm(true);
              setShowDetails(null);
            }}
            className="bg-blue-600 text-white px-3 py-1 text-sm rounded"
          >
            + Add
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <select
          className="shadow-sm border border-gray-300 px-2 py-1 rounded text-sm"
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          <option value="">Select Type</option>
          <option value="Repair">Repair</option>
          <option value="Replace">Replace</option>
        </select>
        <select
          className="shadow-sm border border-gray-300 px-2 py-1 rounded text-sm"
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* Table */}
      <table className="min-w-full text-sm text-left shadow-sm border border-gray-300">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="p-2 border border-gray-300">Name</th>
            <th className="p-2 border border-gray-300">Type</th>
            <th className="p-2 border border-gray-300">Item</th>
            <th className="p-2 border border-gray-300">Date</th>
            <th className="p-2 border border-gray-300">Status</th>
            <th className="p-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((req, index) => (
            <tr key={index}>
              <td className="p-2 border border-gray-300">{req.name}</td>
              <td className="p-2 border border-gray-300">{req.type}</td>
              <td className="p-2 border border-gray-300">{req.item}</td>
              <td className="p-2 border border-gray-300">{req.date}</td>
              <td className="p-2 border border-gray-300">
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                    req.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : req.status === "Rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full mr-1 ${
                      req.status === "Approved"
                        ? "bg-green-600"
                        : req.status === "Rejected"
                        ? "bg-red-600"
                        : "bg-yellow-600"
                    }`}
                  />
                  {req.status}
                </span>
              </td>
              <td className="p-2 border border-gray-300">
                <button
                  onClick={() => {
                    setShowDetails(index);
                    setShowForm(false);
                  }}
                  className="text-blue-600 underline text-xs"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form Modal */}
      {(showForm || showDetails !== null) && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              {showForm ? "Add New Request" : "Request Details"}
            </h2>
            <form
              onSubmit={showForm ? handleSubmit : (e) => e.preventDefault()}
              className="space-y-4"
            >
              <input
                required
                placeholder="Request Name"
                className="w-full border border-gray-300 px-3 py-2 rounded shadow-sm"
                value={
                  showForm ? newRequest.name : requests[showDetails]?.name
                }
                readOnly={!showForm}
                onChange={(e) =>
                  setNewRequest({ ...newRequest, name: e.target.value })
                }
              />
              <input
                required
                placeholder="Type (Repair/Replace)"
                className="w-full border border-gray-300 px-3 py-2 rounded shadow-sm"
                value={
                  showForm ? newRequest.type : requests[showDetails]?.type
                }
                readOnly={!showForm}
                onChange={(e) =>
                  setNewRequest({ ...newRequest, type: e.target.value })
                }
              />
              <input
                required
                placeholder="Item"
                className="w-full border border-gray-300 px-3 py-2 rounded shadow-sm"
                value={
                  showForm ? newRequest.item : requests[showDetails]?.item
                }
                readOnly={!showForm}
                onChange={(e) =>
                  setNewRequest({ ...newRequest, item: e.target.value })
                }
              />

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setShowDetails(null);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded shadow-sm"
                >
                  Close
                </button>
                {showForm && (
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded shadow-sm"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReqRep;
