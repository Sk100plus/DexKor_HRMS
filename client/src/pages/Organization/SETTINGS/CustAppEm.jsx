import React, { useState } from "react";
import { Plus, Folder, Download, Pencil, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";

const CustAppEm = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    year: "",
    subject: "",
    addedBy: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = [...data];
    if (editingIndex !== null) {
      updated[editingIndex] = formData;
      setEditingIndex(null);
    } else {
      updated.push(formData);
    }
    setData(updated);
    setFormData({ year: "", subject: "", addedBy: "" });
    setShowForm(false);
  };

  const handleEdit = (idx) => {
    setEditingIndex(idx);
    setFormData(data[idx]);
    setShowForm(true);
  };

  const handleDelete = (idx) => {
    setData(data.filter((_, i) => i !== idx));
  };

  const filteredData = data.filter((row) =>
    row.year.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium"></h2>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search Year"
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-2 w-64 rounded-full shadow-sm border border-gray-300"
          />
          <button className="border p-2 rounded-full hover:bg-gray-500 hover:text-white">
            <Folder size={15} />
          </button>
          <button
            className="border p-2 rounded-full hover:bg-blue-500 hover:text-white"
            onClick={() => {
              setFormData({ year: "", subject: "", addedBy: "" });
              setEditingIndex(null);
              setShowForm(true);
            }}
          >
            <Plus size={16} />
          </button>
          <button className="border p-2 rounded-full hover:bg-gray-500 hover:text-white">
            <Download size={15} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-300 rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-blue-50 text-xs text-left">
            <tr>
              <th className="p-2">Years</th>
              <th className="p-2">Subject</th>
              <th className="p-2">Added By</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-2">{row.year}</td>
                  <td className="p-2">{row.subject}</td>
                  <td className="p-2">{row.addedBy}</td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(idx)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(idx)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-400">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white w-[90%] max-w-md p-6 rounded shadow-lg space-y-4"
          >
            <div>
              <label className="block mb-1 text-sm">Years*</label>
              <input
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Subject*</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Added By*</label>
              <input
                name="addedBy"
                value={formData.addedBy}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-1 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
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

export default CustAppEm;
