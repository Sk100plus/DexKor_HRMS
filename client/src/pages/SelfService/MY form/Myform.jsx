import React from 'react';

const Myform = () => {
  const forms = []; // Simulates empty state

  return (
    <div className="p-6 text-[13px]">
      <h2 className=" font-semibold mb-4">My Forms</h2>

      <div className="bg-white rounded shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm p-4">
        {/* Search */}
        <div className="flex justify-between items-center mb-4">
          <div></div>
          <input
            type="text"
            placeholder="Search"
            className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-1 rounded w-60"
          />
        </div>

        {/* Table */}
        <table className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
          <thead className="bg-gray-100">
            <tr>
              <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2 text-left">Form Name</th>
              <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2 text-left">Category</th>
              <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2 text-left">Status</th>
              <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2 text-left">Action</th>
            </tr>
          </thead>

          {forms.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan="4" className="text-center p-10 text-gray-500">
                  <div className="flex flex-col items-center">
                    {/* Placeholder for icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mb-2 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2h2"
                      />
                    </svg>
                    <p>No Result Found..!</p>
                  </div>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {forms.map((form, index) => (
                <tr key={index}>
                  <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2">{form.name}</td>
                  <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2">{form.category}</td>
                  <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2">{form.status}</td>
                  <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2">[Actions here]</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 ">
          <span>Items per page: 
            <select className="ml-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-2 py-1">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </span>
          <span>0 of 0</span>
        </div>
      </div>
    </div>
  );
};

export default Myform;
