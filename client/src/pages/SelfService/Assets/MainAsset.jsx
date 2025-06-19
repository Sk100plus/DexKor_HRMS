import React, { useState } from "react";

const MainAsset = () => {
  const [showMyAssets, setShowMyAssets] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(null); // row index for detail
  const [requests, setRequests] = useState([
    {
      category: "Software",
      type: "Design Software",
      item: "Oracle",
      requestedOn: "28/08/2024 04:40 AM",
      status: "Approved",
    },
    {
      category: "Software",
      type: "Design Software",
      item: "Windows",
      requestedOn: "28/08/2024 04:40 AM",
      status: "Rejected",
    },
    {
      category: "Software",
      type: "Design Software",
      item: "AutoCAD",
      requestedOn: "28/08/2024 04:40 AM",
      status: "Pending",
    },
  ]);
  const [filters, setFilters] = useState({ category: "", type: "", status: "" });
  const [newRequest, setNewRequest] = useState({ category: "", type: "", item: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date().toLocaleString("en-GB");
    setRequests([
      ...requests,
      { ...newRequest, requestedOn: now, status: "Pending" },
    ]);
    setShowForm(false);
    setNewRequest({ category: "", type: "", item: "" });
  };

  const filteredRequests = requests.filter((req) => {
    return (
      (!filters.category || req.category === filters.category) &&
      (!filters.type || req.type === filters.type) &&
      (!filters.status || req.status === filters.status)
    );
  });

  return (
    <div className="p-4 bg-white rounded shadow-sm">
      {showMyAssets ? (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">My Assets</h2>
            <button
              onClick={() => setShowMyAssets(false)}
              className="text-blue-600 text-sm hover:underline"
            >
              Request Assets
            </button>
          </div>
          <table className="min-w-full text-sm text-left shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Category Name</th>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Asset Name</th>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Asset Item Name</th>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Given Date</th>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-gray-700">
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Software</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Design Software</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Oracle</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">14/08/2024 04:40 AM</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
                  <span className="inline-flex items-center text-green-700 bg-green-100 px-2 py-1 rounded-full text-xs">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-1" />
                    Approved
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">My Asset Request History</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setFilters({ category: "", type: "", status: "" })}
                className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-1 rounded text-sm"
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
              className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-2 py-1 rounded text-sm"
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            >
              <option value="">Select Category</option>
              <option value="Software">Software</option>
            </select>
            <select
              className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-2 py-1 rounded text-sm"
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            >
              <option value="">Select Assets</option>
              <option value="Design Software">Design Software</option>
            </select>
            <select
              className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-2 py-1 rounded text-sm"
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            >
              <option value="">All</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          {/* Table */}
          <table className="min-w-full text-sm text-left shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Category</th>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Asset Type</th>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Asset Item</th>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Requested On</th>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Status</th>
                <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((req, index) => (
                <tr key={index}>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{req.category}</td>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{req.type}</td>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{req.item}</td>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{req.requestedOn}</td>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
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
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
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
        </>
      )}

      {/* Add Request Form */}
      {(showForm || showDetails !== null) && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-30 z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              {showForm ? "Add New Request" : "Asset Request Details"}
            </h2>
            <form
              onSubmit={showForm ? handleSubmit : (e) => e.preventDefault()}
              className="space-y-4"
            >
              <input
                required
                placeholder="Category"
                className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
                value={
                  showForm ? newRequest.category : requests[showDetails]?.category
                }
                readOnly={!showForm}
                onChange={(e) =>
                  setNewRequest({ ...newRequest, category: e.target.value })
                }
              />
              <input
                required
                placeholder="Asset Type"
                className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
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
                placeholder="Asset Item"
                className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
                value={
                  showForm ? newRequest.item : requests[showDetails]?.item
                }
                readOnly={!showForm}
                onChange={(e) =>
                  setNewRequest({ ...newRequest, item: e.target.value })
                }
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setShowDetails(null);
                  }}
                  className="px-4 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded"
                >
                  Close
                </button>
                {showForm && (
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded"
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

export default MainAsset;
