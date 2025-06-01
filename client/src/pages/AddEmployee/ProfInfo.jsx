import React, { useState } from 'react';
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProfInfo = ({ handleNext2, handleCancel2 }) => {
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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // clear error
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) newErrors[key] = 'This field is required';
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    if (validate()) {
      handleNext2(); // Proceed if validation passes
    }
  };

  return (
    <div>
      <CardContent>
        <form className="grid grid-cols-1 gap-6 px-4 py-6">
          {/* Row 1 */}
          <div className="flex gap-4">
            <div className="w-full">
              <Input
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                placeholder="Employee Id"
                className="w-full"
              />
              {errors.employeeId && <p className="text-red-500 text-sm">{errors.employeeId}</p>}
            </div>
            <div className="w-full">
              <Input
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="User Name"
              />
              {errors.userName && <p className="text-red-500 text-sm">{errors.userName}</p>}
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex gap-4">
            <div className="w-full">
              <select
                name="employeeType"
                value={formData.employeeType}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="" disabled>Select Employee Type</option>
                <option value="design">Design</option>
                <option value="php">PHP Developer</option>
              </select>
              {errors.employeeType && <p className="text-red-500 text-sm">{errors.employeeType}</p>}
            </div>
            <div className="w-full">
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex gap-4">
            <div className="w-full">
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="">Select Department</option>
                <option value="hr">HR</option>
                <option value="tech">Tech</option>
              </select>
              {errors.department && <p className="text-red-500 text-sm">{errors.department}</p>}
            </div>
            <div className="w-full">
              <Input
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Enter Designation"
              />
              {errors.designation && <p className="text-red-500 text-sm">{errors.designation}</p>}
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex gap-4">
            <div className="w-full">
              <select
                name="workingDays"
                value={formData.workingDays}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="">Select Working Days</option>
                <option value="5">5 Days</option>
                <option value="6">6 Days</option>
              </select>
              {errors.workingDays && <p className="text-red-500 text-sm">{errors.workingDays}</p>}
            </div>
            <div className="w-full">
              <Input
                type="date"
                name="joiningDate"
                value={formData.joiningDate}
                onChange={handleChange}
              />
              {errors.joiningDate && <p className="text-red-500 text-sm">{errors.joiningDate}</p>}
            </div>
          </div>

          {/* Location */}
          <div className="w-full">
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            >
              <option value="">Select Office Location</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
            </select>
            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-4">
            <Button
              variant="outline"
              className="bg-white text-black hover:bg-gray-200 cursor-pointer"
              onClick={handleCancel2}
            >
              Cancel
            </Button>
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
              onClick={handleNextClick}
            >
              Next
            </Button>
          </div>
        </form>
      </CardContent>
    </div>
  );
};

export default ProfInfo;
