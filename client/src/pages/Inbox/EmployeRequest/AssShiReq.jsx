import React, { useState } from 'react';

// Mock data
const assetRequests = [
  {
    itemName: 'Dell Inspiron',
    category: 'IT',
    asset: 'Laptop',
    employeeName: 'John Doe',
    createdBy: 'HR Admin',
    employeeComments: 'Need for WFH',
    endDate: '2025-06-30',
    comments: 'Approved',
    status: 'Shipped',
  },
  {
    itemName: 'Logitech Mouse',
    category: 'IT',
    asset: 'Mouse',
    employeeName: 'Jane Smith',
    createdBy: 'HR Admin',
    employeeComments: 'Old one broken',
    endDate: '2025-06-25',
    comments: 'Pending',
    status: 'Processing',
  },
];

const AssShiReq = () => {
  const [category, setCategory] = useState('');
  const [asset, setAsset] = useState('');
  const [item, setItem] = useState('');
  const [filteredData, setFilteredData] = useState(assetRequests);

  const handleSearch = () => {
    const filtered = assetRequests.filter(req => {
      return (
        (category === '' || req.category === category) &&
        (asset === '' || req.asset === asset) &&
        (item === '' || req.itemName === item)
      );
    });
    setFilteredData(filtered);
  };

  return (
    <div className="p-6 text-[13px]">
      <h2 className="font-semibold mb-4">Asset Shipment Requests</h2>

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
          <option value="Dell Inspiron">Dell Inspiron</option>
          <option value="Logitech Mouse">Logitech Mouse</option>
        </select>

        <button
          onClick={handleSearch}
          className="hover:bg-blue-600 hover:text-white border px-4 py-2 rounded-none cursor-pointer"
        >
          Search
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded">
        <table className="min-w-full text-left">
          <thead className=" shadow-sm border border-gray-300 focus:ring-0 focus:outline-none ">
            <tr>
              <th className="px-4 py-2">Asset Item Name</th>
              <th className="px-4 py-2">Employee Name</th>
              <th className="px-4 py-2">Created By</th>
              <th className="px-4 py-2">Employee Comments</th>
              <th className="px-4 py-2">End Date</th>
              <th className="px-4 py-2">Comments</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((req, idx) => (
                <tr key={idx} className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none ">
                  <td className="px-4 py-2">{req.itemName}</td>
                  <td className="px-4 py-2">{req.employeeName}</td>
                  <td className="px-4 py-2">{req.createdBy}</td>
                  <td className="px-4 py-2">{req.employeeComments}</td>
                  <td className="px-4 py-2">{req.endDate}</td>
                  <td className="px-4 py-2">{req.comments}</td>
                  <td className="px-4 py-2">{req.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
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

export default AssShiReq;
