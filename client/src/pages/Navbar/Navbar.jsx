import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  User,
  Users,
  Building,
  BarChart,
  Calendar,
  Ticket,
  Menu,
  UserCog,
  X,
  Inbox,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Dashboard", path: "/", icon: <Home size={15} /> },
    { name: "Self Service", path: "/Service", icon: <UserCog size={15} /> },
    { name: "Inbox", path: "/Inbox", icon: <Inbox size={15} /> },
    { name: "Organization", path: "/Organization", icon: <Building size={15} /> },
  { name: "All Departments", path: "/allDepartment", icon: <Building size={15} /> },
  { name: "Attendance", path: "/Attendance", icon: <Calendar size={15} /> },
  { name: "Jobs", path: "/Jobs", icon: <BarChart size={15} /> },
  { name: "Candidates", path: "/Candidates", icon: <Users size={15} /> },
  { name: "Holidays", path: "/Holidays", icon: <Calendar size={15} /> },
  { name: "Settings", path: "/Setting", icon: <User size={15} /> },
  {
    name: "Manage Subscription",
    path: "/ManagePlan",
    icon: <Ticket size={20} />,
    label: "Manage\nSubscription", // Optional multi-line label
  },



  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="select-none h-screen bg-gray-800 text-white w-20 flex flex-col items-center py-4 shadow-md">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-sm font-bold text-blue-500">HR</h1>
      </div>

      {/* Navigation Icons */}
      <nav className="flex flex-col gap-2 items-center">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center text-[10px] font-medium gap-1 py-2 w-16 cursor-pointer rounded-lg transition-all duration-200
              ${
                isActive(item.path)
                ? "bg-gray-600 text-white"
                : "hover:bg-gray-500 text-white"
              }`}
          >
            {item.icon}
            <span className="text-center leading-tight">{item.name.split(" ")[0]}</span>
            {item.name.split(" ")[1] && (
              <span className="-mt-1">{item.name.split(" ")[1]}</span>
            )}
          </button>
        ))}
      </nav>

      {/* Mobile Topbar */}
      <div className="md:hidden flex justify-between items-center w-full bg-white p-4 shadow">
        <h1 className="text-xl font-bold text-blue-600">HRMS</h1>
        <button onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
