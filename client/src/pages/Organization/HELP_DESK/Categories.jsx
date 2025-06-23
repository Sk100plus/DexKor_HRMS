import React, { useState } from "react";
import { Plus, Pencil, Trash2, Download } from "lucide-react";
import { Input } from "@/components/ui/input";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoryName.trim()) return;

    if (editingIndex !== null) {
      const updated = [...categories];
      updated[editingIndex] = categoryName;
      setCategories(updated);
      setEditingIndex(null);
    } else {
      setCategories([...categories, categoryName]);
    }

    setCategoryName("");
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setCategoryName(categories[index]);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updated = categories.filter((_, i) => i !== index);
    setCategories(updated);
  };

  return (
    <div className="p-4 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[14px] font-medium"></h2>
        <div className="flex gap-2 items-center">
          <Input
            placeholder="Search"
            className="pl-2 w-64 rounded-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
          />
          <button
            className="border cursor-pointer border-gray-300 hover:bg-blue-500 hover:text-white p-2 rounded-full"
            onClick={() => {
              setCategoryName("");
              setEditingIndex(null);
              setShowForm(true);
            }}
          >
            <Plus size={15} />
          </button>
          <button className="border cursor-pointer border-gray-300 hover:bg-gray-500 hover:text-white p-2 rounded-full">
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
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 ? (
              categories.map((cat, index) => (
                <tr key={index} className="hover:bg-gray-50 text-[11px]">
                  <td
                    className="p-2 text-blue-600 underline cursor-pointer"
                    onClick={() => handleEdit(index)}
                  >
                    {cat}
                  </td>
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
                <td colSpan={2} className="p-4 text-center text-gray-400">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0  bg-opacity-40 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white w-[90%] max-w-md p-6 rounded shadow-lg"
          >
            <label className="block mb-1 text-sm">Grievance Category*</label>
            <input
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-2 py-1"
              placeholder="Enter category name"
            />
            <div className="flex justify-end gap-2 pt-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-300 cursor-pointer hover:bg-gray-400 px-4 py-1"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-1"
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

export default Categories;
