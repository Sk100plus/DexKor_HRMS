import React, { useState } from 'react';

const mockData = [
  {
    type: 'Hardware',
    category: 'IT',
    asset: 'Laptop',
    item: 'HP EliteBook',
    status: 'Pending',
    appliedBy: 'Alice',
    assignedTo: 'Manager1',
  },
  {
    type: 'Peripheral',
    category: 'IT',
    asset: 'Mouse',
    item: 'Dell Mouse',
    status: 'Resolved',
    appliedBy: 'Bob',
    assignedTo: 'Manager2',
  },
];

const AssRepRe = () => {
  const [category, setCategory] = useState('');
  const [asset, setAsset] = useState('');
  const [item, setItem] = useState('');
  const [status, setStatus] = useState('All');
  const [filtered, setFiltered] = useState(mockData);

  const handleSearch = () => {
    const result = mockData.filter(req => {
      return (
        (category === '' || req.category === category) &&
        (asset === '' || req.asset === asset) &&
        (item === '' || req.item === item) &&
        (status === 'All' || req.status === status)
      );
    });
    setFiltered(result);
  };

  const handleReset = () => {
    setCategory('');
    setAsset('');
    setItem('');
    setStatus('All');
    setFiltered(mockData);
  };

  return (
    <div className="p-6 text-[13px]">
      <h2 className="text-xl font-semibold mb-4">Asset Repair Requests</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 p-2 rounded w-48"
        >
          <option value="">Select Category</option>
          <option value="IT">IT</option>
        </select>

        <select
          value={asset}
          onChange={(e) => setAsset(e.target.value)}
          className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 p-2 rounded w-48"
        >
          <option value="">Select Asset</option>
          <option value="Laptop">Laptop</option>
          <option value="Mouse">Mouse</option>
        </select>

        <select
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 p-2 rounded w-48"
        >
          <option value="">Select Asset Item</option>
          <option value="HP EliteBook">HP EliteBook</option>
          <option value="Dell Mouse">Dell Mouse</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 p-2 rounded w-40"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Resolved">Resolved</option>
        </select>

        <button
          onClick={handleSearch}
          className=" cursor-pointer border hover:bg-blue-600 hover:text-white px-4 py-2 rounded-none "
        >
          Search
        </button>

        <button
          onClick={handleReset}
          className=" cursor-pointer border hover:text-white  hover:bg-gray-300 text-black px-4 py-2 rounded-none "
        >
          Reset
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none ">
            <tr>
              <th className="px-4 py-2">Request Type</th>
              <th className="px-4 py-2">Applied By</th>
              <th className="px-4 py-2">Assigned To</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Assign</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((req, index) => (
                <tr key={index} className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none ">
                  <td className="px-4 py-2">{req.type}</td>
                  <td className="px-4 py-2">{req.appliedBy}</td>
                  <td className="px-4 py-2">{req.assignedTo}</td>
                  <td className="px-4 py-2">{req.status}</td>
                  <td className="px-4 py-2">—</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No Result Found..!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssRepRe;
