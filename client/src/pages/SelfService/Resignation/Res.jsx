import React, { useState } from "react";

const Res = () => {
  const [resignations, setResignations] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    reason: "",
    resignationDate: "",
    noticePeriod: "",
    attachment: "",
    status: "Pending",
    requestedOn: new Date().toLocaleDateString(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setResignations([...resignations, form]);
    setForm({
      reason: "",
      resignationDate: "",
      noticePeriod: "",
      attachment: "",
      status: "Pending",
      requestedOn: new Date().toLocaleDateString(),
    });
    setShowForm(false);
  };

  const filteredData =
    statusFilter === "All"
      ? resignations
      : resignations.filter((item) => item.status === statusFilter);

  return (
    <div className="p-4 text-[13px]">
      {/* Filter and Add Button */}
      <div className="flex justify-between items-center mb-4">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-1 rounded"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>

        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
        >
          + Add
        </button>
      </div>

      {/* Resignation Table */}
      <div className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded-md">
        <div className="grid grid-cols-7 bg-gray-100 text-sm font-semibold px-4 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-b">
          <div>Resignation Reason</div>
          <div>Requested Resignation Date</div>
          <div>Actual Notice Period</div>
          <div>Attachment</div>
          <div>Status</div>
          <div>Requested On</div>
          <div>Actions</div>
        </div>

        {filteredData.length === 0 ? (
          <div className="text-center py-10 text-gray-400">No Result Found..!</div>
        ) : (
          filteredData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-7 px-4 py-2 text-sm shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-t"
            >
              <div>{item.reason}</div>
              <div>{item.resignationDate}</div>
              <div>{item.noticePeriod}</div>
              <div>{item.attachment || "-"}</div>
              <div>{item.status}</div>
              <div>{item.requestedOn}</div>
              <div>-</div>
            </div>
          ))
        )}
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-30 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-4">
              Submit Resignation Request
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                placeholder="Resignation Reason"
                value={form.reason}
                onChange={(e) => setForm({ ...form, reason: e.target.value })}
                className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
                required
              />
              <input
                type="date"
                value={form.resignationDate}
                onChange={(e) =>
                  setForm({ ...form, resignationDate: e.target.value })
                }
                className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Notice Period"
                value={form.noticePeriod}
                onChange={(e) =>
                  setForm({ ...form, noticePeriod: e.target.value })
                }
                className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Attachment (URL)"
                value={form.attachment}
                onChange={(e) =>
                  setForm({ ...form, attachment: e.target.value })
                }
                className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Res;
