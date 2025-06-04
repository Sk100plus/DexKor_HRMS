import React, { useState,useRef } from "react";

const EmpAcc = () => {
    const [formData, setFormData] = useState({
        email: 'xyz@gmail.com',
        slack: 'xyz',
        skype: 'xyz',
        github: 'xyz',
      });
    
     
  return (
    <div className="max-w-4xl mx-auto p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <p className="text-sm text-gray-400 mb-1">Email Address</p>
        <p className="text-base font-medium text-gray-800">{formData.email || "—"}</p>
        <hr className='opacity-20'/>

      </div>
      <div>
        <p className="text-sm text-gray-400 mb-1">Slack ID</p>
        <p className="text-base font-medium text-gray-800">{formData.slack || "—"}</p>
        <hr className='opacity-20'/>

      </div>
      <div>
        <p className="text-sm text-gray-400 mb-1">Skype ID</p>
        <p className="text-base font-medium text-gray-800">{formData.skype || "—"}</p>
        <hr className='opacity-20'/>

      </div>
      <div>
        <p className="text-sm text-gray-400 mb-1">Github ID</p>
        <p className="text-base font-medium text-gray-800">{formData.github || "—"}</p>
        <hr className='opacity-20'/>

      </div>
    </div>
  </div>
  
  )
}

export default EmpAcc
