import React from 'react';

const Cheques = () => {
  const data = []; // Empty array for now

  return (
    <div className="p-4 text-[13px] bg-white rounded shadow-md">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="p-3">Employee</th>
              <th className="p-3">Net Pay</th>
              <th className="p-3">Cheque Info</th>
              <th className="p-3">Transaction Proof</th>
              <th className="p-3">Add Proof</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-20 text-gray-500">
                  <div className="flex flex-col items-center">
                    <svg className="w-12 h-12 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <p className="text-lg">No Result Found..!</p>
                  </div>
                </td>
              </tr>
            ) : (
              // Render data rows here when available
              data.map((item, index) => (
                <tr key={index}>
                  <td className="p-3">...</td>
                  <td className="p-3">...</td>
                  <td className="p-3">...</td>
                  <td className="p-3">...</td>
                  <td className="p-3">...</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination footer */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <div>Items per page: <span className="font-medium">10</span></div>
        <div>0 of 0</div>
        <div className="flex space-x-2">
          <button disabled className="opacity-50">←</button>
          <button disabled className="opacity-50">→</button>
        </div>
      </div>
    </div>
  );
};

export default Cheques;
