import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeList = ({ employees }) => {
  const navigate = useNavigate();

  const handleClick = (employee) => {
    navigate(`/employee/${employee.id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {employees.map(emp => (
        <div
          key={emp.id}
          className="bg-white shadow p-4 rounded hover:bg-gray-100 cursor-pointer"
          onClick={() => handleClick(emp)}
        >
          <h3 className="text-lg font-semibold">{emp.name}</h3>
          <p className="text-sm text-gray-600">{emp.role}</p>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
