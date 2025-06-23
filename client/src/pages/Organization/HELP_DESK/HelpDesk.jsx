import React, { useState } from "react";
import { Plus, Pencil, Trash2, Download } from "lucide-react";

const HelpDesk = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    employeeName: "",
    categoryName: "",
    headOfTeam: "",
  });
  const [filterCategory, setFilterCategory] = useState("");

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
    setFormData({ employeeName: "", categoryName: "", headOfTeam: "" });
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

  // Extract unique categories for the filter
  const uniqueCategories = [...new Set(data.map((item) => item.categoryName))];

  // Filter data based on selected category
  const filteredData = filterCategory
    ? data.filter((item) => item.categoryName === filterCategory)
    : data;

  return (
    <div className="p-4 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[15px] font-medium"></h2>
        <div className="flex gap-2 items-center">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-[13px]"
          >
            <option value="">All Categories</option>
            {uniqueCategories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <button
            className="border border-gray-300 hover:bg-blue-500 hover:text-white p-2 rounded-full"
            onClick={() => {
              setFormData({ employeeName: "", categoryName: "", headOfTeam: "" });
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
              <th className="p-2 text-left">Employee Name</th>
              <th className="p-2 text-left">Category Name</th>
              <th className="p-2 text-left">Head of the Team</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 text-[11px]">
                  <td className="p-2">{row.employeeName}</td>
                  <td className="p-2">{row.categoryName}</td>
                  <td className="p-2">{row.headOfTeam}</td>
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
                <td colSpan={4} className="p-4 text-center text-gray-400">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white w-[90%] max-w-xl p-6 rounded shadow-lg grid gap-4"
          >
            <div>
              <label className="block mb-1 text-sm">Employee Name*</label>
              <input
                name="employeeName"
                value={formData.employeeName}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Category Name*</label>
              <input
                name="categoryName"
                value={formData.categoryName}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Head of the Team*</label>
              <input
                name="headOfTeam"
                value={formData.headOfTeam}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>
            <div className="flex justify-end gap-2 pt-2">
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

export default HelpDesk;
