import React, { useState } from 'react';

const Help = () => {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      category: 'Payroll and Compensation',
      grievance: 'Salary and Bonuses',
      title: 'Training Program Enrollment',
      requestedBy: 'Richard Samuel',
      status: 'Closed',
    },
    {
      id: 2,
      category: 'Payroll and Compensation',
      grievance: 'Salary and Bonuses',
      title: 'IT Support Ticket',
      requestedBy: 'Richard Samuel',
      status: 'Pending',
    },
    {
      id: 3,
      category: 'Payroll and Compensation',
      grievance: 'Salary and Bonuses',
      title: 'Expense Reimbursement Request',
      requestedBy: 'Richard Samuel',
      status: 'Pending',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    grievance: '',
    title: '',
    status: 'Pending',
    requestedBy: 'Richard Samuel',
  });

  const [filters, setFilters] = useState({
    category: '',
    grievance: '',
    status: '',
  });

  const filteredTickets = tickets.filter((ticket) => {
    return (
      (!filters.category || ticket.category === filters.category) &&
      (!filters.grievance || ticket.grievance === filters.grievance) &&
      (!filters.status || ticket.status === filters.status)
    );
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTickets([
      ...tickets,
      {
        id: tickets.length + 1,
        ...formData,
      },
    ]);
    setShowModal(false);
    setFormData({
      category: '',
      grievance: '',
      title: '',
      status: 'Pending',
      requestedBy: 'Richard Samuel',
    });
  };

  return (
    <div className="p-6 text-[13px]">
      {/* Filter Controls */}
      <div className="flex gap-4 mb-4">
        <select
          name="category"
          className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-2 py-1"
          onChange={handleFilterChange}
          value={filters.category}
        >
          <option value="">Select Category</option>
          <option value="Payroll and Compensation">Payroll and Compensation</option>
        </select>

        <select
          name="grievance"
          className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-2 py-1"
          onChange={handleFilterChange}
          value={filters.grievance}
        >
          <option value="">Select Grievance</option>
          <option value="Salary and Bonuses">Salary and Bonuses</option>
        </select>

        <select
          name="status"
          className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-2 py-1"
          onChange={handleFilterChange}
          value={filters.status}
        >
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Closed">Closed</option>
        </select>

        <button
          className="ml-auto bg-blue-500 text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-600"
          onClick={() => setShowModal(true)}
        >
          +
        </button>
      </div>

      {/* Table */}
      <table className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2">Category</th>
            <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2">Grievance</th>
            <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2">Title</th>
            <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2">Requested By</th>
            <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTickets.map((ticket) => (
            <tr key={ticket.id}>
              <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2">{ticket.category}</td>
              <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2">{ticket.grievance}</td>
              <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2">{ticket.title}</td>
              <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2">{ticket.requestedBy}</td>
              <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2">{ticket.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-10">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow w-[300px]"
          >
            <h2 className="text-lg font-bold mb-4">Add Ticket</h2>
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full mb-2 p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
            />
            <input
              type="text"
              name="grievance"
              placeholder="Grievance"
              value={formData.grievance}
              onChange={handleChange}
              required
              className="w-full mb-2 p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full mb-2 p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
            />
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full mb-4 p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
            >
              <option value="Pending">Pending</option>
              <option value="Closed">Closed</option>
            </select>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-3 py-1 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none cursor-pointer hover:bg-gray-100"
              >
                Cancel
              </button>
              <button type="submit" className="px-3 py-1 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Help;
