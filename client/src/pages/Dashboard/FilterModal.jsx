import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const departments = [
  "Design",
  "HR",
  "Sales",
  "Business Analyst",
  "Project Manager",
  "Java",
  "Python",
  "React JS",
  "Account",
  "Nods JS",
];

function FilterModal({ onClose }) {
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [workType, setWorkType] = useState("");

  const toggleDepartment = (dept) => {
    setSelectedDepartments((prev) =>
      prev.includes(dept) ? prev.filter((d) => d !== dept) : [...prev, dept]
    );
  };

  const handleApply = () => {
    console.log("Selected Departments:", selectedDepartments);
    console.log("Work Type:", workType);
    // Add your filtering logic here
    onClose();
  };

  return (
    <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl w-96 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filter</h2>
        <button onClick={onClose}>
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Employee"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 dark:bg-gray-800"
        />
        <h3 className="font-medium mb-2">Department</h3>
        <div className="grid grid-cols-2 gap-2">
          {departments.map((dept) => (
            <label key={dept} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedDepartments.includes(dept)}
                onChange={() => toggleDepartment(dept)}
                className="accent-purple-500"
              />
              <span>{dept}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Select Type</h3>
        <label className="flex items-center space-x-2 mb-1">
          <input
            type="radio"
            value="Office"
            checked={workType === "Office"}
            onChange={(e) => setWorkType(e.target.value)}
            className="accent-purple-500"
          />
          <span>Office</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="Work from Home"
            checked={workType === "Work from Home"}
            onChange={(e) => setWorkType(e.target.value)}
            className="accent-purple-500"
          />
          <span>Work from Home</span>
        </label>
      </div>

      <div className="flex justify-between">
        <Button
          onClick={onClose}
          className="border border-gray-300 bg-white text-black hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600"
        >
          Cancel
        </Button>
        <Button
          onClick={handleApply}
          className="bg-purple-600 text-white hover:bg-purple-700"
        >
          Apply
        </Button>
      </div>
    </div>
  );
}

export default FilterModal;
