import React, { useState } from "react";
import { Search, Plus, List, Grid } from "lucide-react";
import bimage from "./bookimage.jpg";

const Tickets = () => {
  const [showForm, setShowForm] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [formData, setFormData] = useState({
    type: "",
    subject: "",
    reference: "",
    description: "",
    file: null,
  });

  const filteredTickets = tickets.filter((ticket) =>
    Object.values(ticket)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setTickets([...tickets, formData]);
    setFormData({ type: "", subject: "", reference: "", description: "", file: null });
    setShowForm(false);
  };

  return (
    <div className="flex  bg-gray-100 text-gray-800 mt-10">
      {/* Sidebar */}
    

      {/* Main Content */}
      <div className="flex-1 ">
        <div className="bg-white rounded-md shadow-md p-6 min-h-[80vh] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2
              className="text-xl font-semibold text-gray-700 cursor-pointer"
              onClick={() => setShowForm(false)}
            >
              All Tickets
            </h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search tickets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 pr-3 py-2 border shadow-sm border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-0 hover:bg-gray-100"
                />
              </div>
              <button
                className="flex items-center gap-1 px-3 py-2 cursor-pointer shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded-sm hover:bg-gray-100 text-sm"
                onClick={() => setShowForm(true)}
              >
                <Plus size={16} />
                Add
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <List size={16} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <Grid size={16} />
              </button>
            </div>
          </div>

          {/* Form UI */}
          {showForm ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Select Ticket Type *</label>
                  <select
                    required
                    className="w-full border rounded px-2 py-1"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="">Select Type</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium">Reference Number</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-sm px-2 py-1"
                    value={formData.reference}
                    onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Subject *</label>
                  <input
                    required
                    type="text"
                    className="w-full border border-gray-300 rounded-sm px-2 py-1"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Description *</label>
                  <textarea
                    required
                    rows="3"
                    className="w-full border border-gray-300 rounded-sm px-2 py-1"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium">Upload Documents *</label>
                  <input
                    type="file"
                    className="w-full border border-gray-300 rounded-sm px-2 py-1"
                    accept=".png,.jpeg,.jpg,.pdf,.docx,.xlsx"
                    onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
                  />
                  <p className="text-xs text-blue-600 mt-1">
                    Accepted formats PNG, JPEG, PDF, DOCX, XLSX and file must be less than 20MB.
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Submit
              </button>
            </form>
          ) : filteredTickets.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1 text-gray-500">
              <img src={bimage} alt="No Result" className="w-28 h-28 mb-4 opacity-80" />
              <p className="text-lg">No Result Found..!</p>
            </div>
          ) : (
            <ul className="space-y-3 overflow-y-auto">
              {filteredTickets.map((ticket, idx) => (
                <li key={idx} className="p-4 border rounded bg-gray-50">
                  <strong>{ticket.subject}</strong> — {ticket.type} <br />
                  <span className="text-xs text-gray-500">Ref: {ticket.reference}</span>
                  <p className="text-sm mt-1">{ticket.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tickets;
