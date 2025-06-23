import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Summary = () => {
  const ticketStatusData = [
    { name: "Closed", value: 0 },
    { name: "Feedback", value: 0 },
    { name: "Paused", value: 0 },
    { name: "Pending", value: 0 },
    { name: "Rejected", value: 0 },
    { name: "Reopen", value: 0 },
    { name: "Resolved", value: 0 },
    { name: "WorkInProgress", value: 0 },
  ];

  const priorityData = [
    { name: "Low", value: 1, fill: "#b0f2b6" },
    { name: "Medium", value: 2, fill: "#ffb6c1" },
    { name: "High", value: 0, fill: "#f4d03f" },
    { name: "Critical", value: 0, fill: "#e74c3c" },
  ];

  const yearlyData = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "March", value: 0 },
    { month: "April", value: 0 },
    { month: "May", value: 0 },
    { month: "June", value: 0 },
    { month: "July", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen space-y-6">
      {/* Top Cards */}
<div className="mb-4">
  <label className="  block text-sm font-medium text-gray-700 mb-1">
    Grievance Category
  </label>
  <select className="  cursor-pointer shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none border-gray-300 rounded px-3 py-2 text-sm text-gray-700 w-64">
    <option >Payroll and Compensation</option>
    <option>Workplace Harassment</option>
    <option>Leave & Attendance</option>
    <option>Performance Issues</option>
    <option>Others</option>
  </select>
</div>


      <div className="grid grid-cols-5 gap-4">
        {[
          { label: "Total Ticket Count", value: 3 },
          { label: "Ticket Created Today", value: 0 },
          { label: "Ticket Closed Today", value: 0 },
          { label: "Open Tickets Count", value: 2 },
          { label: "Closed Ticket Count", value: 1 },
        ].map((item, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-600">{item.label}</p>
            <p className="text-2xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          {/* Ticket Status Chart */}
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between mb-2">
              <p className="font-medium">Tickets Data</p>
              <select className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none px-2 py-1 rounded text-sm text-gray-700">
                <option>Past One Month</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={ticketStatusData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize={10} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Priority Chart */}
          <div className="bg-white p-4 rounded shadow">
            <p className="font-medium mb-2">Priority</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={priorityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Yearly Chart */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-2">
            <div className="space-x-2">
              <select className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none px-2 py-1 rounded text-sm text-gray-700">
                <option>2025</option>
              </select>
              <select className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none px-2 py-1 rounded text-sm text-gray-700">
                <option>Created</option>
              </select>
              <button className="bg-blue-700 text-white px-3 py-1 rounded text-sm">
                Search
              </button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={yearlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" fontSize={10} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#38bdf8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Summary;
