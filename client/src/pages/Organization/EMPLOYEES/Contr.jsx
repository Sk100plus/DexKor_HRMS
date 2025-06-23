import React, { useState } from 'react';
import { FaEllipsisV, FaPlus } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const contractData = [
  { name: 'Temporary Employment Contract', description: '-' },
  { name: 'Permanent Employment Contract', description: '-' },
  { name: 'Freelance Contract', description: '-' },
];

const employeeContracts = {
  'Temporary Employment Contract': [], // Add employee data if needed
};

const Contr = () => {
  const [selectedContract, setSelectedContract] = useState(null);
  const [actionIndex, setActionIndex] = useState(null);

  return (
    <div className="p-4 text-[13px]">
      {!selectedContract ? (
        <>
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[15px] font-semibold">Organization Contracts</h2>
            <div className="flex gap-2">
            <button className="text-gray-500 rounded-full  p-3 bg-gray-300 hover:bg-gray-400 cursor-pointer  hover:text-black">
              <FaPlus size={15} className="text-gray-700 hover:text-black" title="Download" />
              </button>
              <button className="text-gray-500 rounded-full  p-3 bg-gray-300 hover:bg-gray-400 cursor-pointer  hover:text-black">
              <FiDownload size={15} className="text-gray-700 hover:text-black" title="Download" />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-auto border border-gray-300 rounded-lg focus:ring-0 focus:outline-none  rounded shadow-sm">
            <table className="min-w-full text-left">
              <thead className="bg-gray-100 text-[13px]">
                <tr>
                  <th className="p-3">Contract Name</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contractData.map((contract, index) => (
                  <tr key={index} className="border border-gray-300 rounded-lg focus:ring-0 focus:outline-none   hover:bg-gray-50">
                    <td className="p-3 text-blue-600 cursor-pointer" onClick={() => setSelectedContract(contract.name)}>
                      {contract.name}
                    </td>
                    <td className="p-3">{contract.description}</td>
                    <td className="p-3 relative">
                      <button onClick={() => setActionIndex(actionIndex === index ? null : index)} className='cursor-pointer'>
                        <FaEllipsisV />
                      </button>
                      {actionIndex === index && (
                        <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-300 rounded-lg focus:ring-0 focus:outline-none  rounded shadow z-10">
                          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Edit</button>
                          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600">Delete</button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <div className="mb-4">
            <h2 className="text-[15px] font-semibold">{selectedContract} Contract</h2>
          </div>
          <div className="overflow-auto border border-gray-300 rounded-lg focus:ring-0 focus:outline-none  rounded shadow-sm">
            <table className="min-w-full text-left">
              <thead className="bg-gray-100 text-[13px]">
                <tr>
                  <th className="p-3">Employee</th>
                  <th className="p-3">Contract Name</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Duration Of Employement</th>
                  <th className="p-3">Documents</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employeeContracts[selectedContract]?.length ? (
                  employeeContracts[selectedContract].map((emp, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="p-3">{emp.employee}</td>
                      <td className="p-3">{emp.contract}</td>
                      <td className="p-3">{emp.status}</td>
                      <td className="p-3">{emp.duration}</td>
                      <td className="p-3">{emp.documents}</td>
                      <td className="p-3">...</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center p-8 text-gray-500">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://img.icons8.com/ios-filled/50/000000/search--v1.png"
                          alt="no data"
                          className="mb-2 opacity-50"
                        />
                        <div>No Result Found..!</div>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Contr;
