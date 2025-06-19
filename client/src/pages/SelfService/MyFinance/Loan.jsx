import React, { useState } from 'react';

const Loan = () => {
  const [loans, setLoans] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(null); // loan object for details view
  const [statusFilter, setStatusFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  const [form, setForm] = useState({
    loanName: '',
    loanType: '',
    duration: '',
    requestDate: '',
    status: 'Pending',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddLoan = () => {
    if (!form.loanName || !form.duration || !form.requestDate || !form.loanType) {
      alert('Please fill all fields');
      return;
    }

    const newLoan = {
      ...form,
      id: loans.length + 1,
    };

    setLoans([...loans, newLoan]);
    setForm({
      loanName: '',
      loanType: '',
      duration: '',
      requestDate: '',
      status: 'Pending',
    });
    setShowForm(false);
  };

  const filteredLoans = loans.filter((loan) => {
    return (
      (statusFilter === 'All' || loan.status === statusFilter) &&
      (typeFilter === 'All' || loan.loanType === typeFilter)
    );
  });

  // Collect unique loan types for dropdown
  const loanTypes = Array.from(new Set(loans.map((l) => l.loanType)));

  return (
    <div className="p-6 text-[13px]">
      {/* Filters and Add Button */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
        >
          <option value="All">All Types</option>
          {loanTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>

        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          Add Loan
        </button>
      </div>

      {/* Loan Table */}
      <table className="w-full text-sm shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2">Loan Name</th>
            <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2">Loan Type</th>
            <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2">Duration (Months)</th>
            <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2">Requested On</th>
            <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2">Status</th>
            <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredLoans.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-4 text-gray-500">
                No Loan Requests Found
              </td>
            </tr>
          ) : (
            filteredLoans.map((loan) => (
              <tr key={loan.id}>
                <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2">{loan.loanName}</td>
                <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2">{loan.loanType}</td>
                <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2">{loan.duration}</td>
                <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2">
                  {new Date(loan.requestDate).toLocaleString()}
                </td>
                <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      loan.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : loan.status === 'Approved'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {loan.status}
                  </span>
                </td>
                <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2">
                  <button
                    onClick={() => setShowDetails(loan)}
                    className="text-blue-600 underline text-sm hover:text-blue-700 cursor-pointer"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Add Loan Modal */}
      {showForm && (
        <div className="fixed inset-0  bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Add New Loan</h2>

            <input
              type="text"
              name="loanName"
              placeholder="Loan Name"
              value={form.loanName}
              onChange={handleChange}
              className="w-full mb-3 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
            />
            <input
              type="text"
              name="loanType"
              placeholder="Loan Type (e.g., Personal, Home)"
              value={form.loanType}
              onChange={handleChange}
              className="w-full mb-3 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
            />
            <input
              type="number"
              name="duration"
              placeholder="Loan End In Months"
              value={form.duration}
              onChange={handleChange}
              className="w-full mb-3 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
            />
            <input
              type="datetime-local"
              name="requestDate"
              value={form.requestDate}
              onChange={handleChange}
              className="w-full mb-3 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
            />
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full cursor-pointer mb-3 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>

            <div className="flex justify-between mt-4">
              <button
                onClick={handleAddLoan}
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-4 py-2 rounded"
              >
                Submit
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="text-black-700 hover:bg-gray-100 hover:text-black border px-4 py-2 rounded-none cursor-pointer  cursor-pointer "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Details Modal */}
      {showDetails && (
        <div className="fixed inset-0  bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Loan Details</h2>

            <div className="mb-2">
              <strong>Loan Name:</strong> {showDetails.loanName}
            </div>
            <div className="mb-2">
              <strong>Loan Type:</strong> {showDetails.loanType}
            </div>
            <div className="mb-2">
              <strong>Duration:</strong> {showDetails.duration} months
            </div>
            <div className="mb-2">
              <strong>Request Date:</strong>{' '}
              {new Date(showDetails.requestDate).toLocaleString()}
            </div>
            <div className="mb-2">
              <strong>Status:</strong>{' '}
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  showDetails.status === 'Pending'
                    ? 'bg-yellow-100 text-yellow-700'
                    : showDetails.status === 'Approved'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {showDetails.status}
              </span>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowDetails(null)}
                className="bg-white-600 text-black px-4 py-2  hover:bg-gray-100  border cursor-pointer rounded-none"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loan;
