import React from "react";

const Summary = () => {
  return (
    <div className="p-6">
      {/* Top Filters */}
      <div className="flex justify-between items-center flex-wrap mb-6">
        <div className="text-xl font-semibold">Attendance Percentage</div>
        <div className="flex space-x-4">
          <select className="border cursor-pointer rounded px-3 py-1 text-sm">
          <option>January</option>
  <option>February</option>
  <option>March</option>
  <option>April</option>
  <option>May</option>
  <option>June</option>
  <option>July</option>
  <option>August</option>
  <option>September</option>
  <option>October</option>
  <option>November</option>
  <option>December</option>
          </select>
          <div>
            <label className="mr-2 text-sm font-medium text-gray-700 ">Year</label>
            <select className="border cursor-pointer rounded px-3 py-1 text-sm">
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
            </select>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded shadow p-4 min-h-[250px] flex items-center justify-center">
          {/* Replace with real Chart */}
          <div className="text-center text-sm text-gray-400">[Attendance Chart Here]</div>
        </div>
        <div className="bg-white rounded shadow p-4 min-h-[250px] flex items-center justify-center">
          {/* Replace with real Chart */}
          <div className="text-center text-sm text-gray-400">[Leave Approval Chart Here]</div>
        </div>
      </div>

      {/* Leave Balance Table */}
      <div className="bg-white rounded shadow p-4">
        <h3 className="text-base font-semibold mb-4">Leave Balance</h3>
        <table className="w-full text-[12px] text-left">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2  font-medium">Leave Type</th>
              <th className="p-2  font-medium">Granted</th>
              <th className="p-2  font-medium">Taken</th>
              <th className="p-2  font-medium">Balance</th>
            </tr>
          </thead>
          <tbody>
            {["Casual Leave", "Sick Leave", "Vacation Leave"].map((type) => (
              <tr key={type} >
                <td className="p-2">{type}</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
                <td className="p-2">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Summary;
