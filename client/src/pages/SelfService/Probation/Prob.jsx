import React, { useState } from 'react';
import RevFee from './RevFee';
import EmpFee from './EmpFee';

const Prob = () => {
  const [activeTab, setActiveTab] = useState('reviewer');

  return (
    <div className="p-6 text-[13px] select-none">
      {/* Tabs */}
      <div className="flex border-b mb-4 ">
        <button
          onClick={() => setActiveTab('reviewer')}
          className={`px-4 py-2 my-2 ${
            activeTab === 'reviewer' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
          } cursor-pointer`}
        >
          Reviewer Feedback
        </button>
        <button
          onClick={() => setActiveTab('employee')}
          className={`ml-4 px-4 py-2 my-2 ${
            activeTab === 'employee' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
          } cursor-pointer`}
        >
          Employee Feedback
        </button>
      </div>

      {/* Reviewer Tab Content */}
      {activeTab === 'reviewer' && (
       <RevFee/>
      )}

      {/* Employee Tab Content */}
      {activeTab === 'employee' && (
     <EmpFee/>
      )}
    </div>
  );
};

export default Prob;
