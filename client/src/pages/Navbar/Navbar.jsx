import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: Icon library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:flex select-none h-full">
      {/* Sidebar */}
      <div
  className={`fixed md:static z-50 top-0 left-0 w-64 bg-white  transform transition-transform duration-300 ease-in-out p-4
    ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} `}
>

        {/* Logo */}
        <h1 className="text-xl font-bold mb-6 mt-2 text-purple-600">HRMS</h1>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          <a href="/DexKor_HRMS" className="nav-link">Dashboard</a>
          <a href="/DexKor_HRMS/allDepartment" className="nav-link">All Departments</a>
          <a href="/DexKor_HRMS/Attendance" className="nav-link">Attendance</a>
          <a href="/DexKor_HRMS/Jobs" className="nav-link">Jobs</a>
          <a href="/DexKor_HRMS/Candidates" className="nav-link">Candidates</a>
          <a href="/DexKor_HRMS/Holidays" className="nav-link">Holidays</a>
          <a href="/DexKor_HRMS/Setting" className="nav-link">Settings</a>
        </nav>

        {/* Theme toggle */}
        <div className="flex justify-between mb-0 px-1 mt-100">
          <button className="text-sm px-3 py-1 rounded bg-purple-100 text-purple-700">Light</button>
          <button className="text-sm px-3 py-1 rounded hover:bg-gray-100">Dark</button>
        </div>
      </div>

      {/* Mobile top bar */}
      <div className="md:hidden flex justify-between items-center w-full bg-white p-4 shadow">
        <h1 className="text-xl font-bold text-purple-600">HRMS</h1>
        <button onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
