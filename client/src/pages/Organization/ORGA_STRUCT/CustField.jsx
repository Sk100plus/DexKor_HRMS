import React, { useState } from "react";
import { Plus, Pencil, Trash2, Download, Folder } from "lucide-react";
import { Input } from "@/components/ui/input";

const CustField = () => {
  const [entities, setEntities] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [countryFilter, setCountryFilter] = useState("");
  const [formData, setFormData] = useState({
    countryName: "",
    propertyLabel: "",
    propertyName: "",
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
    setFormData({ countryName: "", propertyLabel: "", propertyName: "" });
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

  const filteredEntities = entities.filter((ent) =>
    ent.countryName.toLowerCase().includes(countryFilter.toLowerCase())
  );

  return (
    <div className="p-4 border border-gray-300 rounded-lg min-h-screen">
      {/* Header */}
      <div className="flex pt-2 justify-between items-center">
        {/* Country filter */}
        <Input
          placeholder="Filter by Country"
          value={countryFilter}
          onChange={(e) => setCountryFilter(e.target.value)}
          className="w-1/4 border border-gray-300 rounded-lg focus:ring-0 focus:outline-none   px-3 py-1"
        />

        <div className="flex gap-3">
          <button className="border hover:bg-gray-400 hover:text-white p-2.5 cursor-pointer rounded-full">
            <Folder size={15} />
          </button>
          <button
            className="border hover:bg-blue-400 hover:text-white p-2.5 cursor-pointer rounded-full"
            onClick={() => {
              setFormData({
                countryName: "",
                propertyLabel: "",
                propertyName: "",
              });
              setShowForm(true);
              setEditingIndex(null);
            }}
          >
            <Plus size={15} />
          </button>
          <button className="border hover:bg-gray-400 hover:text-white p-2.5 cursor-pointer rounded-full">
            <Download size={15} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="pt-4">
        <div className="border border-gray-300 overflow-x-auto rounded">
          <table className="w-full">
            <thead className="bg-blue-100 text-[12px]">
              <tr>
                <th className="p-2 text-left">Country Name</th>
                <th className="p-2 text-left">Property Label</th>
                <th className="p-2 text-left">Property Name</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEntities.length > 0 ? (
                filteredEntities.map((ent, index) => (
                  <tr key={index} className="hover:bg-gray-50 text-[13px]">
                    <td
                      className="p-2 text-blue-600 underline cursor-pointer"
                      onClick={() => handleEdit(index)}
                    >
                      {ent.countryName}
                    </td>
                    <td className="p-2">{ent.propertyLabel}</td>
                    <td className="p-2">{ent.propertyName}</td>
                    <td className="p-2 flex gap-2">
                      <button
                        onClick={() => handleEdit(index)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
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

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0  bg-opacity-40 flex items-center justify-center z-50">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg w-[90%] max-w-2xl shadow-md grid grid-cols-2 gap-4"
            >
              <div>
                <label className="block text-sm font-medium">
                  Country Name*
                </label>
                <input
                  name="countryName"
                  value={formData.countryName}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded px-2 py-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Property Label*
                </label>
                <input
                  name="propertyLabel"
                  value={formData.propertyLabel}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded px-2 py-1"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium">
                  Property Name*
                </label>
                <input
                  name="propertyName"
                  value={formData.propertyName}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded px-2 py-1"
                />
              </div>
              <div className="col-span-2 flex justify-end gap-2 pt-4">
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

export default CustField;
