import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, Search } from 'lucide-react';

const MyCont = () => {
  const [contracts, setContracts] = useState([]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">My Contracts</h2>
        <div className="flex items-center space-x-2">
          <Input placeholder="Search" className="w-64 rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none" />
          {/* <Button variant="default" className="flex items-center gap-1">
            <Plus size={16} /> Add
          </Button> */}
        </div>
      </div>

      {/* Table */}
      <div className="  rounded-md">
        <table className="min-w-full text-sm font-sans ">
          <thead className="bg-blue-50 text-gray-600 text-left">
            <tr>
              <th className="px-4 py-2 ">Contract Name</th>
              <th className="px-4 py-2 ">Commencement Date</th>
              <th className="px-4 py-2 ">Description</th>
              <th className="px-4 py-2 ">Status</th>
              <th className="px-4 py-2 ">Comments</th>
              <th className="px-4 py-2 ">Documents</th>
              <th className="px-4 py-2 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contracts.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-10 text-gray-500">
                  No Result Found..!
                </td>
              </tr>
            ) : (
              contracts.map((contract, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{contract.name}</td>
                  <td className="border px-4 py-2">{contract.startDate}</td>
                  <td className="border px-4 py-2">{contract.description}</td>
                  <td className="border px-4 py-2">{contract.status}</td>
                  <td className="border px-4 py-2">{contract.comments}</td>
                  <td className="border px-4 py-2">{contract.documents}</td>
                  <td className="border px-4 py-2">Edit | Delete</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination (Optional) */}
      <div className="flex justify-end items-center gap-2 mt-4 text-sm text-gray-500">
        <span>Items per page:</span>
        <select className="border px-2 py-1 rounded-md">
          <option>2</option>
          <option>5</option>
          <option>10</option>
        </select>
        <span>0 of 0</span>
      </div>
    </div>
  );
};

export default MyCont;
