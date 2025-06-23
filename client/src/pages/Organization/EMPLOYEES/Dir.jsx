import React, { useState } from 'react';

const Dir = () => {
  // State for filters
  const [filters, setFilters] = useState({
    date: '',
    legalEntity: '',
    status: '',
    workLocation: '',
    department: '',
    employmentType: '',
    designation: ''
  });

  // State for employee data
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Benjen Stark",
      department: "Information Technology Department",
      position: "Software Engineer",
      empId: "EMP-202405287853",
      email: "benjen.tsingayongclient@ba.com",
      phone: "To be updated",
      status: "Active"
    },
    {
      id: 2,
      name: "Jalme Lamister",
      department: "Information Technology Department",
      position: "Software Engineer",
      empId: "EMP-202405287821",
      email: "jalme.lamister@client@ba.com",
      phone: "To be updated",
      status: "Active"
    },
    {
      id: 3,
      name: "Richard Samuel",
      department: "Admin Department",
      position: "Executive",
      empId: "EMP-20240425-001",
      email: "richard@jalmau.com",
      phone: "+95858881108",
      status: "Active"
    },
    {
      id: 4,
      name: "Davos Seaworth",
      department: "Information Technology Department",
      position: "Software Engineer",
      empId: "EMP-202405281421",
      email: "davos.seaworth@client@ba.com",
      phone: "To be updated",
      status: "Active"
    },
    {
      id: 5,
      name: "Josah Mezmark",
      department: "Information Technology Department",
      position: "Software Engineer",
      empId: "EMP-202405283844",
      email: "josah.mezmark@client@ba.com",
      phone: "To be updated",
      status: "Active"
    },
    {
      id: 6,
      name: "Elena Martell",
      department: "Information Technology Department",
      position: "Software Engineer",
      empId: "EMP-202405287858",
      email: "elena.martell@client@ba.com",
      phone: "To be updated",
      status: "Active"
    },
    {
      id: 7,
      name: "Lyanna Stark",
      department: "Information Technology Department",
      position: "Software Engineer",
      empId: "EMP-202405287321",
      email: "lyanna.stark@client@ba.com",
      phone: "To be updated",
      status: "Active"
    }
  ]);

  // State for selected employee
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    department: '',
    position: '',
    email: '',
    phone: '',
    status: 'Active'
  });

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  // Handle employee card click
  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee(prev => ({ ...prev, [name]: value }));
  };

  // Add new employee
  const handleAddEmployee = (e) => {
    e.preventDefault();
    const empId = `EMP-${new Date().getTime()}`;
    const employee = { ...newEmployee, empId, id: employees.length + 1 };
    setEmployees([...employees, employee]);
    setNewEmployee({
      name: '',
      department: '',
      position: '',
      email: '',
      phone: '',
      status: 'Active'
    });
    setIsAddFormOpen(false);
  };

  return (
    <div className="min-h-screen text-[13px] bg-white rounded-none shadow-sm bg-gray-50 p-6">
      <div className=" mx-auto">
        
        {/* Filter Section */}
        <div className=" p-6 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sales Filter */}
            <div>
              <h2 className="font-medium text-gray-700 mb-2">Date of Join</h2>
              <div className="space-y-2">
                <select
                  name="date"
                  value={filters.date}
                  onChange={handleFilterChange}
                  className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md"
                >
                  <option value="">Select Date</option>
                  <option value="last-week">Last Week</option>
                  <option value="last-month">Last Month</option>
                  <option value="last-year">Last Year</option>
                </select>
                <select
                  name="legalEntity"
                  value={filters.legalEntity}
                  onChange={handleFilterChange}
                  className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md"
                >
                  <option value="">Select Legal Entity</option>
                  <option value="entity1">Legal Entity 1</option>
                  <option value="entity2">Legal Entity 2</option>
                </select>
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <h2 className="font-medium text-gray-700 mb-2">Status</h2>
              <div className="space-y-2">
                <select
                  name="status"
                  value={filters.status}
                  onChange={handleFilterChange}
                  className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md"
                >
                  <option value="">Select Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <select
                  name="workLocation"
                  value={filters.workLocation}
                  onChange={handleFilterChange}
                  className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md"
                >
                  <option value="">Select Work Location</option>
                  <option value="office">Office</option>
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
            </div>

            {/* Department Filter */}
            <div>
              <h2 className="font-medium text-gray-700 mb-2">Department</h2>
              <div className="space-y-2">
                <select
                  name="department"
                  value={filters.department}
                  onChange={handleFilterChange}
                  className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md"
                >
                  <option value="">Select Department</option>
                  <option value="it">Information Technology</option>
                  <option value="admin">Admin</option>
                  <option value="hr">Human Resources</option>
                </select>
                <select
                  name="employmentType"
                  value={filters.employmentType}
                  onChange={handleFilterChange}
                  className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md"
                >
                  <option value="">Select Employee Type</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                </select>
              </div>
            </div>

            {/* Designation Filter */}
            <div>
              <h2 className="font-medium text-gray-700 mb-2">Designation</h2>
              <select
                name="designation"
                value={filters.designation}
                onChange={handleFilterChange}
                className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md"
              >
                <option value="">Select Designation</option>
                <option value="executive">Executive</option>
                <option value="manager">Manager</option>
                <option value="engineer">Software Engineer</option>
              </select>
              <div className="flex justify-end space-x-2 mt-3">
                  <button
                    type="button"
                    className=" cursor-pointer px-4 py-1  border hover:text-white hover:bg-gray-600 rounded-none hover:bg-gray-50"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1  border  hover:bg-blue-600 hover:text-white rounded-none hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
            </div>
            
          </div>
        </div>

        {/* Employees Section */}
        <div className=" p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[15px] font-bold text-gray-800">All Employees</h2>
            <button
              onClick={() => setIsAddFormOpen(true)}
              className="px-4 py-2 border bg-blue-50 hover:bg-blue-600 hover:text-white rounded-none hover:bg-blue-700"
            >
              Add Employee
            </button>
          </div>

          {/* Employee Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {employees.map(employee => (
              <div
                key={employee.id}
                onClick={() => handleEmployeeClick(employee)}
                className={`p-4 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded-lg cursor-pointer hover:shadow-md transition-shadow ${
                  selectedEmployee?.id === employee.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <h3 className="font-bold ">{employee.name}</h3>
                <p className="text-gray-600">{employee.department}</p>
                <p className="text-gray-700 mb-2">{employee.position}</p>
                <div className=" text-gray-500">
                  <p>{employee.empId}</p>
                  <p>{employee.email}</p>
                  <p>{employee.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Employee Modal */}
      {isAddFormOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Employee</h2>
              <button onClick={() => setIsAddFormOpen(false)} className="text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>
            <form onSubmit={handleAddEmployee}>
              <div className="space-y-4">
                <div>
                  <label className="block  font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newEmployee.name}
                    onChange={handleInputChange}
                    className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block  font-medium text-gray-700 mb-1">Department</label>
                  <input
                    type="text"
                    name="department"
                    value={newEmployee.department}
                    onChange={handleInputChange}
                    className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block  font-medium text-gray-700 mb-1">Position</label>
                  <input
                    type="text"
                    name="position"
                    value={newEmployee.position}
                    onChange={handleInputChange}
                    className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block  font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={newEmployee.email}
                    onChange={handleInputChange}
                    className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block  font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={newEmployee.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsAddFormOpen(false)}
                  className="px-4 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Employee Detail Modal */}
      {selectedEmployee && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Employee Details</h2>
              <button onClick={() => setSelectedEmployee(null)} className="text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg">{selectedEmployee.name}</h3>
                <p className="text-gray-600">{selectedEmployee.department}</p>
                <p className="text-gray-700">{selectedEmployee.position}</p>
              </div>
              <div className="">
                <p><span className="font-medium">Employee ID:</span> {selectedEmployee.empId}</p>
                <p><span className="font-medium">Email:</span> {selectedEmployee.email}</p>
                <p><span className="font-medium">Phone:</span> {selectedEmployee.phone}</p>
                <p><span className="font-medium">Status:</span> {selectedEmployee.status}</p>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-200">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dir;