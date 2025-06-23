import React, { useState } from 'react';

const EmpCusFei = ({ activeTab, setActiveTab }) => {
  const [countries, setCountries] = useState([
    { country: 'Asset Islands', label: 'a', name: 'a' },
    { country: 'India', label: 'Permanent Account Number (RAR)', name: 'RAR' },
    { country: 'India', label: 'Aashuar', name: 'Aashuar,Number' },
    { country: 'India', label: 'IFSC Code', name: 'IFSC,Code' },
    { country: 'India', label: 'ESI Number', name: 'ESI' },
    { country: 'India', label: 'EPF Number', name: 'EPF' },
    { country: 'United States', label: 'Social Security Number', name: 'SSN' },
    { country: 'United States', label: 'State Employee Identification Number', name: 'SENN' },
    { country: 'United States', label: 'Federal Employer Identification Number', name: 'FEM' },
    { country: 'United Arab Emirates', label: 'Social Security Number', name: 'SSN' }
  ]);

  const [selectedCountry, setSelectedCountry] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [newField, setNewField] = useState({ country: '', label: '', name: '' });

  const [editIndex, setEditIndex] = useState(null);
  const [editField, setEditField] = useState({ country: '', label: '', name: '' });

  const handleAddField = () => {
    setCountries([...countries, newField]);
    setNewField({ country: '', label: '', name: '' });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditField({ ...countries[index] });
  };

  const handleUpdate = () => {
    const updated = [...countries];
    updated[editIndex] = editField;
    setCountries(updated);
    setEditIndex(null);
    setEditField({ country: '', label: '', name: '' });
  };

  const handleDelete = (index) => {
    const updated = countries.filter((_, i) => i !== index);
    setCountries(updated);
  };

  const filteredCountries =
    selectedCountry === 'All'
      ? countries
      : countries.filter((item) => item.country === selectedCountry);

  const uniqueCountries = ['All', ...new Set(countries.map((item) => item.country))];

  return (
    <div className="p-2 font-sans">
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => setActiveTab("Current")}
          className="text-blue-600 hover:text-blue-800 cursor-pointer"
        >
          &lt; Back
        </button>
      </div>

      <div className="mb-6">
        <h2 className="text-[18px] font-semibold mb-2">Select Country</h2>
        <div className="flex items-center justify-between gap-4">
  {/* Left: Country Dropdown */}
  <select
    value={selectedCountry}
    onChange={(e) => setSelectedCountry(e.target.value)}
    className="shadow-sm cursor-pointer border border-gray-300 focus:ring-0 focus:outline-none rounded px-3 py-1"
  >
    {uniqueCountries.map((country, index) => (
      <option key={index} value={country}>
        {country}
      </option>
    ))}
  </select>

  {/* Right: Add Button */}
  <button
    onClick={() => setShowForm(true)}
    className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none  text-black px-3.5 py-2 rounded-full hover:bg-gray-200 cursor-pointer"
    disabled={editIndex !== null}
  >
    +
  </button>
</div>

      </div>

      <div className="overflow-x-auto text-[15px]">
        <table className="min-w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 px-4 py-2 text-left">Country Name</th>
              <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 px-4 py-2 text-left">Property Label</th>
              <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 px-4 py-2 text-left">Property Name</th>
              <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCountries.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {editIndex === index ? (
                  <>
                    <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">
                      <input
                        type="text"
                        value={editField.country}
                        onChange={(e) => setEditField({ ...editField, country: e.target.value })}
                        className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-2 py-1 rounded"
                      />
                    </td>
                    <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">
                      <input
                        type="text"
                        value={editField.label}
                        onChange={(e) => setEditField({ ...editField, label: e.target.value })}
                        className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-2 py-1 rounded"
                      />
                    </td>
                    <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">
                      <input
                        type="text"
                        value={editField.name}
                        onChange={(e) => setEditField({ ...editField, name: e.target.value })}
                        className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-2 py-1 rounded"
                      />
                    </td>
                    <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">
                      <button
                        className="text-green-600 hover:text-green-800 mr-2"
                        onClick={handleUpdate}
                      >
                        Save
                      </button>
                      <button
                        className="text-gray-600 hover:text-gray-800"
                        onClick={() => setEditIndex(null)}
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 px-4 py-2">{item.country}</td>
                    <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 px-4 py-2">{item.label}</td>
                    <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 px-4 py-2">{item.name}</td>
                    <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 px-4 py-2">
                      <button
                        className="text-blue-600 hover:text-blue-800 mr-2 cursor-pointer "
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800 cursor-pointer"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New Field</h2>
            <div className="space-y-4 ">
              <div className=''>
                <label className="block text-sm font-medium mb-1">Country</label>
                <select
                  value={newField.country}
                  onChange={(e) => setNewField({ ...newField, country: e.target.value })}
                  className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded px-3 py-1"
                >
                  <option value="">Select Country</option>
                  {uniqueCountries
                    .filter((c) => c !== 'All')
                    .map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Property Label</label>
                <input
                  type="text"
                  value={newField.label}
                  onChange={(e) => setNewField({ ...newField, label: e.target.value })}
                  className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded px-3 py-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Property Name</label>
                <input
                  type="text"
                  value={newField.name}
                  onChange={(e) => setNewField({ ...newField, name: e.target.value })}
                  className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded px-3 py-1"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 cursor-pointer shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-none cursor-pointer hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleAddField}
                className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-none cursor-pointer hover:bg-blue-700"
                disabled={!newField.country || !newField.label || !newField.name}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmpCusFei;
