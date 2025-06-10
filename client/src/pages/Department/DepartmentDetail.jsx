import { useParams } from "react-router-dom";
import { useState } from "react";
import { departments } from "./AllDept";
import { Eye, Pencil, Trash2 } from "lucide-react";

const DepartmentDetail = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
  const department = departments.find((dept) => dept.name === decodedName);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const totalItems = department?.members.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedMembers = department?.members.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-10 ml-80 select-none">
     <div className="flex justify-between items-center mb-6">
  <h1 className="text-xl font-bold text-gray-800">Department: {decodedName}</h1>
  <input
    type="text"
    placeholder="Search"
    className="shadow-lg border border-gray-200 rounded-md px-3 py-2 w-1/3 focus:ring-0 focus:outline-none"
  />
</div>


      <div className="bg-white shadow rounded-lg overflow-hidden ">
        <table className="min-w-full text-sm divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-gray-600">Employee Name</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-600">Designation</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-600">Type</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-600">Status</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {paginatedMembers?.map((member, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition cursor-pointer">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-9 h-9 rounded-full object-cover border"
                  />
                  <span className="text-sm font-medium text-gray-800">{member.name}</span>
                </td>
                <td className="px-6 py-4 text-gray-700">{member.role}</td>
                <td className="px-6 py-4 text-gray-700">{member.type || "Office"}</td>
                <td className="px-6 py-4">
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600">
                    Permanent
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-3">
                    <Eye className="w-4 h-4 text-gray-500 hover:text-blue-600 cursor-pointer" />
                    <Pencil className="w-4 h-4 text-gray-500 hover:text-yellow-500 cursor-pointer" />
                    <Trash2 className="w-4 h-4 text-gray-500 hover:text-red-600 cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Footer */}
        <div className="flex justify-between items-center p-4 text-sm text-gray-500">
          <span>
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} records
          </span>

          <div className="flex items-center gap-1">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-2 py-1 border rounded text-gray-600 hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                } cursor-pointer`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-2 py-1 border rounded text-gray-600 hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
                          >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;
