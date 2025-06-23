import React, { useState } from "react";
import { Plus, Pencil, Trash2, Download } from "lucide-react";
import { Input } from "@/components/ui/input";

const KnowBase = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    author: "",
    grievance: "",
    category: "",
  });

  const [searchCategory, setSearchCategory] = useState("");
  const [searchGrievance, setSearchGrievance] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      ...formData,
      createdOn: new Date().toLocaleDateString("en-IN"),
    };

    if (editingIndex !== null) {
      const updated = [...data];
      updated[editingIndex] = newEntry;
      setData(updated);
      setEditingIndex(null);
    } else {
      setData([...data, newEntry]);
    }

    setFormData({ author: "", grievance: "", category: "" });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    const { author, grievance, category } = data[index];
    setFormData({ author, grievance, category });
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
  };

  const uniqueCategories = [...new Set(data.map((item) => item.category))];

  const filteredData = data.filter((item) => {
    const matchCategory = searchCategory ? item.category === searchCategory : true;
    const matchGrievance = searchGrievance
      ? item.grievance.toLowerCase().includes(searchGrievance.toLowerCase())
      : true;
    return matchCategory && matchGrievance;
  });

  return (
    <div className="p-4 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[15px] font-medium"></h2>
        <div className="flex gap-2 items-center">
          <Input
            placeholder="Search Grievance"
            value={searchGrievance}
            onChange={(e) => setSearchGrievance(e.target.value)}
            className="pl-2 w-64 rounded-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none text-[13px]"
          />
          <select
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className="shadow-sm border border-gray-300 rounded-lg cursor-pointer focus:ring-0 focus:outline-none p-2 text-[13px]"
          >
            <option value="">All Categories</option>
            {uniqueCategories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <button
            className="border border-gray-300 hover:bg-blue-500 hover:text-white p-2 rounded-full"
            onClick={() => {
              setFormData({ author: "", grievance: "", category: "" });
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
              <th className="p-2 text-left">Author</th>
              <th className="p-2 text-left">Grievance</th>
              <th className="p-2 text-left">Grievance Category</th>
              <th className="p-2 text-left">Created On</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 text-[11px]">
                  <td className="p-2">{row.author}</td>
                  <td className="p-2">{row.grievance}</td>
                  <td className="p-2">{row.category}</td>
                  <td className="p-2">{row.createdOn}</td>
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
                <td colSpan={5} className="p-4 text-center text-gray-400">
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
            className="bg-white w-[90%] max-w-lg p-6 rounded shadow-lg grid gap-4"
          >
            {[
              { label: "Author", name: "author" },
              { label: "Grievance", name: "grievance", type: "textarea" },
              { label: "Grievance Category", name: "category" },
            ].map(({ label, name, type }) => (
              <div key={name}>
                <label className="block mb-1 text-sm">{label}*</label>
                {type === "textarea" ? (
                  <textarea
                    name={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded px-2 py-1"
                    rows={4}
                  />
                ) : (
                  <input
                    name={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded px-2 py-1"
                  />
                )}
              </div>
            ))}
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

export default KnowBase;
