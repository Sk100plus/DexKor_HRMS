import React, { useState } from 'react';

const Reimburse = () => {
  const [reimbursements, setReimbursements] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showDetail, setShowDetail] = useState(null); // for details view
  const [form, setForm] = useState({
    type: '',
    amount: '',
    date: '',
    status: 'Pending',
    remarks: ''
  });
  const [statusFilter, setStatusFilter] = useState('All');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.type || !form.amount || !form.date || !form.remarks) return;

    const newReimbursement = {
      ...form,
      id: reimbursements.length + 1,
    };

    setReimbursements([...reimbursements, newReimbursement]);
    setForm({ type: '', amount: '', date: '', status: 'Pending', remarks: '' });
    setShowForm(false);
  };

  const filteredReimbursements =
    statusFilter === 'All'
      ? reimbursements
      : reimbursements.filter((item) => item.status === statusFilter);

  return (
    <div className="p-6 text-[10px]">
      <div className="flex justify-between mb-4">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 focus:ring-0 focus:outline-none px-2 py-1 rounded"
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
          Add 
        </button>
      </div>

      {/* Table */}
      <table className="text-[13px] w-full border border-gray-300 focus:ring-0 focus:outline-none text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 focus:ring-0 focus:outline-none px-2 py-2">Type</th>
            <th className="border border-gray-300 focus:ring-0 focus:outline-none px-2 py-2">Amount</th>
            <th className="border border-gray-300 focus:ring-0 focus:outline-none px-2 py-2">Date</th>
            <th className="border border-gray-300 focus:ring-0 focus:outline-none px-2 py-2">Status</th>
            <th className="border border-gray-300 focus:ring-0 focus:outline-none px-2 py-2">Remarks</th>
            <th className="border border-gray-300 focus:ring-0 focus:outline-none px-2 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredReimbursements.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-4 text-gray-500">
                No Reimbursements Found
              </td>
            </tr>
          ) : (
            filteredReimbursements.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="border border-gray-300 focus:ring-0 focus:outline-none px-2 py-2">{item.type}</td>
                <td className="border border-gray-300 focus:ring-0 focus:outline-none px-2 py-2">INR {item.amount}</td>
                <td className="border border-gray-300 focus:ring-0 focus:outline-none px-2 py-2">{item.date}</td>
                <td className="border border-gray-300 focus:ring-0 focus:outline-none px-2 py-2">{item.status}</td>
                <td className="border border-gray-300 focus:ring-0 focus:outline-none px-2 py-2">{item.remarks}</td>
                <td className="border border-gray-300 focus:ring-0 focus:outline-none px-2 py-2">
                  <button
                    onClick={() => setShowDetail(item)}
                    className="text-blue-600 hover:underline cursor-pointer hover:text-blue-700"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Add Form Modal */}
      {showForm && (
        <div className="fixed inset-0  bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4">New Reimbursement</h2>

            <input
              type="text"
              name="type"
              placeholder="Reimbursement Type"
              value={form.type}
              onChange={handleChange}
              className="w-full mb-3 border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={form.amount}
              onChange={handleChange}
              className="w-full mb-3 border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full mb-3 border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
            />
            <input
              type="text"
              name="remarks"
              placeholder="Remarks"
              value={form.remarks}
              onChange={handleChange}
              className="w-full mb-3 border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
            />

            <div className="flex justify-between mt-4">
            <button
                onClick={() => setShowForm(false)}
                className=" text-black border cursor-pointer hover:bg-gray-100 px-4 py-2 "
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer px-4 py-2 "
              >
                Submit
              </button>
             
            </div>
          </div>
        </div>
      )}

      {/* View Detail Modal */}
      {showDetail && (
        <div className="fixed inset-0  bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4">Reimbursement Details</h2>
            <p><strong>Type:</strong> {showDetail.type}</p>
            <p><strong>Amount:</strong> INR {showDetail.amount}</p>
            <p><strong>Date:</strong> {showDetail.date}</p>
            <p><strong>Status:</strong> {showDetail.status}</p>
            <p><strong>Remarks:</strong> {showDetail.remarks}</p>

            <button
              onClick={() => setShowDetail(null)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reimburse;
