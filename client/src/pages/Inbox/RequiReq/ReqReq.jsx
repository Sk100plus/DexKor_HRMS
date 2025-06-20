import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const ReqReq = () => {
  // Form state
  const [formData, setFormData] = useState({
    department: '',
    legalEntry: '',
    jobType: '',
    project: '',
    registrationFor: '',
    status: 'All'
  });

  // Sample data for requisition requests
  const [requisitions, setRequisitions] = useState([
    {
      id: 1,
      department: 'HR',
      legalEntry: 'Corporate',
      jobType: 'Safety job type',
      project: 'Questionnaire',
      registrationFor: 'Department',
      status: 'Pending'
    },
    {
      id: 2,
      department: 'Finance',
      legalEntry: 'LLC',
      jobType: 'No',
      project: 'Acquisition',
      registrationFor: 'Budget',
      status: 'Approved'
    }
  ]);

  // Filter state
  const [filter, setFilter] = useState({
    department: 'Select department',
    legalEntry: 'Select legal entity',
    status: 'All'
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.department || !formData.legalEntry) {
      alert('Please fill required fields');
      return;
    }
    
    const newRequisition = {
      id: requisitions.length + 1,
      ...formData,
      status: 'Pending' // Default status for new requests
    };
    
    setRequisitions([...requisitions, newRequisition]);
    // Reset form
    setFormData({
      department: '',
      legalEntry: '',
      jobType: '',
      project: '',
      registrationFor: '',
      status: 'All'
    });
  };

  // Apply filters
  const filteredRequisitions = requisitions.filter(req => {
    if (filter.department !== 'Select department' && req.department !== filter.department) {
      return false;
    }
    if (filter.legalEntry !== 'Select legal entity' && req.legalEntry !== filter.legalEntry) {
      return false;
    }
    if (filter.status !== 'All' && req.status !== filter.status) {
      return false;
    }
    return true;
  });

  // Options for dropdowns
  const departments = ['HR', 'Finance', 'IT', 'Operations'];
  const legalEntries = ['Corporate', 'LLC', 'Partnership', 'Sole Proprietor'];
  const jobTypes = ['Safety job type', 'No'];
  const projects = ['Questionnaire', 'Acquisition'];
  const registrationFor = ['Department', 'Budget'];
  const statuses = ['Pending', 'Approved', 'Rejected'];

  return (
    <div className="p-6 text-[13px]">
    

      <h2 className=" font-semibold mb-4">Requisition Requests</h2>

    
      {/* Form to add new requisition */}
      <form onSubmit={handleSubmit} className=" w-1/2 border-none mb-8 p-4 shadow-sm   focus:ring-0 focus:outline-none rounded-lg bg-gray-50">
        <h3 className="text-[15px] font-medium mb-4">Add New Requisition</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-medium mb-1">Department *</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
              required
            >
              <option value="">Select department</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block  font-medium mb-1">Legal Entry *</label>
            <select
              name="legalEntry"
              value={formData.legalEntry}
              onChange={handleInputChange}
              className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
              required
            >
              <option value="">Select legal entity</option>
              {legalEntries.map(entry => (
                <option key={entry} value={entry}>{entry}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block  font-medium mb-1">Job Type</label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleInputChange}
              className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
            >
              <option value="">Select job type</option>
              {jobTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block  font-medium mb-1">Project</label>
            <select
              name="project"
              value={formData.project}
              onChange={handleInputChange}
              className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
            >
              <option value="">Select project</option>
              {projects.map(project => (
                <option key={project} value={project}>{project}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block  font-medium mb-1">Registration For</label>
            <select
              name="registrationFor"
              value={formData.registrationFor}
              onChange={handleInputChange}
              className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
            >
              <option value="">Select registration</option>
              {registrationFor.map(reg => (
                <option key={reg} value={reg}>{reg}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className=" cursor-pointer px-3 py-2 hover:bg-blue-600 border  hover:text-white rounded-none "
        >
          Submit 
        </button>
      </form>

      {/* Requisitions table */}
      {filteredRequisitions.length > 0 ? (
        <table className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-gray-300 text-sm mb-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Department</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Legal Entry</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Job Type</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Project</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Registration For</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Status</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequisitions.map(req => (
              <tr key={req.id}>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{req.department}</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{req.legalEntry}</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{req.jobType}</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{req.project}</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{req.registrationFor}</td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    req.status === 'Approved' ? 'bg-green-100 text-green-800' :
                    req.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {req.status}
                  </span>
                </td>
                <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
                  <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <p className="mb-4">No Result Found...</p>
          <div className="text-sm">
            <p>Time per page: 10</p>
            <p>0 of 0</p>
          </div>
        </div>
      )}

 
    </div>
  );
};

export default ReqReq;