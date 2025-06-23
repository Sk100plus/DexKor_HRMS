import React from 'react';
import { ChevronLeft } from 'lucide-react';

const AnalyzeSur = () => {
  return (
    <div className="p-6 bg-white min-h-screen text-[13px]">

      {/* Filter Dropdown */}
      <div className="mb-4">
        <label htmlFor="surveySelect" className="block  text-gray-600 mb-1">
          Survey
        </label>
        <select
          id="surveySelect"
          className="w-full max-w-md shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300 rounded-none px-3 py-2 "
        >
          <option value="">Select Survey</option>
        </select>
      </div>

      {/* Survey Details Panel */}
      <div className="shadow-sm border border-gray-300 rounded-none focus:ring-0 focus:outline-none rounded-md p-4 bg-gray-50  grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-gray-500 mb-1">Survey Name</p>
          <p className="text-gray-800 font-medium">-</p>
        </div>
        <div>
          <p className="text-gray-500 mb-1">Survey Category</p>
          <p className="text-gray-800 font-medium">-</p>
        </div>
        <div>
          <p className="text-gray-500 mb-1">Start - End Date</p>
          <p className="text-gray-800 font-medium">-</p>
        </div>
        <div>
          <p className="text-gray-500 mb-1">Status</p>
          <p className="text-gray-800 font-medium">-</p>
        </div>
        <div>
          <p className="text-gray-500 mb-1">Survey Type</p>
          <p className="text-gray-800 font-medium">Non - Anonymous</p>
        </div>
        <div>
          <p className="text-gray-500 mb-1">Total Questions</p>
          <p className="text-gray-800 font-medium">-</p>
        </div>
        <div className="md:col-span-2">
          <p className="text-gray-500 mb-1">Respondents</p>
          <p className="text-gray-800 font-medium">: of</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyzeSur;
