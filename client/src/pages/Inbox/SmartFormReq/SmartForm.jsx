import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SmartForm = () => {
  // Sample data for smart forms
  const smartForms = [
    {
      id: 1,
      category: 'Attendance',
      formName: 'Leave Application',
      description: 'Apply for leave of absence',
      status: 'Active',
    },
    {
      id: 2,
      category: 'Finance',
      formName: 'Expense Reimbursement',
      description: 'Submit expenses for reimbursement',
      status: 'Active',
    },
    {
      id: 3,
      category: 'Employee Requests',
      formName: 'Equipment Request',
      description: 'Request new work equipment',
      status: 'Inactive',
    },
    {
      id: 4,
      category: 'Requisition',
      formName: 'Office Supplies',
      description: 'Request office supplies',
      status: 'Pending',
    },
  ];

  // State for filters
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique categories and statuses for dropdowns
  const categories = ['All', ...new Set(smartForms.map(form => form.category))];
  const statuses = ['All', 'Active', 'Inactive', 'Pending'];

  // Filter logic
  const filteredForms = smartForms.filter(form => {
    // Category filter
    if (selectedCategory !== 'All' && form.category !== selectedCategory) {
      return false;
    }
    
    // Status filter
    if (selectedStatus !== 'All' && form.status !== selectedStatus) {
      return false;
    }
    
    // Search filter
    if (searchQuery && 
        !form.formName.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !form.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="p-6 text-[13px]">

      <h2 className="font-semibold mb-4">Form Approach</h2>

      {/* Filter controls */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex items-center bg-white shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded overflow-hidden">
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 outline-none"
          >
            <option value="All">Select Category</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center bg-white shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded overflow-hidden">
          <select 
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 outline-none"
          >
            <option value="All">All Status</option>
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center bg-white shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded overflow-hidden ml-auto">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-2 outline-none"
          />
          <FiSearch className="mx-2 text-gray-500" />
        </div>
      </div>

      {/* Forms table */}
      {filteredForms.length > 0 ? (
        <table className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Category</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Form Name</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Description</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Status</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredForms.map((form) => (
              <tr key={form.id}>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{form.category}</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{form.formName}</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{form.description}</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    form.status === 'Active' ? 'bg-green-100 text-green-800' :
                    form.status === 'Inactive' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {form.status}
                  </span>
                </td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
                  <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <p className="mb-4">No Result Found...</p>
          <div className="text-sm">
            <p>Items per page: 10</p>
            <p>0 of 0</p>
          </div>
        </div>
      )}

      {/* Pagination would go here */}
      <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
        <div>BAG - IND Live</div>
        <div>Pagination controls would go here</div>
      </div>
    </div>
  );
};

export default SmartForm;