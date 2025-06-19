import React, { useState } from 'react';
import employees from '../Dashboard/Employee.jsx';
import Profile from '../Dashboard/Profile.jsx';
import Navbar from '../Navbar/Navbar.jsx';

const Attendance = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 7;

  const totalPages = Math.ceil(employees.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = employees.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <div className='font-sans select-none  '>
 <div >
  <Profile/>
 </div>
<div className="h-auto    w-full flex ">
     
        <div className=''>
        <Navbar/>
        </div>
        
        <div className='w-full h-auto pl-5'>
          <div className='my-10'>
          <h1 className="text-xl font-bold text-gray-800 ">Employee Attendance</h1>

          </div>
      
      <div className="bg-white shadow rounded-lg overflow-hidden ">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-gray-600 font-semibold">
            <tr>
              <th className="px-6 py-3 text-left">Employee Name</th>
              <th className="px-6 py-3 text-left">Designation</th>
              <th className="px-6 py-3 text-left">Type</th>
              <th className="px-6 py-3 text-left">Check In Time</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {currentRecords.map((emp, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img src={emp.image} alt={emp.name} className="w-8 h-8 rounded-full border object-cover" />
                  <span>{emp.name}</span>
                </td>
                <td className="px-6 py-4">{emp.designation}</td>
                <td className="px-6 py-4">{emp.type}</td>
                <td className="px-6 py-4">{emp.checkInTime}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium
                    ${emp.status === 'On Time' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'}`}>
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer Pagination */}
        <div className="flex justify-between items-center p-4 text-sm text-gray-500">
          <span>
            Showing {indexOfFirstRecord + 1} to {Math.min(indexOfLastRecord, employees.length)} of {employees.length} records
          </span>
          <div className="flex items-center gap-2">
            <button
              className="px-2 py-1 border rounded hover:bg-gray-100"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            >
              &lt;
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded ${currentPage === i + 1
                  ? 'bg-purple-600 text-white'
                  : 'hover:bg-gray-100 text-gray-600'}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="px-2 py-1 border rounded hover:bg-gray-100"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
        </div>
    
    </div>
  );
};

export default Attendance;
