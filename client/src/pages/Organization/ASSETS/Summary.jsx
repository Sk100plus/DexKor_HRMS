import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid
} from "recharts";

const pieData = [
  { name: "Assigned", value: 6 },
  { name: "Available", value: 4 },
];
const COLORS = ["#d946ef", "#f3e8ff"];

const barData = [
  { category: "Software", count: 6 },
  { category: "Office Supplies", count: 4 },
];

const assetRequestStats = [
  { status: "Approved", count: 0 },
  { status: "Pending", count: 0 },
  { status: "Rejected", count: 0 },
];

const assetRepairStats = [
  { status: "Repaired", count: 0 },
  { status: "Pending", count: 0 },
];

const Summary = () => {
  return (
    <div className="p-4 grid gap-4 min-h-screen">
      {/* Donut Chart & Faulty Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-semibold mb-2">Asset Chart</h3>
          <div className="flex justify-between items-center">
            <PieChart width={240} height={240}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={3}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
            <div className="text-[12px]">
              <p>Total Assets: 10</p>
              <p>Assets Assigned: 6</p>
              <p>Assets Available: 4</p>
            </div>
          </div>
        </div>

        <div className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-semibold mb-2">Asset Faulty Statistics</h3>
          <p className="text-sm text-gray-600">Total Faulty Assets: 0</p>
          <div className="mt-2 text-[12px] space-y-1">
            <p>Repaired Asset: 0</p>
            <p>Unrepaired Asset: 0</p>
          </div>
        </div>
      </div>

      {/* Asset Statistics */}
      <div className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none p-4 rounded-lg shadow-md">
        <h3 className="text-sm font-semibold mb-2">Asset Statistics</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#4ade80" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Asset Request Statistics & Repair Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-semibold mb-2">Asset Request Statistics</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={assetRequestStats} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="status" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#60a5fa" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-semibold mb-2">Asset Repair Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={assetRepairStats} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="status" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#facc15" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Summary;