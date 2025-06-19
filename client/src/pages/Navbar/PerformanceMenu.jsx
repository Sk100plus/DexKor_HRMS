import React, { useState } from "react";

const PerformanceMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((prev) => !prev);

  return (
    <div className="relative inline-block">
      {/* Main link (click to open) */}
      <button
        onClick={toggleDropdown}
        className="nav-link text-gray-700 font-medium px-4 py-2 inline-block hover:bg-gray-100 rounded focus:outline-none"
      >
        Performance
      </button>

      {/* Right-side dropdown */}
      {open && (
        <div className="absolute left-30 top-0 ml-2 z-10 bg-white  rounded shadow-md min-w-[200px]">
          <a
            href="#/Performance/CycleConfig"
            className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800"
          >
            Cycle Configuration
          </a>
          <a
            href="#/Performance/AppraisalView"
            className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800"
          >
            Appraisal View
          </a>
          <a
            href="#/Performance/SalaryHike"
            className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800"
          >
            Salary Hike
          </a>
        </div>
      )}
    </div>
  );
};

export default PerformanceMenu;
