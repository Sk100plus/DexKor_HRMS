import React, { useState } from "react";
import { Plus, Pencil, Trash2, Download } from "lucide-react";
import { Input } from "@/components/ui/input";

const Tickets = () => {
  const [tab, setTab] = useState("All Tickets");
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    category: "",
    grievance: "",
    title: "",
    requestedBy: "",
    status: "",
    actionedBy: "",
    closedBy: "",
  });

  const tabs = ["All Tickets", "Follow Up", "My Tickets"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updated = [...data];
      updated[editingIndex] = formData;
      setData(updated);
      setEditingIndex(null);
    } else {
      setData([...data, formData]);
    }
    setFormData({
      category: "",
      grievance: "",
      title: "",
      requestedBy: "",
      status: "",
      actionedBy: "",
      closedBy: "",
    });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(data[index]);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
  };

  // Filter data by tab (this logic can be expanded later)
  const filteredData =
    tab === "All Tickets"
      ? data
      : tab === "Follow Up"
      ? data.filter((d) => d.status?.toLowerCase() === "follow up")
      : data.filter((d) => d.requestedBy?.toLowerCase() === "me");

  return (
    <div className="p-4 min-h-screen">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4 border-b">
        {tabs.map((t) => (
          <button
            key={t}
            className={`px-4 py-2 text-sm ${
              tab === t ? "border-b-2 border-blue-600 font-semibold" : "text-gray-600"
            }`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[15px] font-medium">{tab} Records</h2>
        <div className="flex gap-2 items-center">
          <Input
            placeholder="Search"
            className="pl-2 w-64 rounded-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
          />
          <button
            className="border border-gray-300 hover:bg-blue-500 hover:text-white p-2 rounded-full"
            onClick={() => {
              setFormData({
                category: "",
                grievance: "",
                title: "",
                requestedBy: "",
                status: "",
                actionedBy: "",
                closedBy: "",
              });
              setEditingIndex(null);
              setShowForm(true);
            }}
          >
            <Plus size={15} />
          </button>
          <button className="border border-gray-300 hover:bg-gray-500 hover:text-white p-2 rounded-full">
            <Download size={15} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-300 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-blue-50 text-[11px]">
            <tr>
              <th className="p-2 text-left">Grievance Category</th>
              <th className="p-2 text-left">Grievance</th>
              <th className="p-2 text-left">Title</th>
              <th className="p-2 text-left">Requested By</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Actioned By</th>
              <th className="p-2 text-left">Closed By</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 text-[11px]">
                  <td className="p-2">{row.category}</td>
                  <td className="p-2">{row.grievance}</td>
                  <td className="p-2">{row.title}</td>
                  <td className="p-2">{row.requestedBy}</td>
                  <td className="p-2">{row.status}</td>
                  <td className="p-2">{row.actionedBy}</td>
                  <td className="p-2">{row.closedBy}</td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={15} />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="p-4 text-center text-gray-400">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Form */}
      {showForm && (
        <div className="fixed inset-0  bg-opacity-40 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white w-[90%] max-w-2xl p-6 rounded shadow-lg grid grid-cols-2 gap-4"
          >
            {[
              { label: "Grievance Category", name: "category" },
              { label: "Grievance", name: "grievance" },
              { label: "Title", name: "title" },
              { label: "Requested By", name: "requestedBy" },
              { label: "Status", name: "status" },
              { label: "Actioned By", name: "actionedBy" },
              { label: "Closed By", name: "closedBy" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block mb-1 text-sm">{field.label}*</label>
                <input
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded px-2 py-1"
                />
              </div>
            ))}

            <div className="col-span-2 flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-1"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Tickets;
