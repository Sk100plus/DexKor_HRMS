import React, { useState } from "react";
import { Plus, Pencil, Trash2, Download, Folder } from "lucide-react";
import { Input } from "@/components/ui/input";

const Cand = () => {
  const [entities, setEntities] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    onboardingStatus: "",
    triggerEmail: "",
    migration: "",
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
      mail: "",
      onboardingStatus: "",
      triggerEmail: "",
      migration: "",
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

  const uniqueDepartments = ["All", ...new Set(entities.map((e) => e.onboardingStatus))];
  const filteredEntities =
    departmentFilter === "All"
      ? entities
      : entities.filter((ent) => ent.onboardingStatus === departmentFilter);

  return (
    <div className="p-4 border border-gray-300 rounded-none focus:ring-0 focus:outline-none  border-gray-300 rounded-lg focus:ring-0 focus:outline-none min-h-screen">
      {/* Header */}
      <div className="flex pt-2 justify-between items-center mb-4">
        <div className="flex gap-2 items-center">
          <label className="text-sm">Filter:</label>
          <select
            className="border border-gray-300 rounded-none cursor-pointer focus:ring-0 focus:outline-none  border-gray-300 text-sm px-2 py-1 rounded-md"
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
          >
            {uniqueDepartments.map((dept, idx) => (
              <option key={idx} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3">
          <Input
            placeholder="Search"
            className="pl-2 w-1/3 ml-90 rounded-full shadow-sm border border-gray-300  focus:ring-0 focus:outline-none  border-gray-300 focus:ring-0 focus:outline-none"
          />
         
          <button
            className="border border-gray-300 rounded-full focus:ring-0 focus:outline-none  hover:bg-blue-400 hover:text-white p-2.5 cursor-pointer rounded-full flex items-center gap-1"
            onClick={() => {
              setFormData({
                name: "",
                mail: "",
                onboardingStatus: "",
                triggerEmail: "",
                migration: "",
              });
              setShowForm(true);
              setEditingIndex(null);
            }}
          >
            <Plus size={15} />
          </button>
          <button className="border border-gray-300 rounded-full focus:ring-0 focus:outline-none  hover:bg-gray-400 hover:text-white p-2.5 cursor-pointer rounded-full flex items-center gap-1">
            <Download size={15} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="pt-4">
        <div className="border border-gray-300 rounded-none focus:ring-0 focus:outline-none  border-gray-300 rounded overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-50 text-[10px]">
              <tr>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Mail</th>
                <th className="p-2 text-left">Onboarding Status</th>
                <th className="p-2 text-left">Trigger Email</th>
                <th className="p-2 text-left">Migration</th>
                <th className="p-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEntities.map((ent, index) => (
                <tr key={index} className="hover:bg-gray-50 text-[11px]">
                  <td
                    className="p-2 text-blue-600 underline cursor-pointer"
                    onClick={() => handleEdit(index)}
                  >
                    {ent.name}
                  </td>
                  <td className="p-2">{ent.mail}</td>
                  <td className="p-2">{ent.onboardingStatus}</td>
                  <td className="p-2">{ent.triggerEmail}</td>
                  <td className="p-2">{ent.migration}</td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-blue-600 hover:text-blue-800 cursor-pointer"
                      title="Edit"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-600 hover:text-red-800 cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredEntities.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-4 text-center text-gray-400">
                    No data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Popup Form */}
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
                  className="w-full border border-gray-300 rounded-lg focus:ring-0 focus:outline-none  rounded px-2 py-1"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Mail*</label>
                <input
                  name="mail"
                  value={formData.mail}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg focus:ring-0 focus:outline-none  rounded px-2 py-1"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Onboarding Status*</label>
                <input
                  name="onboardingStatus"
                  value={formData.onboardingStatus}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg focus:ring-0 focus:outline-none  rounded px-2 py-1"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Trigger Email*</label>
                <input
                  name="triggerEmail"
                  value={formData.triggerEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg focus:ring-0 focus:outline-none  rounded px-2 py-1"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Migration*</label>
                <input
                  name="migration"
                  value={formData.migration}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg focus:ring-0 focus:outline-none  rounded px-2 py-1"
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

export default Cand;
