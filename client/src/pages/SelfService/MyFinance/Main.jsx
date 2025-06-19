import React, { useState } from 'react';
import MySalary from './MySalary';
import Payslips from './Payslips';
import Reimburse from './Reimburse';
import Loan from './Loan';
import Cheques from './Cheques';
import USATax from './USATax';
import ProofOfInv from './ProofOfInv';
import SalAdv from './SalAdv';

// import MySalary from './MySalary.jsx'

const Main = () => {
  const [activeTab, setActiveTab] = useState('My Salary');

  const tabs = [
    'My Salary',
    'Payslips',
    'Reimbursements',
    'Loan',
    'Cheques',
    'USA Tax Forms',
    'Proof Of Investments',
    'Salary Advance',
  ];

 

  return (
    <div className="p-4 select-none">
      {/* Tab Navbar */}
      <div className="flex space-x-6 border-b border-gray-200 mb-4">
        {tabs.map((tab) => (
        <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`pb-2 text-[11px] cursor-pointer  border-b ${
          activeTab === tab
            ? 'border-blue-300 text-blue-800' // Light blue border when active
            : 'border-transparent text-gray-500 hover:text-black'
        }`}
      >
        {tab}
      </button>
      
        ))}
      </div>
      {activeTab=='My Salary'&&(
       <MySalary/>
      )}
 {activeTab=='Payslips'&&(
       <Payslips/>
      )}
       {activeTab=='Reimbursements'&&(
       <Reimburse/>
      )}
       {activeTab=='Loan'&&(
       <Loan/>
      )}
      {activeTab=='Cheques'&&(
        <Cheques/>
      )}
      {activeTab=='USA Tax Forms'&&(
        <USATax/>
      )}
      {activeTab=='Proof Of Investments'&&(
        <ProofOfInv/>
      )}
      {
        activeTab=='Salary Advance'&&(
          <SalAdv/>
        )
      }
      {/* Content */}
      {/* <div className="bg-white shadow rounded-lg">{renderTabContent()}</div> */}
    </div>
  );
};

export default Main;
