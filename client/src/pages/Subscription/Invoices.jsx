import React, { useState } from "react";
import { Search } from "lucide-react";
import bimage from "./bookimage.jpg";

const Invoices = () => {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [range, setRange] = useState("");
  
  const invoices = [
    {
      id: "INV-001",
      date: "2025-06-10",
      amount: "$250.00",
      status: "Paid",
    },
    {
      id: "INV-002",
      date: "2025-06-05",
      amount: "$400.00",
      status: "Unpaid",
    },
    {
      id: "INV-003",
      date: "2025-06-01",
      amount: "$100.00",
      status: "Paid",
    },
  ];

  // Search + filter logic
  const filtered = invoices.filter((invoice) => {
    const matchesQuery = query === "" || invoice.id.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = status === "" || invoice.status === status;
    return matchesQuery && matchesStatus;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Invoice History</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4 items-center">
        <select
          className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm"
          value={range}
          onChange={(e) => setRange(e.target.value)}
        >
          <option value="">Date Range</option>
          <option value="last7">Last 7 Days</option>
          <option value="month">This Month</option>
        </select>

        <select
          className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Status</option>
          <option value="Paid">Paid</option>
          <option value="Unpaid">Unpaid</option>
        </select>

        <input
          type="text"
          placeholder="Search by invoice ID..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm flex-1"
        />

        <button
          className="flex items-center gap-1 text-sm text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
          onClick={() => {}}
        >
          <Search size={16} />
          Search
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-md p-4 shadow ring-1 ring-gray-200">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="py-2 px-4">Invoice Details</th>
              <th className="py-2 px-4">Invoice Date</th>
              <th className="py-2 px-4">Invoice Amount</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan="4" className="py-10 text-center text-gray-500">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <img
                      src={bimage}
                      alt="No data"
                      className="w-20 h-20 opacity-60"
                    />
                    <span>No Result Found..!</span>
                  </div>
                </td>
              </tr>
            ) : (
              filtered.map((invoice) => (
                <tr key={invoice.id} className="border-t">
                  <td className="py-2 px-4 font-medium text-gray-700">{invoice.id}</td>
                  <td className="py-2 px-4">{invoice.date}</td>
                  <td className="py-2 px-4">{invoice.amount}</td>
                  <td className="py-2 px-4">
                    <button className="text-blue-600 hover:underline text-sm">
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;
