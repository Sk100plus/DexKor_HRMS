import React from 'react';
import { Download } from 'lucide-react'; // or use any icon library you prefer

const ContStaff = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen te">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[15px] font-semibold text-gray-800">Contingent Worker Types</h2>
        <button className="text-gray-500 rounded-full  p-3 bg-gray-300 hover:bg-gray-400 cursor-pointer  hover:text-black">
              <Download size={15} className="text-gray-700 hover:text-black" title="Download" />
              </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-end mb-6 text-[13px]">
        <div >
          <label className="block text-gray-600 font-medium mb-1">Date Range *</label>
          <select className=" cursor-pointer border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300 rounded px-4 py-2 min-w-[180px]">
            <option>Select Filter Type</option>
          </select>
        </div>

        <div className='cursor-pointer'>
          <label className=" cursor-pointer block text-gray-600 font-medium mb-1">Employee Type *</label>
          <select className="cursor-pointer border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300 rounded px-4 py-2 min-w-[180px]">
            <option>Employment Type</option>
          </select>
        </div>

        <div className="flex gap-2">
          <button className="hover:text-white cursor-pointer border text-gray-800 px-4 py-2 rounded-none hover:bg-gray-500">
            Reset
          </button>
          <button className=" hover:text-white border px-4 py-2 rounded-none cursor-pointer hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white border border-gray-300 rounded-lg focus:ring-0 focus:outline-none rounded shadow">
        <table className="min-w-full text-[10px]">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              {[
                "Employee Name", "Email", "Date Of Join", "Department", "Designation",
                "Employment Type", "Work Location", "Reporting Manager",
                "Reporting Manager Email", "Reporting Manager Department", "Reporting Manager Designation"
              ].map((header) => (
                <th key={header} className="px-4 py-2 text-left whitespace-nowrap">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="11" className="text-center py-12 text-gray-500">
                <div className="flex flex-col items-center">
                  <div className="text-4xl mb-2">📄🔍</div>
                  <p>No Result Found..!</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="text-[10px] flex justify-between items-center mt-4 text-gray-600">
        <div className="flex items-center gap-2">
          Items per page:
          <select className="border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300 rounded px-2 py-1">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <span>0 of 0</span>
          <button className="px-2 py-1 border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300 rounded">←</button>
          <button className="px-2 py-1 border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300 rounded">→</button>
        </div>
      </div>
    </div>
  );
};

export default ContStaff;
