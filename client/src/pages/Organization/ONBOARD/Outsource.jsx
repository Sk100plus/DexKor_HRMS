import React, { useState } from "react";
import { Plus, Pencil, Trash2, Download, Folder } from "lucide-react";
import { Input } from "@/components/ui/input";

const Outsource = () => {
  const [entities, setEntities] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updated = [...entities];
      updated[editingIndex] = formData;
      setEntities(updated);
      setEditingIndex(null);
    } else {
      setEntities([...entities, formData]);
    }
    setFormData({
      name: "",
      address: "",
      city: "",
      state: "",
      country: "",
    });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(entities[index]);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updated = entities.filter((_, i) => i !== index);
    setEntities(updated);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg min-h-screen">
      {/* Header */}
      <div className="flex pt-2 justify-between items-center">
        <div></div>
        <div className="flex gap-3">
          <Input
            placeholder="Search"
            className="pl-2 w-1/3 rounded-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
          />
          <button className="border hover:bg-gray-400 hover:text-white p-2.5 rounded-full flex items-center gap-1">
            <Folder size={15} />
          </button>
          <button
            className="border hover:bg-blue-400 hover:text-white p-2.5 rounded-full flex items-center gap-1"
            onClick={() => {
              setFormData({
                name: "",
                address: "",
                city: "",
                state: "",
                country: "",
              });
              setShowForm(true);
              setEditingIndex(null);
            }}
          >
            <Plus size={15} />
          </button>
          <button className="border hover:bg-gray-400 hover:text-white p-2.5 rounded-full flex items-center gap-1">
            <Download size={15} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="pt-4">
        <div className="border border-gray-300 rounded overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-50 text-[10px]">
              <tr>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Address</th>
                <th className="p-2 text-left">City</th>
                <th className="p-2 text-left">State</th>
                <th className="p-2 text-left">Country</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {entities.map((ent, index) => (
                <tr key={index} className="hover:bg-gray-50 text-[11px]">
                  <td
                    className="p-2 text-blue-600 underline cursor-pointer"
                    onClick={() => handleEdit(index)}
                  >
                    {ent.name}
                  </td>
                  <td className="p-2">{ent.address}</td>
                  <td className="p-2">{ent.city}</td>
                  <td className="p-2">{ent.state}</td>
                  <td className="p-2">{ent.country}</td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {entities.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-4 text-center text-gray-400">
                    No entries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Form Popup */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <form
              onSubmit={handleSubmit}
              className="bg-white w-[90%] max-w-4xl p-6 rounded shadow-lg grid grid-cols-3 gap-4"
            >
              <div>
                <label className="block mb-1 text-sm font-medium">Name*</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded px-2 py-1"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Address*</label>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded px-2 py-1"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">City*</label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded px-2 py-1"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">State*</label>
                <input
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded px-2 py-1"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Country*</label>
                <input
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded px-2 py-1"
                />
              </div>
              <div className="col-span-3 flex justify-end mt-4 gap-2">
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
    </div>
  );
};

export default Outsource;
