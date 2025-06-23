import React, { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";

const Requist = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    rqNumber: "",
    requisitionFor: "",
    department: "",
    legalEntity: "",
    costCenter: "",
    priority: "",
    status: "",
    budget: "",
    jobType: "",
    requisitionType: "",
    targetHiringDate: "",
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
      rqNumber: "",
      requisitionFor: "",
      department: "",
      legalEntity: "",
      costCenter: "",
      priority: "",
      status: "",
      budget: "",
      jobType: "",
      requisitionType: "",
      targetHiringDate: "",
    });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setFormData(data[index]);
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
  };

  return (
    <div className="p-4 shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300 rounded-lg min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Requisitions</h2>
        <button
          className="border hover:bg-blue-400 hover:text-white p-2.5 rounded-full"
          onClick={() => {
            setFormData({
              rqNumber: "",
              requisitionFor: "",
              department: "",
              legalEntity: "",
              costCenter: "",
              priority: "",
              status: "",
              budget: "",
              jobType: "",
              requisitionType: "",
              targetHiringDate: "",
            });
            setEditingIndex(null);
            setShowForm(true);
          }}
        >
          <Plus size={15} />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-blue-50 text-[11px]">
            <tr>
              <th className="p-2 text-left">Rq Number</th>
              <th className="p-2 text-left">Requisition For</th>
              <th className="p-2 text-left">Department</th>
              <th className="p-2 text-left">Legal Entity</th>
              <th className="p-2 text-left">Cost Center</th>
              <th className="p-2 text-left">Priority</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Budget</th>
              <th className="p-2 text-left">Job Type</th>
              <th className="p-2 text-left">Requisition Type</th>
              <th className="p-2 text-left">Target Hiring Date</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 text-[11px]">
                <td className="p-2">{row.rqNumber}</td>
                <td className="p-2">{row.requisitionFor}</td>
                <td className="p-2">{row.department}</td>
                <td className="p-2">{row.legalEntity}</td>
                <td className="p-2">{row.costCenter}</td>
                <td className="p-2">{row.priority}</td>
                <td className="p-2">{row.status}</td>
                <td className="p-2">{row.budget}</td>
                <td className="p-2">{row.jobType}</td>
                <td className="p-2">{row.requisitionType}</td>
                <td className="p-2">{row.targetHiringDate}</td>
                <td className="p-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={12} className="text-center text-gray-400 p-4">
                  No requisitions added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Form */}
      {showForm && (
        <div className="fixed inset-0  bg-opacity-40 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white max-w-5xl w-[90%] p-6 rounded shadow-lg grid grid-cols-3 gap-4"
          >
            {Object.entries(formData).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium mb-1 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  name={key}
                  value={value}
                  onChange={handleInputChange}
                  required
                  className="w-full shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none px-2 py-1 rounded"
                  type={
                    key === "targetHiringDate" ? "date" : "text"
                  }
                />
              </div>
            ))}
            <div className="col-span-3 flex justify-end gap-2 mt-4">
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

export default Requist;
