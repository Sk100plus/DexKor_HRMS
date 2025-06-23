import React, { useState } from "react";

const BulkDat = () => {
  const [documentType, setDocumentType] = useState("");

  return (
    <div className="p-6 bg-white min-h-screen shadow-sm rounded-md">
      <h2 className="text-[13px] font-semibold text-gray-700 mb-4">Bulk Data Upload</h2>

      {/* File upload area */}
      <div className="border border-dashed border-gray-300 p-4 rounded-md bg-gray-50 mb-6 text-xs text-gray-600">
        Upload .ZIP, .RARR documents within 25 MB...
      </div>

      {/* Document Type Dropdown */}
      <div className="mb-6">
        <label htmlFor="docType" className="block text-[13px] text-gray-700 mb-2">
          Document Type
        </label>
        <select
          id="docType"
          value={documentType}
          onChange={(e) => setDocumentType(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Document Type</option>
          <option value="offer">Offer Letter</option>
          <option value="joining">Joining Letter</option>
          <option value="salary">Salary Slip</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-4 py-2 rounded text-[13px] hover:bg-blue-900"
          onClick={() => alert("Submit clicked")}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default BulkDat;
