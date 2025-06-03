import React, { useState,useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import image from '../profile.jfif'
import { Eye, Pencil, Trash2, Plus, Filter } from 'lucide-react';
import { useNavigate,Link } from 'react-router-dom';
import PerInfo from '../AddEmployee/PerInfo';
import { Search } from "lucide-react"; // or use another search icon
import FilterMethod from './FilterMethod';
import employees from './employee';
// 


const ITEMS_PER_PAGE = 7;

const Dashboard = () => {
  const [searchText, setSearchText] = useState('');
  const [searchText1, setSearchText1] = useState('');
  const [searchText2, setSearchText2] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [workType, setWorkType] = useState("");
  const [blur, setBlur] = useState(false);

  const [design,setDesign]=useState('')
  const [developement,setDevelopement]=useState('')
  const [sales,setSales]=useState('')
  const [hr,setHr]=useState('')
  const [pm,setPm]=useState('')
  const [office,setOffice]=useState('')
  const [wfhome,setWfhome]=useState('')
  // console.log(office);
console.log(wfhome);
  const toggleDepartment = (dept) => {
    setSelectedDepartments((prev) => {
      const updated = prev.includes(dept)
        ? prev.filter((d) => d !== dept)
        : [...prev, dept];
  
        // const updated1 = prev.includes(type)
        // ? prev.filter((d) => d !== type)
        // : [...prev, type];
        // if()
      // Check if Design is included after toggle
      if (updated.includes("Design")) {
        setDesign("Design");
      } 
      else if(updated.includes("Developement")){
        setDevelopement("Developement");
      }
      else if(updated.includes("Sales")){
        setSales("Sales");
      }
      else if(updated.includes("HR")){
        setHr("HR");
      }
      else if(updated.includes("PM")){
        setPm("PM");
      }
      // else if
      else {
        setDesign("");setDevelopement("");setSales("");
      }
  console.log(design)
      return updated;
    });
  };
  

  const handleApply = () => {
    console.log("Departments:", selectedDepartments);
    console.log("Work Type:", workType);
    setBlur(false);
  };

  const filteredEmployees = employees.filter((emp) => {
    const name = emp.name.toLowerCase();
    const empDept = emp.dept;
    const empType = emp.type;
    
    const s1 = searchText.toLowerCase();
    const s2 = searchText1.toLowerCase();
    const s3 = searchText2.toLowerCase();
  
    // Department filtering logic
    const departmentFilterActive =
      design || developement || sales || hr || pm;
  
    const matchesDepartment =
      (!departmentFilterActive) ||
      (design === "Design" && empDept === "Design") ||
      (developement === "Developement" && empDept === "Developement") ||
      (sales === "Sales" && empDept === "Sales") ||
      (hr === "HR" && empDept === "HR") ||
      (pm === "PM" && empDept === "PM");
  
    // Work type filtering logic
    const workTypeFilterActive = wfhome === "Remote" || office === "Office";
  
    const matchesWorkType =
      (!workTypeFilterActive) ||
      (wfhome === "Remote" && empType === "Remote") ||
      (office === "Office" && empType === "Office");
  
    // Apply department + work type filters
    if (!matchesDepartment || !matchesWorkType) return false;
  
    // Name search logic
    if (!s1 && !s2 && !s3) return true;
  
    return name.includes(s1) || name.includes(s2) || name.includes(s3);
  });
  
  
  
  
 
  const totalPages = Math.ceil(filteredEmployees.length / ITEMS_PER_PAGE);

  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => setCurrentPage(page);
  const filterapply = () => setBlur(!blur);


  return (
   
<div
  className={`p-6 min-h-screen font-sans select-none flex `}
>       
<div className="max-w-7xl mx-auto w-full ml-80">
        
        <div className="flex justify-between items-center mb-2">
    {/* Left: Page Title */}
    <h3 className="text-lg font-semibold">All Employees</h3>
  
    {/* Right: Search + Profile */}
    <div className="flex items-center space-x-4">
      {/* Search Input */}
      <div className="relative w-64">
        { (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        )}
       <Input
    placeholder="Search"
    className="pl-9 w-full rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
    onChange={(e) => {
      setSearchText2(e.target.value);
      setCurrentPage(1);

    }}
  />
  
      </div>
  
      {/* Profile Dropdown */}
      {/* Profile Dropdown */}
  <div className="relative group">
    {/* Trigger area */}
    <div className="flex items-center space-x-2 focus:outline-none cursor-pointer">
      <img
        src={image}
        alt="Profile"
        className="w-8 h-8 rounded-full object-cover"
      />
      <span className="text-sm font-medium text-gray-700">John Doe</span>
      <svg
        className="w-4 h-4 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  
    {/* Dropdown menu (now properly tied to the wrapper hover) */}
    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-10">
      <ul className="text-sm text-gray-700">
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Account</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
      </ul>
    </div>
  </div>
  
  
      
    </div>
  </div>
  
  
          <Card className="border border-gray-200 shadow-md rounded-2xl">
          <div className="flex justify-between items-center mb-6">
          <div className="relative ml-3 w-1/3">
    {searchText.length === 0 && (
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
    )}
    
  
    <Input
      placeholder="Search"
      className="pl-9 w-full rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
      value={searchText}
      onChange={(e) => {
        setSearchText(e.target.value);
        setCurrentPage(1);
      }}
    />
  </div>
  
  
            <div className="flex gap-2">
              <Link to="/add-employee-personal">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg flex items-center cursor-pointer" >
                <Plus size={16} className="mr-2" /> Add  Employee
              </Button>
              </Link>
             
              <Button className="mr-3 border border-gray-300 px-4 py-2 rounded-lg flex items-center cursor-pointer" onClick={filterapply}>
                <Filter size={16} className="mr-2" /> Filter
              </Button>
  
  
              
            </div>
          </div>
            <CardContent className="overflow-x-auto p-0">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="p-3 font-semibold">Employee Name</th>
                    <th className="p-3 font-semibold">Employee ID</th>
                    <th className="p-3 font-semibold">Department</th>
                    <th className="p-3 font-semibold">Designation</th>
                    <th className="p-3 font-semibold">Type</th>
                    <th className="p-3 font-semibold">Status</th>
                    <th className="p-3 font-semibold">Action</th>
                  </tr>
                </thead>


                <tbody className="bg-white divide-y divide-gray-200">
                  {paginatedEmployees.map((emp, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                     
                     <td className="p-3">
    <div className="flex items-center gap-3">
      <img src={image} alt={emp.name} className="w-10 h-10 rounded-3xl object-cover" />
      <span>{emp.name}</span>
    </div>
  </td>
                      <td className="p-3">{emp.id}</td>
                      <td className="p-3">{emp.dept}</td>
                      <td className="p-3">{emp.role}</td>
                      <td className="p-3">{emp.type}</td>
                      <td className="p-3">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {emp.status}
                        </span>
                      </td>
                      <td className="p-3 flex gap-3 text-gray-600">
                        <Eye className="w-4 h-4 cursor-pointer" />
                        <Pencil className="w-4 h-4 cursor-pointer" />
                        <Trash2 className="w-4 h-4 cursor-pointer text-red-500" />
                      </td>
                    </tr>
                  ))}




                </tbody>
              </table>
            </CardContent>
          </Card>
  
          <div className="flex justify-between items-center mt-6 text-sm text-gray-700">
            <div>
              Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to {Math.min(currentPage * ITEMS_PER_PAGE, filteredEmployees.length)} of {filteredEmployees.length} records
            </div>
            <div className="flex items-center gap-1">
              <button
                className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
               <span className='cursor-pointer'> &lt;</span>
              </button>
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  className={`px-3 py-1 rounded-md border border-gray-300 ${currentPage === idx + 1 ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'} cursor-pointer`}
                  onClick={() => handlePageChange(idx + 1)}
                >
                  {idx + 1}
                </button>
              ))}
              <button
                className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100"
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
              <span className='cursor-pointer'>&gt;</span>  
              </button>
            </div>
          </div>

          
        </div>




        {blur && 
           (
            <div className="fixed inset-0 z-50  flex items-center justify-center">
              <div className="bg-white p-6 rounded-xl shadow-lg w-[350px] max-h-[90vh] overflow-auto">
                <h2 className="text-lg font-bold mb-4">Filter</h2>
    
                {/* Search Field */}
                <div className="relative mb-4 w-full">
      {/* Icon */}
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" size={16} />
    
      {/* Input */}
      <input
        type="text"
        placeholder="Search Employee"
        className="pl-9 pr-4 py-2 w-full shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none"
        value={searchText1}
        onChange={(e) => {
          setSearchText1(e.target.value);
          setCurrentPage(1);
        }}
      />
     
    </div>
    
    
                {/* Department Checkboxes */}
                <div className="mb-4">
                  <p className="font-semibold mb-2">Department</p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Design",
                      "Developement",
                      "HR",
                      "PM",
                      "Sales",
                      "React JS",
                      "Business Analyst",
                      "Account",
                      "Project Manager",
                      "Nods JS"
                    ].map((dept) => (
                      <label key={dept} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedDepartments.includes(dept)}
                          onChange={() => toggleDepartment(dept)}
                          className="accent-blue-500"
                        />
                        
                        {dept}
                      </label>
                    ))}
                  </div>
                </div>
    
                {/* Select Type Radio Buttons */}
                <div className="mb-4">
                  <p className="font-semibold mb-2">Select Type</p>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                    <input
  type="radio"
  name="type"
  value="Office"
  checked={workType === "Office"}
  onChange={(e) => {
    setWorkType(e.target.value);
    setOffice(e.target.value);     // "Office"
    setWfhome("");                 // reset Work from Home
  }}
/>
                      Office
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="type"
                        value="Remote"
                        checked={workType === "Remote"}
                        onChange={(e) =>{
                          setWorkType(e.target.value);
                          setWfhome(e.target.value);     // "Work from Home"
                          setOffice("");                 // reset Office
                        }}
                      />
                      
                      Remote
                    </label>
                  </div>
                </div>
    
                {/* Action Buttons */}
                <div className="flex justify-between">
                  <button
                    onClick={() => setBlur(false)}
                    className="px-4 py-2 bg-gray-200 rounded-lg cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleApply}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )
        }

    </div>
    
  );
};

export default Dashboard;
