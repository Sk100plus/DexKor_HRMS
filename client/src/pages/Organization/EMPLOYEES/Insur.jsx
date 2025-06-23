import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { FaPlus, FaEllipsisV } from 'react-icons/fa';

const healthData = [
  {
    name: 'Healthy Care Insurance',
    provider: 'Healthy I-Care',
    description: 'Healthy I-Care Insurance',
    createdBy: 'Richard Samuel',
  },
  {
    name: 'WellnessNet Assurance',
    provider: 'WellnessNet Global Assurances',
    description: 'WellnessNet Global Assurances',
    createdBy: 'Richard Samuel',
  },
  {
    name: 'Healthy Care Insurance',
    provider: 'Healthy I-Care',
    description: 'Healthy I-Care Insurance',
    createdBy: 'Richard Samuel',
  },
  {
    name: 'WellnessNet Assurance',
    provider: 'WellnessNet Global Assurances',
    description: 'WellnessNet Global Assurances',
    createdBy: 'Richard Samuel',
  },
  {
    name: 'Healthy Care Insurance',
    provider: 'Healthy I-Care',
    description: 'Healthy I-Care Insurance',
    createdBy: 'Richard Samuel',
  },
  {
    name: 'WellnessNet Assurance',
    provider: 'WellnessNet Global Assurances',
    description: 'WellnessNet Global Assurances',
    createdBy: 'Richard Samuel',
  },

];

const Insur = () => {
  const [activeTab, setActiveTab] = useState('Health Insurance');
  const [data, setData] = useState(healthData);
  const [openActionIndex, setOpenActionIndex] = useState(null);

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    setOpenActionIndex(null);
  };

  const handleEdit = (index) => {
    alert(`Editing: ${data[index].name}`);
    setOpenActionIndex(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-[13px]">
      {/* Tabs */}
      <div className="flex space-x-4    pb-2 mb-4">
        {['Health Insurance', 'Other Insurances'].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setOpenActionIndex(null);
            }}
            className={`px-4 py-2 m-2 bg-gray cursor-pointer text-[12px]  my-2 ${
              activeTab === tab
                ? 'bg-gray-500 text-white   '
                : ' text-gray-500 hover:text-slate-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Card container */}
      <div className="bg-white shadow rounded-lg p-4">
        {/* Header Actions */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[15px] font-semibold text-slate-800">{activeTab}</h2>
          <div className="flex space-x-2">
          <button className="text-gray-500 rounded-full  p-3 bg-gray-300 hover:bg-gray-400 cursor-pointer  hover:text-black">
              <FaPlus size={15} className="text-gray-700 hover:text-black" title="Download" />
              </button>
              <button className="text-gray-500 rounded-full  p-3 bg-gray-300 hover:bg-gray-400 cursor-pointer  hover:text-black">
              <FiDownload size={15} className="text-gray-700 hover:text-black" title="Download" />
              </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-auto">
          <table className="min-w-full text-left text-[13px]">
            <thead className="bg-slate-100 text-slate-700 text-[13px]">
              <tr>
                {activeTab === 'Health Insurance' ? (
                  <>
                    <th className="p-3">Insurance Name</th>
                    <th className="p-3">Provider</th>
                    <th className="p-3">Description</th>
                    <th className="p-3">Document</th>
                    <th className="p-3">Created By</th>
                    <th className="p-3">Modified By</th>
                    <th className="p-3">Action</th>
                  </>
                ) : (
                  <>
                    <th className="p-3">Insurance Name</th>
                    <th className="p-3">Insurer</th>
                    <th className="p-3">Insured Value</th>
                    <th className="p-3">Start Date</th>
                    <th className="p-3">End Date</th>
                    <th className="p-3">Created By</th>
                    <th className="p-3">Modified By</th>
                    <th className="p-3">Action</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {activeTab === 'Health Insurance' && data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index} className="text-[13px] border border-gray-300 rounded-lg focus:ring-0 focus:outline-none   hover:bg-gray-50 relative">
                    <td className="p-3 text-blue-600 cursor-pointer">{item.name}</td>
                    <td className="p-3">{item.provider}</td>
                    <td className="p-3">{item.description}</td>
                    <td className="p-3 text-center text-gray-400">--</td>
                    <td className="p-3">{item.createdBy}</td>
                    <td className="p-3 text-center text-gray-400">--</td>
                    <td className="p-3 relative">
                      <button
                        onClick={() =>
                          setOpenActionIndex(openActionIndex === index ? null : index)
                        }
                        className="text-gray-600 hover:text-black"
                      >
                        <FaEllipsisV />
                      </button>
                      {openActionIndex === index && (
                        <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-300 rounded-lg focus:ring-0 focus:outline-none  rounded shadow z-20 text-[13px]">
                          <button
                            onClick={() => handleEdit(index)}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                          >
                            ✏️ Edit
                          </button>
                          <button
                            onClick={() => handleDelete(index)}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                          >
                            🗑️ Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={activeTab === 'Health Insurance' ? 7 : 8}
                    className="text-center p-12 text-gray-500"
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src="https://img.icons8.com/ios-filled/50/000000/search--v1.png"
                        alt="no data"
                        className="mb-2 opacity-40 w-8"
                      />
                      <span>No Result Found..!</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Insur;
