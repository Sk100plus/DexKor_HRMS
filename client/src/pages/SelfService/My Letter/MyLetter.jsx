import React, { useState } from 'react';

const MyLetter = () => {
  const [letters, setLetters] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [letterType, setLetterType] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [letterFilter, setLetterFilter] = useState('');
  const [search, setSearch] = useState('');

  const handleAdd = () => {
    setShowForm(true);
    setLetterType('');
  };

  const handleSubmit = () => {
    if (letterType.trim()) {
      setLetters([
        ...letters,
        {
          name: letterType,
          date: new Date().toLocaleDateString(),
          status: 'Pending',
          approver: 'HR Team',
        },
      ]);
      setShowForm(false);
    }
  };

  const filteredLetters = letters.filter((letter) => {
    const matchesStatus = !statusFilter || letter.status === statusFilter;
    const matchesType = !letterFilter || letter.name === letterFilter;
    const matchesSearch = letter.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesStatus && matchesType && matchesSearch;
  });

  return (
    <div className="p-6 relative text-[13px]">
      <h2 className="text-xl font-semibold mb-4">Letter History</h2>

      {/* Filters and search */}
      <div className="flex flex-wrap gap-4 justify-between mb-4">
        <div className="flex gap-3">
          <select
            className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-1 rounded"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">Select a Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
          </select>
          <select
            className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-1 rounded"
            value={letterFilter}
            onChange={(e) => setLetterFilter(e.target.value)}
          >
            <option value="">Select Letters</option>
            {[...new Set(letters.map((l) => l.name))].map((name, i) => (
              <option key={i} value={name}>
                {name}
              </option>
            ))}
          </select>
          <button
            className="bg-gray-600 cursor-pointer hover:bg-gray-700 text-white px-3 py-1 rounded"
            onClick={() => {
              setStatusFilter('');
              setLetterFilter('');
              setSearch('');
            }}
          >
            Reset
          </button>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="shadow-sm border border-gray-300 cursor-pointer hover:bg-gray-400  focus:ring-0 focus:outline-none px-3 py-1 rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-blue-600 cursor-pointer hover:bg-blue-700  text-white px-3 py-1 rounded"
            onClick={handleAdd}
          >
            +
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded">
        <table className="w-full text-sm shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none text-left">Letter Name</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none text-left">Actioned On</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none text-left">Status</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none text-left">Approver</th>
            </tr>
          </thead>
          <tbody>
            {filteredLetters.length > 0 ? (
              filteredLetters.map((letter, index) => (
                <tr key={index}>
                  <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2">{letter.name}</td>
                  <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2">{letter.date}</td>
                  <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2">{letter.status}</td>
                  <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2">{letter.approver}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-10 text-gray-500">
                  <div className="flex flex-col items-center">
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
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 text-sm">
          <span>
            Items per page:{' '}
            <select className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-2 py-1">
              <option>25</option>
              <option>50</option>
            </select>
          </span>
          <span>{filteredLetters.length} of {letters.length}</span>
        </div>
      </div>

      {/* Modal for Add Letter */}
      {showForm && (
        <div className="fixed inset-0  bg-opacity-40 flex justify-center items-center z-10">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[300px]">
            <h3 className="text-lg font-bold mb-3">Add Letter</h3>
            <input
              type="text"
              placeholder="Enter Letter Type"
              value={letterType}
              onChange={(e) => setLetterType(e.target.value)}
              className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none w-full px-3 py-1 rounded mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-400 text-white px-3 py-1 rounded cursor-pointer hover:bg-gray-500 "
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 cursor-pointer hover:bg-blue-700  text-white px-3 py-1 rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyLetter;
