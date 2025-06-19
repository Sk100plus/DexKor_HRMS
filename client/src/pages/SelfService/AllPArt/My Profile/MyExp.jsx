import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus } from 'lucide-react';
import bimage from './bookimage.jpg';


const MyExp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [formData, setFormData] = useState({
    organization: '',
    designation: '',
    startYear: '',
    endYear: '',
    description: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExperiences([...experiences, formData]);
    setFormData({
      organization: '',
      designation: '',
      startYear: '',
      endYear: '',
      description: '',
      file: null,
    });
    setIsOpen(false);
  };

  return (
    <div className="p-4 select-none">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">My Experience</h2>
        <Button onClick={() => setIsOpen(true)} className='bg-blue-700 text-white cursor-pointer hover:bg-blue-800'>
          <Plus className="mr-2 h-4 w-4" /> Add
        </Button>
      </div>

      <div className="overflow-auto shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
      <table className="min-w-full text-sm font-sans">

          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-2 text-left ">Organization</th>
              <th className="px-4 py-2 text-left">Designation</th>
              <th className="px-4 py-2 text-left">Period</th>
              <th className="px-4 py-2 text-left">Experience</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Experience Certificate</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {experiences.length > 0 ? (
              experiences.map((exp, idx) => (
                <tr key={idx} className="border-t">
                  <td className="px-4 py-2">{exp.organization}</td>
                  <td className="px-4 py-2">{exp.designation}</td>
                  <td className="px-4 py-2">
                    {exp.startYear} - {exp.endYear}
                  </td>
                  <td className="px-4 py-2">{/* Optional computed duration */}</td>
                  <td className="px-4 py-2">{exp.description}</td>
                  <td className="px-4 py-2">
                    {exp.file && <a href={URL.createObjectURL(exp.file)} target="_blank">View</a>}
                  </td>
                  <td className="px-4 py-2 text-red-500 cursor-pointer" onClick={() => {
                    const newData = experiences.filter((_, i) => i !== idx);
                    setExperiences(newData);
                  }}>Delete</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 py-8">
                  <div className="flex flex-col justify-center items-center">
                    <img src={bimage} alt="no result" className="w-24 mb-2" />
                    No Result Found..!
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="bg-white p-6 w-[600px] rounded shadow-lg">
            <Dialog.Title className="text-lg font-semibold mb-4">Add Experience</Dialog.Title>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input className='rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none' name="organization" placeholder="Organization" value={formData.organization} onChange={handleChange} required />
                <Input className='rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none' name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input className='rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none' type="text" name="startYear" placeholder="Start Year" value={formData.startYear} onChange={handleChange} required />
                <Input className='rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none' type="text" name="endYear" placeholder="End Year" value={formData.endYear} onChange={handleChange} required />
              </div>
              <Textarea className='rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none' name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
              <Input className='rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none' type="file" name="file" accept="image/*,application/pdf,.doc,.docx,.xlsx" onChange={handleChange} required />
              <p className="text-xs text-blue-600">Accepted formats PNG, JPEG, PDF, DOCX, XLSX and file must be less than 5MB.</p>
              <div className="flex justify-end gap-2">
                <Button variant="outline" type="button" onClick={() => setIsOpen(false)} className='rounded-none  shadow-sm border border-gray-300  focus:outline-none cursor-pointer hover:bg-gray-200'>Close</Button>
                <Button
  type="submit"
  className="rounded-none cursor-pointer px-4 py-2 shadow-sm border border-gray-300 bg-white text-black hover:bg-blue-800 hover:text-white transition-colors duration-200"
>Submit</Button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default MyExp;
