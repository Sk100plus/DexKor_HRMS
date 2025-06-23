import React, { useState } from 'react';

const employeeData = [
  {
    name: 'Benjen Stark',
    empId: 'EMP-202408281583',
    email: 'benjen.targaryen@clientdbin.com',
    status: 'Active',
    web: false,
    mobile: false,
  },
  {
    name: 'Richard Samuel',
    empId: 'EMP-20240425-001',
    email: 'richard@dexkor.com',
    status: 'Active',
    web: true,
    mobile: false,
    lastWeb: '21/06/2025',
  },
  {
    name: 'Davos Seaworth',
    empId: 'EMP-202408281421',
    email: 'davos.seaworth@clientdbin.com',
    status: 'Active',
    web: false,
    mobile: false,
  },
];

const LogOver = () => {
  const [activeTab, setActiveTab] = useState('Access');
  const [filters, setFilters] = useState({
    web: '',
    mobile: '',
    status: '',
  });
  const [filtered, setFiltered] = useState(employeeData);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    let result = employeeData;

    if (filters.web) {
      result = result.filter((emp) =>
        filters.web === 'enabled' ? emp.web : !emp.web
      );
    }
    if (filters.mobile) {
      result = result.filter((emp) =>
        filters.mobile === 'enabled' ? emp.mobile : !emp.mobile
      );
    }
    if (filters.status) {
      result = result.filter((emp) => emp.status === filters.status);
    }

    setFiltered(result);
  };

  const resetFilters = () => {
    setFilters({ web: '', mobile: '', status: '' });
    setFiltered(employeeData);
  };

  const tabClass = (tab) =>
    `px-4 py-2 font-semibold border-b-2 ${
      activeTab === tab
        ? 'border-blue-700 text-blue-700'
        : 'border-transparent text-gray-600'
    } cursor-pointer`;

  return (
    <div className="p-4 text-[13px] bg-gray-50 min-h-screen">
      {/* Tabs */}
      <div className="flex gap-4 focus:ring-0 focus:outline-none   mb-6">
        <div className={tabClass('Access')} onClick={() => setActiveTab('Access')}>
          Access
        </div>
        <div
          className={tabClass('Login History')}
          onClick={() => setActiveTab('Login History')}
        >
          Login History
        </div>
      </div>

      {/* Access Tab Content */}
      {activeTab === 'Access' ? (
        <div className="bg-white p-4 rounded shadow">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center mb-4">
            <select
              name="web"
              value={filters.web}
              onChange={handleFilterChange}
              className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none  rounded px-3 py-2"
            >
              <option value="">Web Login</option>
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
            </select>
            <select
              name="mobile"
              value={filters.mobile}
              onChange={handleFilterChange}
              className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none  rounded px-3 py-2"
            >
              <option value="">Mobile Login</option>
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
            </select>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none  rounded px-3 py-2"
            >
              <option value="">Employee Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <div className="ml-auto flex gap-2">
              <button
                className="px-4 py-2 bg-gray-200 rounded"
                onClick={resetFilters}
              >
                Reset
              </button>
              <button
                className="px-4 py-2 bg-blue-700 text-white rounded"
                onClick={applyFilters}
              >
                Submit
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full  shadow-sm border border-gray-300 focus:ring-0 focus:outline-none  ">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="px-4 py-2"><input type="checkbox" /></th>
                  <th className="px-4 py-2">Employee Name</th>
                  <th className="px-4 py-2">Office Email</th>
                  <th className="px-4 py-2">Employee Status</th>
                  <th className="px-4 py-2">Web Login Status</th>
                  <th className="px-4 py-2">Mobile Login Status</th>
                  <th className="px-4 py-2">Last Web Login Date</th>
                  <th className="px-4 py-2">Last Mobile Login Date</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="text-center py-6 text-gray-500">
                      No matching records found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((emp, i) => (
                    <tr key={i} className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none  ">
                      <td className="px-4 py-2"><input type="checkbox" /></td>
                      <td className="px-4 py-2 font-semibold">
                        {emp.name}
                        <div className=" text-gray-500">{emp.empId}</div>
                      </td>
                      <td className="px-4 py-2">{emp.email}</td>
                      <td className="px-4 py-2">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                          ● {emp.status}
                        </span>
                      </td>
                      <td className="px-4 py-2">
                        {emp.web ? (
                          <span className="text-green-600 ">✔️</span>
                        ) : (
                          <span className="text-red-500 ">❌</span>
                        )}
                      </td>
                      <td className="px-4 py-2">
                        {emp.mobile ? (
                          <span className="text-green-600 ">✔️</span>
                        ) : (
                          <span className="text-red-500 ">❌</span>
                        )}
                      </td>
                      <td className="px-4 py-2">{emp.lastWeb || '-'}</td>
                      <td className="px-4 py-2">{emp.lastMobile || '-'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white p-4 rounded shadow">
  {/* Filter Bar */}
  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-6">
    <select
      className="shadow-sm border border-gray-300 rounded px-3 py-2"
      name="date"
      value={filters.date}
      onChange={handleFilterChange}
    >
      <option value="">Select Date Range</option>
      <option value="today">Today</option>
      <option value="last7">Last 7 Days</option>
      <option value="last30">Last 30 Days</option>
    </select>
    <select
      name="web"
      value={filters.web}
      onChange={handleFilterChange}
      className="shadow-sm border border-gray-300 rounded px-3 py-2"
    >
      <option value="">Web Login</option>
      <option value="enabled">Enabled</option>
      <option value="disabled">Disabled</option>
    </select>
    <select
      name="mobile"
      value={filters.mobile}
      onChange={handleFilterChange}
      className="shadow-sm border border-gray-300 rounded px-3 py-2"
    >
      <option value="">Mobile Login</option>
      <option value="enabled">Enabled</option>
      <option value="disabled">Disabled</option>
    </select>
    <select
      name="status"
      value={filters.status}
      onChange={handleFilterChange}
      className="shadow-sm border border-gray-300 rounded px-3 py-2"
    >
      <option value="">Login Status</option>
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>
    <div className="flex gap-2 justify-end">
      <button
        className="px-4 py-2 bg-gray-200 rounded"
        onClick={resetFilters}
      >
        Reset
      </button>
      <button
        className="px-4 py-2 bg-blue-700 text-white rounded"
        onClick={applyFilters}
      >
        Submit
      </button>
    </div>
  </div>

  {/* Table */}
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-300 text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left">Employee Name</th>
          <th className="px-4 py-2 text-left">Email</th>
          <th className="px-4 py-2 text-left">Date Of Join</th>
          <th className="px-4 py-2 text-left">Department</th>
          <th className="px-4 py-2 text-left">Designation</th>
          <th className="px-4 py-2 text-left">Role</th>
          <th className="px-4 py-2 text-left">Login Time</th>
          <th className="px-4 py-2 text-left">Device</th>
          <th className="px-4 py-2 text-left">Remarks</th>
        </tr>
      </thead>
      <tbody>
        {filtered.length === 0 ? (
          <tr>
            <td colSpan="9" className="text-center py-6 text-gray-500">
              <div className="flex flex-col items-center">
                <img
                  src="/no-result-icon.png"
                  alt="No Result"
                  className="w-12 mb-2 opacity-50"
                />
                <p>No Result Found..!</p>
              </div>
            </td>
          </tr>
        ) : (
          filtered.map((emp, i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-2">{emp.name}</td>
              <td className="px-4 py-2">{emp.email}</td>
              <td className="px-4 py-2">{emp.dateOfJoin || '-'}</td>
              <td className="px-4 py-2">{emp.department || '-'}</td>
              <td className="px-4 py-2">{emp.designation || '-'}</td>
              <td className="px-4 py-2">{emp.role || '-'}</td>
              <td className="px-4 py-2">{emp.lastWeb || emp.lastMobile || '-'}</td>
              <td className="px-4 py-2">{emp.web ? 'Web' : emp.mobile ? 'Mobile' : '-'}</td>
              <td className="px-4 py-2">{emp.remarks || '-'}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
</div>

      )}
    </div>
  );
};

export default LogOver;
