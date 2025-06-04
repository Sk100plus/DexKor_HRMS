import React from "react";

const leaves = [
  {
    id: 1,
    date: "July 01, 2023",
    duration: "July 05 - July 08",
    days: "3 Days",
    manager: "Mark Williams",
    status: "Pending",
  },
  {
    id: 2,
    date: "Apr 05, 2023",
    duration: "Apr 06 - Apr 10",
    days: "4 Days",
    manager: "Mark Williams",
    status: "Approved",
  },
  {
    id: 3,
    date: "Mar 12, 2023",
    duration: "Mar 14 - Mar 16",
    days: "2 Days",
    manager: "Mark Williams",
    status: "Approved",
  },
  {
    id: 4,
    date: "Feb 01, 2023",
    duration: "Feb 02 - Feb 10",
    days: "8 Days",
    manager: "Mark Williams",
    status: "Approved",
  },
  {
    id: 5,
    date: "Jan 01, 2023",
    duration: "Jan 16 - Jan 19",
    days: "3 Days",
    manager: "Mark Williams",
    status: "Reject",
  },
];

const statusClass = (status) => {
  switch (status) {
    case "Approved":
      return "bg-green-100 text-green-600";
    case "Pending":
      return "bg-yellow-100 text-yellow-600";
    case "Reject":
      return "bg-red-100 text-red-500";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const Leave = () => {
  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full text-left border-separate border-spacing-y-2">
        <thead className="text-sm text-gray-500 uppercase tracking-wider border-b border-gray-200">
          <tr>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Duration</th>
            <th className="px-4 py-2">Days</th>
            <th className="px-4 py-2">Reporting Manager</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-800">
          {leaves.map((leave) => (
            <tr key={leave.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200">{leave.date}</td>
              <td className="px-4 py-2 border-b border-gray-200">{leave.duration}</td>
              <td className="px-4 py-2 border-b border-gray-200">{leave.days}</td>
              <td className="px-4 py-2 border-b border-gray-200">{leave.manager}</td>
              <td className="px-4 py-2 border-b border-gray-200">
                <span className={`px-3 py-1 rounded text-xs font-medium ${statusClass(leave.status)}`}>
                  {leave.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leave;
