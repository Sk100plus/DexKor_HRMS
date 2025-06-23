import React, { useState } from "react";
import { Plus, Pencil,Download, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";

const RepTeam = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    managerName: "",
    createdBy: "",
    modifiedBy: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
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
    setFormData({ managerName: "", createdBy: "", modifiedBy: "" });
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

  const filteredData = data.filter(row =>
    row.managerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium"></h2>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search Manager"
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-2 w-64 rounded-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
          />
          <button
            className="border cursor-pointer border-gray-300 hover:bg-blue-500 hover:text-white p-2 rounded-full"
            onClick={() => {
              setFormData({ managerName: "", createdBy: "", modifiedBy: "" });
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
      <div className="overflow-x-auto shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300 rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-blue-50 text-xs text-left">
            <tr>
              <th className="p-2">Manager Name</th>
              <th className="p-2">Created By</th>
              <th className="p-2">Modified By</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-2">{row.managerName}</td>
                  <td className="p-2">{row.createdBy}</td>
                  <td className="p-2">{row.modifiedBy}</td>
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
                  No managers found.
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
              <label className="block mb-1 text-sm">Manager Name*</label>
              <input
                name="managerName"
                value={formData.managerName}
                onChange={handleInputChange}
                required
                className="w-full shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300 rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Created By*</label>
              <input
                name="createdBy"
                value={formData.createdBy}
                onChange={handleInputChange}
                required
                className="w-full shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300 rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Modified By*</label>
              <input
                name="modifiedBy"
                value={formData.modifiedBy}
                onChange={handleInputChange}
                required
                className="w-full shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300 rounded px-2 py-1"
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

export default RepTeam;
