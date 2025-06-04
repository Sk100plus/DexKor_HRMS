import React from 'react';

const Attendance = () => {
  const records = [
    { date: 'July 01, 2023', checkIn: '09:28 AM', checkOut: '07:00 PM', break: '00:30 Min', hours: '09:02 Hrs', status: 'On Time' },
    { date: 'July 02, 2023', checkIn: '09:20 AM', checkOut: '07:00 PM', break: '00:20 Min', hours: '09:20 Hrs', status: 'On Time' },
    { date: 'July 03, 2023', checkIn: '09:25 AM', checkOut: '07:00 PM', break: '00:30 Min', hours: '09:05 Hrs', status: 'On Time' },
    { date: 'July 04, 2023', checkIn: '09:45 AM', checkOut: '07:00 PM', break: '00:40 Min', hours: '08:35 Hrs', status: 'Late' },
    { date: 'July 05, 2023', checkIn: '10:00 AM', checkOut: '07:00 PM', break: '00:30 Min', hours: '08:30 Hrs', status: 'Late' },
    { date: 'July 06, 2023', checkIn: '09:28 AM', checkOut: '07:00 PM', break: '00:30 Min', hours: '09:02 Hrs', status: 'On Time' },
    { date: 'July 07, 2023', checkIn: '09:30 AM', checkOut: '07:00 PM', break: '00:15 Min', hours: '09:15 Hrs', status: 'On Time' },
    { date: 'July 08, 2023', checkIn: '09:52 AM', checkOut: '07:00 PM', break: '00:45 Min', hours: '08:23 Hrs', status: 'Late' },
    { date: 'July 09, 2023', checkIn: '09:10 AM', checkOut: '07:00 PM', break: '00:30 Min', hours: '09:02 Hrs', status: 'On Time' },
    { date: 'July 10, 2023', checkIn: '09:48 AM', checkOut: '07:00 PM', break: '00:42 Min', hours: '08:30 Hrs', status: 'Late' },
  ];

  const statusClass = (status) =>
    status === 'On Time' ? 'text-green-600 bg-green-100' : 'text-red-400 bg-red-100';

  return (
    <div className="mt-0 p-0">
      <h2 className="text-xl font-semibold mt-0">Attendance Records</h2>
      <div className="overflow-x-auto  ">
      <table className="min-w-full text-left border-separate border-spacing-y-2">
        <thead className="text-sm text-gray-500 uppercase tracking-wider border-b border-gray-200">
            <tr className='border-b border-gray-200 text-lg'>
              <th className="px-4 py-2 border-b ">Date</th>
              <th className="px-4 py-2 border-b">Check In</th>
              <th className="px-4 py-2 border-b">Check Out</th>
              <th className="px-4 py-2 border-b">Break</th>
              <th className="px-4 py-2 border-b">Working Hours</th>
              <th className="px-4 py-2 border-b">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
  {records.map((entry, idx) => (
    <tr key={idx} className="hover:bg-gray-50">
      <td className="px-4 py-2 border-b border-gray-200">{entry.date}</td>
      <td className="px-4 py-2 border-b border-gray-200">{entry.checkIn}</td>
      <td className="px-4 py-2 border-b border-gray-200">{entry.checkOut}</td>
      <td className="px-4 py-2 border-b border-gray-200">{entry.break}</td>
      <td className="px-4 py-2 border-b border-gray-200">{entry.hours}</td>
      <td className="px-4 py-2 border-b border-gray-200">
        <span className={`px-2 py-1 rounded text-xs font-medium ${statusClass(entry.status)}`}>
          {entry.status}
        </span>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default Attendance;
