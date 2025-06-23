import React, { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";

const ExiProEmp = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const [filters, setFilters] = useState({
    legalEntity: "All",
    department: "All",
    designation: "All",
  });

  const [form, setForm] = useState({
    employeeName: "",
    employeeCode: "",
    exitReason: "",
    requestedExitDate: "",
    actualNotice: "",
    decidedNotice: "",
    status: "",
    addedOn: "",
    assignTasks: "",
    taskStatus: "",
    finalProcess: "",
    legalEntity: "",
    department: "",
    designation: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updated = [...data];
      updated[editingIndex] = form;
      setData(updated);
      setEditingIndex(null);
    } else {
      setData([...data, form]);
    }
    setForm({
      employeeName: "",
      employeeCode: "",
      exitReason: "",
      requestedExitDate: "",
      actualNotice: "",
      decidedNotice: "",
      status: "",
      addedOn: "",
      assignTasks: "",
      taskStatus: "",
      finalProcess: "",
      legalEntity: "",
      department: "",
      designation: "",
    });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setForm(data[index]);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
  };

  const handleFilterChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleResetFilters = () => {
    setFilters({
      legalEntity: "All",
      department: "All",
      designation: "All",
    });
  };

  const filteredData = data.filter((item) => {
    return (
      (filters.legalEntity === "All" || item.legalEntity === filters.legalEntity) &&
      (filters.department === "All" || item.department === filters.department) &&
      (filters.designation === "All" || item.designation === filters.designation)
    );
  });

  const uniqueValues = (key) => ["All", ...new Set(data.map((d) => d[key]).filter(Boolean))];

  return (
    <div className="p-4">
      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <select
          name="legalEntity"
          value={filters.legalEntity}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded px-2 py-1 text-sm"
        >
          {uniqueValues("legalEntity").map((val) => (
            <option key={val}>{val}</option>
          ))}
        </select>
        <select
          name="department"
          value={filters.department}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded px-2 py-1 text-sm"
        >
          {uniqueValues("department").map((val) => (
            <option key={val}>{val}</option>
          ))}
        </select>
        <select
          name="designation"
          value={filters.designation}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded px-2 py-1 text-sm"
        >
          {uniqueValues("designation").map((val) => (
            <option key={val}>{val}</option>
          ))}
        </select>
        <button
          onClick={handleResetFilters}
          className="bg-gray-200 px-4 py-1 rounded hover:bg-gray-300 text-sm"
        >
          Reset
        </button>
      </div>

      {/* Add Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => {
            setEditingIndex(null);
            setForm({
              employeeName: "",
              employeeCode: "",
              exitReason: "",
              requestedExitDate: "",
              actualNotice: "",
              decidedNotice: "",
              status: "",
              addedOn: "",
              assignTasks: "",
              taskStatus: "",
              finalProcess: "",
              legalEntity: "",
              department: "",
              designation: "",
            });
            setShowForm(true);
          }}
          className="border hover:bg-blue-400 hover:text-white p-2.5 rounded-full"
        >
          <Plus size={15} />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-auto shadow-sm border border-gray-300 rounded-lg text-[13px]">
        <table className="w-full text-[13px]">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Employee Name</th>
              <th className="p-2">Employee Code</th>
              <th className="p-2">Exit Reason</th>
              <th className="p-2">Requested Exit Date</th>
              <th className="p-2">Actual Notice Period</th>
              <th className="p-2">Decided Notice Period</th>
              <th className="p-2">Status</th>
              <th className="p-2">Added On</th>
              <th className="p-2">Assign Tasks</th>
              <th className="p-2">Task Status</th>
              <th className="p-2">Final Process</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length ? (
              filteredData.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">{item.employeeName}</td>
                  <td className="p-2">{item.employeeCode}</td>
                  <td className="p-2">{item.exitReason}</td>
                  <td className="p-2">{item.requestedExitDate}</td>
                  <td className="p-2">{item.actualNotice}</td>
                  <td className="p-2">{item.decidedNotice}</td>
                  <td className="p-2">{item.status}</td>
                  <td className="p-2">{item.addedOn}</td>
                  <td className="p-2">{item.assignTasks}</td>
                  <td className="p-2">{item.taskStatus}</td>
                  <td className="p-2">{item.finalProcess}</td>
                  <td className="p-2 flex gap-2">
                    <button onClick={() => handleEdit(index)}>
                      <Pencil size={16} className="text-blue-600" />
                    </button>
                    <button onClick={() => handleDelete(index)}>
                      <Trash2 size={16} className="text-red-600" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="12" className="text-center py-4 text-gray-400">
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
            className="bg-white p-6 w-[90%] max-w-5xl grid grid-cols-3 gap-4 rounded-lg"
          >
            {Object.entries(form).map(([key, value]) => (
              <div key={key}>
                <label className="block mb-1 text-xs font-medium capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  name={key}
                  value={value}
                  onChange={handleChange}
                  className="w-full shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none px-2 py-1 text-sm"
                  required
                />
              </div>
            ))}
            <div className="col-span-3 flex justify-end gap-2 mt-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-300 px-4 py-1"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-1"
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

export default ExiProEmp;
