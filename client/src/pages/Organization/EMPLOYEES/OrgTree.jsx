import React, { useState } from 'react';

const OrgTree = ({activeTab, setActiveTab}) => {
  const [expandedNodes, setExpandedNodes] = useState({
    executive: true,
    team1: true,
    team2: true
  });

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const toggleNode = (node) => {
    setExpandedNodes(prev => ({
      ...prev,
      [node]: !prev[node]
    }));
  };

  const employees = {
    executive: [
      {
        id: 1,
        name: "Richard Samuel",
        position: "Executive",
        empId: "EMP-20240425-001",
        department: "Executive Office",
        email: "richard@jalmau.com",
        phone: "+95858881108",
        location: "New York"
      }
    ],
    team1: [
      {
        id: 2,
        name: "Jaime Lannister",
        position: "Senior Software Engineer",
        empId: "EMP-202408281221",
        department: "Information Technology Department",
        email: "jaime.lannister@rapiddata.com",
        phone: "+91 8939131074",
        location: "Chennai"
      },
      {
        id: 3,
        name: "Jorah Mormont",
        position: "Software Engineer",
        empId: "EMP-202405283844",
        department: "Information Technology Department",
        email: "jorah.mormont@rapiddata.com",
        phone: "+91 9876543210",
        location: "Bangalore"
      },
      {
        id: 4,
        name: "Benjen Stark",
        position: "Software Engineer",
        empId: "EMP-202405287853",
        department: "Information Technology Department",
        email: "benjen.stark@rapiddata.com",
        phone: "To be updated",
        location: "Hyderabad"
      }
    ],
    team2: [
      {
        id: 5,
        name: "Lyanna Stark",
        position: "Software Engineer",
        empId: "EMP-202405287321",
        department: "Information Technology Department",
        email: "lyanna.stark@rapiddata.com",
        phone: "+91 8765432109",
        location: "Mumbai"
      },
      {
        id: 6,
        name: "Davos Seaworth",
        position: "Software Engineer",
        empId: "EMP-202405281421",
        department: "Information Technology Department",
        email: "davos.seaworth@rapiddata.com",
        phone: "To be updated",
        location: "Pune"
      },
      {
        id: 7,
        name: "Elena Martell",
        position: "Software Engineer",
        empId: "EMP-202405287858",
        department: "Information Technology Department",
        email: "elena.martell@rapiddata.com",
        phone: "+91 7654321098",
        location: "Delhi"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="flex flex-col items-center">
        <div className="relative mb-8">
          <div className="w-64 h-20 bg-white rounded-lg shadow-md flex flex-col items-center justify-center border-2 border-blue-500 relative">
            <h3 className="font-bold text-lg">{employees.executive[0].name}</h3>
            <p className="text-gray-600">{employees.executive[0].position}</p>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
              <button 
                onClick={() => toggleNode('executive')}
                className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center"
              >
                {expandedNodes.executive ? '-' : '+'}
              </button>
            </div>
          </div>
        </div>

        {/* Team Members (only shown when executive is expanded) */}
        {expandedNodes.executive && (
          <div className="flex space-x-12">
            {/* Team 1 */}
            <div className="flex flex-col items-center">
              <div className="relative mb-8">
                <div className="w-56 h-16 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center border border-gray-300 relative">
                  <p className="font-medium">zh 2</p>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <button 
                      onClick={() => toggleNode('team1')}
                      className="w-5 h-5 bg-blue-400 text-white rounded-full flex items-center justify-center text-sm"
                    >
                      {expandedNodes.team1 ? '-' : '+'}
                    </button>
                  </div>
                </div>
                
                {expandedNodes.team1 && (
                  <>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-300"></div>
                    <div className="mt-8 space-y-6">
                      {employees.team1.map((employee) => (
                        <div 
                          key={employee.id}
                          onClick={() => setSelectedEmployee(employee)}
                          className="w-48 h-14 bg-white rounded shadow-sm flex flex-col items-center justify-center border border-gray-200 cursor-pointer hover:bg-blue-50"
                        >
                          <p className="font-medium text-sm">{employee.name}</p>
                          <p className="text-xs text-gray-500">{employee.position}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Team 2 */}
            <div className="flex flex-col items-center">
              <div className="relative mb-8">
                <div className="w-56 h-16 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center border border-gray-300 relative">
                  <p className="font-medium">zh 2</p>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <button 
                      onClick={() => toggleNode('team2')}
                      className="w-5 h-5 bg-blue-400 text-white rounded-full flex items-center justify-center text-sm"
                    >
                      {expandedNodes.team2 ? '-' : '+'}
                    </button>
                  </div>
                </div>
                
                {expandedNodes.team2 && (
                  <>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-300"></div>
                    <div className="mt-8 space-y-6">
                      {employees.team2.map((employee) => (
                        <div 
                          key={employee.id}
                          onClick={() => setSelectedEmployee(employee)}
                          className="w-48 h-14 bg-white rounded shadow-sm flex flex-col items-center justify-center border border-gray-200 cursor-pointer hover:bg-blue-50"
                        >
                          <p className="font-medium text-sm">{employee.name}</p>
                          <p className="text-xs text-gray-500">{employee.position}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Employee Detail Modal */}
      {selectedEmployee && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{selectedEmployee.name}</h2>
              <button 
                onClick={() => setSelectedEmployee(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-600">{selectedEmployee.position}</p>
            </div>
            
            <div className="space-y-3">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Employee ID</h3>
                <p>{selectedEmployee.empId}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Department</h3>
                <p>{selectedEmployee.department}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <p>{selectedEmployee.email}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Mobile Number</h3>
                <p>{selectedEmployee.phone}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Location</h3>
                <p>{selectedEmployee.location}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrgTree;