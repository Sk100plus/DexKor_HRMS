import React, { useState } from "react";
import { Plus, Pencil, Trash2, Download } from "lucide-react";
import { Input } from "@/components/ui/input";

const SalStr = () => {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    designation: "",
  });
  const [filters, setFilters] = useState({
    department: "",
    designation: "",
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = [...employees];
    if (editingIndex !== null) {
      updatedData[editingIndex] = formData;
      setEditingIndex(null);
    } else {
      updatedData.push(formData);
    }
    setEmployees(updatedData);
    setFormData({ name: "", department: "", designation: "" });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(employees[index]);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updated = employees.filter((_, i) => i !== index);
    setEmployees(updated);
  };

  const filteredEmployees = employees.filter((emp) => {
    const deptMatch =
      filters.department === "" ||
      emp.department.toLowerCase().includes(filters.department.toLowerCase());
    const desigMatch =
      filters.designation === "" ||
      emp.designation.toLowerCase().includes(filters.designation.toLowerCase());
    return deptMatch && desigMatch;
  });

  return (
    <div className="p-4 border border-gray-300 rounded-lg min-h-screen">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-3">
        {/* Filters */}
        <div className="flex gap-3">
          <div>
          <div className=" pl-3 pb-1 text-[13px]">
          Designation  </div>  
            <input
            type="text"
            placeholder="Filter by Department"
            className="px-3 py-1 border border-gray-300 focus:ring-0 focus:outline-none   rounded-full text-sm"
            value={filters.department}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, department: e.target.value }))
            }
          />
          </div>
         
          <div>
          <div className=" pl-3 pb-1 text-[13px]">
          Department  </div>  
          <input
            type="text"
            placeholder="Filter by Designation"
            className="px-3 py-1 border border-gray-300  focus:ring-0 focus:outline-none   rounded-full text-sm"
            value={filters.designation}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, designation: e.target.value }))
            }
          />
          </div>
        
        </div>

        {/* Title & Buttons */}
        <div className="flex items-center gap-3">
          <Input
            placeholder="Search"
            className="pl-2 w-48 rounded-full shadow-sm border border-gray-300 focus:outline-none"
          />
          <button className="border border-gray-300 p-2.5 rounded-full hover:bg-gray-300">
            <Download size={16} />
          </button>
          <button
            className="border border-gray-300 p-2.5 rounded-full hover:bg-blue-500 text-black hover:text-white"
            onClick={() => {
              setFormData({ name: "", department: "", designation: "" });
              setShowForm(true);
              setEditingIndex(null);
            }}
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="pt-4">
        <div className="border border-gray-300 rounded-lg overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-100 text-[12px]">
              <tr>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Department</th>
                <th className="p-2 text-left">Designation</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((emp, index) => (
                  <tr key={index} className="text-[13px] hover:bg-gray-50">
                    <td
                      className="p-2 text-blue-600 underline cursor-pointer"
                      onClick={() => handleEdit(index)}
                    >
                      {emp.name}
                    </td>
                    <td className="p-2">{emp.department}</td>
                    <td className="p-2">{emp.designation}</td>
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
                    No matching employee found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg w-[90%] max-w-lg shadow-md space-y-4"
          >
            <div>
              <label className="block text-sm font-medium">Name*</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Department*</label>
              <input
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Designation*</label>
              <input
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg px-2 py-1"
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

export default SalStr;
