import React, { useState } from "react";
import { Plus, Pencil, Trash2, Download } from "lucide-react";

const AssAvail = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    category: "",
    assetName: "",
    itemName: "",
    code: "",
    available: "",
    assignedTo: "",
    defect: "",
    repaired: "",
    warrantyDate: "",
  });

  const [filters, setFilters] = useState({
    availability: "",
    isAssigned: "",
    employee: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
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
      assetName: "",
      itemName: "",
      code: "",
      available: "",
      assignedTo: "",
      defect: "",
      repaired: "",
      warrantyDate: "",
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

  const filteredData = data.filter((item) => {
    return (
      (filters.availability === "" || item.available === filters.availability) &&
      (filters.isAssigned === "" || item.assignedTo !== "") &&
      (filters.employee === "" || item.assignedTo === filters.employee)
    );
  });

  return (
    <div className="p-4 min-h-screen">
      {/* Filters & Actions */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <div className="flex gap-2 flex-wrap">
          <select
            name="availability"
            onChange={handleFilterChange}
            className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300 rounded px-2 py-1 text-[12px]"
          >
            <option value="">Asset Availability</option>
            <option value="Yes">Available</option>
            <option value="No">Unavailable</option>
          </select>
          <select
            name="isAssigned"
            onChange={handleFilterChange}
            className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300 rounded px-2 py-1 text-[12px]"
          >
            <option value="">Is Assigned</option>
            <option value="true">Assigned</option>
            <option value="false">Unassigned</option>
          </select>
          <input
            name="employee"
            placeholder="Employee"
            onChange={handleFilterChange}
            className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300 rounded px-2 py-1 text-[12px]"
          />
        </div>
        <div className="flex gap-2">
          <button
            className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300 hover:bg-blue-500 hover:text-white p-2 rounded-full"
            onClick={() => {
              setFormData({
                category: "",
                assetName: "",
                itemName: "",
                code: "",
                available: "",
                assignedTo: "",
                defect: "",
                repaired: "",
                warrantyDate: "",
              });
              setEditingIndex(null);
              setShowForm(true);
            }}
          >
            <Plus size={15} />
          </button>
          <button className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300 hover:bg-gray-500 hover:text-white p-2 rounded-full">
            <Download size={15} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300">
        <table className="w-full text-sm">
          <thead className="bg-blue-50 text-[11px]">
            <tr>
              <th className="p-2 text-left">Category</th>
              <th className="p-2 text-left">Asset Name</th>
              <th className="p-2 text-left">Asset Item Name</th>
              <th className="p-2 text-left">Code</th>
              <th className="p-2 text-left">Available For Use</th>
              <th className="p-2 text-left">Assigned To</th>
              <th className="p-2 text-left">Defect</th>
              <th className="p-2 text-left">Repaired</th>
              <th className="p-2 text-left">Warranty Date</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 text-[11px]">
                  <td className="p-2">{row.category}</td>
                  <td className="p-2">{row.assetName}</td>
                  <td className="p-2">{row.itemName}</td>
                  <td className="p-2">{row.code}</td>
                  <td className="p-2">{row.available}</td>
                  <td className="p-2">{row.assignedTo}</td>
                  <td className="p-2">{row.defect}</td>
                  <td className="p-2">{row.repaired}</td>
                  <td className="p-2">{row.warrantyDate}</td>
                  <td className="p-2 flex gap-2">
                    <button onClick={() => handleEdit(index)} className="text-blue-600">
                      <Pencil size={15} />
                    </button>
                    <button onClick={() => handleDelete(index)} className="text-red-600">
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={10} className="p-4 text-center text-gray-400">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white w-[90%] max-w-lg p-6 rounded shadow-lg grid gap-4"
          >
            {[
              { name: "category", label: "Category" },
              { name: "assetName", label: "Asset Name" },
              { name: "itemName", label: "Asset Item Name" },
              { name: "code", label: "Code" },
              { name: "available", label: "Available For Use" },
              { name: "assignedTo", label: "Assigned To" },
              { name: "defect", label: "Defect" },
              { name: "repaired", label: "Repaired" },
              { name: "warrantyDate", label: "Warranty Date" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block mb-1 text-sm">{field.label}*</label>
                <input
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  required
                  className="w-full shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300 rounded px-2 py-1"
                />
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

export default AssAvail;
