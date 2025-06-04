import React from 'react';
import { useParams } from 'react-router-dom';
import EmployeeDet from './EmployeeDet';

const EmployeeDetWrapper = ({ employees }) => {
  const { id } = useParams();
  const selectedEmployee = employees.find(emp => emp.id.toString() === id);

  return <EmployeeDet selectedEmployee={selectedEmployee} />;
};

export default EmployeeDetWrapper;
