import React, { useState } from 'react';
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EmpProfInfo = () => {
  const [formData, setFormData] = useState({
    employeeId: '',
    userName: '',
    employeeType: '',
    email: '',
    department: '',
    designation: '',
    workingDays: '',
    joiningDate: '',
    location: '',
  });

 

 


  return (
    <div>
    <CardContent>
  <div className="grid grid-cols-1 gap-6 px-4 py-6 text-sm text-gray-700">
    {/* Row 1 */}
    <div className="flex gap-4">
      <div className="w-full">
        <p className="text-gray-400">Employee ID</p>
        <p className="font-medium">{formData.employeeId || '89899999'}</p>
        <hr className='opacity-20'/>
      </div>
     
      <div className="w-full">
        <p className="text-gray-400">User Name</p>
        <p className="font-medium">{formData.userName || 'Suraj Kasaudhan'}</p>
        <hr className='opacity-20'/>
      </div>
    </div>

    {/* Row 2 */}
    <div className="flex gap-4">
      <div className="w-full">
        <p className="text-gray-400">Employee Type</p>
        <p className="font-medium">{formData.employeeType || 'Office'}</p>
        <hr className='opacity-20'/>
      </div>
      <div className="w-full">
        <p className="text-gray-400">Email Address</p>
        <p className="font-medium">{formData.email || 'Gorakhpur'}</p>
        <hr className='opacity-20'/>
      </div>
    </div>

    {/* Row 3 */}
    <div className="flex gap-4">
      <div className="w-full">
        <p className="text-gray-400">Department</p>
        <p className="font-medium">{formData.department || 'Designer'}</p>
        <hr className='opacity-20'/>
      </div>
      <div className="w-full">
        <p className="text-gray-400">Designation</p>
        <p className="font-medium">{formData.designation || 'Project Manager'}</p>
        <hr className='opacity-20'/>
      </div>
    </div>

    {/* Row 4 */}
    <div className="flex gap-4">
      <div className="w-full">
        <p className="text-gray-400">Working Days</p>
        <p className="font-medium">{formData.workingDays || '5 days'}</p>
        <hr className='opacity-20'/>
      </div>
      <div className="w-full">
        <p className="text-gray-400">Joining Date</p>
        <p className="font-medium">{formData.joiningDate || '10-07-2025'}</p>
        <hr className='opacity-20'/>
      </div>
    </div>

    {/* Location */}
    <div className="w-full">
      <p className="text-gray-400">Office Location</p>
      <p className="font-medium">{formData.location || 'Noida'}</p>
      <hr className='opacity-20'/>
    </div>

   
  </div>
</CardContent>

    </div>
  );
};

export default EmpProfInfo;
