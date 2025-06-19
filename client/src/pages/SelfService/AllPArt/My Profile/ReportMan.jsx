import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const ReportMan = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('All');

  const [form, setForm] = useState({
    manager: '',
    comments: '',
    status: 'Pending',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.manager || !form.comments) return alert('Please fill all fields');
    setData([...data, form]);
    setForm({ manager: '', comments: '', status: 'Pending' });
    setFormOpen(false);
  };

  const filteredData = filter === 'All' ? data : data.filter(item => item.status === filter);

  return (
    <div className="p-6 bg-white rounded-md shadow-sm select-none">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Reporting Manager Change Request</h2>
        <Button onClick={() => setFormOpen(true)} className="bg-blue-600 text-white cursor-pointer hover:bg-blue-800">+ Add</Button>
      </div>

      {/* Filter */}
      <div className="mb-4 w-29 rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
        <select
          className=" rounded px-3 py-2  cursor-pointer outline-none"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option  value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-md">
        <table className="min-w-full text-sm font-sans ">
          <thead className="bg-blue-50 text-gray-600 text-left">
            <tr>
              <th className="px-4 py-2">Reporting Manager</th>
              <th className="px-4 py-2">Comments</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-6 text-gray-500">No Result Found..!</td>
              </tr>
            ) : (
              filteredData.map((entry, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{entry.manager}</td>
                  <td className="px-4 py-2">{entry.comments}</td>
                  <td className="px-4 py-2">{entry.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Form Modal */}
      {isFormOpen && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md  space-y-4">
            <h3 className="text-lg font-semibold">Assign Reporting Manager</h3>
            <input
              type="text"
              name="manager"
              placeholder="Reporting Manager"
              className="w-full px-3 py-2  rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
              value={form.manager}
              onChange={handleChange}
            />
            <textarea
              name="comments"
              placeholder="Comments"
              className="w-full px-3 py-2  rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
              value={form.comments}
              onChange={handleChange}
            />
            <select
              name="status"
              className="w-full px-3 py-2  rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
              value={form.status}
              onChange={handleChange}
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setFormOpen(false)} className='rounded-none cursor-pointer hover:text-white hover:bg-gray-700'>Cancel</Button>
              <Button className='rounded-none border bg-blue-700 text-white cursor-pointer hover:text-white hover:bg-blue-800' onClick={handleAdd}>Submit</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportMan;
