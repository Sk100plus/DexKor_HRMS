import React from "react";

const projects = [
  {
    id: 1,
    name: "Amongus - Discovery Phase",
    startDate: "Feb 01, 2023",
    endDate: "Mar 05, 2023",
    status: "Completed",
  },
  {
    id: 2,
    name: "Wildcare - Development Project",
    startDate: "Feb 12, 2023",
    endDate: "April 20, 2023",
    status: "Completed",
  },
  {
    id: 3,
    name: "Hingutsan Web Development",
    startDate: "April 05, 2023",
    endDate: "October 05, 2023",
    status: "In Process",
  },
  {
    id: 4,
    name: "Montilisy Ecommerce Platform",
    startDate: "May 12, 2023",
    endDate: "August 12, 2023",
    status: "In Process",
  },
];

const statusClass = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-600";
    case "In Process":
      return "bg-yellow-100 text-yellow-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const Project = () => {
  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full text-left border-separate border-spacing-y-2">
        <thead className="text-sm text-gray-500 uppercase tracking-wider border-b border-gray-200">
          <tr>
            <th className="px-4 py-2">Sr. No.</th>
            <th className="px-4 py-2">Project Name</th>
            <th className="px-4 py-2">Start Date</th>
            <th className="px-4 py-2">Finish Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-800">
          {projects.map((project) => (
            <tr key={project.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200">{project.id}</td>
              <td className="px-4 py-2 border-b border-gray-200">{project.name}</td>
              <td className="px-4 py-2 border-b border-gray-200">{project.startDate}</td>
              <td className="px-4 py-2 border-b border-gray-200">{project.endDate}</td>
              <td className="px-4 py-2 border-b border-gray-200">
                <span className={`px-3 py-1 rounded text-xs font-medium ${statusClass(project.status)}`}>
                  {project.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Project;
