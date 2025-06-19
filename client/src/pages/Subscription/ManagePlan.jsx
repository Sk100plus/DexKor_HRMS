

import React, { useState } from 'react';
import { Search, Plus, List, Grid } from 'lucide-react'; // Make sure lucide-react is installed
import bimage from './bookimage.jpg'; // Replace with your actual image path
import Profile from '../Dashboard/Profile';
import Tickets from './Tickets';
import Invoices from './Invoices';

const ManagePlan = () => {
  const [currentPage, setCurrentPage] = useState("Manage-plan");


 


  return (
  <div className='p-0 m-0'>
    <div className=''>
    <Profile/>

    </div>
    <div className='flex min-h-screen'>
   
      {/* Sidebar */}
      <div className="w-20 bg-gray-700  text-white p-2 flex flex-col gap-2">
  <button
    onClick={() => setCurrentPage("Manage-plan")}
    className={`w-full py-2 rounded text-xs text-center ${
      currentPage === "Manage-plan" ? "bg-gray-600" : "hover:bg-gray-500"
    } cursor-pointer`}
  >
    Manage<br />Plan
  </button>

  <button
    onClick={() => setCurrentPage("Tickets")}
    className={`w-full py-2 rounded text-xs text-center ${
      currentPage === "Tickets" ? "bg-gray-600" : "hover:bg-gray-500"
    } cursor-pointer`}
  >
    Tickets
  </button>

  <button
    onClick={() => setCurrentPage("Invoices")}
    className={`w-full py-2 rounded text-xs text-center ${
      currentPage === "Invoices" ? "bg-gray-600" : "hover:bg-gray-500"
    } cursor-pointer`}
  >
    Invoices
  </button>
</div>


      {/* Main Content */}
      <div className="flex-1 p-6 mb-0 bg-gray-100 select-none  ">
      {currentPage === "Tickets" && (
  // <div className="flex flex-col items-center justify-start min-h-screen w-full bg-gray-100 p-10">
  //   <div className="w-full max-w-5xl bg-white shadow-md rounded-md p-6 min-h-[70vh]">
  //     <div className="flex items-center justify-between mb-6">
  //       <h2
  //         className="text-lg font-semibold text-gray-700 cursor-pointer"
  //         onClick={() => setShowForm(false)}
  //       >
  //         All Tickets
  //       </h2>
  //       <div className="flex items-center gap-2">
  //         <button className="flex items-center gap-1 px-3 py-2 border rounded hover:bg-gray-100 text-sm">
  //           <Search size={16} />
  //           Search
  //         </button>
  //         <button
  //           className="flex items-center gap-1 px-3 py-2 cursor-pointer shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded-sm hover:bg-gray-100 text-sm"
  //           onClick={() => setShowForm(true)}
  //         >
  //           <Plus size={16} />
  //           Add
  //         </button>
  //         <button className="p-2 hover:bg-gray-100 rounded">
  //           <List size={16} />
  //         </button>
  //         <button className="p-2 hover:bg-gray-100 rounded">
  //           <Grid size={16} />
  //         </button>
  //       </div>
  //     </div>

  //     {/* Form UI */}
  //     {showForm ? (
  //       <form onSubmit={handleSubmit} className="space-y-4">
  //         <div className="grid grid-cols-2 gap-4">
  //           <div>
  //             <label className="block text-sm font-medium cursor-pointer">Select Ticket Type *</label>
  //             <select
  //               required
  //               className="w-full border rounded px-2 py-1"
  //               value={formData.type}
  //               onChange={(e) => setFormData({ ...formData, type: e.target.value })}
  //             >
  //               <option value="">Select Type</option>
  //               <option value="IT">IT</option>
  //               <option value="HR">HR</option>
  //               <option value="Finance">Finance</option>
  //             </select>
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium">Reference Number</label>
  //             <input
  //               type="text"
  //               className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded-sm px-2 py-1"
  //               value={formData.reference}
  //               onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
  //             />
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium">Subject *</label>
  //             <input
  //               required
  //               type="text"
  //               className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded-sm  px-2 py-1"
  //               value={formData.subject}
  //               onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
  //             />
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium">Description *</label>
  //             <textarea
  //               required
  //               className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded-sm  px-2 py-1"
  //               rows="3"
  //               value={formData.description}
  //               onChange={(e) => setFormData({ ...formData, description: e.target.value })}
  //             />
  //           </div>
  //           <div className="col-span-2">
  //             <label className="block text-sm font-medium">Upload Documents *</label>
  //             <input
  //               type="file"
  //               className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded-sm  px-2 py-1 cursor-pointer"
  //               accept=".png,.jpeg,.jpg,.pdf,.docx,.xlsx"
  //               onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
  //             />
  //             <p className="text-xs text-blue-600 mt-1">
  //               Accepted formats PNG, JPEG, PDF, DOCX, XLSX and file must be less than 20MB.
  //             </p>
  //           </div>
  //         </div>
  //         <button
  //           type="submit"
  //           className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 cursor-pointer"
  //         >
  //           Submit
  //         </button>
  //       </form>
  //     ) : tickets.length === 0 ? (
  //       <div className="flex flex-col items-center justify-center h-[300px] text-gray-500">
  //         <img
  //           src={bimage}
  //           alt="No Result"
  //           className="w-28 h-28 mb-4 opacity-80"
  //         />
  //         <p className="text-lg">No Result Found..!</p>
  //       </div>
  //     ) : (
  //       <ul className="space-y-3">
  //         {tickets.map((ticket, idx) => (
  //           <li key={idx} className="p-4 border rounded bg-gray-50">
  //             <strong>{ticket.subject}</strong> — {ticket.type} <br />
  //             <span className="text-xs text-gray-500">Ref: {ticket.reference}</span>
  //             <p className="text-sm mt-1">{ticket.description}</p>
  //           </li>
  //         ))}
  //       </ul>
  //     )}
  //   </div>
  // </div>
  <Tickets/>
)}

            {currentPage === "Manage-plan" && (
  <div className="flex flex-col gap-4 p-8 w-full bg-gray-100">
    {/* Alert Messages */}
    <div className="bg-blue-100 border border-blue-300 text-blue-800 px-4 py-3 rounded">
      Time’s ticking! Your free trial ends soon. Upgrade to keep the benefits flowing.
    </div>
    <div className="bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded">
      <strong className="font-semibold">Your <span className="font-bold">RapidHR ATS</span> account has been suspended.</strong> To regain access please subscribe now.
    </div>

    {/* Plan Card 1 */}
    <div className="bg-white rounded shadow p-6">
      <div className="flex justify-between mb-4">
        <h3 className="text-md font-semibold text-gray-700">RapidHR Plan Summary</h3>
        <button className="bg-gray-900 text-white px-4 py-2 rounded text-sm">Renew Plan</button>
      </div>
      <p><strong>Current Plan:</strong> Free Trial</p>
      <p className="mb-3"><strong>Next Billing Date:</strong> 10 Jun, 2025</p>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-700">Users</p>
        <button className="text-blue-600 text-sm">Upgrade</button>
      </div>
      <div className="w-full bg-gray-200 rounded h-2 mt-2 mb-1">
        <div className="bg-yellow-500 h-2 rounded" style={{ width: '52%' }}></div>
      </div>
      <p className="text-sm text-gray-600">13 (52%) of 25</p>
    </div>

    {/* Plan Card 2 */}
    <div className="bg-white rounded shadow p-6">
      <div className="flex justify-between mb-4">
        <h3 className="text-md font-semibold text-gray-700">RapidHR ATS Plan Summary</h3>
        <button className="bg-gray-900 text-white px-4 py-2 rounded text-sm">Renew Plan</button>
      </div>
      <p><strong>Current Plan:</strong> Free Trial</p>
      <p className="mb-3"><strong>Next Billing Date:</strong> 10 Jun, 2025</p>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-700">Users</p>
        <button className="text-blue-600 text-sm">Upgrade</button>
      </div>
      <div className="w-full bg-gray-200 rounded h-2 mt-2 mb-1">
        <div className="bg-red-500 h-2 rounded" style={{ width: '100%' }}></div>
      </div>
      <p className="text-sm text-gray-600">1 (100%) of 1</p>
    </div>
  </div>
)}

              {currentPage === "Invoices" && 
        
                <Invoices/>
              }
      </div>
    </div>
    </div>
  );
};

export default ManagePlan;
