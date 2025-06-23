import React from 'react';

const NewEmp = ({ activeTab, setActiveTab }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Back Button */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setActiveTab("Current")}
          className="text-blue-600 hover:text-blue-800 cursor-pointer"
        >
          &lt; Back
        </button>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-lg shadow-md p-6">

        <form className="grid grid-cols-1 md:grid-cols-3 gap-2 text-[13px]">
          {/* Row 1 */}
          <div className='mb-0'>
            <label className="block text-gray-700 ">Employee Type</label>
            <select className="w-full px-1 py-1 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500">
              <option>Select Type</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Employee ID</label>
            <input type="text" className="w-full px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md shadow-sm" />
          </div>

          <div>
            <label className="block text-gray-700">Title *</label>
            <input type="text" className="w-full px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md shadow-sm" />
          </div>

          {/* Row 2 */}
          <div>
            <label className="block text-gray-700">First Name *</label>
            <input type="text" className="w-full px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md shadow-sm" />
          </div>

          <div>
            <label className="block text-gray-700">Last Name</label>
            <input type="text" className="w-full px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md shadow-sm" />
          </div>

          <div>
            <label className="block text-gray-700">Gender *</label>
            <select className="w-full px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md shadow-sm">
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Row 3 */}
          <div>
            <label className="block text-gray-700">Joining Date *</label>
            <input type="date" className="w-full px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md shadow-sm" />
          </div>

          <div>
            <label className="block text-gray-700">Personal Email</label>
            <input type="email" className="w-full px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md shadow-sm" />
          </div>

          <div>
            <label className="block text-gray-700">Office Email *</label>
            <input type="email" className="w-full px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md shadow-sm" />
          </div>

          {/* Row 4 */}
          <div>
            <label className="block text-gray-700">Personal Mobile</label>
            <input type="text" value="074104 10123" readOnly className="w-full px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 bg-gray-100 rounded-md shadow-sm" />
          </div>

          <div>
            <label className="block text-gray-700">Office Mobile *</label>
            <input type="text" value="074104 10123" readOnly className="w-full px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 bg-gray-100 rounded-md shadow-sm" />
          </div>

          <div>
            <label className="block text-gray-700">Employee Status</label>
            <input type="text" value="Employee" readOnly className="w-full px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 bg-gray-100 rounded-md shadow-sm" />
          </div>

          {/* Row 5 */}
          <div>
            <label className="block text-gray-700">Date of Birth</label>
            <input type="date" className="w-full px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md shadow-sm" />
          </div>

          <div>
            <label className="block text-gray-700">Country</label>
            <input type="text" className="w-full px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md shadow-sm" />
          </div>

          <div>
            <label className="block text-gray-700">State</label>
            <input type="text" className="w-full px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md shadow-sm" />
          </div>

          {/* Row 6 */}
          <div>
            <label className="block text-gray-700">City</label>
            <input type="text" className="w-full px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md shadow-sm" />
          </div>

          <div>
            <label className="block text-gray-700">Seating Location</label>
            <input type="text" className="w-full px-3 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded-md shadow-sm" />
          </div>

          {/* Checkbox */}
          <div className="flex items-center pt-6">
            <input type="checkbox" id="probation" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
            <label htmlFor="probation" className="ml-2 text-gray-700">
              Onboard employee with probation
            </label>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-3 flex justify-end mt-6">
            <button
              type="submit"
              className="px-4 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white transition rounded-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewEmp;
