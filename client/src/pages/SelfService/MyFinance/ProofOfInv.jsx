import React from "react";

const ProofOfInv = () => {
  const data = []; // empty data for now

  return (
    <div className="p-4 text-[13px]">
      <div className="flex justify-between items-center mb-4">
        <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
          Submit IT with Clear Tax
        </button>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-1 rounded"
          />
        </div>
      </div>

      <table className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-collapse">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Financial Year</th>
            <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Date of Declaration</th>
            <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Date of POI Submission</th>
            <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Status</th>
            <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">POI Action</th>
            <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Proof Declaration Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-20 text-gray-500">
                <div className="flex flex-col items-center">
                  <svg
                    className="w-12 h-12 text-blue-400 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <p className="text-lg">No Result Found..!</p>
                </div>
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={index}>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{item.year}</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{item.declarationDate}</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{item.poiSubmissionDate}</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{item.status}</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{item.poiAction}</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{item.declarationAction}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center text-sm mt-4 text-gray-600">
        <div>
          Items per page:{" "}
          <select className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded px-2 py-1">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>
        <div>0 of 0</div>
        <div className="flex space-x-2">
          <button disabled className="opacity-50">←</button>
          <button disabled className="opacity-50">→</button>
        </div>
      </div>
    </div>
  );
};

export default ProofOfInv;
