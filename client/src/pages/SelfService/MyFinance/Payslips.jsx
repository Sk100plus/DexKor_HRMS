import React, { useState } from 'react';

const Payslips = () => {
  const [selectedMonth, setSelectedMonth] = useState('');

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  return (
    <div className="p-6">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        Month <span className="text-red-500">*</span>
      </label>
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
        className="w-64 p-2 border rounded shadow-sm"
      >
        <option value="">Select Month</option>
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>

      {selectedMonth && (
        <div className="mt-6 bg-blue-100 text-blue-900 px-4 py-3 rounded flex items-center gap-2">
          <span className="text-xl font-bold">ℹ️</span>
          <span>No Payslip Found for {selectedMonth}</span>
        </div>
      )}
    </div>
  );
};

export default Payslips;
