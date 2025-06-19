import React, { useState } from "react";

const SalAdv = () => {
  const [showForm, setShowForm] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    file: null,
  });
  const [statusFilter, setStatusFilter] = useState("All");

  const handleApply = () => {
    if (!formData.amount || !formData.description) {
      alert("Please fill in all required fields.");
      return;
    }

    const newEntry = {
      id: Date.now(),
      amount: formData.amount,
      description: formData.description,
      file: formData.file,
      status: "Pending",
      emi: "To be assigned",
      action: "N/A",
      history: "None",
    };

    setEntries([newEntry, ...entries]);
    setFormData({ amount: "", description: "", file: null });
    setShowForm(false);
  };

  const filteredEntries =
    statusFilter === "All"
      ? entries
      : entries.filter((entry) => entry.status === statusFilter);

  const openViewModal = (entry) => {
    setSelectedEntry(entry);
    setViewModal(true);
  };

  return (
    <div className="relative p-4 text-[13px]">
      {/* Filter & Add Button */}
      <div className="flex justify-between mb-4 items-center">
        <div>
          <label className="mr-2 font-medium">Status</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="shadow-sm shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 focus:ring-0 focus:outline-none px-2 py-1 rounded"
          >
            <option>All</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="w-8 h-8 rounded-full bg-gray-200 text-xl text-center flex items-center justify-center hover:bg-gray-300 cursor-pointer"
        >
          +
        </button>
      </div>

      {/* Apply Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-30">
          <div className="bg-white w-full max-w-md p-6 rounded shadow-lg relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-900 text-xl cursor-pointer"
            >
              ×
            </button>
            <h2 className="text-lg font-semibold mb-4">Apply for Salary Advance</h2>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Advance Amount *</label>
              <input
                type="number"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="shadow-sm shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 focus:ring-0 focus:outline-none p-2 w-full rounded"
                placeholder="Enter Amount"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Description *</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="shadow-sm shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 focus:ring-0 focus:outline-none p-2 w-full rounded"
                placeholder="Enter description.."
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Accepted formats: PNG, JPEG, PDF, DOCX, XLSX</label>
              <input
                type="file"
                onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
                className="shadow-sm shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 focus:ring-0 focus:outline-none p-1 w-full"
              />
            </div>
            <button
              onClick={handleApply}
              className="bg-gray-800 text-white px-4 py-2  hover:bg-gray-700 cursor-pointer w-full"
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {/* View Modal */}
      {viewModal && selectedEntry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-30">
          <div className="bg-white w-full max-w-md p-6 rounded shadow-lg relative">
            <button
              onClick={() => setViewModal(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
            >
              ×
            </button>
            <h2 className="text-lg font-semibold mb-4">Advance Request Details</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Amount:</strong> ₹{selectedEntry.amount}</p>
              <p><strong>Description:</strong> {selectedEntry.description}</p>
              <p><strong>Status:</strong> {selectedEntry.status}</p>
              <p><strong>EMI:</strong> {selectedEntry.emi}</p>
              <p><strong>Repayment Action:</strong> {selectedEntry.action}</p>
              <p><strong>Repayment History:</strong> {selectedEntry.history}</p>
              {selectedEntry.file && (
                <p><strong>File:</strong> {selectedEntry.file.name}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Table Section */}
      <table className="w-full shadow-sm shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Requested Amount</th>
            <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Status</th>
            <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">EMI Details</th>
            <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Repayment Action</th>
            <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Repayment History</th>
            <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEntries.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-20 text-gray-500">
                <div className="flex flex-col items-center">
                  <svg
                    className="w-12 h-12 text-blue-400 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <p className="text-lg">No Result Found..!</p>
                </div>
              </td>
            </tr>
          ) : (
            filteredEntries.map((entry) => (
              <tr key={entry.id} className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-t">
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">₹{entry.amount}</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{entry.status}</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{entry.emi}</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{entry.action}</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{entry.history}</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none text-blue-600 hover:underline cursor-pointer">
                  <button className="cursor-pointer hover:text-blue-800" onClick={() => openViewModal(entry)}>View</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center text-sm mt-4 text-gray-600">
        <div>
          Items per page:{" "}
          <select className="shadow-sm shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 focus:ring-0 focus:outline-none rounded px-2 py-1">
            <option>25</option>
            <option>50</option>
          </select>
        </div>
        <div>{filteredEntries.length === 0 ? "0 of 0" : `1 of ${filteredEntries.length}`}</div>
        <div className="flex space-x-2">
          <button disabled className=" cursor-pointer hover:bg-text-200">←</button>
          <button disabled className=" cursor-pointer hover:bg-text-200">→</button>
        </div>
      </div>
    </div>
  );
};

export default SalAdv;
