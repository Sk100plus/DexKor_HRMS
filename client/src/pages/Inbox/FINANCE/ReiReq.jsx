import React, { useState } from 'react';

const ReiReq = () => {
  const [selected, setSelected] = useState(null);
  const [amount, setAmount] = useState(0);
  const [comment, setComment] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const data = [
    {
      id: 1,
      type: "Petrol Allowance",
      name: "Richard Samuel",
      date: "28/08/2024, 04:40 AM",
      amount: 100,
      status: "Pending",
    },
  ];

  const filteredData = data.filter((item) => {
    return (
      (statusFilter === '' || item.status === statusFilter) &&
      (searchTerm === '' ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.type.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const handleTakeAction = (item) => {
    setSelected(item);
    setAmount(item.amount);
    setComment('');
  };

  const handleGoBack = () => {
    setSelected(null);
  };

  if (selected) {
    return (
      <div className="p-6 max-w-4xl mx-auto text-[13px]">
        <button
          onClick={handleGoBack}
          className="text-blue-600 underline mb-4"
        >
          ← Back
        </button>

        <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded shadow">
          <div><strong>Name:</strong> {selected.name}</div>
          <div><strong>Reimbursement Name:</strong> {selected.type}</div>
          <div><strong>Amount:</strong> INR {selected.amount}.00</div>
          <div><strong>Date of Expense:</strong> 26/08/2024</div>
          <div><strong>Miscellaneous Amount:</strong> 10</div>
          <div><strong>Payment Method:</strong> CARD</div>
          <div><strong>Status:</strong>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded ml-2">{selected.status}</span>
          </div>
          <div><strong>Applied On:</strong> {selected.date}</div>
        </div>

        <div className="mt-6 bg-white p-4 rounded shadow">
          <h2 className="mb-4 text-lg font-semibold">Review Details</h2>
          <div className="mb-4">
            <label className="block mb-1">Amount *</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Comments *</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
            />
          </div>
          <div className="flex gap-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded">Reject</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded">Approve</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 text-[13px]">
      <div className="mb-4 flex gap-4 ">
        <select
          className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-1 rounded"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
        </select>
        <input
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-1 rounded"
        />
      </div>

      <table className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Request Type</th>
            <th className="p-2 border">Applied By</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-6 text-gray-500">
                No results found.
              </td>
            </tr>
          ) : (
            filteredData.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="p-2 border">
                  {item.type}
                  <div className="text-sm text-gray-500">
                    Amount: INR {item.amount}.00
                  </div>
                </td>
                <td className="p-2 border">
                  {item.name}
                  <div className="text-sm text-gray-500">{item.date}</div>
                </td>
                <td className="p-2 border">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    {item.status}
                  </span>
                </td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleTakeAction(item)}
                    className="hover:bg-gray-600 border hover:text-white px-4 py-1 rounded-none cursor-pointer"
                  >
                    Take Action
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReiReq;
