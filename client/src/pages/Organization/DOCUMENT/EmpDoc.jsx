import React, { useState } from 'react';

const EmpDoc = () => {
  const [formData, setFormData] = useState({
    legalEntity: '',
    department: '',
    designation: '',
    employee: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({ legalEntity: '', department: '', designation: '', employee: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform filtering or fetch operation here
  };

  return (
    <div className="p-4 bg-white text-[13px]">
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 items-end">
        <div>
          <label className="block  font-medium mb-1">Legal Entity</label>
          <select
            name="legalEntity"
            value={formData.legalEntity}
            onChange={handleChange}
            className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300  rounded px-3 py-1 w-52"
          >
            <option value="">Select Legal Entity</option>
            {/* Add more options dynamically */}
          </select>
        </div>
        <div>
          <label className="block  font-medium mb-1">Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300  rounded px-3 py-1 w-52"
          >
            <option value="">Select Department</option>
            {/* Add more options dynamically */}
          </select>
        </div>
        <div>
          <label className="block  font-medium mb-1">Designation</label>
          <select
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300  rounded px-3 py-1 w-52"
          >
            <option value="">Select Designation</option>
            {/* Add more options dynamically */}
          </select>
        </div>
        <div>
          <label className="block  font-medium mb-1">Employee</label>
          <select
            name="employee"
            value={formData.employee}
            onChange={handleChange}
            className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300  rounded px-3 py-1 w-52"
          >
            <option value="">Select Employee</option>
            {/* Add more options dynamically */}
          </select>
        </div>
        <button
          type="submit"
          className="bg-gray-800 text-white  px-4 py-1 rounded hover:bg-gray-700"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="bg-gray-100 text-blue-600  px-4 py-1 rounded hover:bg-gray-200"
        >
          Reset
        </button>
      </form>

      <div className="mt-4 p-4 bg-blue-100 text-blue-600  rounded">
        Select Employee to view the Description.
      </div>
    </div>
  );
};

export default EmpDoc;
