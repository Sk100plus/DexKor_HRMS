import React, { useState } from "react";
import { Plus,Folder,Download, Pencil, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";

const Questions = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    optionType: "",
    active: false,
    addedBy: "",
  });

  const handleInputChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updated = [...data];
      updated[editingIndex] = formData;
      setData(updated);
      setEditingIndex(null);
    } else {
      setData([...data, formData]);
    }
    setFormData({ name: "", description: "", optionType: "", active: false, addedBy: "" });
    setShowForm(false);
  };

  const handleEdit = idx => {
    setEditingIndex(idx);
    setFormData(data[idx]);
    setShowForm(true);
  };

  const handleDelete = idx => {
    setData(data.filter((_, i) => i !== idx));
  };

  const filteredData = data.filter(row =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium"></h2>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search Name"
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-2 w-64 rounded-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
          />
           <button
            className="border border-gray-300 cursor-pointer  hover:bg-gray-500 hover:text-white p-2 rounded-full"
         
        >
          <Folder size={15} /> 
        </button>
          <button
            className="border border-gray-300 cursor-pointer hover:bg-blue-500 hover:text-white p-2 rounded-full"
            onClick={() => {
              setFormData({ name: "", description: "", optionType: "", active: false, addedBy: "" });
              setEditingIndex(null);
              setShowForm(true);
            }}
          >
            <Plus size={16} />
          </button>
          <button className="border cursor-pointer border-gray-300 hover:bg-gray-500 hover:text-white p-2 rounded-full">
            <Download size={15} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-300 rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-blue-50 text-xs text-left">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Description</th>
              <th className="p-2">Option Type</th>
              <th className="p-2">Active</th>
              <th className="p-2">Added By</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-2">{row.name}</td>
                  <td className="p-2">{row.description}</td>
                  <td className="p-2">{row.optionType}</td>
                  <td className="p-2">{row.active ? "Yes" : "No"}</td>
                  <td className="p-2">{row.addedBy}</td>
                  <td className="p-2 flex gap-2">
                    <button onClick={() => handleEdit(idx)} className="text-blue-600 hover:text-blue-800">
                      <Pencil size={16} />
                    </button>
                    <button onClick={() => handleDelete(idx)} className="text-red-600 hover:text-red-800">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-4 text-center text-gray-400">
                  No options found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white w-[90%] max-w-md p-6 rounded shadow-lg space-y-4"
          >
            <div>
              <label className="block mb-1 text-sm">Name*</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Description*</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Option Type*</label>
              <input
                name="optionType"
                value={formData.optionType}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="active"
                checked={formData.active}
                onChange={handleInputChange}
                id="activeChk"
                className="h-4 w-4"
              />
              <label htmlFor="activeChk" className="text-sm">
                Active
              </label>
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

export default Questions;
