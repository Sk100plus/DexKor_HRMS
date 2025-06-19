import React from 'react';

const RevHistory = () => {
  return (
    <div className="p-6">
      <div className="border border-gray-300 focus:ring-0 focus:outline-none rounded-md overflow-hidden">
        {/* Table Header */}
        <div className="bg-blue-50 grid grid-cols-4 text-sm font-semibold text-gray-700 px-4 py-2 border border-gray-300 focus:ring-0 focus:outline-none">
          <div>Appraisal Name</div>
          <div>Published On</div>
          <div>Action</div>
          <div>Feedback</div>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-10">
          <img
            src="https://www.svgrepo.com/show/327408/no-data.svg" // You can replace this with your own image or asset
            alt="No result"
            className="w-20 h-20 opacity-50 mb-2"
          />
          <p className="text-sm text-gray-500">No Result Found..!</p>
        </div>
      </div>
    </div>
  );
};

export default RevHistory;
