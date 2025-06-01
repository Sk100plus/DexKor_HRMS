import React, { useState,useRef } from "react";

const Account = ({handleCancelAccount}) => {
    const [formData, setFormData] = useState({
        email: '',
        slack: '',
        skype: '',
        github: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const validate = () => {
        const newErrors = {};
    
        if (!formData.email) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Invalid email format';
        }
    
        if (!formData.slack.trim()) newErrors.slack = 'Slack ID is required';
        if (!formData.skype.trim()) newErrors.skype = 'Skype ID is required';
        if (!formData.github.trim()) newErrors.github = 'GitHub ID is required';
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          console.log('Form submitted:', formData);
          alert('Form submitted successfully!');
          setFormData({ email: '', slack: '', skype: '', github: '' });
        }
      };
  return (
    <div>
       <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
               <input
                 type="email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 placeholder="Enter Email Address"
                 className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 ${
                   errors.email ? 'border-red-500' : ''
                 }`}
               />
               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
             </div>
     
             <div>
               <input
                 type="text"
                 name="slack"
                 value={formData.slack}
                 onChange={handleChange}
                 placeholder="Enter Slack ID"
                 className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 ${
                   errors.slack ? 'border-red-500' : ''
                 }`}
               />
               {errors.slack && <p className="text-red-500 text-sm mt-1">{errors.slack}</p>}
             </div>
     
             <div>
               <input
                 type="text"
                 name="skype"
                 value={formData.skype}
                 onChange={handleChange}
                 placeholder="Enter Skype ID"
                 className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 ${
                   errors.skype ? 'border-red-500' : ''
                 }`}
               />
               {errors.skype && <p className="text-red-500 text-sm mt-1">{errors.skype}</p>}
             </div>
     
             <div>
               <input
                 type="text"
                 name="github"
                 value={formData.github}
                 onChange={handleChange}
                 placeholder="Enter Github ID"
                 className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 ${
                   errors.github ? 'border-red-500' : ''
                 }`}
               />
               {errors.github && <p className="text-red-500 text-sm mt-1">{errors.github}</p>}
             </div>
           </div>
     
           <div className="flex justify-end mt-6 space-x-4">
             <button
               type="button"
               className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={handleCancelAccount}
         >
               Cancel
             </button>
             <button
               type="submit"
               className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
             >
               Add
             </button>
           </div>
         </form>
    </div>
  )
}

export default Account
