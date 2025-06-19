import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Profile from '../Dashboard/Profile';
import Navbar from '../Navbar/Navbar';

const Jobs = () => {
  const [jobs, setJobs] = useState([
    { title: 'UI/UX Designer', dept: 'Design', type: 'Remote', status: 'Active', location: 'California, USA', salary: 3600 },
    { title: 'Sr. UX Researcher', dept: 'Design', type: 'Full Time', status: 'Inactive', location: 'New York, USA', salary: 1500 },
    { title: 'BDM', dept: 'Sales', type: 'Full Time', status: 'Completed', location: 'New York, USA', salary: 1000 },
    { title: 'Python Developer', dept: 'Developer', type: 'Full Time', status: 'Inactive', location: 'New York, USA', salary: 1500 },
    { title: 'React JS', dept: 'Developer', type: 'Full Time', status: 'Active', location: 'California, USA', salary: 2000 },
    { title: 'Sr. UX Researcher', dept: 'Design', type: 'Full Time', status: 'Inactive', location: 'New York, USA', salary: 1500 },
    { title: 'BDM', dept: 'Sales', type: 'Full Time', status: 'Completed', location: 'New York, USA', salary: 1000 },
    { title: 'Python Developer', dept: 'Developer', type: 'Full Time', status: 'Inactive', location: 'New York, USA', salary: 1500 },
    { title: 'React JS', dept: 'Developer', type: 'Full Time', status: 'Active', location: 'California, USA', salary: 2000 }
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    dept: '',
    title: '',
    location: '',
    salary: '',
    type: 'Office'
  });

  const handleAddJob = () => {
    setJobs([...jobs, { ...form, status: 'Active' }]);
    setForm({ dept: '', title: '', location: '', salary: '', type: 'Office' });
    setShowForm(false);
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.dept.toLowerCase().includes(search.toLowerCase())
  );

  const groupedJobs = {
    Active: filteredJobs.filter(job => job.status === 'Active'),
    Inactive: filteredJobs.filter(job => job.status === 'Inactive'),
    Completed: filteredJobs.filter(job => job.status === 'Completed')
  };

  return (
<div className='  font-sans select-none '>
<div className='  shadow-lg'>
  <Profile/>

  </div>
 
<div className="  bg-white shadow-lg rounded-xl border-gray-600 w-full flex">
 <div>
 <Navbar/>
 </div>
 <div className='w-full px-4 my-6 mx-5'>
 <div className="flex justify-between items-center mb-8">
        <Input
          placeholder="Search Job"
          className=" w-1/3 pl-9  rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg flex items-center cursor-pointer"onClick={() => setShowForm(true)} >
Add New Job</Button>
      </div>

      {/* Job Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.keys(groupedJobs).map(status => (
          <div key={status} className='bg-white shadow-lg rounded-xl border-gray-600'>
            <h2 className="font-semibold text-lg mb-2">{status} Jobs</h2>
            {groupedJobs[status].map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow p-4 m-4">
                <div className="text-md font-medium">{job.title}</div>
                <div className="text-sm text-gray-500">{job.dept} • {job.type}</div>
                <div className="text-sm text-gray-600">{job.location}</div>
                <div className="text-blue-600 font-semibold">${job.salary}/Month</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Add Job Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-96 space-y-4">
            <h3 className="text-lg font-semibold">Add New Job</h3>
            <select className="w-full border p-2 rounded" value={form.dept} onChange={e => setForm({ ...form, dept: e.target.value })}>
              <option value="" className=''>Select Department</option>
              <option value="Design">Design</option>
              <option value="Developer">Developer</option>
              <option value="Sales">Sales</option>
              <option value="HR">HR</option>
            </select>
            <input
              type="text"
              placeholder="Enter Job Title"
              className="w-full border p-2 rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Enter Location"
              className="w-full border p-2 rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
              value={form.location}
              onChange={e => setForm({ ...form, location: e.target.value })}
            />
            <input
              
              placeholder="Enter Amount"
              className="w-full border p-2 rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
              value={form.salary}
              onChange={e => setForm({ ...form, salary: e.target.value })}
            />
            <div className="flex gap-4">
              <label className="flex items-center">
                <input type="radio" name="type" value="Office" checked={form.type === 'Office'} onChange={e => setForm({ ...form, type: e.target.value })} />
                <span className="ml-2">Office</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="type" value="Remote" checked={form.type === 'Remote'} onChange={e => setForm({ ...form, type: e.target.value })} />
                <span className="ml-2">Work from Home</span>
              </label>
            </div>
            <div className="flex justify-end gap-2">
              <Button  className="shadow-lg rounded-xl border-gray-900 cursor-pointer hover:bg-gray-100 " onClick={() => setShowForm(false)}>Cancel</Button>
              <Button onClick={handleAddJob} className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg flex items-center cursor-pointer">Add</Button>
            </div>
          </div>
        </div>
      )}
 </div>
    
    </div>
</div>
   
  );
};

export default Jobs;
